import React, { useEffect, useState, useCallback, useRef } from 'react';
import { collection, getDocs, doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { PART1_SCENES, PART2_SCENES } from '../constants';

interface StudentRecord {
  uid: string;
  displayName: string;
  email: string;
  completedScenes: string[];
  completedPreReading: string[];
  doublethinkCompleted: boolean;
}

const PART1_IDS = PART1_SCENES.map(s => s.id);
const PART2_IDS = PART2_SCENES.map(s => s.id);

const Check: React.FC<{ done: boolean }> = ({ done }) => (
  <span className={done ? 'text-green-400 font-bold' : 'text-gray-600'}>{done ? '✓' : '—'}</span>
);

interface TeacherDashboardProps {
  onStudentView: () => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onStudentView }) => {
  const { user, signOut } = useAuth();
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<'name' | 'p1' | 'p2'>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [search, setSearch] = useState('');
  const [progressFilter, setProgressFilter] = useState<'all' | 'my-class' | 'not-started' | 'in-progress' | 'p1-complete' | 'p2-complete'>('all');

  // Class list
  const [classList, setClassList] = useState<string[]>([]);
  const [classListOpen, setClassListOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [savingList, setSavingList] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // ── Fetch students + teacher's class list ──────────────────────────────────
  const fetchData = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const [usersSnap, progressSnap, teacherSnap] = await Promise.all([
        getDocs(collection(db, 'users')),
        getDocs(collection(db, 'progress')),
        getDoc(doc(db, 'users', user.uid)),
      ]);

      // Class list from teacher's own doc
      if (teacherSnap.exists()) {
        setClassList((teacherSnap.data().classList as string[] | undefined) ?? []);
      }

      const progressMap: Record<string, { completedScenes: string[]; completedPreReading: string[]; doublethinkCompleted: boolean }> = {};
      progressSnap.forEach(d => {
        const data = d.data();
        progressMap[d.id] = {
          completedScenes: data.completedScenes ?? [],
          completedPreReading: data.completedPreReading ?? [],
          doublethinkCompleted: data.doublethinkCompleted ?? false,
        };
      });

      const records: StudentRecord[] = [];
      usersSnap.forEach(d => {
        const data = d.data();
        if (data.role === 'teacher') return;
        const prog = progressMap[d.id] ?? { completedScenes: [], completedPreReading: [], doublethinkCompleted: false };
        records.push({
          uid: d.id,
          displayName: data.displayName || data.email || 'Unknown',
          email: data.email || '',
          ...prog,
        });
      });

      setStudents(records);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data.');
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => { fetchData(); }, [fetchData]);

  // ── Class list helpers ─────────────────────────────────────────────────────
  const saveClassList = async (list: string[]) => {
    if (!user) return;
    setSavingList(true);
    try {
      await updateDoc(doc(db, 'users', user.uid), { classList: list });
      setClassList(list);
    } catch (err) {
      setError('Failed to save class list.');
    } finally {
      setSavingList(false);
    }
  };

  const handleImport = () => {
    const emails = importText
      .split(/[\n,;]+/)
      .map(e => e.trim().toLowerCase())
      .filter(e => e.includes('@'));
    const merged = Array.from(new Set([...classList, ...emails]));
    saveClassList(merged);
    setImportText('');
  };

  const handleCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      const text = ev.target?.result as string;
      setImportText(prev => prev ? prev + '\n' + text : text);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const removeFromList = (email: string) => {
    saveClassList(classList.filter(e => e !== email));
  };

  // Emails on the list who have not yet signed up
  const signedUpEmails = new Set(students.map(s => s.email.toLowerCase()));
  const pendingEmails = classList.filter(e => !signedUpEmails.has(e));

  // ── Filter + sort ──────────────────────────────────────────────────────────
  const filtered = students.filter(s => {
    const q = search.toLowerCase();
    if (q && !s.displayName.toLowerCase().includes(q) && !s.email.toLowerCase().includes(q)) return false;
    const p1Count = PART1_IDS.filter(id => s.completedScenes.includes(id)).length;
    const p2Count = PART2_IDS.filter(id => s.completedScenes.includes(id)).length;
    if (progressFilter === 'my-class') return classList.includes(s.email.toLowerCase());
    if (progressFilter === 'not-started') return p1Count === 0 && !s.completedPreReading.includes('pre-reading');
    if (progressFilter === 'in-progress') return (p1Count > 0 || s.completedPreReading.includes('pre-reading')) && p2Count < PART2_IDS.length;
    if (progressFilter === 'p1-complete') return p1Count === PART1_IDS.length;
    if (progressFilter === 'p2-complete') return p2Count === PART2_IDS.length;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    let cmp = 0;
    if (sortKey === 'name') cmp = a.displayName.localeCompare(b.displayName);
    else if (sortKey === 'p1') cmp = PART1_IDS.filter(id => a.completedScenes.includes(id)).length - PART1_IDS.filter(id => b.completedScenes.includes(id)).length;
    else if (sortKey === 'p2') cmp = PART2_IDS.filter(id => a.completedScenes.includes(id)).length - PART2_IDS.filter(id => b.completedScenes.includes(id)).length;
    return sortAsc ? cmp : -cmp;
  });

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortAsc(a => !a);
    else { setSortKey(key); setSortAsc(true); }
  };

  const SortButton: React.FC<{ label: string; k: typeof sortKey }> = ({ label, k }) => (
    <button onClick={() => toggleSort(k)} className="flex items-center gap-1 hover:text-white transition-colors">
      {label}
      <span className="text-gray-500">{sortKey === k ? (sortAsc ? '▲' : '▼') : '⇅'}</span>
    </button>
  );

  // Stats — scoped to class list when "my class" is active, otherwise all
  const statBase = progressFilter === 'my-class'
    ? students.filter(s => classList.includes(s.email.toLowerCase()))
    : students;
  const total = statBase.length;
  const preReadingDone = statBase.filter(s => s.completedPreReading.includes('pre-reading')).length;
  const doublethinkDone = statBase.filter(s => s.doublethinkCompleted).length;
  const p1Done = statBase.filter(s => PART1_IDS.every(id => s.completedScenes.includes(id))).length;
  const p2Done = statBase.filter(s => PART2_IDS.every(id => s.completedScenes.includes(id))).length;

  return (
    <div className="min-h-screen bg-ministry-black text-gray-300 font-terminal flex flex-col">
      {/* Header */}
      <header className="bg-ministry-black border-b-4 border-party-red sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-party-red text-white font-propaganda font-bold text-3xl px-3 py-1 -rotate-6 shadow-md border-2 border-white">1984</div>
              <div className="hidden sm:block border-l-2 border-gray-600 h-10 mx-4" />
              <h1 className="hidden sm:block text-xl font-terminal tracking-widest text-white uppercase">Ministry of Education — Class Overview</h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-party-red font-bold uppercase tracking-widest">TEACHER ACCESS</span>
              <span className="hidden md:inline text-gray-500 font-terminal text-[10px] uppercase tracking-widest max-w-[140px] truncate">{user?.displayName || user?.email}</span>
              <button onClick={onStudentView} className="px-3 py-1.5 border border-gray-600 font-terminal text-[10px] uppercase tracking-widest text-gray-300 hover:border-white hover:text-white transition-colors">Student View</button>
              <button onClick={signOut} className="px-3 py-1.5 border border-gray-700 font-terminal text-[10px] uppercase tracking-widest text-gray-500 hover:border-party-red hover:text-party-red transition-colors">Sign out</button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* Title row */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-party-red uppercase tracking-widest">Surveillance Report</h2>
            <p className="text-gray-500 text-xs tracking-widest mt-1">
              {progressFilter === 'my-class'
                ? `My class — ${classList.length} on list, ${total} signed up`
                : `All students — ${students.length} enrolled`}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setClassListOpen(o => !o)}
              className={`px-4 py-2 border font-terminal text-xs uppercase tracking-widest transition-colors ${classListOpen ? 'border-white text-white' : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'}`}
            >
              Class List {classList.length > 0 && <span className="ml-1 text-party-red">{classList.length}</span>}
            </button>
            <button onClick={fetchData} disabled={loading} className="px-4 py-2 border border-gray-600 text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors disabled:opacity-40">
              {loading ? 'Loading...' : 'Refresh'}
            </button>
          </div>
        </div>

        {error && <div className="mb-6 p-4 border border-party-red text-party-red text-xs tracking-wider">ERROR: {error}</div>}

        {/* Class list panel */}
        {classListOpen && (
          <div className="mb-8 border border-gray-700 p-6 bg-gray-950">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-4">Manage Class List</h3>

            {/* Import area */}
            <div className="mb-4">
              <p className="text-gray-600 text-[11px] mb-2">Paste student emails (one per line, or comma/semicolon separated), or upload a CSV file.</p>
              <textarea
                value={importText}
                onChange={e => setImportText(e.target.value)}
                placeholder="student1@stjohns.cl&#10;student2@stjohns.cl&#10;..."
                rows={4}
                className="w-full bg-gray-900 border border-gray-700 px-3 py-2 font-terminal text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400 resize-none"
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleImport}
                  disabled={!importText.trim() || savingList}
                  className="px-4 py-2 bg-party-red text-white font-terminal text-xs uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-40"
                >
                  {savingList ? 'Saving...' : 'Add to list'}
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2 border border-gray-600 font-terminal text-xs uppercase tracking-widest text-gray-400 hover:border-white hover:text-white transition-colors"
                >
                  Upload CSV
                </button>
                <input ref={fileInputRef} type="file" accept=".csv,.txt" className="hidden" onChange={handleCSV} />
              </div>
            </div>

            {/* Current list */}
            {classList.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-gray-500 text-[11px] uppercase tracking-widest">{classList.length} student{classList.length !== 1 ? 's' : ''} on list</p>
                  <button
                    onClick={() => { if (window.confirm('Clear the entire class list?')) saveClassList([]); }}
                    className="text-[11px] text-gray-600 hover:text-party-red transition-colors uppercase tracking-widest"
                  >
                    Clear all
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                  {classList.map(email => {
                    const joined = signedUpEmails.has(email);
                    return (
                      <span
                        key={email}
                        className={`inline-flex items-center gap-2 px-3 py-1 border text-[11px] font-terminal ${joined ? 'border-green-800 text-green-400' : 'border-gray-700 text-gray-500'}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${joined ? 'bg-green-500' : 'bg-gray-600'}`} />
                        {email}
                        <button onClick={() => removeFromList(email)} className="text-gray-600 hover:text-party-red transition-colors ml-1">✕</button>
                      </span>
                    );
                  })}
                </div>
                {pendingEmails.length > 0 && (
                  <p className="text-gray-600 text-[11px] mt-3">
                    {pendingEmails.length} student{pendingEmails.length !== 1 ? 's' : ''} on list have not yet signed up.
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
          {[
            { label: 'Pre-Reading', value: preReadingDone },
            { label: 'Part 1 Done', value: p1Done },
            { label: 'Doublethink', value: doublethinkDone },
            { label: 'Part 2 Done', value: p2Done },
            { label: progressFilter === 'my-class' ? 'Signed Up' : 'Students', value: total },
          ].map(({ label, value }) => (
            <div key={label} className="border border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {value}<span className="text-gray-600 text-lg">/{total}</span>
              </div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-700 px-3 py-2 font-terminal text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-400"
          />
          <select
            value={progressFilter}
            onChange={e => setProgressFilter(e.target.value as typeof progressFilter)}
            className="bg-gray-900 border border-gray-700 px-3 py-2 font-terminal text-xs text-gray-300 focus:outline-none focus:border-gray-400"
          >
            <option value="all">All students ({students.length})</option>
            {classList.length > 0 && <option value="my-class">My class ({classList.filter(e => signedUpEmails.has(e)).length} joined)</option>}
            <option value="not-started">Not started</option>
            <option value="in-progress">In progress</option>
            <option value="p1-complete">Part 1 complete</option>
            <option value="p2-complete">Part 2 complete</option>
          </select>
          {(search || progressFilter !== 'all') && (
            <button onClick={() => { setSearch(''); setProgressFilter('all'); }} className="px-3 py-2 border border-gray-700 font-terminal text-xs text-gray-500 hover:text-white hover:border-gray-400 transition-colors">
              Clear
            </button>
          )}
        </div>

        {/* Student table */}
        {loading && students.length === 0 ? (
          <div className="text-center py-16 text-gray-600 text-xs uppercase tracking-widest animate-pulse">Accessing records...</div>
        ) : sorted.length === 0 ? (
          <div className="text-center py-16 text-gray-600 text-xs uppercase tracking-widest">
            {students.length === 0 ? 'No student records found.' : 'No students match the current filter.'}
          </div>
        ) : (
          <div className="overflow-x-auto border border-gray-700">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-gray-400 uppercase tracking-widest">
                  <th className="text-left px-4 py-3 font-normal min-w-[160px]"><SortButton label="Student" k="name" /></th>
                  <th className="px-3 py-3 font-normal text-center">Pre-Reading</th>
                  <th className="px-3 py-3 font-normal text-center"><SortButton label={`Part 1 (/${PART1_IDS.length})`} k="p1" /></th>
                  <th className="px-3 py-3 font-normal text-center">Doublethink</th>
                  <th className="px-3 py-3 font-normal text-center"><SortButton label={`Part 2 (/${PART2_IDS.length})`} k="p2" /></th>
                  {PART1_SCENES.map((s, i) => (
                    <th key={s.id} className="px-2 py-3 font-normal text-center text-gray-600 min-w-[32px]">P1·{i + 1}</th>
                  ))}
                  {PART2_SCENES.map((s, i) => (
                    <th key={s.id} className="px-2 py-3 font-normal text-center text-gray-600 min-w-[32px]">P2·{i + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((s, rowIdx) => {
                  const p1Count = PART1_IDS.filter(id => s.completedScenes.includes(id)).length;
                  const p2Count = PART2_IDS.filter(id => s.completedScenes.includes(id)).length;
                  const onList = classList.includes(s.email.toLowerCase());
                  return (
                    <tr key={s.uid} className={`border-b border-gray-800 transition-colors ${rowIdx % 2 === 0 ? 'bg-gray-950' : 'bg-gray-900'} hover:bg-gray-800`}>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          {classList.length > 0 && (
                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${onList ? 'bg-green-500' : 'bg-gray-700'}`} title={onList ? 'On your class list' : 'Not on your class list'} />
                          )}
                          <div>
                            <div className="text-white font-medium">{s.displayName}</div>
                            <div className="text-gray-600 text-[10px] mt-0.5">{s.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-3 py-3 text-center"><Check done={s.completedPreReading.includes('pre-reading')} /></td>
                      <td className="px-3 py-3 text-center">
                        <span className={p1Count === PART1_IDS.length ? 'text-green-400 font-bold' : 'text-gray-300'}>{p1Count}/{PART1_IDS.length}</span>
                      </td>
                      <td className="px-3 py-3 text-center"><Check done={s.doublethinkCompleted} /></td>
                      <td className="px-3 py-3 text-center">
                        <span className={p2Count === PART2_IDS.length ? 'text-green-400 font-bold' : p2Count > 0 ? 'text-gray-300' : 'text-gray-600'}>{p2Count}/{PART2_IDS.length}</span>
                      </td>
                      {PART1_SCENES.map(scene => (
                        <td key={scene.id} className="px-2 py-3 text-center"><Check done={s.completedScenes.includes(scene.id)} /></td>
                      ))}
                      {PART2_SCENES.map(scene => (
                        <td key={scene.id} className="px-2 py-3 text-center"><Check done={s.completedScenes.includes(scene.id)} /></td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <footer className="bg-ministry-black py-4 text-center text-gray-600 text-xs border-t-2 border-party-red mt-auto">
        <p className="font-propaganda tracking-widest">MINISTRY OF TRUTH // TEACHER SURVEILLANCE PANEL</p>
      </footer>
    </div>
  );
};

export default TeacherDashboard;

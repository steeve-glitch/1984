import React, { useEffect, useState, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';
import { PART1_SCENES, PART2_SCENES } from '../constants';

interface StudentRecord {
  uid: string;
  displayName: string;
  email: string;
  role: string;
  completedScenes: string[];
  completedPreReading: string[];
  doublethinkCompleted: boolean;
}

const PART1_IDS = PART1_SCENES.map(s => s.id);
const PART2_IDS = PART2_SCENES.map(s => s.id);

const Check: React.FC<{ done: boolean }> = ({ done }) => (
  <span className={done ? 'text-green-400 font-bold' : 'text-gray-600'}>
    {done ? '✓' : '—'}
  </span>
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

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [usersSnap, progressSnap] = await Promise.all([
        getDocs(collection(db, 'users')),
        getDocs(collection(db, 'progress')),
      ]);

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
        if (data.role === 'teacher') return; // exclude teachers
        const prog = progressMap[d.id] ?? { completedScenes: [], completedPreReading: [], doublethinkCompleted: false };
        records.push({
          uid: d.id,
          displayName: data.displayName || data.email || 'Unknown',
          email: data.email || '',
          role: data.role || 'student',
          ...prog,
        });
      });

      setStudents(records);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  const sorted = [...students].sort((a, b) => {
    let cmp = 0;
    if (sortKey === 'name') cmp = a.displayName.localeCompare(b.displayName);
    else if (sortKey === 'p1') cmp = a.completedScenes.filter(id => PART1_IDS.includes(id)).length - b.completedScenes.filter(id => PART1_IDS.includes(id)).length;
    else if (sortKey === 'p2') cmp = a.completedScenes.filter(id => PART2_IDS.includes(id)).length - b.completedScenes.filter(id => PART2_IDS.includes(id)).length;
    return sortAsc ? cmp : -cmp;
  });

  const toggleSort = (key: typeof sortKey) => {
    if (sortKey === key) setSortAsc(a => !a);
    else { setSortKey(key); setSortAsc(true); }
  };

  const SortButton: React.FC<{ label: string; k: typeof sortKey }> = ({ label, k }) => (
    <button
      onClick={() => toggleSort(k)}
      className="flex items-center gap-1 hover:text-white transition-colors"
    >
      {label}
      <span className="text-gray-500">{sortKey === k ? (sortAsc ? '▲' : '▼') : '⇅'}</span>
    </button>
  );

  // Aggregate stats
  const total = students.length;
  const preReadingDone = students.filter(s => s.completedPreReading.includes('pre-reading')).length;
  const doublethinkDone = students.filter(s => s.doublethinkCompleted).length;
  const p1Complete = students.filter(s => PART1_IDS.every(id => s.completedScenes.includes(id))).length;
  const p2Complete = students.filter(s => PART2_IDS.every(id => s.completedScenes.includes(id))).length;

  return (
    <div className="min-h-screen bg-ministry-black text-gray-300 font-terminal flex flex-col">
      {/* Header */}
      <header className="bg-ministry-black border-b-4 border-party-red sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-party-red text-white font-propaganda font-bold text-3xl px-3 py-1 -rotate-6 shadow-md border-2 border-white">
                1984
              </div>
              <div className="hidden sm:block border-l-2 border-gray-600 h-10 mx-4" />
              <h1 className="hidden sm:block text-xl font-terminal tracking-widest text-white uppercase">
                Ministry of Education — Class Overview
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-xs text-party-red font-bold uppercase tracking-widest">
                TEACHER ACCESS
              </span>
              <span className="hidden md:inline text-gray-500 font-terminal text-[10px] uppercase tracking-widest max-w-[140px] truncate">
                {user?.displayName || user?.email}
              </span>
              <button
                onClick={onStudentView}
                className="px-3 py-1.5 border border-gray-600 font-terminal text-[10px] uppercase tracking-widest text-gray-300 hover:border-white hover:text-white transition-colors"
              >
                Student View
              </button>
              <button
                onClick={signOut}
                className="px-3 py-1.5 border border-gray-700 font-terminal text-[10px] uppercase tracking-widest text-gray-500 hover:border-party-red hover:text-party-red transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* Page title + refresh */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-party-red uppercase tracking-widest">
              Surveillance Report
            </h2>
            <p className="text-gray-500 text-xs tracking-widest mt-1">
              All citizens under monitoring — {total} student{total !== 1 ? 's' : ''} enrolled
            </p>
          </div>
          <button
            onClick={fetchData}
            disabled={loading}
            className="px-4 py-2 border border-gray-600 text-xs uppercase tracking-widest hover:border-white hover:text-white transition-colors disabled:opacity-40"
          >
            {loading ? 'Loading...' : 'Refresh'}
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 border border-party-red text-party-red text-xs tracking-wider">
            ERROR: {error}
          </div>
        )}

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          {[
            { label: 'Pre-Reading', value: preReadingDone, total },
            { label: 'Part 1 Done', value: p1Complete, total },
            { label: 'Doublethink', value: doublethinkDone, total },
            { label: 'Part 2 Done', value: p2Complete, total },
            { label: 'Students', value: total, total: null },
          ].map(({ label, value, total: t }) => (
            <div key={label} className="border border-gray-700 p-4 text-center">
              <div className="text-2xl font-bold text-white">
                {value}{t !== null ? <span className="text-gray-600 text-lg">/{t}</span> : ''}
              </div>
              <div className="text-gray-500 text-[10px] uppercase tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Student table */}
        {loading && students.length === 0 ? (
          <div className="text-center py-16 text-gray-600 text-xs uppercase tracking-widest animate-pulse">
            Accessing records...
          </div>
        ) : students.length === 0 ? (
          <div className="text-center py-16 text-gray-600 text-xs uppercase tracking-widest">
            No student records found.
          </div>
        ) : (
          <div className="overflow-x-auto border border-gray-700">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-700 text-gray-400 uppercase tracking-widest">
                  <th className="text-left px-4 py-3 font-normal min-w-[160px]">
                    <SortButton label="Student" k="name" />
                  </th>
                  <th className="px-3 py-3 font-normal text-center">Pre-Reading</th>
                  <th className="px-3 py-3 font-normal text-center">
                    <SortButton label={`Part 1 (/${PART1_IDS.length})`} k="p1" />
                  </th>
                  <th className="px-3 py-3 font-normal text-center">Doublethink</th>
                  <th className="px-3 py-3 font-normal text-center">
                    <SortButton label={`Part 2 (/${PART2_IDS.length})`} k="p2" />
                  </th>
                  {/* Individual Part 1 chapters */}
                  {PART1_SCENES.map((s, i) => (
                    <th key={s.id} className="px-2 py-3 font-normal text-center text-gray-600 min-w-[32px]">
                      P1·{i + 1}
                    </th>
                  ))}
                  {/* Individual Part 2 chapters */}
                  {PART2_SCENES.map((s, i) => (
                    <th key={s.id} className="px-2 py-3 font-normal text-center text-gray-600 min-w-[32px]">
                      P2·{i + 1}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map((s, rowIdx) => {
                  const p1Count = PART1_IDS.filter(id => s.completedScenes.includes(id)).length;
                  const p2Count = PART2_IDS.filter(id => s.completedScenes.includes(id)).length;
                  const preReading = s.completedPreReading.includes('pre-reading');
                  const isAhead = p1Count === PART1_IDS.length && s.doublethinkCompleted;
                  return (
                    <tr
                      key={s.uid}
                      className={`border-b border-gray-800 transition-colors ${rowIdx % 2 === 0 ? 'bg-gray-950' : 'bg-gray-900'} hover:bg-gray-800`}
                    >
                      <td className="px-4 py-3">
                        <div className="text-white font-medium">{s.displayName}</div>
                        <div className="text-gray-600 text-[10px] mt-0.5">{s.email}</div>
                      </td>
                      <td className="px-3 py-3 text-center"><Check done={preReading} /></td>
                      <td className="px-3 py-3 text-center">
                        <span className={p1Count === PART1_IDS.length ? 'text-green-400 font-bold' : 'text-gray-300'}>
                          {p1Count}/{PART1_IDS.length}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-center"><Check done={s.doublethinkCompleted} /></td>
                      <td className="px-3 py-3 text-center">
                        <span className={p2Count === PART2_IDS.length ? 'text-green-400 font-bold' : p2Count > 0 ? 'text-gray-300' : 'text-gray-600'}>
                          {p2Count}/{PART2_IDS.length}
                        </span>
                      </td>
                      {PART1_SCENES.map(scene => (
                        <td key={scene.id} className="px-2 py-3 text-center">
                          <Check done={s.completedScenes.includes(scene.id)} />
                        </td>
                      ))}
                      {PART2_SCENES.map(scene => (
                        <td key={scene.id} className="px-2 py-3 text-center">
                          <Check done={s.completedScenes.includes(scene.id)} />
                        </td>
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

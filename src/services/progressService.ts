import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from '../firebase';

export interface ProgressData {
  completedScenes: string[];
  completedPreReading: string[];
  doublethinkCompleted: boolean;
}

const empty = (): ProgressData => ({
  completedScenes: [],
  completedPreReading: [],
  doublethinkCompleted: false,
});

export async function loadProgress(uid: string): Promise<ProgressData> {
  const snap = await getDoc(doc(db, 'progress', uid));
  if (!snap.exists()) return empty();
  const d = snap.data();
  return {
    completedScenes: d.completedScenes ?? [],
    completedPreReading: d.completedPreReading ?? [],
    doublethinkCompleted: d.doublethinkCompleted ?? false,
  };
}

export async function saveSceneProgress(uid: string, sceneId: string): Promise<void> {
  const ref = doc(db, 'progress', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { completedScenes: arrayUnion(sceneId), updatedAt: serverTimestamp() });
  } else {
    await setDoc(ref, { ...empty(), completedScenes: [sceneId], updatedAt: serverTimestamp() });
  }
}

export async function savePreReadingProgress(uid: string): Promise<void> {
  const ref = doc(db, 'progress', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { completedPreReading: arrayUnion('pre-reading'), updatedAt: serverTimestamp() });
  } else {
    await setDoc(ref, { ...empty(), completedPreReading: ['pre-reading'], updatedAt: serverTimestamp() });
  }
}

export async function saveDoublethinkComplete(uid: string): Promise<void> {
  const ref = doc(db, 'progress', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    await updateDoc(ref, { doublethinkCompleted: true, updatedAt: serverTimestamp() });
  } else {
    await setDoc(ref, { ...empty(), doublethinkCompleted: true, updatedAt: serverTimestamp() });
  }
}

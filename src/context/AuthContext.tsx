import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider } from '../firebase';

export type UserRole = 'student' | 'teacher';

export interface AppUser {
  uid: string;
  email: string;
  displayName: string;
  role: UserRole;
}

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  error: string | null;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SCHOOL_DOMAIN = import.meta.env.VITE_SCHOOL_EMAIL_DOMAIN as string;

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser || !firebaseUser.email) {
        setUser(null);
        setLoading(false);
        return;
      }

      // Hard domain enforcement (hd param is only a UI hint)
      if (!firebaseUser.email.endsWith(`@${SCHOOL_DOMAIN}`)) {
        await firebaseSignOut(auth);
        setError(`Access restricted to @${SCHOOL_DOMAIN} accounts.`);
        setUser(null);
        setLoading(false);
        return;
      }

      // Get or create the user document
      const userRef = doc(db, 'users', firebaseUser.uid);
      const userSnap = await getDoc(userRef);

      let role: UserRole = 'student';

      if (userSnap.exists()) {
        role = (userSnap.data().role as UserRole) || 'student';
      } else {
        // First sign-in — create profile with default student role
        await setDoc(userRef, {
          email: firebaseUser.email,
          displayName: firebaseUser.displayName || '',
          role: 'student',
          createdAt: serverTimestamp(),
        });
      }

      setError(null);
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || firebaseUser.email,
        role,
      });
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async () => {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Sign-in failed.';
      // Ignore user-dismissed popup
      if (!msg.includes('popup-closed')) setError(msg);
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

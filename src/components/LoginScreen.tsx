import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginScreen: React.FC = () => {
  const { signIn, error, loading } = useAuth();

  return (
    <div className="min-h-screen bg-ministry-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background noise */}
      <div className="crt-overlay absolute inset-0 pointer-events-none" />

      {/* Big Brother eye watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span className="text-[40rem] leading-none">👁</span>
      </div>

      <div className="relative z-10 w-full max-w-md mx-auto px-6 space-y-8 text-center">

        {/* Header */}
        <div className="space-y-2">
          <p className="text-party-red font-mono text-xs tracking-[0.4em] uppercase">
            Ministry of Truth — Educational Sector
          </p>
          <h1 className="text-white font-propaganda text-4xl uppercase tracking-widest">
            1984
          </h1>
          <p className="text-gray-400 font-terminal text-sm tracking-wider">
            The Interactive Guide
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-party-red opacity-50" />
          <span className="text-party-red font-mono text-xs tracking-widest">IDENTITY VERIFICATION</span>
          <div className="flex-1 h-px bg-party-red opacity-50" />
        </div>

        {/* Login card */}
        <div className="border border-party-red border-opacity-40 bg-black bg-opacity-60 p-8 space-y-6">
          <p className="text-gray-300 font-terminal text-sm leading-relaxed">
            Access requires a verified{' '}
            <span className="text-party-red font-bold">@{import.meta.env.VITE_SCHOOL_EMAIL_DOMAIN}</span>{' '}
            account. Unauthorised access attempts are logged.
          </p>

          {error && (
            <div className="border border-red-500 bg-red-950 bg-opacity-50 px-4 py-3">
              <p className="text-red-400 font-terminal text-xs">{error}</p>
            </div>
          )}

          <button
            onClick={signIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white hover:bg-gray-100 text-gray-900 font-bold tracking-wider uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Google logo */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </div>

        {/* Footer */}
        <p className="text-gray-600 font-terminal text-xs tracking-widest uppercase">
          Big Brother is Watching You
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;

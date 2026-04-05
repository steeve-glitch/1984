import React from 'react';
import StudentApp from './StudentApp';
import { ChatbotProvider } from './context/ChatbotContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './components/LoginScreen';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-ministry-black flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-3 h-3 bg-party-red rounded-full animate-pulse mx-auto" />
          <p className="text-gray-500 font-terminal text-xs tracking-widest uppercase">
            Verifying identity...
          </p>
        </div>
      </div>
    );
  }

  if (!user) return <LoginScreen />;

  return (
    <ChatbotProvider>
      <StudentApp />
    </ChatbotProvider>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;

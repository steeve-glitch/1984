import React from 'react';
import StudentApp from './StudentApp';
import { ChatbotProvider } from './context/ChatbotContext';

const App: React.FC = () => {
  return (
    <ChatbotProvider>
      <StudentApp />
    </ChatbotProvider>
  );
};

export default App;

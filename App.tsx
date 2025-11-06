
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CorePhilosophy from './pages/CorePhilosophy';
import KeyFrameworks from './pages/KeyFrameworks';
import BookTrilogy from './pages/BookTrilogy';
import SynthesisPatterns from './pages/SynthesisPatterns';
import StartupActionPlan from './pages/StartupActionPlan';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col md:flex-row h-screen">
        <Sidebar />
        <main className="flex-1 p-6 md:p-10 overflow-y-auto bg-[#fdfbf7]">
          <Routes>
            <Route path="/" element={<Navigate to="/philosophy" replace />} />
            <Route path="/philosophy" element={<CorePhilosophy />} />
            <Route path="/frameworks" element={<KeyFrameworks />} />
            <Route path="/trilogy" element={<BookTrilogy />} />
            <Route path="/synthesis" element={<SynthesisPatterns />} />
            <Route path="/action-plan" element={<StartupActionPlan />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;

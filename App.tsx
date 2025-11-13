import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DarkModeProvider } from './components/DarkModeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';
import { Contact } from './pages/Contact';
import { Toaster } from './components/ui/sonner';
import { CursorTrail } from './components/CursorTrail';
import { PageTransition } from './components/PageTransition';
import { ScrollToTop } from './components/ScrollToTop';
import { AnimatePresence } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <CursorTrail />
          <ScrollToTop />
          <Header />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

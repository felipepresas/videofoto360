import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import { Navbar, Footer } from '@/components/layout';
import { IntroVideo } from '@/components/ui';

import '@/styles/global/App.css';

function App() {
  const [showIntro, setShowIntro] = useState(!sessionStorage.getItem('introPlayed'));

  const handleVideoEnd = () => {
    sessionStorage.setItem('introPlayed', 'true');
    setShowIntro(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroVideo key="intro" onVideoEnd={handleVideoEnd} />
        ) : (
          <motion.div
            key="main-app"
            className="flex flex-col min-h-screen bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main className="flex-1 w-full pt-20">
              <Outlet />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;

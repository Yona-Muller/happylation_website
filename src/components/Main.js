// src/components/Main.js
import React from 'react';
import { motion } from 'framer-motion';

function Main() {
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        });
        };
  return (
    <motion.main
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <img 
      src="/images/bbbb.gif" 
      alt="הסרת שיער" 
      className="full-width-gif"
    />
    <button onClick={scrollToBottom} className="scroll-button">הירשמי עכשיו</button>
    <p>רבקי מילר אפילטורית מקצועית ברמוווווווות.</p>
    </motion.main>
  );
}

export default Main;

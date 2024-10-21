import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedImage = ({ src, alt, direction }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, x: direction === 'right' ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className="animated-image-container"
    >
      <img src={src} alt={alt} className="animated-image" />
    </motion.div>
  );
};

const AnimatedImagesSection = () => {
  return (
    <section className="animated-images-section">
      <div className="container">
        <h2 className="section-title">כותרת החלק השני</h2>
        <div className="images-grid">
          <AnimatedImage src="/images/aaaa.png" alt="תיאור תמונה 1" direction="left" />
          <AnimatedImage src="/images/aaaa.png" alt="תיאור תמונה 2" direction="right" />
          <AnimatedImage src="/images/aaaa.png" alt="תיאור תמונה 3" direction="left" />
          <AnimatedImage src="/images/aaaa.png" alt="תיאור תמונה 4" direction="right" />
        </div>
      </div>
    </section>
  );
};

export default AnimatedImagesSection;
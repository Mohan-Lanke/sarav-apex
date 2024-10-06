// animations.js
import React from 'react';
import { motion } from 'framer-motion';
import UseInViewHook from '../reusable-hooks/UseInViewHook';


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const fadeOut = {
  hidden: { opacity: 1 },
  visible: { opacity: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const fadeDown = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const zoomOut = {
  hidden: { opacity: 1, scale: 1 },
  visible: { opacity: 0, scale: 0.8 },
};

const animations =(animationType)=>{
  return ({ children, duration = 1, options }) => {
    const [ref, isVisible] = UseInViewHook(options);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={animationType}
        transition={{ duration }}
      >
        {children}
      </motion.div>
    );
  };
}

export const FadeIn = animations(fadeIn);
export const FadeOut = animations(fadeOut);
export const FadeLeft = animations(fadeLeft);
export const FadeRight = animations(fadeRight);
export const FadeUp = animations(fadeUp);
export const FadeDown = animations(fadeDown);
export const ZoomIn = animations(zoomIn);
export const ZoomOut = animations(zoomOut);

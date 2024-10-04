import React from 'react';
import { useEffect, useState, useRef } from "react";


const UseInViewHook = () => {
    const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Only trigger once
        }
      },
      {
        threshold: 0.1, // Adjust based on when you want the animation to start
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

    return { ref, isInView };
  
}

export default UseInViewHook

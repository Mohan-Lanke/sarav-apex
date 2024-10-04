import React from 'react';
import { useState,useEffect,useRef } from "react";

const NumberAnimation = ({value}) => {
    const [currentValue, setCurrentValue] = useState(0);
  const numberRef = useRef(null);
  const startAnimation = () => {
    if (!numberRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 3000; 
          const step = Math.ceil((end - start) / (duration / 16)); 

          const updateValue = () => {
            start += step;
            if (start >= end) {
              setCurrentValue(end);
              observer.disconnect();
            } else {
              setCurrentValue(start);
              requestAnimationFrame(updateValue);
            }
          };

          requestAnimationFrame(updateValue);
        }
      });
    });

    observer.observe(numberRef.current);

    return () => {
      if (observer) observer.disconnect();
    };
  };

  useEffect(() => {
    startAnimation();
  }, []); 
    return (
        <span ref={numberRef}>{currentValue}</span>
      )
}

export default NumberAnimation

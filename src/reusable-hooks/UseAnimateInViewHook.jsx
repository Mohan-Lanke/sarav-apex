import React from 'react';
import UseInViewHook from './UseInViewHook';

const UseAnimateInViewHook = (direction, duration = "1500ms", zoom = false) => {
  const { ref, isInView } = UseInViewHook();

  const translateClass =
    direction === "left"
      ? isInView
        ? "translate-x-0"
        : "-translate-x-12"
      : direction === "right"
      ? isInView
        ? "translate-x-0"
        : "translate-x-12"
      : direction === "up"
      ? isInView
        ? "translate-y-0"
        : "-translate-y-12"
      : direction === "down"
      ? isInView
        ? "translate-y-0"
        : "translate-y-12"
      : '';

  // Scale based on zoom option
  const zoomClass = zoom
    ? isInView
      ? "scale-100"  // Original size when in view
      : "scale-50"   // Slightly smaller when not in view
    : "";

  const classes = `transition-all duration-[${duration}] ease-in-out opacity-100 transform will-change-transform ${
    isInView ? "opacity-100" : "opacity-0"
  } ${translateClass} ${zoomClass}`;

  return { ref, classes };
};

export default UseAnimateInViewHook;

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RippleButton = ({ children, onClick, color, className }) => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;

    const newRipple = {
      x: rippleX,
      y: rippleY,
      visible: true,
      id: Math.random().toString(36).substring(7),
    };

    setRipples([...ripples, newRipple]);

    onClick && onClick();
  };

  const handleAnimationComplete = (id) => {
    setRipples(ripples.filter((ripple) => ripple.id !== id));
  };

  return (
    <motion.button
      className={className}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      style={{
        backgroundColor: color || "#007bff",
        border: "none",
        cursor: "pointer",
        outline: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              top: ripple.y - 50,
              left: ripple.x - 50,
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "rgba(83, 83, 83, 0.6)",
              pointerEvents: "none",
            }}
            onAnimationComplete={() => handleAnimationComplete(ripple.id)}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

export default RippleButton;

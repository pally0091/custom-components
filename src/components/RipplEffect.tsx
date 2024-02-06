/**
 * RippleEffect component displays expanding ripple animations
 * at the clicked x,y coordinates.
 * Manages ripple state in React hooks.
 * Renders ripple divs using mapped state.
 */
"use client";
import React, { useState } from "react";

interface Ripple {
  x: number;
  y: number;
  size: number;
}

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setClicked(true);
    const { pageX, pageY } = event;

    const newRipple: Ripple = {
      x: pageX,
      y: pageY,
      size: 150,
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((ripples) => ripples.filter((ripple) => ripple !== newRipple));
    }, 1000);
    setClicked(false);
  };

  return (
    <div
      className="relative h-screen"
      onClick={handleClick}
    >
      {ripples.map((ripple, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-black opacity-30"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
            transformOrigin: "center",
            animation: "ripple 1s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;

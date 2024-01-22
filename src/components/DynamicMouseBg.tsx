/**
 * DynamicMouseBackground component displays a radial gradient background that follows the mouse cursor position.
 *
 * Uses the useRef hook to reference the background div element.
 * Stores mouse position in component state with useState hook.
 * On mount, attaches mousemove event listener to window to update gradient position.
 * Handles cleanup by removing listener on unmount.
 * Renders a fullscreen fixed div with the dynamic background.
 */
"use client";
import React, { useEffect, useRef, useState } from "react";

const DynamicMouseBackground: React.FC = () => {
  const dynamicBackgroundRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ xPos: 0, yPos: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (dynamicBackgroundRef.current) {
        const rect = dynamicBackgroundRef.current.getBoundingClientRect();
        const xPos = event.clientX - rect.left;
        const yPos = event.clientY - rect.top;

        setPosition({ xPos, yPos });

        const circleSize = 50;
        const gradient = `radial-gradient(circle ${circleSize}px at ${xPos}px ${yPos}px, #8EABB7, transparent)`;

        dynamicBackgroundRef.current.style.backgroundImage = gradient;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dynamicBackgroundRef]);
  //   console.log(position);
  return (
    <div
      className="dynamic-background w-screen h-screen fixed top-0 left-0 pointer-events-none"
      ref={dynamicBackgroundRef}
    ></div>
  );
};

export default DynamicMouseBackground;

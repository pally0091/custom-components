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

        const circleSize = 100;
        const gradient = `radial-gradient(circle ${circleSize}px at ${xPos}px ${yPos}px, #4bc6f6, transparent)`;

        dynamicBackgroundRef.current.style.backgroundImage = gradient;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dynamicBackgroundRef]);
  console.log(position);
  return (
    <div
      className="dynamic-background w-screen h-screen fixed top-0 left-0 pointer-events-none"
      ref={dynamicBackgroundRef}
    ></div>
  );
};

export default DynamicMouseBackground;

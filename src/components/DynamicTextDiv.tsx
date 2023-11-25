// DynamicDiv.tsx

"use client";
import React, { useState, useEffect } from "react";

interface DynamicDivProps {
  children: React.ReactNode;
}

const DynamicDiv: React.FC<DynamicDivProps> = ({ children }) => {
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [displayText, setDisplayText] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setDisplayText(true);
  };

  const handleMouseLeave = () => {
    setDisplayText(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText && (
        <div
          style={{
            position: "fixed",
            top: position.y,
            left: position.x,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "5px 5px 5px 15px",
            borderRadius: "5px",
            fontSize: "10px",
          }}
        >
          We Create, We Host
        </div>
      )}
      {children}
    </div>
  );
};

export default DynamicDiv;

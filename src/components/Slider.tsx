/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { ReactNode, useEffect, useRef } from "react";

interface SliderProps {
  children: ReactNode;
  className: string;
}
const slider: React.FC<SliderProps> = ({ children, className }) => {
  const slider = useRef<HTMLDivElement | null>(null);

  const handleMouseScroll: EventListener = (e: Event) => {
    const wheelEvent = e as WheelEvent;
    if (slider.current) {
      slider.current.scrollLeft += wheelEvent.deltaY;
      e.preventDefault;
    }
  };

  useEffect(() => {
    if (slider.current) {
      slider.current.addEventListener("wheel", handleMouseScroll);
    }
  }, []);
  return (
    <div className={`flex flex-row ${className}`}>
      <div
        ref={slider}
        className="w-full mx-auto overflow-x-auto whitespace-nowrap scrollbar pt-5"
      >
        {children}
      </div>
    </div>
  );
};

export default slider;

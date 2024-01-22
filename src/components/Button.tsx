/**
 * Button component that renders a styled button with hover state.
 * Accepts various props to control appearance and behavior:
 * - children: React node content of the button
 * - label: Button text label
 * - primary: Applies primary button styling
 * - secondary: Applies secondary button styling
 * - full: Sets width to 100%
 * - className: Additional CSS class names to apply
 * - onClick: Click handler function
 */
"use client";
import React, { useState, CSSProperties, ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children?: ReactNode;
  label?: string;
  primary?: boolean;
  secondary?: boolean;
  full?: boolean;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  label,
  primary,
  secondary,
  full,
  onClick,
  className,
}: ButtonProps) => {
  const [backgroundColor, setBackgroundColor] = useState<string>(
    primary ? "#FF6F61" : secondary ? "white" : "white"
  );
  const [color, setColor] = useState<string>(
    primary ? "white" : secondary ? "black" : "#ff6f61"
  );

  const buttonStyle: CSSProperties = {
    padding: "8px 15px",
    borderRadius: "8px",
    width: full ? "100%" : "auto",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    margin: "5px",
    textAlign: "center",
    color,
    backgroundColor,
    border: "1px solid #D1D5DB",
    transition: "background-color 0.5s",
  };

  const handleHover = () => {
    setColor(primary ? "black" : secondary ? "white" : "black");
    setBackgroundColor(primary ? "white" : secondary ? "#FF6F61" : "lightgray");
  };

  const handleLeave = () => {
    setColor(primary ? "white" : secondary ? "black" : "#ff6f61");
    setBackgroundColor(primary ? "#FF6F61" : secondary ? "white" : "white");
  };

  return (
    <button
      className={className}
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {label} {children}
    </button>
  );
};

export default Button;

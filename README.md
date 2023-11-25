# DynamicMouseBackground Component

## Overview

The `DynamicMouseBackground` component is a React functional component that creates a dynamic background effect that follows the mouse cursor. It uses a `radial-gradient` to produce a circular transition effect.

## Usage

**Import the component:**

import React from "react";
import DynamicMouseBackground from "./DynamicMouseBackground";

const App: React.FC = () => {
return (
`<div>`
{/_ Other components _/}
`<DynamicMouseBackground />`
{/_ Additional components _/}
`</div>`
);
};

export default App;

**Styling:**

The component uses Tailwind CSS for styling. It is a full-screen fixed element without pointer events.

<div
  className="dynamic-background w-screen h-screen fixed top-0 left-0 pointer-events-none"
  ref={dynamicBackgroundRef}
></div>

## Functionality

- Dynamically adjusts the background gradient based on mouse movement.
- Utilizes `radial-gradient` for a circular effect transitioning from `#8EABB7` to transparent.
- Cleans up event listeners on component unmount.

## Dependencies

- Uses React hooks (`useRef`, `useState`, `useEffect`) for state management and DOM interactions.

## Note

Ensure Tailwind CSS is configured in your project for styling classes.

Feel free to customize styles or extend functionality as needed.

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

## Functionality

- Dynamically adjusts the background gradient based on mouse movement.
- Utilizes `radial-gradient` for a circular effect transitioning from `#8EABB7` to transparent.
- Cleans up event listeners on component unmount.

## Dependencies

- Uses React hooks (`useRef`, `useState`, `useEffect`) for state management and DOM interactions.

## Note

Ensure Tailwind CSS is configured in your project for styling classes.

Feel free to customize styles or extend functionality as needed.

# DynamicDiv Component

## Overview

The `DynamicDiv` component is a React functional component designed to create a dynamic tooltip-like element that follows the mouse cursor within its parent container. It can be used to display additional information or messages when the user hovers over a specific area.

## Usage

**Import the component:**

import React from "react";
import DynamicDiv from "./DynamicDiv";

const App: React.FC = () => {
return (
`<div>`
{/_ Other components _/}
`<DynamicDiv>`
{/_ Content inside the dynamic div _/}
`</DynamicDiv>`
{/_ Additional components _/}
`</div>`
);
};

export default App;

## Functionality

- The component dynamically tracks the mouse position within its parent container.
- It displays a fixed-position div with customizable styling when the mouse enters the component.
- The content of the dynamic div is specified by the `children` prop.
- The dynamic div disappears when the mouse leaves the component.

## Styling

The styling of the dynamic div can be customized using inline styles. The default style includes a semi-transparent black background with white text and rounded corners.

## Dependencies

- Uses React hooks (`useState`, `useEffect`) for state management and DOM interactions.

## Note

Ensure that the component is used within a parent container to accurately track mouse movements.

Feel free to customize the component's styling or extend its functionality based on your application's requirements.

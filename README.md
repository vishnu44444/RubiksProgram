<<<<<<< HEAD
# Rubik's Cube Simulator

This project is a Rubik's Cube simulator that allows users to interact with a virtual cube. You can try to solve the cube, input a real cube's state (2x2 through 10x10 urrently) to get a generated solution, or view various pattern algorithms for cubes from 2x2 to 10x10 with a turn-by-turn visual guide.

## Table of Contents
- [How to Use](#how-to-use)
  - [Base Functions](#base-functions)
  - [Base Options](#base-options)
  - [Menu Options](#menu-options)
- [Resources](#resources)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)

---

## How to Use

### Base Functions

#### Mouse
- **Turn a slice**: Left-click, hold, and drag along any slice of the cube to make a turn in the direction you drag your mouse. On mobile, just drag your finger along the slice.
- **Rotate the camera**: Left-click, hold, and drag anywhere in the space around the cube to rotate the camera. On mobile, just drag your finger in that space.

#### Keyboard
- **Redo**: The **right arrow key** will redo a move if you have undone at least one. Hold it down to continuously redo moves.
- **Undo**: The **left arrow key** will undo a move if you have made at least one. Hold it down to continuously undo moves.

[Back to top](#table-of-contents)

### Base Options

| Option | Description |
| :--- | :--- |
| **Cubes** | Shows a dropdown list of cube sizes from 2x2 to 10x10. Select any to generate that size cube. To access larger cubes (up to 70x70), change the URL variable. <br> *Example of 30x30: 
| **Info** | Opens a modal with a basic overview of the application and how to use it. |
| **Fullscreen** | Puts the application into fullscreen mode. Click the exit button or press `Esc` to leave fullscreen. |
| **Redo/Undo** | Click the left button to undo one move and the right button to redo one move. You can also use the left and right arrow keys. |
| **Settings** | Shows a dropdown list of application features. Click the checkbox next to a feature to toggle it on or off. |
| **Speed** | A slider to adjust the speed of the turns on the cube. |

Back to top

### Menu Options

#### Color Picker
Allows you to input a physical cube's state into the program to be solved.
- Color picker support works for all cube sizes.
- The solver component currently works for 2x2 through 5x5 cubes.

1.  **Select a color**: Use the mouse or keyboard (using the number beside the color).
2.  **Apply color**: Click any sticker on the cube to change its color to the selected one.
3.  **Solve**: When the cube is in a solvable state, the feedback panel will show a "Solve" button.
4.  **Errors**: If the cube is in an unsolvable state, errors will be displayed in the feedback panel.

#### Patterns
Choose from a selection of patterns. Selecting a pattern will automatically apply it to the cube.
- **Move Selection**: You can click on any move in the list, and the cube will jump to that state. The current move is highlighted.
- **Controls**:
    - **Previous/Next**: Go forward or backward one move at a time.
    - **Auto Rewind/Forward**: Continuously play the moves backward or forward.

#### Reset
Returns the cube to its default (solved) state.

#### Scramble
Generates and applies 25 random moves to the cube.

#### Solver
The solver will find and display the moves required to solve the cube from its current state.
- **Move Selection**: You can click on any move in the solution list, and the cube will jump to that state.
- **Controls**:
    - **Previous/Next**: Go forward or backward one move at a time.
    - **Auto Rewind/Forward**: Continuously play the solution moves backward or forward.

Back to top

---

## Resources
- Three.js - A 3D graphics library for displaying and animating the cube in the browser.
- OrbitControls - Allows the camera to orbit around a target.
- Stats.js - Provides a simple info box to monitor code performance.

Back to top

---

## Available Scripts

This project was bootstrapped with Create React App. In the project directory, you can run:

### `npm start`

Runs the app in development mode.<br>
Open http://localhost:3000 to view it in your browser.

The page will reload when you make edits. You will also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.<br>
See the section about running tests for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.<br>
Your app is ready to be deployed!

See the section about deployment for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project and copy all the configuration files and transitive dependencies (Webpack, Babel, ESLint, etc.) right into your project so you have full control over them.

Back to top

---

## Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Back to top
=======
# rubiks-cube
my project

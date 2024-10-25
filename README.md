# Traffic-Light
![traffic-light-v1](https://github.com/user-attachments/assets/e8d740bf-3ac0-4457-a5ee-f1e43f778aa7)
This project simulates a basic traffic light system using HTML, CSS, and JavaScript. The user can control the traffic light by clicking buttons to change the colors of the lights and corresponding buttons to represent stop, ready, and go.

## Features

- Three buttons: **Stop**, **Ready**, and **Go**.
- Three lights: Stop (red), Ready (yellow), and Go (green).
- The corresponding light and button change color when clicked, while other elements revert to their default state.

## Instructions

Follow the steps below to implement the traffic light functionality:

1. **HTML Button Elements**:
   - The buttons should have the following `id` attributes:
     - Stop Button: `stopButton`
     - Ready Button: `readyButton`
     - Go Button: `goButton`

2. **HTML Container Elements**:
   - The traffic light containers should have the following `id` attributes:
     - Stop Light: `stopLight`
     - Ready Light: `readyLight`
     - Go Light: `goLight`

3. **Functionality**:
   - When the **Stop** button is clicked:
     - The background color of the `stopLight` container and the `stopButton` should change to **red**.
     - The other elements (readyLight, goLight, readyButton, goButton) should revert to their default background colors.
   - When the **Ready** button is clicked:
     - The background color of the `readyLight` container and the `readyButton` should change to **yellow**.
     - The other elements (stopLight, goLight, stopButton, goButton) should revert to their default background colors.
   - When the **Go** button is clicked:
     - The background color of the `goLight` container and the `goButton` should change to **green**.
     - The other elements (stopLight, readyLight, stopButton, readyButton) should revert to their default background colors.

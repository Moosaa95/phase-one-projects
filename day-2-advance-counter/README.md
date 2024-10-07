# Advanced Counter App

This project is an advanced counter application built with **React**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS**. The app showcases how to implement a simple yet powerful counter using professional folder structure and state management with Redux Toolkit.

## Features

- **Increment**: Increase the counter value by 1.
- **Decrement**: Decrease the counter value by 1.
- **Reset**: Reset the counter value to 0.
- **Add Custom Amount**: Add a user-specified amount to the counter.
- **Responsive Design**: Styled using Tailwind CSS to adapt to different screen sizes.
- **Global State Management**: Uses Redux Toolkit for easy state management.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Redux Toolkit**: Simplifies state management with less boilerplate.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Folder Structure

The project follows a clean and organized folder structure, making it easy to scale and maintain:

```
src/
├── app/
│   ├── hooks.ts          # Custom hooks for typed useDispatch and useSelector
│   ├── store.ts          # Configures the Redux store
├── components/
│   └── Counter.tsx       # Main Counter component
├── features/
│   └── counter/
│       ├── counterSlice.ts # Redux slice for counter state and reducers
│       └── index.ts       # Barrel file for the counter slice
├── index.tsx             # Entry point for React
└── main.tsx              # App root with global providers
```

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/phase-one.git
   cd phase-one/advance-counter-app
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

3. **Start the development server:**

   Using npm:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

4. **Open the app in your browser:**

   The app should be running at `http://localhost:3000`.

## How to Use

1. **Increment**: Click the `Increment` button to increase the counter value.
2. **Decrement**: Click the `Decrement` button to decrease the counter value.
3. **Reset**: Click the `Reset` button to set the counter value to 0.
4. **Add Custom Amount**: Enter a number in the input field and click `Add Amount` to add that value to the counter.

## Code Walkthrough

### `src/features/counter/counterSlice.ts`

The counter state is managed using a Redux slice. It contains the initial state, reducers for different actions, and the action creators.

```typescript
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
```

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.

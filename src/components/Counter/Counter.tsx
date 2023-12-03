"use client";
import React, { useState, useReducer } from "react";
import styles from "./Counter.module.scss";

interface CountAction {
  type: string;
  payload?: number;
}

// An interface for our state
interface CountState {
  count: number;
}

const reduce = (state: CountState, action: CountAction) => {
  const { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const Counter: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [state, dispatch] = useReducer(reduce, { count: 0 });

  const counterDispatchHandler = (action: string) => () => {
    dispatch({ type: action });
  };

  return (
    <div className={styles.counter}>
      <div>
        <div className={`${styles.numberContainer} ${styles.animation}`}>
          <h1>{state.count}</h1>
        </div>
        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={counterDispatchHandler("INCREMENT")}
          >
            Increment
          </button>
          <button
            className={styles.btn}
            onClick={counterDispatchHandler("DECREMENT")}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

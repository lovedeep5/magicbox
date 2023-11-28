import React from "react";
import CounterComponent from "@/components/Counter/Counter";
import Header from "@/components/Header/Header";

const Counter: React.FC = () => {
  return (
    <div>
      <Header title="Counter" />
      <CounterComponent />
    </div>
  );
};

export default Counter;

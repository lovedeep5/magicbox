import React from "react";
import Header from "@/components/Header/Header";
import TodoContent from "@/components/TodoContent/TodoContent";

const page: React.FC = () => {
  return (
    <>
      <Header title="Todo" />
      <TodoContent />
    </>
  );
};

export default page;

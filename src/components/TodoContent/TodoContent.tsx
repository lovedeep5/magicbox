"use client";
import React, { useState } from "react";
import uuid from "react-uuid";
import { TodoType } from "@/types";
import TodoForm from "../TodoForm/TodoForm";
import TodoItems from "../TodoItems/TodoItems";
import styles from "./TodoContent.module.scss";

const TodoContent: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<TodoType[]>([
    { id: "123", todo: "test todo item", isCompleted: false },
  ]);

  const todoChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const createTodoHandler = () => {
    if (!input) return;
    setTodos((prev) => {
      return [...prev, { id: uuid(), todo: input, isCompleted: false }];
    });
    setInput("");
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.todoContent}>
      <TodoForm
        input={input}
        todoChangeHandler={todoChangeHandler}
        createTodoHandler={createTodoHandler}
      />
      <TodoItems todos={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default TodoContent;

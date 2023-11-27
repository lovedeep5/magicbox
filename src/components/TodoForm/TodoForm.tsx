import React from "react";
import styles from "./todoForm.module.scss";

interface TodoFormTypes {
  input: string;
  todoChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  createTodoHandler: () => void;
}

const TodoForm: React.FC<TodoFormTypes> = ({
  input,
  todoChangeHandler,
  createTodoHandler,
}) => {
  return (
    <>
      <div className={styles.todoForm}>
        <div className={styles.todoInputGroup}>
          <input
            type="text"
            name="todo"
            value={input}
            onChange={todoChangeHandler}
          />
          <button onClick={createTodoHandler}>Go</button>
        </div>
      </div>
    </>
  );
};

export default TodoForm;

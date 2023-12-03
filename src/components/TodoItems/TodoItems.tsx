import React from "react";
import { TodoType } from "@/types";
import { PiTrashSimpleThin } from "react-icons/pi";
import styles from "./TodoItems.module.scss";

interface TodoItemsType {
  todos: TodoType[];
  todoDeleteHandler: (id: string) => void;
}

const TodoItems = ({ todos, todoDeleteHandler }: TodoItemsType) => {
  return (
    <ul className={styles.todoItems}>
      {todos.length ? (
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.todo}</span>
              <span
                className={styles.buttons}
                onClick={() => todoDeleteHandler(todo.id)}
              >
                <button>
                  <PiTrashSimpleThin className={styles.deleteIcon} />
                </button>
              </span>
            </li>
          );
        })
      ) : (
        <li>No Todos Found!!</li>
      )}
    </ul>
  );
};

export default TodoItems;

import React, { useEffect, useState } from "react";
import "./App.css";
import { getTodos } from "./services/todos.service";

interface Todo {
  userId: number;
  id: number;
  todo: string;
  completed: boolean;
}

export function Todos() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    async function fetchTodos() {
      const todos = await getTodos();
      console.log(todos);
      setTodos(todos.todos);
    }
    fetchTodos();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Todo</th>
          <th>Completed</th>
        </tr>
        {todos.map((todo: Todo) => (
          <tr>
            <td>{todo.id}</td>
            <td>{todo.userId}</td>
            <td>{todo.todo}</td>
            <td>{todo.completed ? "Done" : "In-Progress"}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Todos;

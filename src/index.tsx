import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "@/App";
import { BrowserRouter, Route, Routes } from "react-router";
import { TodoList } from "@components/TodoList/TodoList";
import { Todos } from "@components/Todos";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="todolists" element={<TodoList />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

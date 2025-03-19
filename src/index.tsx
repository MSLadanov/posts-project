import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "@/App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { TodoListsRoute } from "@routes/TodoListsRoute";
import { TodosRoute } from "@routes/TodosRoute";
import { ErrorRoute } from "@routes/ErrorRoute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorRoute />} />
        <Route path="/" element={<App />}>
          <Route path="todolists" element={<TodoListsRoute />} />
          <Route path="todos" element={<TodosRoute />} />
          <Route path="/" element={<Navigate to="/todolists" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import "./App.css";
import { Header } from "@/components/Header";
import { TodoList } from "@/components/TodoList";
import { Todos } from "@/components/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <Todos />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Header } from "@components/Header";
import { Outlet } from "react-router";

export function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}


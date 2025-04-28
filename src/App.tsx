import "./App.css";
import { Header } from "@components/Header";
import { Outlet } from "react-router";
import { Footer } from "@components/Footer";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

import { Header } from "@components/Header";
import { Outlet } from "react-router";
import { Footer } from "@components/Footer";
import "./App.css";


export function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

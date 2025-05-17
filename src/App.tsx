import { Header } from "@components/Header";
import { Outlet } from "react-router";
import { Footer } from "@components/Footer";
import { CookiesProvider } from "react-cookie";
import "./App.css";

export function App() {
  return (
    <CookiesProvider>
      <Header />
      <Outlet />
      <Footer />
    </CookiesProvider>
  );
}

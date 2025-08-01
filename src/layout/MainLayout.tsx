import {Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full py-6">
        <nav className="max-w-4xl mx-auto flex justify-center">
          <NavBar />
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center p-6">
        <Outlet />
      </main>
      <footer className="flex justify-center">
          <Footer />
      </footer>
    </div>
  );
}

import {Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Хедер */}
      <header className="w-full bg-gray-300 py-6">
        <nav className="max-w-4xl mx-auto flex justify-center">
          <NavBar />
        </nav>
      </header>

      {/* Контент */}
      <main className="flex-grow flex items-center justify-center p-6">
        <Outlet />
      </main>

      {/* Футер */}
      <footer className="w-full bg-gray-300 py-1">
        <nav className="max-w-4xl mx-auto flex justify-center">
          <Footer />
        </nav>
      </footer>
    </div>
  );
}

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Materials from "./components/Materials";
import Tutors from "./components/Tutors";

function App() {
  const [q, setQ] = useState("");

  return (
    <div className="min-h-screen bg-slate-900 text-blue-50">
      <Header />
      <Hero onSearch={setQ} />

      <main>
        <Materials query={q} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        <Tutors />
      </main>

      <footer className="mt-10 py-10 text-center text-blue-200/70">
        © {new Date().getFullYear()} LearnHub • Built for PLV students
      </footer>
    </div>
  );
}

export default App;

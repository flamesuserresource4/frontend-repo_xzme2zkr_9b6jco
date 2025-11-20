import { BookOpen, GraduationCap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 grid place-items-center text-white shadow-lg shadow-blue-500/20">
            <BookOpen size={22} />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">LearnHub</p>
            <p className="text-xs text-blue-200/80">Pamantasan ng Lungsod ng Valenzuela</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-blue-100/80 text-sm">
          <GraduationCap size={18} className="text-blue-300" />
          <span>Student marketplace for notes & tutoring</span>
        </div>
      </div>
    </header>
  );
}

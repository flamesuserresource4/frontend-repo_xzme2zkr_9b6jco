export default function Hero({ onSearch }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.35),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.25),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Buy, sell, and find study materials. Book peer tutors.
          </h1>
          <p className="mt-4 text-blue-100/90 text-lg">
            Built for PLV students. Explore reviewers, class notes, and more — by course and subject.
          </p>
          <div className="mt-8">
            <div className="flex items-stretch gap-3">
              <input
                type="text"
                placeholder="Search materials (e.g., Data Structures)"
                onChange={(e) => onSearch?.(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-blue-50 placeholder:text-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-5 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-500 transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

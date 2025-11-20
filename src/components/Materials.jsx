import { useEffect, useState } from "react";
import { Filter, FileText, Star } from "lucide-react";

const COURSES = [
  "Information Technology",
  "Electrical Engineering",
  "Civil Engineering",
  "Business Administration",
  "Education",
  "Nursing",
  "Accountancy",
  "Hospitality Management",
];

export default function Materials({ query }) {
  const [items, setItems] = useState([]);
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const url = new URL(`${backend}/api/materials`);
    if (course) url.searchParams.set("course", course);
    if (subject) url.searchParams.set("subject", subject);
    if (query) url.searchParams.set("q", query);
    fetch(url)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]));
  }, [backend, course, subject, query]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Student Materials</h2>
        <div className="flex items-center gap-3 text-sm">
          <Filter size={16} className="text-blue-300" />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="bg-slate-800/70 border border-white/10 text-blue-100 px-3 py-2 rounded-lg"
          >
            <option value="">All Courses</option>
            {COURSES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject (e.g., Calculus)"
            className="bg-slate-800/70 border border-white/10 text-blue-100 px-3 py-2 rounded-lg placeholder:text-blue-200/50"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((m) => (
          <div key={m.id || m._id} className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-300 grid place-items-center">
                <FileText size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{m.title}</h3>
                  <span className="text-blue-200 text-sm">{m.price > 0 ? `₱${m.price}` : "Free"}</span>
                </div>
                <p className="text-blue-200/80 text-sm mt-1 line-clamp-2">{m.description}</p>
                <div className="mt-2 text-xs text-blue-300/70">
                  {m.course} • {m.subject} • {m.type}
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-300">
                  <Star size={14} className="fill-amber-300" />
                  <span className="text-amber-200 text-sm">{m.rating ?? 4.8}</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-500">View</button>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center text-blue-200/80 py-10">No materials found.</div>
        )}
      </div>
    </section>
  );
}

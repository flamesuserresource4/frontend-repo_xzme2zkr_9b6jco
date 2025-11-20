import { useEffect, useState } from "react";
import { Users, UserRound, CalendarClock } from "lucide-react";

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

export default function Tutors() {
  const [items, setItems] = useState([]);
  const [course, setCourse] = useState("");
  const [subject, setSubject] = useState("");
  const backend = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const url = new URL(`${backend}/api/tutors`);
    if (course) url.searchParams.set("course", course);
    if (subject) url.searchParams.set("subject", subject);
    fetch(url)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]));
  }, [backend, course, subject]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Peer Tutors</h2>
        <div className="flex items-center gap-3 text-sm">
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
            placeholder="Subject (e.g., Statics)"
            className="bg-slate-800/70 border border-white/10 text-blue-100 px-3 py-2 rounded-lg placeholder:text-blue-200/50"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.id || t._id} className="rounded-xl bg-slate-800/60 border border-white/10 p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-300 grid place-items-center">
                <Users size={18} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{t.name}</h3>
                  <span className="text-emerald-200 text-sm">₱{t.rate_per_hour}/hr</span>
                </div>
                <p className="text-blue-200/80 text-sm mt-1 line-clamp-2">{t.bio}</p>
                <div className="mt-2 text-xs text-blue-300/70">
                  {t.course} • {Array.isArray(t.subjects) ? t.subjects.join(", ") : ""}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-200/80">
                  <UserRound size={16} className="text-emerald-300" /> {Array.isArray(t.modes) ? t.modes.join(" / ") : t.modes}
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-blue-200/80">
                  <CalendarClock size={16} className="text-emerald-300" /> {Array.isArray(t.availability) ? t.availability.join(" • ") : t.availability}
                </div>
              </div>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg bg-emerald-600 text-white text-sm hover:bg-emerald-500">Book</button>
          </div>
        ))}
        {items.length === 0 && (
          <div className="col-span-full text-center text-blue-200/80 py-10">No tutors found.</div>
        )}
      </div>
    </section>
  );
}

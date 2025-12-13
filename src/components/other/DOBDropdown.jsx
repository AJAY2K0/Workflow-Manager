import { useState, useEffect } from "react";

export default function DOBDropdown({ value, onChange }) {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const years = Array.from({ length: 101 }, (_, i) => String(currentYear - i));

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const daysInMonth =
    month && year
      ? new Date(Number(year), months.indexOf(month) + 1, 0).getDate()
      : 31;

  const days = Array.from({ length: daysInMonth }, (_, i) => String(i + 1));

  useEffect(() => {
    if (day && Number(day) > daysInMonth) {
      setDay("");
    }
  }, [month, year, daysInMonth]);

  useEffect(() => {
    if (day && month && year) {
      const dob = new Date(Number(year), months.indexOf(month), Number(day));

      const yyyy = dob.getFullYear();
      const mm = String(dob.getMonth() + 1).padStart(2, "0");
      const dd = String(dob.getDate()).padStart(2, "0");

      const formatted = `${yyyy}-${mm}-${dd}`;

      onChange(formatted);
    }
  }, [day, month, year]);

  return (
    <div className="flex justify-between">
      <div className="relative">
        <select
          className="appearance-none bg-gray-900 border border-emerald-500/40 text-gray-200
                     py-2 px-5 pr-10 text-sm rounded-full outline-none focus:border-emerald-400"
          value={day}
          required
          onChange={(e) => setDay(e.target.value)}
        >
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 text-xs">
          ▼
        </span>
      </div>

      <div className="relative">
        <select
          className="appearance-none bg-gray-900 border border-emerald-500/40 text-gray-200
                     py-2 px-5 pr-12 text-sm rounded-full outline-none focus:border-emerald-400"
          value={month}
          required
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Month</option>
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 text-xs">
          ▼
        </span>
      </div>

      <div className="relative">
        <select
          className="appearance-none bg-gray-900 border border-emerald-500/40 text-gray-200
                     py-2 px-5 pr-12 text-sm rounded-full outline-none focus:border-emerald-400"
          value={year}
          required
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-200 text-xs">
          ▼
        </span>
      </div>
    </div>
  );
}

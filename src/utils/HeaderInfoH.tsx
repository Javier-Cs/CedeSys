import { CalendarDays, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeaderInfo() {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const date = new Intl.DateTimeFormat("es-EC", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(dateTime);

  const time = new Intl.DateTimeFormat("es-EC", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(dateTime);

  return (
    <div className="flex items-center gap-4 border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-900/60 backdrop-blur-md px-5 py-3 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
        <CalendarDays size={22} />
      </div>

      <div className="flex flex-col">
        <span className="capitalize text-1xl text-slate-900 dark:text-slate-200">
          {date}
        </span>

        <div className="flex items-center gap-2">
          <Clock3
            size={18}
            className="text-slate-900 dark:text-slate-500"
          />

          <span className="font-mono text-3xl font-bold tracking-wider text-slate-800 dark:text-white">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

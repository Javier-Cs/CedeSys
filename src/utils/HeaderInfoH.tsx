import { Clock3 } from "lucide-react";
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
    <div className="flex items-center  bg-emerald-600 dark:bg-slate-900/60 backdrop-blur-md px-5 ">
      

      <div className="flex flex-col">
        <span className="capitalize text-1xl text-slate-100 dark:text-slate-200">
          {date}
        </span>

        <div className="flex items-center gap-2">
          <Clock3
            size={18}
            className="text-slate-100 dark:text-slate-100"
          />

          <span className="font-mono text-3xl font-bold tracking-wider text-slate-100 dark:text-white">
            {time}
          </span>
        </div>
      </div>
    </div>
  );
}

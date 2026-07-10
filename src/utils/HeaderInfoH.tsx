import { useEffect, useState } from "react";

export default function HeaderInfo() {
  const [dateTime, setDateTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-center py-2 text-sm text-gray-400">
      {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
    </div>
  );
}

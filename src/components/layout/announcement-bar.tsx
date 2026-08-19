"use client";

import { useEffect, useState } from "react";
import { ANNOUNCEMENTS } from "@/lib/constants";

export function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % ANNOUNCEMENTS.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white">
      <p
        key={index}
        className="animate-fade-in px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.22em]"
      >
        {ANNOUNCEMENTS[index]}
      </p>
    </div>
  );
}

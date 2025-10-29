"use client";
import { useEffect, useState } from "react";
import { schedule } from "./schedule";

export default function TimeRestrictedBlock({ onVisibilityChange }) {
  const [currentType, setCurrentType] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const targetDate = new Date(2025, 10, 1);
  const isAfterOrEqual = now >= targetDate;

  useEffect(() => {
    const nowFull = new Date();
    const hour = nowFull.getHours();
    const day = nowFull.getDay(); // 0 = вс, 1 = пн, ...

    if(!isAfterOrEqual) setIsVisible(false);

    // const ranges = day >= 1 && day <= 5 ? schedule.weekdays : schedule.weekends;
    const ranges = schedule.always;
    
    let match = null;
    for (const r of ranges) {
      if (hour >= r.start && hour <= r.end) {
        match = r.type;
        break;
      }
    }

    setCurrentType(match);
  }, []);

  useEffect(() => {
    onVisibilityChange?.(!!currentType && isVisible);
  }, [currentType, isVisible, onVisibilityChange]);

  const handleClose = () => {
    setIsVisible(false);
    const main = document.querySelector("main");
    if (main) {
      main.classList.remove("pt-[65px]");
    }
  };

  if (!currentType || !isVisible) return null;

  return (
    <div className="timerestricted relative h-[65px] p-[10px] drm:p-4 dr:p-[8px] bg-orange-500 text-white text-center font-semibold flex">
      
      {(isAfterOrEqual && currentType === "always") && (
        <p className="font-medium ml-auto self-center drm:text-base dr:text-xs">
          Приводи друзей и получай <span className="font-bold text-[#06195B] underline">ПОДАРКИ</span> для себя и своего друга!
        </p>
      )}

      <button
            onClick={handleClose}
            className="text-[#F86F00] font-bold text-lg ml-auto mdd:translate-y-[-15px] dr:translate-y-[-10px]"
        >
            <img src="/closewhite.svg" alt="Закрыть" className="w-6 h-6"/>
        </button>
    </div>
  );
}

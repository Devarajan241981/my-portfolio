import React, { useState, useEffect } from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  const [tooltipTexts, setTooltipTexts] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleMouseEnter = (index, technology) => {
    setTooltipTexts({ [index]: technology });
  };

  const handleMouseLeave = () => {
    setTooltipTexts({});
  };

  return (
    <div className="px-4">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {technologies.map((technology, index) => (
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 relative flex flex-col items-center justify-center"
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(index, technology.name)}
            onMouseLeave={handleMouseLeave}
          >
            {isMobile ? (
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            ) : (
              <BallCanvas icon={technology.icon} />
            )}

            {tooltipTexts[index] && !isMobile && (
              <div className="absolute bg-black bg-opacity-80 text-white px-2 py-1 rounded text-sm z-10 bottom-[90%] left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                {tooltipTexts[index]}
              </div>
            )}

            <p className="text-white text-sm mt-2 text-center">{technology.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;

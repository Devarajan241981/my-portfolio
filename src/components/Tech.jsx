import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="px-4 my-10">
      <h2 className="text-3xl font-bold mb-6 text-white text-center">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className="flex flex-col items-center"
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-20 h-20 object-contain"
            />
            <p className="text-white text-sm mt-2 text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;

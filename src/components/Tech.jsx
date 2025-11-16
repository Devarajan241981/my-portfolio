// src/components/Tech.jsx (example)
import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section id="tech">
      <h2>Skills</h2>
      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.name} className="tech-item">
            <img src={tech.icon} alt={tech.name} style={{ width: 120 }} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;

import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

import infosysLogo from "../assets/company/infosys.png";
import cognifyLogo from "../assets/company/cognify technologies.png";

const experience = [
  {
    title: "Project Intern",
    company: "Infosys",
    icon: infosysLogo,
    iconBg: "#2c4861",
    date: "Oct 2023 - Dec 2023",
    location: "Greater Bengaluru Area · Hybrid",
    points: [
      "Led a crew in project onboardings and teamwork as a Project Intern.",
      "Managed real-time project tasks and coordinated team efforts for successful completion.",
      "Developed strong leadership and communication skills in a fast-paced, dynamic environment.",
      "Collaborated with cross-functional teams to achieve project goals and deliver high-quality results.",
    ],
    skills: ["Python", "HTML", "+3 skills"],
  },
  {
    title: "Java Developer Intern",
    company: "Cognify Technologies",
    icon: cognifyLogo,
    iconBg: "#123456",
    date: "Jul 2026 - Sep 2026",
    location: "Remote / Hybrid",
    points: [
      "Developed and maintained Java-based applications as part of the internship.",
      "Wrote and debugged Java scripts to support application requirements and automation.",
      "Collaborated with senior developers to improve code quality and performance.",
      "Participated in daily stand-ups and code reviews following agile practices.",
    ],
    skills: ["Java", "Scripting", "Automation"],
  },
];

const ExperienceCard = ({ exp }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={exp.icon}
          alt={exp.company}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
    iconStyle={{ background: exp.iconBg }}
    date={`${exp.date} | ${exp.location}`}
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{exp.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {exp.company}
      </p>
    </div>
    <ul className="mt-5 ml-5 list-disc space-y-2">
      {exp.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
    <div className="mt-2 flex flex-wrap gap-2 text-[13px]">
      {exp.skills.map((skill, idx) => (
        <span key={idx} className="bg-[#36306b] px-2 py-1 rounded text-[#a5f3fc]">{skill}</span>
      ))}
    </div>
  </VerticalTimelineElement>
);

const Experience = () => (
  <section id="work"> {/* This enables navbar scroll to work! */}
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>What I've Done</p>
      <h2 className={styles.sectionHeadText}>Experience.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experience.map((exp, idx) => (
          <ExperienceCard key={`experience-${idx}`} exp={exp} />
        ))}
      </VerticalTimeline>
    </div>
  </section>
);

export default Experience;

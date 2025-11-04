import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const eduIcon = (
  <div className="flex justify-center items-center w-full h-full">
    <span style={{ fontSize: 24, color: "#fff" }}>🎓</span>
  </div>
);


const education = [
  {
    title: "B.E. Computer Science Engineering",
    institution: "S.E.A College of Engineering",
    date: "Oct 2022 – Present",
    details: [
      "Currently pursuing degree in Computer Science & Engineering.",
      "Active in college hackathons and technical events.",
    ],
    iconBg: "#1d1836",
  },
  {
    title: "Intermediate (PUC) – PCMB",
    institution: "RK Vision PU College",
    date: "2020 – 2022 | 75%",
    details: [
      "Completed core science subjects: Physics, Chemistry, Mathematics, Biology.",
      "Actively participated in academic and extracurricular activities.",
    ],
    iconBg: "#1d1836",
  },
  {
    title: "10th Class",
    institution: "Ravindra Bharathi School",
    date: "2020 | 98%",
    details: [
      "Achieved top scores in board examinations.",
      "Awarded for academic excellence.",
    ],
    iconBg: "#1d1836",
  },
];

const Education = () => (
  <section id="education" className="my-20">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
    <VerticalTimeline>
      {education.map((edu, idx) => (
        <VerticalTimelineElement
          key={idx}
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid #232631" }}
          icon={eduIcon}
          iconStyle={{ background: edu.iconBg, color: "#fff" }}
          date={edu.date}
        >
          <h3 className="text-white text-[22px] font-bold">{edu.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
            {edu.institution}
          </p>
          <ul className="mt-4 ml-5 list-disc space-y-2">
            {edu.details.map((point, i) => (
              <li key={i} className="text-white-100 text-[15px] pl-1 tracking-wider">
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </section>
);

export default Education;

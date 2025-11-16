// ===============================
// 👉 Import assets
// ===============================
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextJs,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  linkedIn,
  github,
  python
} from "../assets";

// ===============================
// 👉 Import project images
// ===============================
import fuelDelivery from "../assets/projects/fuel_delivery.png";
import studentShowcase from "../assets/projects/student_showcase.png";
import aura999 from "../assets/projects/aura999.png";
import confidentialComputing from "../assets/projects/confidential_computing.png";

// ===============================
// 👉 Navigation paths
// ===============================
const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

// ===============================
// 👉 Navbar links
// ===============================
export const navLinks = [
  { id: navigationPaths.about, title: "About" },
  { id: navigationPaths.work, title: "Experience" },
  { id: navigationPaths.contact, title: "Contact" },
];

// ===============================
// 👉 Services section
// ===============================
const services = [
  { title: "Web Developer", icon: web },
  { title: "Java Developer", icon: java },
  { title: "React Developer", icon: reactjs },
  { title: "Backend Developer", icon: backend },
];

// ===============================
// 👉 Technologies (Skills) section
// ===============================
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Java", icon: java },
  { name: "Python", icon: python },       // ✅ Python icon included
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
];

// ===============================
// 👉 Experience timeline
// ===============================
const experience = [
  {
    title: "B.E. Computer Science Engineering",
    institution: "S.E.A College of Engineering",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Oct 2022 – Present",
    points: [
      "Currently pursuing degree in Computer Science & Engineering.",
      "Active in college hackathons and technical events.",
    ],
  },
  {
    title: "PUC — PCMB",
    institution: "RK Vision PU College",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "April 2022 | 75% CGPA",
    points: [
      "Completed core science subjects with strong results.",
    ],
  },
  {
    title: "10th Class",
    institution: "Ravindra Bharathi School",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "March 2020 | 98% CGPA",
    points: [
      "Achieved top scores in board examinations.",
    ],
  },
];

// ===============================
// 👉 Projects section
// ===============================
const projects = [
  {
    name: "FUELnow - Fuel Delivery platform",
    description:
      "Developed a platform for requesting fuel delivery with secure payment gateway and user management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "java", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
    ],
    image: fuelDelivery,
    hosted_link: "https://github.com/Devarajan241981/FUELnow",
  },
  {
    name: "Student Project Showcase Application",
    description:
      "A site for students to share academic projects. Frontend: HTML, CSS, JavaScript. Backend: Java, MySQL.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: studentShowcase,
    hosted_link: "#",
  },
  {
    name: "AURA 999 Digital Magazine",
    description:
      "Created a student showcase magazine using Flip HTML5 and Adobe InDesign.",
    tags: [
      { name: "FlipHTML5", color: "blue-text-gradient" },
      { name: "AdobeInDesign", color: "pink-text-gradient" },
    ],
    image: aura999,
    hosted_link: "#",
  },
  {
    name: "Confidential Computing with Encrypted VMs",
    description:
      "Stock trading platform using Azure confidential computing.",
    tags: [
      { name: "azure", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
    ],
    image: confidentialComputing,
    hosted_link: "#",
  },
];

// ===============================
// 👉 Personal Info
// ===============================
const personalInfo = {
  name: "Jai Chandra Kumar Devarajan",
  fullName: "Jai Chandra Kumar Devarajan",
  email: "devarajanchandu@gmail.com",
  mobile: "9663397727",
  role: "Full Stack Developer",
  about: `Software with purpose.

Passionate about building efficient, modern web applications and contributing to innovative projects.`,
  projectsIntro: `Following projects showcase my skills and experience through real-world examples.`,
};

// ===============================
// 👉 Public URLs (Resume + Socials)
// ===============================
const publicUrls = {
  resume: "/resume.pdf",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/devarajan241981",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/Devarajan241981",
      icon: github,
    },
  },
};

// ===============================
// 👉 Export all
// ===============================
export {
  services,
  technologies,
  experience,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};

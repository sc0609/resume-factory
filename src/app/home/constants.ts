import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "John Wicks",
    summary:
      "Software engineer obsessed with building exceptional products that people love",
    email: "hello@resumefactory.netlify.app",
    phone: "+911234567890",
    location: "Nagpur, Maharashtra",
    url: "linkedin.com/in/john-doe",
  },
  workExperiences: [
    {
      company: "ABC Company",
      jobTitle: "Software Engineer",
      date: "May 2023 - Present",
      descriptions: [
        "Lead a cross-functional team of 5 engineers in developing a search bar, which enables thousands of daily active users to search content across the entire platform",
        "Create stunning home page product demo animations that drives up sign up rate by 20%",
        "Write clean code that is modular and easy to maintain while ensuring 100% test coverage",
      ],
    },
    {
      company: "DEF Organization",
      jobTitle: "Software Engineer Intern",
      date: "Summer 2022",
      descriptions: [
        "Re-architected the existing content editor to be mobile responsive that led to a 10% increase in mobile user engagement",
        "Created a progress bar to help users track progress that drove up user retention by 15%",
        "Discovered and fixed 5 bugs in the existing codebase to enhance user experience",
      ],
    },
    {
      company: "XYZ University",
      jobTitle: "Research Assistant",
      date: "Summer 2021",
      descriptions: [
        "Devised a new NLP algorithm in text classification that results in 10% accuracy increase",
        "Compiled and presented research findings to a group of 20+ faculty and students",
      ],
    },
  ],
  educations: [
    {
      school: "XYZ University",
      degree: "Bachelor of Technology in Engineering ",
      date: "Sep 2021 - May 2025",
      gpa: "7.5",
      descriptions: [
        "Achieved first place in the Health Tech Challenge and second place in the Education Hackathon in 2023.",
        "Classroom Assistant in Web Development (2022–2023) ",
        "Coursework : Object-oriented programming (A+), programming for the web (A+), cloud computing (A), algorithm analysis (A-) and machine learning basics (A-)",
      ],
    },
  ],
  projects: [
    {
      project: "ResumeFactory",
      date: "Summer 2024",
      descriptions: [
        "Built and released a free web app that helps thousands of people easily make a professional resume to obtain the jobs they want.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "HTML", rating: 4 },
      { skill: "CSS", rating: 4 },
      { skill: "Python", rating: 4 },
      { skill: "TypeScript", rating: 3 },
      { skill: "React", rating: 3 },
      { skill: "C++", rating: 3 },
    ],
    descriptions: [
      "Tech: React Hooks, Node.js, SQL, Postgres, Redis, REST API, Git",
      "Soft: Teamwork, Creative Problem Solving, Communication, Learning Mindset, Agile",
    ],
  },
  custom: {
    descriptions: [],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};

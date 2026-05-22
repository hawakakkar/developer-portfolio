import project1 from "../assets/project 1.png";
import project2 from "../assets/project 2.jpg";
import project3 from "../assets/project 3.jpg";

const projects = [
  {
    name: "Clock app",

    image: project1,

    description: "Modern responsive Clock-app built with React.",

    link: "https://github.com/yourusername/developer-portfolio",

    techStack: ["React", "CSS"],

    featured: true,
  },

  {
    name: "React quiz",

    image: project2,

    description: "Clean and responsive React quiz for customers",

    link: "https://github.com/yourusername/business-landing-page",

    techStack: ["CSS", "React", "JavaScript"],

    featured: false,
  },

  {
    name: "Pizza Menu",

    image: project3,

    description: "Clean and responsive Pizza menu for resturant.",

    link: "https://github.com/yourusername/business-landing-page",

    techStack: ["CSS", "React"],

    featured: false,
  },
];

export default projects;

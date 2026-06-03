import project1 from "../assets/project 1.png";
import project2 from "../assets/project 2.jpg";
import project3 from "../assets/project 3.jpg";

const projects = [
  {
    id: 1,
    name: "Clock App",
    image: project1,
    description: "Modern responsive Clock App built with React.",
    link: "https://github.com/hawakakkar/clock-app.git",
    techStack: ["React", "CSS"],
    featured: true,
  },

  {
    id: 2,
    name: "React Quiz",
    image: project2,
    description: "Clean and responsive React quiz for customers.",
    link: "https://github.com/hawakakkar/react-quiz.git",
    techStack: ["CSS", "React", "JavaScript"],
    featured: false,
  },

  {
    id: 3,
    name: "Pizza Menu",
    image: project3,
    description: "Clean and responsive Pizza menu for restaurant.",
    link: "https://github.com/hawakakkar/01.pizza-menu.git",
    techStack: ["CSS", "React"],
    featured: false,
  },
];

export default projects;

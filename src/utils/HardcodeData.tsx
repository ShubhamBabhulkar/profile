import Bill_Gates from '../assets/Bill_Gates.jpg';
import Larry_Page from '../assets/Larry_Page.jpg';
import Linus_Torvalds from '../assets/Linus_Torvalds.jpeg';
import Steve_Jobs from '../assets/Steve_Jobs.jpg';

import {
  SiAngular,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMaterialdesign,
  SiGit,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";


export const SKILLS = [
  { name: "React JS", icon: <SiReact className="text-sky-400" /> },
  { name: "Angular", icon: <SiAngular className="text-red-600" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node JS", icon: <SiNodedotjs className="text-green-600" /> },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-800 dark:text-white" />,
  },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  {
    name: "Angular Material",
    icon: <SiMaterialdesign className="text-pink-500" />,
  },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
];

export const quotes = [
 {
    text: "Your most unhappy customers are your greatest source of learning.",
    author: "Bill Gates",
    image: Bill_Gates,
  },
  {
    text: "Don’t be afraid to fail. Be afraid not to try.",
    author: "Larry Page",
    image: Larry_Page,
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    image: Steve_Jobs,
  },
  {
    text: "Talk is cheap. Show me the code.",
    author: "Linus Torvalds",
    image: Linus_Torvalds,
  }
];

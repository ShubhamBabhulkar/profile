import profileImage from "../assets/profilePhoto.jpg";
import useTypingEffect from "../hooks/useTypingEffect";
import linkedin from "../assets/linkedin.png";
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import { motion } from "framer-motion";

const About = () => {
  const text = useTypingEffect();

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* Profile Image & Social Links */}
        <div className="col-span-1 flex flex-col items-center">
          <motion.img
            src={profileImage}
            alt="profileImage"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg hover:scale-105 transition-transform duration-500 mt-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          />

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <motion.a
              href="https://www.linkedin.com/in/shubhamnb/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="transition-transform"
            >
              <img src={linkedin} alt="linkedin" className="w-10 h-10" />
            </motion.a>

            <motion.a
              href="https://github.com/ShubhamBabhulkar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="transition-transform"
            >
              <img src={github} alt="github" className="w-18 h-10" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/shubham.babhulkar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="transition-transform"
            >
              <img src={facebook} alt="facebook" className="w-10 h-10" />
            </motion.a>
          </div>
        </div>

        {/* About Me Text */}
        <div className="col-span-2 mt-10 md:mt-20 space-y-6">
          <motion.h1
            className="text-3xl md:text-4xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            I am{" "}
            <span className="font-bold text-[#2daab8] animate-blink-caret">
              {text}
            </span>
            <span className="text-gray-400 ml-1">|</span>
          </motion.h1>

          <div className="w-full md:w-4/5">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              About Me
            </motion.h2>

            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I’m Shubham Babhulkar, a passionate MEAN / MERN Stack Developer
              based in Pune, India. With a background in Computer Science
              Engineering, I currently build impactful solutions with the amazing
              team at ITC Infotech.
            </motion.p>

            <motion.p
              className="text-gray-700 text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Explore my projects on GitHub, review my skills, or connect with me
              on LinkedIn. I’m always open to meaningful conversations, new
              opportunities, and collaboration.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

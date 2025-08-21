import { FaLinkedin, FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Connect = () => {
  return (
    <div className="py-16 px-6 flex justify-center items-center">
      <div className="max-w-3xl w-full text-center">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y:  0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-cursive text-gray-800 mb-4"
        >
          {/* Shubham <span className="text-[#2daab8]">Babhulkar</span> */}
        </motion.h1>

        {/* Connect Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl font-semibold text-gray-800 mb-8"
        >
          Let’s <span className="text-[#2daab8]">Connect</span>
        </motion.h2>

        {/* Sub Text */}
        <p className="text-gray-600 mb-10 text-lg">
          I’d love to connect with you! Whether it’s for collaboration, sharing ideas, or opportunities, feel free to reach out via email or social platforms.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8 flex-wrap">
          {/* Email */}
          <motion.a
            href="mailto:babhulkar.shubham03@gmail.com"
            whileHover={{ scale: 1.15 }}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-[#2daab8] transition"
          >
            <FaEnvelope className="text-[#2daab8] text-2xl" />
            <span className="text-gray-700 font-medium">babhulkar.shubham03@gmail.com</span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/shubhamnb/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-[#2daab8] transition"
          >
            <FaLinkedin className="text-[#0a66c2] text-2xl" />
            <span className="text-gray-700 font-medium">LinkedIn</span>
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/shubham.babhulkar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-[#2daab8] transition"
          >
            <FaFacebook className="text-[#1877F2] text-2xl" />
            <span className="text-gray-700 font-medium">Facebook</span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/ShubhamBabhulkar"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg border border-gray-200 hover:border-[#2daab8] transition"
          >
            <FaGithub className="text-gray-800 text-2xl" />
            <span className="text-gray-700 font-medium">GitHub</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Connect;

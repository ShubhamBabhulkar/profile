import { motion } from "framer-motion";
import { SKILLS } from "../utils/HardcodeData";


const Skills = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center py-16 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-white mb-12 text-center"
      >
        My <span className="text-[#40b0bd]">Skills</span>
      </motion.h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-[#40b0bd] transition"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <h2 className="text-lg font-semibold text-white">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills
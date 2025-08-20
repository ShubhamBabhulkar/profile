import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resume from '../assets/Shubham Babhulkar Resume.pdf';

const Resume = () => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Shubham_Babhulkar_Resume.pdf";
    link.click();
  };

  return (
   <div className="flex justify-center items-center min-h-[40vh]">
      <motion.button
        onClick={handleDownload}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-3 bg-[#40b0bd] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-[#40b0bd] cursor-pointer transition-all duration-300"
      >
        <FaDownload className="text-xl" />
        Download My Resume
      </motion.button>
    </div>
  )
}

export default Resume;
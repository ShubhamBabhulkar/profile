import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quotes } from "../utils/HardcodeData";

const InspiringQuotes = () => {
const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#e55c4c] py-16 px-6 flex justify-center items-center">
      <div className="max-w-4xl w-full text-center relative text-white">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="p-6"
          >
            <div className="flex justify-center mb-6">
              <img
                src={quotes[index]?.image}
                alt={quotes[index].author}
                className="w-24 h-24 md:w-35 md:h-35 rounded-full shadow-lg border-4 border-white object-cover"
              />
            </div>

            <p className="text-xl md:text-2xl font-medium italic leading-relaxed">
              “{quotes[index].text}”
            </p>

            <h3 className="mt-6 text-lg md:text-xl font-semibold">
              — {quotes[index].author}
            </h3>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-6 space-x-2">
          {quotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InspiringQuotes;
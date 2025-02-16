import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

export default function AboutCard() {
  const [activeCard, setActiveCard] = useState("summary");

  const cards = {
    summary: { title: "Summary", content: "Motivated Backend Developer with hands-on experience in Node.js, Express.js, MongoDB, and MySQL." },
    education: { title: "Education", content: "BCA from Samrat Prithvi Raj Chauhan Degree College (2021-2024)." },
    skills: { title: "Skills", content: "HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, MySQL, C++, Data Structures." }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Section Headers */}
      <div className="flex gap-4 mb-6">
        {Object.keys(cards).map((key) => (
          <button
            key={key}
            onClick={() => setActiveCard(key)}
            className={`px-4 py-2 rounded-md ${
              activeCard === key ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {cards[key].title}
          </button>
        ))}
      </div>

      {/* Swiper Component */}
      <div className="relative w-full max-w-md">
        <Swiper spaceBetween={20} slidesPerView={1} className="overflow-visible">
          {Object.keys(cards).map((key, index) => (
            <SwiperSlide key={key}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: activeCard === key ? 1 : 0, y: activeCard === key ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className={`absolute w-full p-6 rounded-lg shadow-lg ${
                  activeCard === key ? "z-10 bg-white" : "z-0 bg-gray-200"
                }`}
              >
                <h2 className="text-xl font-bold mb-2">{cards[key].title}</h2>
                <p className="text-gray-700">{cards[key].content}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import pointsData from "../../public/heuristic.json";

const Home = () => {
  const getRandomPoints = (category) => {
    const categoryPoints = pointsData[category];
    const numberOfPoints = Math.floor(Math.random() * (7 - 5 + 1)) + 5; // Random number between 5 and 7
    const shuffledPoints = categoryPoints.sort(() => 0.5 - Math.random());
    return shuffledPoints.slice(0, numberOfPoints);
  };

  // Predefined static styles for each point
  const staticStyles = [
    { top: "22%", left: "10%", transform: "rotate(2deg)" },
    { top: "16%", left: "55%", transform: "rotate(-4deg)" },
    { top: "40%", left: "10%", transform: "rotate(-6deg)" },
    { top: "38%", left: "55%", transform: "rotate(5deg)" },
    { top: "53%", left: "40%", transform: "rotate(6deg)" },
    { top: "68%", left: "15%", transform: "rotate(-4deg)" },
    { top: "75%", left: "65%", transform: "rotate(6deg)" },
    { top: "85%", left: "35%", transform: "rotate(-6deg)" },
  ];

  const [selectedPoints, setSelectedPoints] = useState([]);

  useEffect(() => {
    setSelectedPoints(getRandomPoints("coding")); // Change category as needed
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-24 bg-[#dbd9e3] relative">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-[20rem] h-[18rem] sm:w-[28rem] sm:h-[20rem] md:w-[34rem] md:h-[24rem] relative">
        <div className="bg-[#fe8777] rounded-2xl p-2 sm:p-3 sm:px-8 md:px-10 mb-4 text-center absolute top-0 -translate-y-6 -rotate-3 text-black z-20">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
            Heuristics Principles
          </h2>
        </div>
        {selectedPoints.map((point, index) => (
          <div
            key={index}
            className="flex flex-row mb-3 sm:mb-4 md:mb-5 p-1 sm:p-2 px-3 sm:px-5 bg-white text-black rounded-2xl absolute"
            style={{
              ...staticStyles[index % staticStyles.length],
              zIndex: 10, // Ensure it's below the title
            }}
          >
            {point}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

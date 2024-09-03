"use client";

import React, { useState, useEffect } from "react";
import pointsData from "../../public/heuristic.json";

const Home = () => {
  const getRandomPoints = (category) => {
    const categoryPoints = pointsData[category];
    const numberOfPoints = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
    const shuffledPoints = categoryPoints.sort(() => 0.5 - Math.random());
    return shuffledPoints.slice(0, numberOfPoints);
  };

  // Generate a random rotation between -6 and 6 degrees
  const getRandomRotation = () => {
    const rotationDegree = Math.floor(Math.random() * 13) - 6; // -6 to 6
    return `rotate(${rotationDegree}deg)`;
  };

  // Generate random positioning for scattering
  const getRandomPosition = () => {
    const top = Math.floor(Math.random() * 80) + 10; // Randomize between 10% to 90%
    const left = Math.floor(Math.random() * 80) + 10; // Randomize between 10% to 90%
    return { top: `${top}%`, left: `${left}%` };
  };

  const [selectedPoints, setSelectedPoints] = useState([]);

  useEffect(() => {
    setSelectedPoints(getRandomPoints("design")); // Change category as needed
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dbd9e3] relative">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-[34rem] h-[24rem] relative">
        <div className="bg-[#fe8777] rounded-2xl p-3 px-10 mb-4 text-center absolute top-0 -translate-y-1/2 -rotate-6 text-black z-20">
          <h2 className="text-2xl font-semibold">Heuristics Principles</h2>
        </div>
        {selectedPoints.map((point, index) => {
          const randomPosition = getRandomPosition();
          return (
            <div
              key={index}
              className={`flex flex-row mb-5 p-1 px-5 bg-white text-black rounded-2xl absolute`}
              style={{
                transform: getRandomRotation(),
                top: randomPosition.top, // Random top position
                left: randomPosition.left, // Random left position
                zIndex: 10, // Ensure it's below the title
              }}
            >
              {point}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;

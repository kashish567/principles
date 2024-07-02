"use client";

import React from "react";

const Home = () => {
  const points = [
    {
      text: "visibility of system status",
      className: "mt-2 -rotate-6 translate-y-1/2 -ml-10",
    },
    {
      text: "user control & freedom",
      className: "mt-6 rotate-3 translate-x-1/2",
    },
    {
      text: "consistency & standards",
      className: "rotate-3 -translate-x-1/2 -ml-28",
    },
    {
      text: "aesthetics and minimalist design",
      className: "rotate-2 translate-x-1/2 mt-6",
    },
    {
      text: "error prevention",
      className: "rotate-6 -translate-x-1/2 -mt-6 -ml-36",
    },
    {
      text: "recognition over recall",
      className: "-rotate-3 mt-6 -translate-x-1/2 -ml-8",
    },
    {
      text: "flexibility & efficiency of use",
      className: "-rotate-3 translate-x-1/2 -mt-3 -ml-8",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#dbd9e3]">
      <div className="bg-transparent rounded-3xl border-2 flex flex-col items-center justify-center border-black p-4 w-[40rem] h-[32rem] relative">
        <div className="bg-[#fe8777] rounded-2xl p-3 px-10 mb-4 text-center absolute top-0 -translate-y-1/2 -rotate-6 text-black">
          <h2 className="text-2xl font-semibold">Heuristics Principles</h2>
        </div>
        {points.map((point, index) => (
          <div
            key={index}
            className={`flex flex-row mb-5 p-1 px-5 bg-white text-black rounded-2xl ${point.className}`}
          >
            {point.text}
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;

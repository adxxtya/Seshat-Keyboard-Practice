import React, { useEffect, useState } from "react";

function Main() {
  const [randomTextOption, setRandomTextOption] = useState("");
  const [numberOfKeys, setNumberOfKeys] = useState("");
  const [start, setStart] = useState(false);
  const [play, setPlay] = useState(false);

  const textOptions = [
    "Enhance Your Typing Speed and Accuracy through Continuous Practice",
    "Immerse Yourself in the World of Keyboards and Unleash Your Potential",
    "Embark on a Typing Journey and Witness Remarkable Progress",
    "Master the Art of Typing and Conquer Every Keyboard Challenge",
    "Polish Your Typing Skills and Type with Unrivaled Efficiency",
    "Unlock the Secrets of Fast and Flawless Typing",
    "Become a Typing Virtuoso and Surpass Your Previous Limits",
    "Train Your Fingers to Dance across the Keyboard with Perfection",
    "Conquer the Keyboard with Lightning-Fast Speed and Precision",
    "Transform Your Typing Abilities and Leave a Lasting Impression",
    "Experience the Joy of Typing and Discover Your True Potential",
    "Challenge Yourself with Keyboard Exercises and Excel in Typing",
    "Unleash the Power of Your Keyboard and Achieve Typing Greatness",
    "Elevate Your Typing Proficiency and Excel in the Digital Era",
    "Unlock the Doors to Efficient Typing and Boost Your Productivity",
    "Build a Solid Foundation for Swift and Accurate Typing",
    "Navigate the Keyboard Like a Pro and Type with Confidence",
    "Embark on a Quest for Typing Mastery and Attain Greatness",
    "Dive into the Art of Typing and Witness Exponential Growth",
    "Hone Your Typing Skills and Conquer Any Keyboard Challenge",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    setRandomTextOption(textOptions[randomIndex]);
  }, []);

  return (
    <>
      {!start ? (
        <main className="bg-[#DECFC8] h-[94vh] flex flex-col justify-center items-center">
          <div className="h-[15vh] flex flex-col justify-center items-center">
            <div className="text-2xl h-full">{randomTextOption}</div>
            <div className="w-[100%] flex justify-center gap-8">
              <button
                className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-6 text-lg font-semibold
                    hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                onClick={() => setStart(true)}
              >
                Start
              </button>
              <button
                className="bg-[#D2C3BC] text-[#151518] border-4 border-[#D3C4BD] p-2 rounded-full px-6 text-lg font-semibold
                hover:bg-[#8B817D] hover:border-4 hover:border-[#8B817D] hover:text-[#fff]"
              >
                View Leaderboard
              </button>
            </div>
          </div>
        </main>
      ) : (
        <main className="bg-[#DECFC8] h-[94vh] flex flex-col justify-center items-center">
          <div className="h-[15vh] flex flex-col justify-center items-center">
            <div className="text-2xl h-full">{randomTextOption}</div>
            <div className="w-[100%] flex justify-center gap-8">
              <button
                className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                onClick={() => {
                  setNumberOfKeys("10");
                  setPlay(true);
                }}
              >
                10
              </button>
              <button
                className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                onClick={() => {
                  setNumberOfKeys("50");
                  setPlay(true);
                }}
              >
                50
              </button>
              <button
                className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                onClick={() => {
                  setNumberOfKeys("100");
                  setPlay(true);
                }}
              >
                100
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Main;

import React, { useEffect, useState } from "react";

function Main() {
  const [randomTextOption, setRandomTextOption] = useState("");
  const [numberOfKeys, setNumberOfKeys] = useState(0);
  const [start, setStart] = useState(false);
  const [play, setPlay] = useState(false);
  const [alphabet, setAlphabet] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [selectedButton, setSelectedButton] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [timeIntervals, setTimeIntervals] = useState<number[]>([]);

  const startGame = () => {
    if (numberOfKeys > 0) {
      const randomAlphabet = String.fromCharCode(
        65 + Math.floor(Math.random() * 26)
      );
      setAlphabet(randomAlphabet);
      setStartTime(Date.now());
      setTotalTime(0);
    } else {
      setPlay(false);
    }
  };

const handleKeyPress = (event: { key: string }) => {
  const interval = Date.now() - startTime;
  setEndTime(Date.now());
  setElapsedTime(interval);
  setNumberOfKeys(numberOfKeys - 1);
  setTimeIntervals([...timeIntervals, interval]);

  if (event.key.toUpperCase() === alphabet) {
    setIsCorrect(true);
    setIsWrong(false);
    setCorrectCount(correctCount + 1);
  } else {
    setIsCorrect(false);
    setIsWrong(true);
    setWrongCount(wrongCount + 1);
  }

  if (numberOfKeys === 1) {
    setTotalTime(Date.now() - startTime);
  }

  startGame();
};

  

  useEffect(() => {
    setCorrectCount(0);
    setTimeIntervals([]);
    setWrongCount(0);
  }, [play]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [alphabet]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    setRandomTextOption(textOptions[randomIndex]);
    if (play && numberOfKeys > 0) {
      startGame();
    }
  }, [play, numberOfKeys]);

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

  return (
    <>
      {start ? (
        play ? (
          <main className="bg-[#DECFC8] h-[92vh] flex justify-center items-center">
            <div className="flex flex-col w-[85%] justify-center items-center">
              <div className="text-8xl h-full">{alphabet}</div>
              <p>
                Correct Count: {correctCount}/{attempts}
              </p>
              <p>Wrong Count: {wrongCount}</p>
            </div>
           <div className="w-[15%] flex flex-col items-center min-h-full overflow-scroll bg-[#D3C4BD]">
  <p className="text-xl">Time Intervals:</p>
  {timeIntervals.map((interval, index) => (
    <div key={index}>
      <p className={isCorrect && index === timeIntervals.length - 1 ? 'text-green-500' : isWrong && index === timeIntervals.length - 1 ? 'text-red-500' : ''}>
        {(interval / 1000).toFixed(2)} sec
      </p>
    </div>
  ))}
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
                    setSelectedButton("10");
                    setNumberOfKeys(10);
                    setAttempts(10);
                    setPlay(true);
                  }}
                >
                  10
                </button>
                <button
                  className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                  onClick={() => {
                    setSelectedButton("50");
                    setNumberOfKeys(50);
                    setAttempts(50);
                    setPlay(true);
                  }}
                >
                  50
                </button>
                <button
                  className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                  onClick={() => {
                    setSelectedButton("100");
                    setAttempts(100);
                    setNumberOfKeys(100);
                    setPlay(true);
                  }}
                >
                  100
                </button>
                {/* <button
                  className="bg-[#151518] text-[#DECFC8] border-4 border-[#151518] p-2 rounded-full px-4 text-lg font-semibold
                hover:bg-[#DECFC8] hover:border-4 hover:border-[#151518] hover:text-[#151518]"
                  onClick={() => {
                    setSelectedButton("100");
                    setNumberOfKeys(100);
                    setPlay(true);
                  }}
                >
                  Custom
                </button> */}
              </div>
            </div>
          </main>
        )
      ) : (
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
      )}
    </>
  );
}

export default Main;

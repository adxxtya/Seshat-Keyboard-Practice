import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

function Navbar() {
  const iconStyle = {
    width: "36px",
    height: "36px",
  };

  return (
    <nav className="bg-[#DECFC8] h-[8vh] p-4 flex justify-between">
      <Link href="/" className="text-4xl font-semibold">Seshat</Link>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/adxxtya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin style={iconStyle} />
        </a>
        <a
          href="https://github.com/adxxtya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare style={iconStyle} />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

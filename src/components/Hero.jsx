import React from "react";

import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";
import Line from "./Line";

function Hero() {
  return (
    <div className="mx-[120px] m-auto">
      <div className="flex gap-5">
        <div>
          <Line />
          <FiFacebook className="mt-3 text-2xl text-blue-800 cursor-pointer " />
          <FiTwitter className="mt-3 text-2xl text-blue-800 cursor-pointer" />
          <FiLinkedin className="mt-3 text-2xl text-blue-800 cursor-pointer" />
        </div>
        <div className="flex gap-28">
          <div className="mt-20 ">
            <h1 className="text-xl font-heebo text-yellow-500">
              UI/UX Designer
            </h1>
            <h1 className="text-white font-heebo mt-3 text-3xl font-bold ">
              Bikal Shrestha
            </h1>
            <p className="text-white font-heebo w-[500px]">
              I’m an UX/UI Designer, who's always willing to learn and work
              across new technologies and designs. 💡✨.
            </p>
            <div className="mt-20 flex gap-16">
              <button className="bg-sky-600 h-10 w-28 rounded-full font-heebo hover:bg-sky-400">
                {" "}
                Hire me
              </button>
              <h1 className="text-white font-heebo mt-2 underline cursor-pointer">
                Download CV
              </h1>
            </div>
          </div>
          <div>
            <img
              className="h-[400px] w-[400px]"
              src="/assets/photo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

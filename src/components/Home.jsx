import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Education from "./Education";

function Home() {
  return (
    <div className="bg-neutral-900 w-full h-[580px] ">
      <div>
        <Navbar />
        <Hero />
        <Education />
      </div>
    </div>
  );
}

export default Home;

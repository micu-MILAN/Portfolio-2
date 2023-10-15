import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="mx-[120px] m-auto py-10 flex justify-between ">
        <div className="flex gap-5">
          <div className="text-white font-heebo cursor-pointer"> tatos.bik</div>
        </div>
        <ul className="flex gap-10">
          <li className="text-white font-heebo cursor-pointer"> Home</li>
          <li className="text-white font-heebo cursor-pointer"> Service</li>

          <li className="text-white font-heebo cursor-pointer"> About</li>
          <button className="bg-white w-24 h-8 rounded-sm">
            <li className=" font-heebo"> Contact</li>
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

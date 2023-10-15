import React from "react";
import { MdOutlineLightMode } from "react-icons/md";

function Education() {
  return (
    <div className="bg-stone-800 w-full h-[350px] mt-10">
      <div className="mx-[120px]">
        <div className=" m-auto py-10 ">
          <h1 className="text-3xl  font-heebo font-bold text-yellow-500">
            Education
          </h1>
        </div>
        <div className="flex gap-14">
          {/* BICTE */}
          <div className="bg-white h-[200px] w-[300px] rounded-lg  ">
            <div className="flex gap-3 ml-5 py-5">
              <div className="bg-cyan-100 h-8 w-8 rounded-md">
                <MdOutlineLightMode className="text-blue-800 text-2xl ml-1 mt-1" />
              </div>

              <h1 className="text-black font-Inter text-1xl font-bold mt-1">
                2018-Running
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="font-Inter text-2xl">BICTE</h1>
              <p className="font-Inter text-sm text-slate-400">
                Bachelor of Information Communication Technology
              </p>
              <p className="font-Inter text-sm text-slate-400">
                Aadikavi Bhanubhakta Campus, TU
              </p>
            </div>
          </div>
          {/* +2 */}
          <div className="bg-white h-[200px] w-[300px] rounded-lg">
            <div className="flex gap-3 ml-5 py-5">
              <div className="bg-cyan-100 h-8 w-8 rounded-md">
                <MdOutlineLightMode className="text-blue-800 text-2xl ml-1 mt-1" />
              </div>

              <h1 className="text-black font-Inter text-1xl font-bold mt-1">
                2016-2018
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="font-Inter text-2xl">
                Intermediate on Management
              </h1>
              <p className="font-Inter text-sm text-slate-400">
                Satyawati Secondary School, NEB{" "}
              </p>
              <p className="font-Inter text-sm text-slate-400">3.06 </p>
            </div>
          </div>
          {/* SLC */}
          <div className="bg-white h-[200px] w-[300px] rounded-lg">
            <div className="flex gap-3 ml-5  py-5">
              <div className="bg-cyan-100 h-8 w-8 rounded-md">
                <MdOutlineLightMode className="text-blue-800 text-2xl ml-1 mt-1" />
              </div>

              <h1 className="text-black font-Inter text-1xl font-bold mt-1">
                2005-2016{" "}
              </h1>
            </div>
            <div className="ml-5">
              <h1 className="font-Inter text-2xl">S.L.C, SLC Board of Nepal</h1>

              <p className="font-Inter text-sm text-slate-400">
                Gorkhkali Secondary Boarding School{" "}
              </p>
              <p className="font-Inter text-sm text-slate-400">3.4, A </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;

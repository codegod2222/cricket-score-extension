import React from "react";
import Title from "../Title";
import Home from "../Home";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MainWorkArea from "./MainWorkArea";
import { useLocation } from "react-router-dom";
import data from "../../Data/Score.json";

export default function ScoreCard() {
  const location = useLocation();
  console.log(location);
  const from = location.state.data;
  const [liveMatch, setliveMatch] = useState({});
  setliveMatch(from);
  console.log(liveMatch);

  return (
    <>
      {/* <div className="bg-white p-3 mt-6 rounded-md m-3">
        <div className="font-bold mt-2">
          {liveMatch.t1} vs {liveMatch.t2}
        </div>

        <div className="text-[15px] font-semibold text-center">
          {liveMatch.matchType}
        </div>
        <div className="flex justify-between mx-2">
          <div className="w-[40%] ">
            <div className="flex ">
              <div className=" mt-5">
                <div
                  className="w-[40px] h-[30px] bg-cover bg-center mr-[2px]"
                  style={{ backgroundImage: `url(${liveMatch.t1img})` }}
                ></div>
                <div className="text-[12px] text-left ml-2 font-semibold">
                  {liveMatch.t11}
                </div>
              </div>
              <div className="text-[15px] w-[60px] mt-5 font-medium text-[#404040] ">
                {liveMatch.t1s}
              </div>
            </div>-
          </div>
          <div className="w-[40%] ">
            <div className="flex justify-end ">
              <div className="text-[15px] mt-5 w-[60px] font-medium text-[#404040] ">
                {liveMatch.t2s.length === 0 ? (
                  <div>-</div>
                ) : (
                  <div>{liveMatch.t2s}</div>
                )}
              </div>
              <div className=" mt-5">
                <div
                  className="w-[40px] h-[30px] bg-cover bg-center mr-[2px]"
                  style={{ backgroundImage: `url(${liveMatch.t2img})` }}
                ></div>
                <div className="text-[12px] text-left ml-2 font-semibold">
                  {liveMatch.t22}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[15px] font-medium mt-8 text-[#4a4a4a] ">
          {liveMatch.status}
        </div>
      </div> */}
    </>
  );
}

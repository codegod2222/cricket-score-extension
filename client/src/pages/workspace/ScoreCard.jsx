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
  console.log(location.state.id);
  const id = location.state.id;
  // const [liveMatch, setliveMatch] = useState({});
  // setliveMatch(from);
  // console.log(liveMatch);


  const url =
    "https://api.cricapi.com/v1/cricScore?apikey=e83f1f64-aeaf-45d0-9f1f-4b1913679326";
  // "https://api.cricapi.com/v1/cricScore?apikey=049fa66d-c03b-4270-84c5-9169bdfda9c5";
  // "https://api.cricapi.com/v1/cricScore?apikey=e83f1f64-aeaf-45d0-9f1f-4b1913679326";

  const [Match, setMatch] = useState([]);

  useEffect(() => {
    axios
      .get(url, {
        AccessControlAllowMethods: "GET, DELETE, HEAD, OPTIONS",
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
        AccessControlAllowOrigin: "*",

        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response.data.data);
        setMatch(response.data.data);
        if (response.data.data !== undefined) {
          axios
            .post("http://localhost:3001/storedata/data", {
              data: response.data.data,
            })
            .then((res) => console.log("data send", res));
        } else {
          console.log(
            "j*******************************hfhbsabkbalk*******************"
          );
          axios
            .post("http://localhost:3001/storedata/data", {
              data: data.data,
            })
            .then((res) => console.log("data send", res));
        }
      });
  }, []);

  useEffect(() => {
    axios.post("http://localhost:3001/getdata/data", {}).then((res) =>
      // console.log("data send**************************************")
      // console.log(res.data[0].data);
      setstoreddata(res.data[0].data)
    );
  }, []);

  const [storeddata, setstoreddata] = useState([]);
  console.log(Match);
  console.log(
    "*************************************************************************************"
  );
  console.log(storeddata);
  var liveMatch;

  const getFilteredItem = (item) => {
    return item.filter((val) => {
      if (val.id === id) {
        return true;
      }
    });
  };
  console.log(typeof Match);
  console.log(Match);
  console.log(storeddata);

  if (Match !== undefined) {
    //   filter to get live matches from all matches
    console.log("hi");
    liveMatch = getFilteredItem(Match)[0];
  } else {
    console.log("hi*/*9846");
    liveMatch = getFilteredItem(data.data)[0];
  }

  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  // console.log(liveMatch.t1);
  // console.log(liveMatch.t1);





















if(liveMatch){

  return (
    <>
      <div className="bg-white p-3 mt-6 rounded-md m-3">
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
      </div>
    </>
  );
}
else{
  return<div className="bg-white p-3 mt-6 rounded-md m-3 font-bold text-center"><div>unable to fetch data</div><div>Please wait</div></div>
}
}

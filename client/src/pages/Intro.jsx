import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MatchCard from "./MatchCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "../Data/Score.json";

export default function Intro() {
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
      if (val.ms === "live") {
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
    liveMatch = getFilteredItem(Match);
  } else {
    console.log("hi*/*9846");
    liveMatch = getFilteredItem(data.data);
  }

  console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
  console.log(liveMatch);

  //filter to get live matches from all matches

  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 150;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 150;
  };

  return (
    <div className="relative">
      <div className="absolute top-[-25px] right-[10px]">
        <button onClick={scrollLeft} className="p-1 m-1 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-1 m-1 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <div
        id="content"
        className="flex overflow-scroll h-[150px] overflow-x-auto scroll-smooth  scrollbar-hide "
      >
        {liveMatch.map((value, key) => {
          return (
            <div>
              <MatchCard data={value} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

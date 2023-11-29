import React from "react";
import { Link } from "react-router-dom";

import "./styles/App.css";
import AvatarCreatorProject from "./routes/AvatarCreatorProject.tsx";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="title">
          <p className="titleContainer">
            <span id="titleSkin">Skin</span>
            <span id="titleSaga">Saga</span>
          </p>
        </div>
        <p id="titleText">
          Embark on an <br /> advanture of radiant skin
        </p>
        <Link to={"/avatar"}>Your Friend</Link>

        <svg
          preserveAspectRatio="none"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="paint0_linear_6_16"
              x1="0"
              y1="600"
              x2="600"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="25%" stopColor="#D0CEC1" />
              <stop offset="60%" stopColor="#EC3730" stopOpacity="1" />
              <stop offset="100%" stopColor="#EC3730" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="300" cy="300" r="280" fill="url(#paint0_linear_6_16)" />
        </svg>
      </div>
      {/* <AvatarCreatorProject /> */}
    </>
  );
};

export default App;

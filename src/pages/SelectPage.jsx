import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/SelectPage.css";

const SelectPage = () => {
  const image = [
    "./assets/rock.svg",
    "./assets/scissors.svg",
    "./assets/paper.svg",
  ];
  const navigate = useNavigate();

  function imageClick(index) {
    localStorage.setItem("SELECT", index);
    localStorage.setItem("RESULT", Math.floor(Math.random() * (2+1)));
    navigate("/result");
  }

  return (
    <div className="wrapper">
      <div className="box">
        <p className="title">어떤 것을 내시겠습니까?</p>
        <div className="list">
          {image.map((element, index) => (
            <img
              className="item"
              src={element}
              onClick={() => {
                imageClick(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectPage;

import { useNavigate } from "react-router-dom";
import "../style/pages/ResultPage.css";

  const image = [
    "./assets/rock.svg",
    "./assets/scissors.svg",
    "./assets/paper.svg",
  ];
  var result = "";

  var myNum, resultNum;

  function comResult() {
  myNum = localStorage.getItem("SELECT");
  resultNum = localStorage.getItem("RESULT");
    var randNum = 0;
    var rand;
    clearInterval(rand);
    rand = setInterval(() => {
      randNum < 2? randNum++ : randNum = 0;
      // setResult(image[randNum]);
      document.querySelector(".com-img").src = image[randNum];
    }, 100);

    setTimeout(() => {
      clearInterval(rand);
      document.querySelector(".com-img").src = image[resultNum];
    }, 3000);
  }

const ResultPage = () => {
  const navigate = useNavigate();

  function retryClick() {
    localStorage.clear();
    navigate("/");
  }

  function returnResult() {
      if (myNum == resultNum) {
        return "비겼습니다";
      } else {
        return myNum == 0
          ? resultNum == 1
            ? "이겼습니다"
            : "졌습니다"
          : myNum == 1
          ? resultNum == 2
            ? "이겼습니다"
            : "졌습니다"
          : myNum == 2
          ? resultNum == 0
            ? "이겼습니다"
            : "졌습니다"
          : undefined;
      }
  }
  
  comResult();

    return (
        <div className="wrapper">
          <div className="box">
            <p className="title">
              { returnResult() }
            </p>
            <div className="result-box">
              <div className="my">
                <p className="name">MY</p>
                <img src={image[myNum]} alt="" className="my-img" />
              </div>
              <hr />
              <div className="com">
                <p className="name">COM</p>
                <img src={result} alt="" className="com-img" />
              </div>
            </div>
          <p className="retry" onClick={retryClick}>다시하기</p>
        </div>
      </div>
    );
}

export default ResultPage;
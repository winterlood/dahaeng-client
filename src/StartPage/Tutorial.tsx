import React from "react";
import "./Tutorial.css";

function Tutorial() {
  return (
    <div className="tutorial">
      <div className="tutorial-header">
        <span className="tutorial-title">DA:HAENG</span>
        <div className="header-button">
          <button className="tutorial-btn">시작하기</button>
          <button className="tutorial-btn">로그인</button>
        </div>
      </div>
      <div className="tutorial-main">
        <span className="maintitle-top">너와 함께여서 다행이야</span>
        <span className="maintitle-bottom">모든 공유의 시작</span>
        <span>모든 계획과 기록을 손쉽게 공유해보세요.</span>
        <img className="tutorial-img" src="image/tutorial.png" />
      </div>
    </div>
  );
}

export default Tutorial;

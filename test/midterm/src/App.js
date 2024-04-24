import React from "react";
import image1 from "./apple.jpg";
import image2 from "./banana.jpg";
import image3 from "./orange.jpg";

function App() {
  return (
    <div>
      <h1>당신은 어떤 과일을 좋아하나요?</h1>
      <div>
        <button className="btn1">사과</button>
        <button className="btn2">오렌지</button>
        <button className="btn3">바나나</button>
      </div>
    </div>
  );
}

export default App;

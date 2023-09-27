import React, { useState } from "react";
// import 'aframe-ar';
import "./homepage.css";
import ARComponent from "./Component/ARComponent";

function Homepage() {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxSelection = (boxColor) => {
    setSelectedBox(boxColor);
  };
  return (
    <div className="App">
      <h1>Menu Chọn Box</h1>
      <button onClick={() => handleBoxSelection('red')}>Chọn Box Đỏ</button>
      <button onClick={() => handleBoxSelection('blue')}>Chọn Box Xanh</button>
      {/* Thêm các lựa chọn khác tùy ý */}
      
      <ARComponent selectedBox={selectedBox} />
    </div>
  );
}

export default Homepage;

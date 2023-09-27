import React from 'react';

function ARComponent({ selectedBox }) {
  return (
    <a-scene embedded arjs='trackingMethod: best; sourceType: webcam;'>
      {selectedBox === 'red' && (
        <a-box color="red" position="0 0 -1" />
      )}
      {selectedBox === 'blue' && (
        <a-box color="blue" position="0 0 -1" />
      )}
      {/* Thêm các lựa chọn hộp khác tùy ý */}
    </a-scene>
  );
}

export default ARComponent;

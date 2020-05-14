import React from "react";
import { useQRCode } from "react-hook-qrcode";

const App = () => {
  const [inputRef] = useQRCode({
    text: 'https://github.com/bunlong/react-hook-qrcode',
    options: {
      scale: 1,
      width: 300,
      // color: {
      //   dark:"#010599FF",
      //   light:"#FFBF60FF"
      // }
    }
  });
  
  return <canvas ref={inputRef}></canvas>;
};

export default App;

// import React from 'react';
// import { useQRCode } from 'react-hook-qrcode';

// const App = () => {
//   const [inputRef] = useQRCode({
//     text: 'https://github.com/bunlong/react-hook-qrcode',
//     options: {
//       type: 'image/jpeg',
//       quality: 0.3,
//       margin: 8,
//       scale: 1,
//       width: 200,
//       color: {
//         dark:"#010599FF",
//         light:"#FFBF60FF"
//       }
//     }
//   });
  
//   return <img ref={inputRef} />;
// };

// export default App;
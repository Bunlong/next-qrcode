import React from 'react';
import { useQRCode } from 'react-hook-qrcode';

function App() {
  const [inputRef] = useQRCode({
    text: 'https://github.com/bunlong/react-hook-qrcode',
    options: {
      level: 'M',
      margin: 7,
      scale: 1,
      width: 200,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF'
      }
    }
  });
  
  return <canvas ref={inputRef} />;
};

export default App;

// import React from 'react';
// import { useQRCode } from 'react-hook-qrcode';

// function App() {
//   const [inputRef] = useQRCode({
//     text: 'https://github.com/bunlong/react-hook-qrcode',
//     options: {
//       type: 'image/jpeg',
//       quality: 0.3,
//       level: 'M',
//       margin: 3,
//       scale: 4,
//       width: 200,
//       color: {
//         dark: '#010599FF',
//         light: '#FFBF60FF'
//       }
//     }
//   });
  
//   return <img ref={inputRef} />;
// };

// export default App;

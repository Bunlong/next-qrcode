import React from "react";
import { useQRCode } from "react-hook-qrcode";

function Home() {
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
}

export default Home;

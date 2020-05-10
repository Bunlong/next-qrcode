import React from 'react';
const QRCodeLib = require('qr.js/lib/QRCode');

interface Image {
  src: string,
  x: number
  y: number
  height: number
  width: number
  excavate: boolean
}

interface Props {
  value: string
  render: string
  size: number
  bgColor: string
  fgColor: string
  level: string
  margin: boolean
  imageOptions?: Image
}

function QRCodeCanvas() {

}

function QRCodeSVG() {

}

export function QRCode({
  ...props
}: Props): React.ReactNode { 
  
  console.log(props);
  
  return (
    <>
      Hello
    </>
  )
}

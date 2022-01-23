import React from 'react';
// const QRCode = require('qrcode');

export interface Options {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

export interface Colors {
  dark?: string;
  light?: string;
}

export interface Props {
  text: string;
  options?: Options;
}

function useImageComponent() {
  const ImageComponent = ({
    text,
    options,
  }: Props) => {
    console.log('=====================');
    console.log(text);
    console.log(options);
    console.log('=====================');

    return (
      <>
        {'Image'}
      </>
    );
  };

  const Image = React.useMemo(() => ImageComponent, []);

  return Image;
}

function useCanvasComponent() {
  const CanvasComponent = ({
    text,
    options,
  }: Props) => {
    return (
      <>
        {'Canvas'}
      </>
    );
  };

  const Canvas = React.useMemo(() => CanvasComponent, []);

  return Canvas;
}

export function useQRCode() {
  const Image = useImageComponent();
  const Canvas = useCanvasComponent();

  return {
    Image,
    Canvas,
  };
}

import React from 'react';
const QRCode = require('qrcode');

export interface Colors {
  dark?: string;
  light?: string;
}

export interface Options {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

export interface IQRCode {
  text: string;
  options?: Options;
}

function useImageComponent() {
  const ImageComponent = <T extends HTMLImageElement>({
    text,
    options,
  }: IQRCode) => {
    const inputRef = React.useRef<T>(null);

    React.useEffect(
      function () {
        if (inputRef && inputRef.current) {
          QRCode.toDataURL(text, options, function (error: any, url: string) {
            if (error) {
              throw error;
            }
            if (inputRef.current instanceof HTMLImageElement) {
              inputRef.current.src = url;
            }
          });
        }
      },
      [text, options, inputRef],
    );

    return <img ref={inputRef} />;
  };

  const Image = React.useMemo(() => ImageComponent, []);

  return Image;
}

function useCanvasComponent() {
  const CanvasComponent = <T extends HTMLCanvasElement>({
    text,
    options,
  }: IQRCode) => {
    const inputRef = React.useRef<T>(null);

    React.useEffect(
      function () {
        if (inputRef && inputRef.current) {
          QRCode.toCanvas(
            inputRef.current,
            text,
            options,
            function (error: Error) {
              if (error) {
                throw error;
              }
            },
          );
        }
      },
      [text, options, inputRef],
    );

    return <canvas ref={inputRef} />;
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

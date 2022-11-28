import React from 'react';
const QRCode = require('qrcode');

export interface Colors {
  dark?: string;
  light?: string;
}

export interface QRCodeOptions {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

export interface LogoOptions {
  width?: number;
  x?: number;
  y?: number;
}

export interface Logo {
  src: string;
  options?: LogoOptions;
}

export interface IQRCode {
  text: string;
  options?: QRCodeOptions;
  logo?: Logo;
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
    logo,
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

          if (logo) {
            const crt = inputRef.current;
            const ctx = crt.getContext('2d');
            if (ctx) {
              const img = new Image();
              img.src = logo.src;
              const logoWidth = logo?.options?.width || 30;
              if (logo?.options?.x && logo?.options?.y) {
                const x = logo?.options?.x;
                const y = logo?.options?.y;
                img.onload = function () {
                  ctx.drawImage(img, x, y, logoWidth, logoWidth);
                };
              } else if (!logo?.options?.x || !logo?.options?.y) {
                let margin = options?.margin;
                margin = !margin ? (margin === 0 ? 0 : 32) : margin * 8;
                const width = options?.width || 116 + margin;
                const center = (width - logoWidth) / 2;
                img.onload = function () {
                  ctx.drawImage(img, center, center, logoWidth, logoWidth);
                };
              }
            }
          }
        }
      },
      [inputRef, text, options, logo],
    );

    return <canvas ref={inputRef} />;
  };

  const Canvas = React.useMemo(() => CanvasComponent, []);

  return Canvas;
}

function useSVGComponent() {
  const SVGComponent = <T extends HTMLDivElement>({
    text,
    options,
  }: IQRCode) => {
    const inputRef = React.useRef<T>(null);

    React.useEffect(() => {
      QRCode.toString(text, options, function (error: Error, svg: string) {
        if (error) {
          throw error;
        }
        if (inputRef.current instanceof HTMLDivElement) {
          inputRef.current.innerHTML = svg;
        }
      });
    }, [text, options]);

    return <div ref={inputRef} />;
  };

  const SVG = React.useMemo(() => SVGComponent, []);

  return SVG;
}

export function useQRCode() {
  const Image = useImageComponent();
  const Canvas = useCanvasComponent();
  const SVG = useSVGComponent();

  return {
    Image,
    Canvas,
    SVG,
  };
}

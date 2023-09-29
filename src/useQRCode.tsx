import React from 'react';
const QRCode = require('qrcode');

export interface Colors {
  /** Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than color.light. */
  dark?: string;
  /** Color of light module. Value must be in hex format (RGBA). */
  light?: string;
}

/**
 * @deprecated This will be removed in the future and is replaced with `QRCodeOptionsCanvas`, `QRCodeOptionsSVG`, and `QRCodeOptionsImage`.
 */
export interface QRCodeOptions {
  type?: string;
  quality?: number;
  errorCorrectionLevel?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

interface QRCodeOptionsCommon {
  /** Define how much wide the quiet zone should be. */
  margin?: number;
  /** Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over scale. */
  width?: number;
  color?: Colors;
}

export interface QRCodeOptionsCanvas extends QRCodeOptionsCommon {
  /** Correction level. Possible values are low, medium, quartile, high or L, M, Q, H. */
  errorCorrectionLevel?:
    | 'low'
    | 'medium'
    | 'quartile'
    | 'high'
    | 'L'
    | 'M'
    | 'Q'
    | 'H';
  /** Scale factor. A value of 1 means 1px per modules (black dots). */
  scale?: number;
}

export interface QRCodeOptionsSVG extends QRCodeOptionsCommon {}

export interface QRCodeOptionsImage extends QRCodeOptionsCommon {
  type?: 'image/png' | 'image/jpeg' | 'image/webp';
  quality?: number;
  /** Correction level. Possible values are low, medium, quartile, high or L, M, Q, H. */
  errorCorrectionLevel?:
    | 'low'
    | 'medium'
    | 'quartile'
    | 'high'
    | 'L'
    | 'M'
    | 'Q'
    | 'H';
  /** Scale factor. A value of 1 means 1px per modules (black dots). */
  scale?: number;
}

export interface LogoOptions {
  /** Logo dimension. */
  width?: number;
  /** If none or undefined, will center. */
  x?: number;
  /** If none or undefined, will center. */
  y?: number;
}

export interface Logo {
  /** The path to the image. */
  src: string;
  /** Logo options. */
  options?: LogoOptions;
}

/**
 * @deprecated This will be removed in the future and is replaced with `CanvasQRCode`, `SVGQRCode`, and `ImageQRCode`.
 */
export interface IQRCode {
  text: string;
  options?: QRCodeOptions;
  logo?: Logo;
}

interface IQRCodeCommon {
  /** Text/URL to encode. */
  text: string;
}

export interface CanvasQRCode extends IQRCodeCommon {
  /** QR code logo. */
  logo?: Logo;
  /** QR code options. */
  options?: QRCodeOptionsCanvas;
}

export interface SVGQRCode extends IQRCodeCommon {
  /** QR code options. */
  options?: QRCodeOptionsSVG;
}

export interface ImageQRCode extends IQRCodeCommon {
  /** QR code options. */
  options?: QRCodeOptionsImage;
}

function useImageComponent() {
  const ImageComponent = <T extends HTMLImageElement>({
    text,
    options,
  }: ImageQRCode) => {
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

    return <img ref={inputRef} alt={text} />;
  };

  const Image = React.useMemo(() => ImageComponent, []);

  return Image;
}

function useCanvasComponent() {
  const CanvasComponent = <T extends HTMLCanvasElement>({
    text,
    options,
    logo,
  }: CanvasQRCode) => {
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
              if (
                logo?.options?.hasOwnProperty('x') &&
                logo?.options?.hasOwnProperty('y')
              ) {
                const x = logo?.options?.x || 0;
                const y = logo?.options?.y || 0;
                img.onload = function () {
                  ctx.drawImage(img, x, y, logoWidth, logoWidth);
                };
              }
              if (
                !logo?.options?.hasOwnProperty('x') ||
                !logo?.options?.hasOwnProperty('y') ||
                logo?.options?.x === undefined ||
                logo?.options?.y === undefined
              ) {
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
  }: SVGQRCode) => {
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

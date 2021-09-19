import React from 'react';
const QRCode = require('qrcode');

export interface Props {
  text: string;
  options?: Options;
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

export interface Colors {
  dark?: string;
  light?: string;
}

export function useQRCode<T extends HTMLCanvasElement | HTMLImageElement>({
  ...props
}: Props): any {
  // : React.RefObject<T>[] {
  const inputRef = React.useRef<T>(null);
  const { text, options } = props;

  React.useEffect(
    function () {
      if (inputRef && inputRef.current) {
        if (inputRef.current instanceof HTMLCanvasElement) {
          QRCode.toCanvas(
            inputRef.current,
            text,
            options,
            function (error: any) {
              if (error) {
                throw error;
              }
            }
          );
        } else if (inputRef.current instanceof HTMLImageElement) {
          QRCode.toDataURL(text, options, function (error: any, url: string) {
            if (error) {
              throw error;
            }
            if (inputRef.current instanceof HTMLImageElement) {
              inputRef.current.src = url;
            }
          });
        }
      }
    },
    [text, options, inputRef.current]
  );

  return { inputRef };
}

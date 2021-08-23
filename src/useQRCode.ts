import React, { useRef, useEffect } from 'react';
const QRCode = require('qrcode');

export interface ReactQRCodeProps {
  text: string;
  options?: ReactQRCodeOptions;
}

export interface ReactQRCodeOptions {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: ReactQRCodeColors;
}

export interface ReactQRCodeColors {
  dark?: string;
  light?: string;
}

export function useQRCode<T extends HTMLCanvasElement | HTMLImageElement>({
  ...props
}: ReactQRCodeProps): React.RefObject<T>[] {
  const inputRef = useRef<T>(null);
  const { text, options } = props;

  useEffect(
    function () {
      if (inputRef.current) {
        if (inputRef.current instanceof HTMLCanvasElement) {
          QRCode.toCanvas(
            inputRef.current,
            text,
            options,
            function (error: any) {
              if (error) {
                throw error;
              }
            },
          );
        } else if (inputRef.current instanceof HTMLImageElement) {
          QRCode.toDataURL(text, options, function (error: any, url: any) {
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
    [text, options, inputRef.current],
  );

  return [inputRef];
}

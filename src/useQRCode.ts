import { useRef, useEffect } from 'react';
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

export function useQRCode({
  ...props
}: ReactQRCodeProps): React.MutableRefObject<undefined>[] {
  const inputRef = useRef();
  const { text, options } = props;

  useEffect(
    function () {
      if (inputRef) {
        const ref = inputRef as any;
        if (ref.current.tagName === 'CANVAS') {
          QRCode.toCanvas(ref.current, text, options, function (error: any) {
            if (error) {
              throw error;
            }
          });
        } else {
          QRCode.toDataURL(text, options, function (error: any, url: any) {
            if (error) {
              throw error;
            }
            ref.current.src = url;
          });
        }
      }
    },
    [text, options],
  );

  return [inputRef];
}

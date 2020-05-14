import { useRef, useEffect } from 'react';
const QRCode = require('qrcode');

interface Colors {
  dark?: string
  light?: string
}

interface Options {
  margin?: number
  scale?: number
  width?: number

  type?: string
  quality?: number
  color?: Colors
  level?: string
}

interface Props {
  text: string
  options?: Options
}

export function useQRCode({ ...props }: Props): React.MutableRefObject<undefined>[] {
  const inputRef = useRef();
  const { text, options } = props;
  
  useEffect(function () {
    if (inputRef) {
      const ref = inputRef as any;
      if (ref.current.tagName === 'CANVAS') {
        QRCode.toCanvas(ref.current, text, options, function (error: any) {
          if (error) throw error;
        });
      } else {
        QRCode.toDataURL(text, options, function (error :any, url :any) {
          if (error) throw error;
          ref.current.src = url;
        });
      }
    }
  }, [text, options]);

  return [inputRef];
}

// https://github.com/soldair/node-qrcode#gs1-qr-codes
// https://github.com/zpao/qrcode.react

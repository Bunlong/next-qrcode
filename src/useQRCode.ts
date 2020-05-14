import { useRef, useEffect } from 'react';
const QRCode = require('qrcode');

interface Props {
  text: string;
  options?: Options;
}

interface Options {
  type?: string;
  quality?: number;
  level?: string;
  margin?: number;
  scale?: number;
  width?: number;
  color?: Colors;
}

interface Colors {
  dark?: string;
  light?: string;
}

export function useQRCode({
  ...props
}: Props): React.MutableRefObject<undefined>[] {
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

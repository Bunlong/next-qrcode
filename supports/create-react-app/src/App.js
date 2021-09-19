import logo from './logo.svg';
import './App.css';

import { useQRCode } from 'next-qrcode';

function App() {
  const { inputRef } = useQRCode({
    text: 'https://github.com/bunlong/next-qrcode',
    options: {
      type: 'image/jpeg',
      quality: 0.3,
      level: 'M',
      margin: 3,
      scale: 4,
      width: 200,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF',
      },
    },
  });

  return <img ref={inputRef} />;
}

export default App;

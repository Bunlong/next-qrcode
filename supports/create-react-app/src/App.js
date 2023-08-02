import { useQRCode } from 'next-qrcode';

function App() {
  const { SVG } = useQRCode();

  return (
    <div>
      <SVG
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          type: 'image/jpeg',
          quality: 0.3,
          errorCorrectionLevel: 'M',
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: '#010599FF',
            light: '#FFBF60FF',
          },
        }}
      />
    </div>
  );
}

export default App;

import type { NextPage } from 'next'
import { useQRCode } from 'next-qrcode'

const Home: NextPage = () => {
  const { Canvas, Image, SVG } = useQRCode()

  return (
    <>
      <Canvas
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          level: 'M',
          margin: 1,
          scale: 4,
          width: 200,
          color: {
            dark: '#010599FF',
            light: '#FFBF60FF',
          },
        }}
        logo={{
          src: 'https://next-qrcode.js.org/github.png',
          options: {
            width: 50,
            // x: 0,
            // y: 0,
            x: undefined,
            y: undefined,
          }
        }}
      />

      {/* <Image
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
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
        }}
      /> */}

      {/* <SVG
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          margin: 3,
          width: 200,
          color: {
            dark: '#010599FF',
            light: '#FFBF60FF',
          },
        }}
      /> */}
    </>
  )
}

export default Home

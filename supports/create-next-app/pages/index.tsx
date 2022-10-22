import type { NextPage } from 'next'
import { useQRCode } from 'next-qrcode'

const Home: NextPage = () => {
  const { Canvas, Image } = useQRCode()

  return (
    <>
      {/* <Canvas
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
            // light: '#FFBF60FF',
          },
        }}
      /> */}

      <Image
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
      />
    </>
  )
}

export default Home

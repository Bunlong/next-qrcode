import type { NextPage } from 'next'
import { useQRCode } from 'next-qrcode'

const Home: NextPage = () => {
  const { Canvas, Image } = useQRCode()

  return (
    <>
      <Canvas
        text={'https://github.com/bunlong/next-qrcode'}
        options={{
          level: 'M',
          margin: 10,
          scale: 4,
          width: 400,
          // color: {
          //   dark: '#010599FF',
          //   light: '#FFBF60FF',
          // },
        }}
        logo={{
          src: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
          options: {
            width: 50,
            // x: 2,
            // y: 2,
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
    </>
  )
}

export default Home

// logo={
//   src: '',
//   options: {
//     x: '',
//     y: '',
//     width: 100,
//   },
// }

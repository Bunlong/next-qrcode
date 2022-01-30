import type { NextPage } from 'next'
import { useQRCode } from 'next-qrcode';

const Home: NextPage = () => {
  const { Image, Canvas } = useQRCode();

  return (
    <>
      <Image
        text='Hello'
      />
      <Canvas
        text='Hello'
      />
    </>
  )
}

export default Home

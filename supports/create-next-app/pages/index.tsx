import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useQRCode } from 'next-qrcode';

const Home: NextPage = () => {
  const { Image, Canvas } = useQRCode<HTMLCanvasElement>({
    text: 'https://github.com/bunlong/next-qrcode',
    options: {
      level: 'M',
      margin: 7,
      scale: 1,
      width: 200,
      color: {
        dark: '#010599FF',
        light: '#FFBF60FF',
      },
    },
  });

  return (
    <div className={styles.container}>
      <Image text='' />
      <Canvas text='' />
    </div>
  )
}

export default Home

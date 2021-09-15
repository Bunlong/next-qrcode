import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useQRCode } from 'next-qrcode';

export default function Home() {
  const {inputRef} = useQRCode({
    text: 'https://github.com/bunlong/react-qrcodes',
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
      <canvas ref={inputRef} />
    </div>
  )
}

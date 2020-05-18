import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultKeywords = '';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <link href="./static/style.css" rel="stylesheet" />
    <link href="./static/prism.css" rel="stylesheet" />
    <script src="./static/prism.js"></script>
    <meta name="description" content={props.description || defaultDescription} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content={props.keywords || defaultKeywords} />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />
    
    <meta property='og:url' content='https://react-hook-qrcode.github.io' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='react-hook-qrcode' />
    <meta property='og:description' content='React hooks for generating QR code.' />
    <meta property='og:image' content='/static/react-hook-qrcode.png' />

    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@bunlongvan' />
    <meta name='twitter:creator' content='@bunlongvan' />
    <meta name='twitter:title' content='create-next-app' />
    <meta name='twitter:description' content='React hooks for generating QR code.' />
    <meta name='twitter:image' content='https://react-hook-qrcode.github.io/static/react-hook-qrcode.png' />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  keywords: string,
  url: string,
  ogImage: string
};

export default Head;

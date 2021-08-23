# react-qrcodes

React hooks for generating QR code.

[![NPM](https://img.shields.io/npm/v/react-qrcodes.svg)](https://www.npmjs.com/package/react-qrcodes) [![downloads](https://img.shields.io/npm/dm/react-qrcodes.svg?style=flat-square)](https://www.npmjs.com/package/react-qrcodes) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-qrcodes) [![Build Status](https://api.travis-ci.com/Bunlong/react-qrcodes.svg?branch=master)](https://travis-ci.com/Bunlong/react-qrcodes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Render as Canvas & Image
* Support Numeric, Alphanumeric, Kanji and Byte mode
* Support Japanese, Chinese, Greek and Cyrillic characters
* Support multibyte characters (like emojis smile)

[Live Demo](https://react-hook-qrcode.github.io)

## 🔧 Install

react-qrcodes is available on npm. It can be installed with the following command:

```js
npm install react-qrcodes --save
```

react-qrcodes is available on yarn as well. It can be installed with the following command:

```js
yarn add react-qrcodes
```

## 💡 Canvas

### usage

```js
import React from 'react';
import { useQRCode } from 'react-qrcodes';

function App() {
  const [inputRef] = useQRCode<HTMLCanvasElement>({
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
  
  return <canvas ref={inputRef} />;
};

export default App;
```

### parameters

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>string</td>
      <td>✔️</td>
      <td>Text/URL to encode.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>options</td>
      <td>❌</td>
      <td>QR code options.</td>
    </tr>
  </tbody>
</table>

### options

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>level</td>
      <td>string</td>
      <td><code>M</code></td>
      <td>❌</td>
      <td>Correction level. Possible values are <code>low</code>, <code>medium</code>, <code>quartile</code>, <code>high</code> or <code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code>.</td>
    </tr>
    <tr>
      <td>margin</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Define how much wide the quiet zone should be.</td>
    </tr>
    <tr>
      <td>scale</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Scale factor. A value of <code>1</code> means 1px per modules (black dots).</td>
    </tr>
    <tr>
      <td>width</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over <code>scale</code>.</td>
    </tr>
    <tr>
      <td>color.dark</td>
      <td>string</td>
      <td><code>#000000ff</code></td>
      <td>❌</td>
      <td>Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than <code>color.light</code>.</td>
    </tr>
    <tr>
      <td>color.light</td>
      <td>string</td>
      <td><code>#ffffffff</code></td>
      <td>❌</td>
      <td>Color of light module. Value must be in hex format (RGBA).</td>
    </tr>
  </tbody>
</table>

## 💡 Image

### usage

```js
import React from 'react';
import { useQRCode } from 'react-qrcodes';

function App() {
  const [inputRef] = useQRCode<HTMLImageElement>({
    text: 'https://github.com/bunlong/react-qrcodes',
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
};

export default App;
```

### parameters

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>string</td>
      <td>✔️</td>
      <td>Text/URL to encode.</td>
    </tr>
    <tr>
      <td>options</td>
      <td>object</td>
      <td>❌</td>
      <td>QR code options</td>
    </tr>
  </tbody>
</table>

### options

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>string (<code>image/png</code>, <code>image/jpeg</code>, <code>image/webp</code>)</td>
      <td><code>image/png</code></td>
      <td>❌</td>
      <td>Image format.</td>
    </tr>
    <tr>
      <td>quality</td>
      <td>number</td>
      <td><code>0.92</code></td>
      <td>❌</td>
      <td>A Number between <code>0</code> and <code>1</code> indicating image quality if the type is <code>image/jpeg</code> or <code>image/webp</code>.</td>
    </tr>
    <tr>
      <td>level</td>
      <td>string</td>
      <td><code>M</code></td>
      <td>❌</td>
      <td>Correction level. Possible values are <code>low</code>, <code>medium</code>, <code>quartile</code>, <code>high</code> or <code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code>.</td>
    </tr>
    <tr>
      <td>margin</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Define how much wide the quiet zone should be.</td>
    </tr>
    <tr>
      <td>scale</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Scale factor. A value of <code>1</code> means 1px per modules (black dots).</td>
    </tr>
    <tr>
      <td>width</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>❌</td>
      <td>Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over <code>scale</code>.</td>
    </tr>
    <tr>
      <td>color.dark</td>
      <td>string</td>
      <td><code>#000000ff</code></td>
      <td>❌</td>
      <td>Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than <code>color.light</code>.</td>
    </tr>
    <tr>
      <td>color.light</td>
      <td>string</td>
      <td><code>#ffffffff</code></td>
      <td>❌</td>
      <td>Color of light module. Value must be in hex format (RGBA).</td>
    </tr>
  </tbody>
</table>

## 💖 Wrap Up

If you think any of the `react-qrcodes` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `react-qrcodes` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

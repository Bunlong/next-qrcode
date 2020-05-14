# react-hook-qrcode

React hooks for generating QR code.

[![NPM](https://img.shields.io/npm/v/react-hook-qrcode.svg)](https://www.npmjs.com/package/react-hook-qrcode) [![downloads](https://img.shields.io/npm/dm/react-hook-qrcode.svg?style=flat-square)](https://www.npmjs.com/package/react-hook-qrcode) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-hook-qrcode) [![Build Status](https://api.travis-ci.com/Bunlong/react-hook-qrcode.svg?branch=master)](https://travis-ci.com/Bunlong/react-hook-qrcode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Support Canvas & Image
* Support Numeric, Alphanumeric, Kanji and Byte mode
* Support Japanese, Chinese, Greek and Cyrillic characters
* Support multibyte characters (like emojis smile)

## 🔧 Install

react-hook-qrcode is available on npm. It can be installed with the following command:

```
npm install --save react-hook-qrcode
```

react-hook-qrcode is available on yarn as well. It can be installed with the following command:

```
yarn add react-hook-qrcode
```

## 💡 Canvas

**Usage**:

```
import React from "react";
import { useQRCode } from "react-hook-qrcode";

const App = () => {
  const [inputRef] = useQRCode({
    text: 'https://github.com/bunlong/react-hook-qrcode',
    options: {
      margin: 7,
      scale: 1,
      width: 200,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }
  });
  
  return <canvas ref={inputRef} />;
};

export default App;
```

### text

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>string</td>
      <td>Text/URL to encode.</td>
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
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>level</td>
      <td>string</td>
      <td><code>M</code></td>
      <td>Correction level. Possible values are <code>low</code>, <code>medium</code>, <code>quartile</code>, <code>high</code> or <code>L</code>, <code>M</code>, <code>Q</code>, <code>H</code>.</td>
    </tr>
    <tr>
      <td>margin</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>Define how much wide the quiet zone should be.</td>
    </tr>
    <tr>
      <td>scale</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>Scale factor. A value of <code>1</code> means 1px per modules (black dots).</td>
    </tr>
    <tr>
      <td>width</td>
      <td>number</td>
      <td><code>4</code></td>
      <td>Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over <code>scale</code>.</td>
    </tr>
    <tr>
      <td>color.dark</td>
      <td>string</td>
      <td><code>#000000ff</code></td>
      <td>Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than <code>color.light</code>.</td>
    </tr>
    <tr>
      <td>color.light</td>
      <td>string</td>
      <td><code>#ffffffff</code></td>
      <td>Color of light module. Value must be in hex format (RGBA).</td>
    </tr>
  </tbody>
</table>

## 💡 Image

Usage:

```
import React from 'react';
import { useQRCode } from 'react-hook-qrcode';

const App = () => {
  const [inputRef] = useQRCode({
    text: 'https://github.com/bunlong/react-hook-qrcode',
    options: {
      type: 'image/jpeg',
      quality: 0.3,
      margin: 3,
      width: 7,
      color: {
        dark:"#010599FF",
        light:"#FFBF60FF"
      }
    }
  });
  
  return <img ref={inputRef} />;
};

export default App;
```

### text

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>text</td>
      <td>string</td>
      <td>Text/URL to encode.</td>
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
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>string (`image/png`, `image/jpeg`, `image/webp`)</td>
      <td>`image/png`</td>
      <td>Image format.</td>
    </tr>
    <tr>
      <td>quality</td>
      <td>number</td>
      <td>`0.92`</td>
      <td>A Number between `0` and `1` indicating image quality if the type is `image/jpeg` or `image/webp`.</td>
    </tr>
    <tr>
      <td>level</td>
      <td>string</td>
      <td>`M`</td>
      <td>Correction level. Possible values are `low`, `medium`, `quartile`, `high` or `L`, `M`, `Q`, `H`.</td>
    </tr>
    <tr>
      <td>margin</td>
      <td>number</td>
      <td>`4`</td>
      <td>Define how much wide the quiet zone should be.</td>
    </tr>
    <tr>
      <td>scale</td>
      <td>number</td>
      <td>`4`</td>
      <td>Scale factor. A value of `1` means 1px per modules (black dots).</td>
    </tr>
    <tr>
      <td>width</td>
      <td>number</td>
      <td>`4`</td>
      <td>Forces a specific width for the output image. If width is too small to contain the qr symbol, this option will be ignored. Takes precedence over `scale`.</td>
    </tr>
    <tr>
      <td>color.dark</td>
      <td>string</td>
      <td>`#000000ff`</td>
      <td>Color of dark module. Value must be in hex format (RGBA). Note: dark color should always be darker than `color.light`.</td>
    </tr>
    <tr>
      <td>color.light</td>
      <td>string</td>
      <td>`#ffffffff`</td>
      <td>Color of light module. Value must be in hex format (RGBA).</td>
    </tr>
  </tbody>
</table>

## 💖 Wrap Up

If you think any of the `react-hook-qrcode` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `react-hook-qrcode` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

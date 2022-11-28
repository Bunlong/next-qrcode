# next-qrcode

React hooks for generating QR code for your next React apps.

[![downloads](https://img.shields.io/npm/dm/next-qrcode.svg?label=monthly%20downloads)](https://www.npmjs.com/package/next-qrcode) [![downloads](https://img.shields.io/npm/dt/next-qrcode.svg?label=total%20downloads)](https://www.npmjs.com/package/next-qrcode)

[![NPM](https://img.shields.io/npm/v/next-qrcode.svg)](https://www.npmjs.com/package/next-qrcode) ![npm bundle size](https://img.shields.io/bundlephobia/min/next-qrcode) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* Render Canvas, SVG and Image
* Support Numeric, Alphanumeric, Kanji and Byte mode
* Support Japanese, Chinese, Greek and Cyrillic characters
* Support multibyte characters (like emojis smile)

[Live Demo](https://next-qrcode.js.org)

## 🔧 Install

next-qrcode is available on npm. It can be installed with the following command:

```js
npm install next-qrcode --save
```

next-qrcode is available on yarn as well. It can be installed with the following command:

```js
yarn add next-qrcode
```

## 💡 Canvas

### Usage

```js
import React from 'react';
import { useQRCode } from 'next-qrcode';

function App() {
  const { Canvas } = useQRCode();

  return (
    <Canvas
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
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
  );
}

export default App;
```

### Canvas props

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
    <tr>
      <td>logo</td>
      <td>logo</td>
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

### logo

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
      <td>src</td>
      <td>string</td>
      <td>✔️</td>
      <td>The path to the image</td>
    </tr>
    <tr>
      <td>options</td>
      <td>options</td>
      <td>❌</td>
      <td>Logo options</td>
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
      <td>width</td>
      <td>number</td>
      <td></td>
      <td>❌</td>
      <td>Logo dimension.</td>
    </tr>
    <tr>
      <td>x</td>
      <td>number</td>
      <td></td>
      <td>❌</td>
      <td>If none, will center.</td>
    </tr>
    <tr>
      <td>y</td>
      <td>number</td>
      <td></td>
      <td>❌</td>
      <td>If none, will center.</td>
    </tr>
  </tbody>
</table>

## 💡 SVG

### Usage

```js
import React from 'react';
import { useQRCode } from 'next-qrcode';

function App() {
  const { SVG } = useQRCode();

  return (
    <SVG
      text={'https://github.com/bunlong/next-qrcode'}
      options={{
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
  );
}

export default App;
```

### SVG props

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
    <tr>
      <td>logo</td>
      <td>logo</td>
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

### Usage

```js
import React from 'react';
import { useQRCode } from 'next-qrcode';

function App() {
  const { Image } = useQRCode();

  return (
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
  );
}

export default App;
```

### Image props

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

## 📜 Changelog

Latest version 2.4.0 (2022-11-29):

  * Add SVG

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/next-qrcode/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `next-qrcode` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `next-qrcode` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/desa">
        <img src="https://avatars.githubusercontent.com/u/1477539?v=4" width="100" alt="Michael Desa" />
        <br />
        <sub>
          <b>Michael Desa</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jaredscheib">
        <img src="https://avatars.githubusercontent.com/u/6403018?v=4" width="100" alt="" />
        <br />
        <sub>
          <b>Jared Scheib</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 👨‍👩‍👦 Advertisement

You maybe interested.

* [React Patterns](https://github.com/reactpatterns/reactpatterns) – React patterns & techniques to use in development for React Developer.
* [React Papaparse](https://github.com/Bunlong/react-papaparse) – The fastest in-browser CSV (or delimited text) parser for React.
* [Next Share](https://github.com/Bunlong/next-share) – Social media share buttons for your next React apps.
* [Next Time Ago](https://github.com/Bunlong/next-time-ago) – A lightweight tiny time-ago component for your next React apps.

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

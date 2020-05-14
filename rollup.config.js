import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';

// import external from 'rollup-plugin-peer-deps-external';
// import builtins from 'builtin-modules'

export default {
  input: 'src/react-hook-qrcode.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
    },
  ],
  // external: builtins,
  external: [
    'react',
    'react-dom',
    'fs',
    'util',
    'stream',
    'buffer',
    'zlib',
    'assert'
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      preferBuiltins: false
    }),
    commonjs({
      extensions: ['.js', '.ts', '.tsx'],
    }),
    globals(),
    builtins(),
    terser()
  ],
};

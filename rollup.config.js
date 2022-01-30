import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";

// ======= FOR BUILDING NODE.JS PACKAGE =======
// import builtins from 'builtin-modules'
// import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
// ============================================

import pkg from './package.json';

export default {
  input: 'src/next-qrcode.ts',
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
    // {
    //   file: `dist/${pkg.name}.min.es.js`,
    //   format: 'es',
    //   exports: 'named',
    //   sourcemap: true
    // },
    // {
    //   name: 'next-qrcode',
    //   file: `dist/${pkg.name}.umd.js`,
    //   format: 'umd',
    //   exports: 'named',
    //   globals: {
    //     react: 'React',
    //   },
    // },
  ],
  // external: builtins,
  external: ['react', 'react-dom', 'qrcode'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    // resolve({
    //   preferBuiltins: true
    // }),
    // nodeResolve(),
    commonjs({
      extensions: ['.js', '.ts', '.tsx']
    }),
    terser()
  ],
};

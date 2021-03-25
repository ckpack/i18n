import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

const name = 'I18n';
export default {
  input: './lib/index.js',
  output: [{
    file: 'dist/index.js',
    format: 'umd',
    name: name
  }, {
    file: 'dist/index.esm.js',
    format: 'esm'
  }, {
    file: 'dist/index.min.js',
    format: 'umd',
    name: name,
    plugins: [terser()]
  }],
  plugins: [typescript()]
};

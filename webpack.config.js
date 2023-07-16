import path from 'node:path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'production',
  cache: false,
  optimization: {
    minimize: false,
    // minimize: true,
  },
  entry: {
    effect: './src/effect.ts',
    either: './src/either.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/webpack'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
        extensions: ['.ts'],
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
            loader: 'ts-loader',
            options: { onlyCompileBundledFiles: true }
        },
        exclude: /node_modules/,
      },
    ],
  },
}
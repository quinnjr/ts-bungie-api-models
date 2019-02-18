import { resolve } from 'path';

import { TypedocPlugin } from 'webpack-microsoft-tsdoc-plugin';

function resolveFromRoot(...path: string[]): string {
  return resolve(__dirname, path.join('/'));
}

export default function(env: string) {

  return {
    mode: env || 'development',
    context: resolveFromRoot('src'),
    entry: './index.ts',
    output: {
      path: resolveFromRoot('dist'),
      filename: "[name].[ext]",
      library: 'tsBungieApiModels',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        // {
        //   test: /\.ts$/,
        //   enforce: 'pre',
        //   use: 'tslint-loader',
        //   exclude: /node_modules/
        // },
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            ignoreDiagnostics: [2304, 2305, 2307]
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.json']
    },
    stats: 'minimal',
    plugins: [
      new TypedocPlugin()
    ]
  }

}

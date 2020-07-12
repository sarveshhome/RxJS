# RxJS

step 1:  `npm init`

step 2: `code README.md`

step 3: `npm install rxjs webpack webpack-dev-server typescript ts-loader`

step 4: `npm install webpack-cli --save-dev`

step 5: `"scripts": {
    "start": "webpack-dev-server --mode development"
  },`

step 6: `npm run start`

step 7: create file  `webpack.config.js`

step 8:  

`const path = require('path');
module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
};`

step 9: add file tsconfig.json

step 10: `{
    "compilerOptions": {
      "outDir": "./dist/",
      "sourceMap": true,
      "noImplicitAny": true,
      "module": "es6",
      "moduleResolution": "node",
      "target": "es6",
      "allowJs": true,
      "lib": [
        "es2017",
        "dom"
      ]
    }
}`




step 11: `npm run start`





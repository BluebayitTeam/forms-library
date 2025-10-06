const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bmet-form-ui.min.js',
      library: 'BmetFormUI',
      libraryTarget: 'umd',
      globalObject: 'this',
      clean: true,
    },
    externals: {
      'react': {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React'
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM'
      },
      '@mui/material': {
        commonjs: '@mui/material',
        commonjs2: '@mui/material',
        amd: '@mui/material',
        root: 'MaterialUI'
      },
      '@mui/icons-material': {
        commonjs: '@mui/icons-material',
        commonjs2: '@mui/icons-material',
        amd: '@mui/icons-material',
        root: 'MaterialUIIcons'
      },
      'react-hook-form': {
        commonjs: 'react-hook-form',
        commonjs2: 'react-hook-form',
        amd: 'react-hook-form',
        root: 'ReactHookForm'
      },
      'moment': {
        commonjs: 'moment',
        commonjs2: 'moment',
        amd: 'moment',
        root: 'moment'
      }
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    optimization: {
      minimize: true
    }
  };

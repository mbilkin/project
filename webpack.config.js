const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
    }),
    new UglifyJSPlugin({
      sourceMap: true
    })
    
  ]
};

module.exports = config;
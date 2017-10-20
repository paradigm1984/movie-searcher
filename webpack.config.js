const path = require("path");
const webpack = require("webpack");


module.exports = {

  entry: {
    app: ['./public/js/main.js']
  },
  output: {
    path: path.resolve('./public/js/bundle'),
    filename: 'bundle.js'
  }

}

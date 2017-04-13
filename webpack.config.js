var path = require('path');

module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
          Main: path.resolve(__dirname,'public/components/Main.jsx'),
          About: path.resolve(__dirname,'public/components/About.jsx'),
          WeatherMessage: path.resolve(__dirname,'public/components/WeatherMessage.jsx'),
          WeatherForm: path.resolve(__dirname,'public/components/WeatherForm.jsx'),
          Weather: path.resolve(__dirname,'public/components/Weather.jsx'),
          Nav: path.resolve(__dirname,'public/components/Nav.jsx'),
          Examples: path.resolve(__dirname,'public/components/Examples.jsx'),
          openWeatherMap: path.resolve(__dirname,'public/api/openWeatherMap.jsx')
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
      loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
      ]
    }
};

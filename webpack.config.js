var config = {
   entry: './src/index.js',
   output: {
      path:'/public',
      filename: 'bundle.js',
   },
   devServer: {
      inline: true,
      port: 3001
   },
   externals: {
      'react': 'React'
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['env', 'react']
            }
         }
      ]
   }
}

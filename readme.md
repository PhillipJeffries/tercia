___________
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
      ]
    },
    plugins: [new MiniCssExtractPlugin()] 
___________
    
    for min css
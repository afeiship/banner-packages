<p align="center">
  <img width="400" src="https://tva1.sinaimg.cn/large/006tNc79gy1g21fgm8dz8j30gi0b6mz4.jpg"/>
</p>

---

# html-banner-webpack-plugin
> Adds a banner to the top of each generated html.

## installation
```bash
npm install -D @jswork/html-banner-webpack-plugin
```

## usage
```js
import HtmlBannerWebpackPlugin from '@jswork/html-banner-webpack-plugin';

// ....
plutins:[
  new HtmlBannerWebpackPlugin({
    banner:[
      'NAME: editor-frontend',
      'VERSION: v1.1.5-alpha.6',
      'BUILD_TIME: 4/12/2019, 11:01:20 PM'
    ]
  })
]
// ...
```

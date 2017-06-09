# film-shop

> A film shopping website

## dependencies
```bash
脚手架: vue-cli
UI框架： element-UI
前端框架： vue
状态管理器: vuex
路由控制器: vue-router
(其实就是vue全家桶)  
```

## 文件架构
1. 公用的组件写在components
2. 具体的页面逻辑写在views里
3. store文件夹存放公用状态
4. styles存放全局样式
5. router存放路由定义
6. assets存放着公共的图片/字体

## 部署方式
1. 打包前端代码
```bash
npm run build
```
2. 开启node服务器
```bash
node app.js
```

## 开发时切换服务器的方法
在config/index.js里，有一个proxyTable,可以利用它来定义api转发规则和对应的服务器

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 原子类:
(原子类的目的只是为了方便开发)
1. m-x,ml-x,mr-x,mt-x,mb-x, p-x,pl-x,pr-x,pt-x,mb-x意义如下：(其中，x必须是5的倍数，取值为5-100)
```css
m-x {
  margin: xpx
}
ml-x {
  margin-left: xpx
}
mr-x {
  margin-right: xpx
}
...
```
2. fl,fr,tl,tr,tc意义如下：
```css
fl {
  float: left    
}
fr {
  float: right
}
tl {
  text-align: left
}
tr {
  texdt-align: right
}
tc {
  text-align: center
}
```

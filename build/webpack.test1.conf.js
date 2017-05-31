const webpack = require('webpack');
const path = require('path');
const projectRoot = __dirname;

const env = process.env.NODE_ENV || 'development';

module.exports = {
    target: 'node', // 告诉 Webpack 是 node 代码的打包
    devtool: null, // 既然是 node 就不用 devtool 了
    entry: {
        app: path.join(projectRoot, '../src/server.js')
    },
    output: Object.assign({}, base.output, {
        path: path.join(projectRoot, '../src'),
        filename: 'bundle.server.js',
        libraryTarget: 'commonjs2' // 和客户端不同
    }),
    plugins: [
        new webpack.DefinePlugin({            'process.env.NODE_ENV': JSON.stringify(env),            'process.env.VUE_ENV': '"server"' // 配置 vue 的环境变量，告诉 vue 是服务端渲染，就不会做耗性能的 dom-diff 操作了
        })
    ],
    resolve: {
        extensions: ['', '.js', '.vue'],
        fallback: [path.join(projectRoot, 'node_modules')]
    },
    resolveLoader: {
        root: path.join(projectRoot, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                exclude: /node_modules/
            }
        ]
    }
};
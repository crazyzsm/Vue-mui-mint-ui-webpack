const path=require('path');
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},  //css匹配规则
            {test:/\.(jpg|png|gif|bmp|jpeg)$/i,use:'url-loader'},    //url匹配规则加载图像资源
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},  //.js 使用babel匹配的规则
            //test---匹配.js文件  use---匹配器  exclude:/.../---不匹配这里面的文件
            { test: /\.vue$/, use: 'vue-loader' },
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},  //配置scss的加载器
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },   //配置字体加载器
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },  //配置less加载器

        ]
    }

};
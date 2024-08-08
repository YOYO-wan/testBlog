# webpack基础知识
## node内置模块——path

> path模块提供了很多用于对路径和文件进行处理的方法

### 获取路径信息
``` JavaScript
const path = require('path')
const filePath = 'C://abc/cba/test.txt'
// 获取文件的父文件路径
console.log(path.dirname(filePath))  //C://abc/cba
// 获取文件名
console.log(path.basename(filePath))  //test.txt
// 获取文件拓展名
console.log(path.extname(filePath))  //.txt
```
### 将多个路径拼接
``` JavaScript
const path = require('path')
const path1 = "aa/bb"
const path2 = "./cc/test.txt"
console.log(path.join(path1,path2)); // aa/cc//test.txt
```
### 拼接绝对路径
path.resolve()方法  
- 该方法会根据传参从左到右进行拼接，直到构成一个绝对路径就会停止  
- 当处理完所有参数后都未构成绝对路径，将会使用当前目录进行拼接 
- 当参数长度为零时，将会被忽略处理
- 当未传参时，path.resolve()会返回当前工作目录的路径

## webpack是什么
webpack is a static modeule bundler for modern JavaScript applications.  
webpack是一个静态的模块化打包工具，为现代的JavaScript应用程序  
webpack就是一个可以将代码打包成最终静态资源(部署到服务器)的打包工具，它默认支持各种模块化开(ES Module,CommonJs)  

## webpack的安装
> webpack的安装目前分为两个：webpack，webpack-cli

#### 安装命令

终端执行命令：  

**node install webpack webpack-cli -g**  全局安装  
**node install webpack webpack-cli -D**  局部安装 

#### webpack于webpack-cli的关系

- 执行webpack命令会执行node_modules下的.bin目录下的webpack  
- webpack执行时是依赖webpack-cli，如果未安装全会报错
- 而webpack-cli代码执行时，才是真正利用webpack进行编译和打包的过程

所以两者都需要安装(第三方脚手架事实上没使用webpack-cli的，而是类似于自己的vue-service-cli的东西)

## webpack的基本使用

### 安装，创建script脚本
#### 创建package.json文件
终端执行命令：**npm init**
#### 安装局部webpack
终端执行命令：**npm install webpack webpack-cli -D**
#### 在package.json文件文件中创建脚本
``` JavaScript
"scripts": {
    "build": "webpack"
}
```
#### 执行脚本命令进行打包
终端执行命令: **npm run build**
> 执行webpack命令后，一般会默认当前目录下的src/index.js为入口，自动生成一个dist文件夹存放打包后的代码  
> 也可通过命令配置来指定入口和出口
> npx webpack --entry ./src/main.js --output -path ./build

### webpack配置文件

#### webpack.config.js文件
通常情况下，webpack需要很多配置，只有默认配置肯定不行  
一般会在根目录下创建一个叫做webpack.config.js的文件，作为配置文件
``` JavaScript
const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,"./dist")
    }
}
```
#### 指定配置文件
如果不想使用webpack.config.js来命名配置文件  
可以使用以下命令  
**npx webpack --config wb.config.js**  
或者修改package.json文件  
``` JavaScript
"scripts": {
    "build": "webpack --config wb.config.js"
}
```

## webpack的loader
webpack中需要使用Loader对文件进行预处理，就是对模块源代码进行转换  
例如：将css文件看成一个模块，使用import来加载这个模块，但在加载过程中，webpack并不知道如何对其处理，需制定对应的loader来完成这个功能
### loader配置方式
需要在webpack.config.js文件中写明配置信息
module.rules中允许配置多个loader
``` JavaScript
const path = require('path')
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,"./dist")
    }，
    module:{
        rules:[
            {
                // test用于对资源进行匹配的,设置成正则表达式
                test: /\.css$/, 
                // 写法一:
                // loader:"css-loader", 
                // 写法二：
                use:[
                    {loader:"css-loader"}
                ]
                // 写法三：
                // use:["css-loader"]
            }
        ]
    }
}
```
### css-loader
安装css-loader  
**npm install css-loader -D**  
在配置文件中添加css-loader
``` JavaScript
module.exports ={
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    {loader:"css-loader"}
                ]
            }
        ]
    }
}
```
### style-loader
css-loader只是负责将.css文件进行解析，并不会将解析后的css插入页面  
插入style的操作就需要style-loader完成  
安装style-loader  
**npm install style-loader -D**  
在配置文件中添加style-loader
``` JavaScript
{
    test: /\.css$/,
    use:[
        {loader:"style-loader"},
        {loader:"css-loader"}
    ]
}
```
> 因为loader的执行顺序是从右到左(或者说是从下到上)，所以将style-loader写到css-loader的前面

### less-loader
如果开发中使用less来编写css，则要将less文件进行编译  
安装less-loader  
**npm install less-loader -D**  
在配置文件中添加less-loader  
``` JavaScript
{
    test: /\.less$/,
    use:[
        {loader:"style-loader"},
        {loader:"css-loader"},
        {loader:"less-loader"}
    ] // less转换成css，然后再将style插入页面
}
```
const path = require('path');

//启用热更新的第二步
// const webpack = require('webpack');

const webpack = require('webpack');
//导入在内存中生成 HTML 页面的插件
//只要是插件，都一定要放到 plugins 节点中去
//这个插件的两个作用
//1,自动在内存中根据指定页面生成一个内存的页面
//2,自动把打包好的bundle.js 追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');

//这个配置文件，其实就是一个JS文件，通过Node中模块操作，向外暴露一个配置对象
module.exports = {
    //手动指定入口和出口
    entry:path.join(__dirname,'./src/main.js'),  //入口，表示要使用webpack打包哪个文件
    output:{//输出文件相关的配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js'    //这是指定输出的文件的名称

    },
    // devServer:{ // 配置dev-server命令参数的第二种形式，相对来说，麻烦一些
    //     //open --port 3000 --contentBase src --hot
    //     open:true,//自动打开浏览器
    //     port:3000,//设置启动时候的运行端口
    //     contentBase:'src',//指定托管的根目录
    //     hot:true //启用热更新的第一步
    // },

    // 配置插件的结点
    plugins:[
        new webpack.HotModuleReplacementPlugin(),//new 一个热攻心的模块对象，这是启用热更新的第三部

        //创建一个在内存中生成HTML页面的插件
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，生成内存中的页面
            filename:'index.html' //指定生成的页面的名称
        })
    ],

    //这个节点，用于配置所用第三方模块加载器
    module: {
        rules: [//所有第三方模块的匹配规则
            {test:/\.css$/, use: ['style-loader','css-loader']},
            //配置处理 .css文件的第三方loader规则

            {test:/\.less$/, use:['style-loader','css-loader','less-loader']},
            //配置处理.less 文件的第三方loader规则

            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置处理 .scss 文件的第三方loader规则
        ]
    }
}
// 当在控制台输入webpack命令执行的时候，webpack做了一下几部：
// 1，首先，webpack发现，我们没有给他指定入口和出口
// 2，webpack会去项目的目录中查找一个叫做'webpack.config.js'd的配置文件
// 3，当找到配置文件后，webpack解析执行这个配置文件，当解析执行完配置文件后，
//      就得到了配置文件中导出的配置对象
// 4，当webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建

//由于webpack是基于noe构建的，所以，webpack的配置文件中，
// 任何合法的node都是支持的

var path = require('path')

//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的
//的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中挂载一个plugin节点
var htmlWebpackPlugin = require('html-webpack-plugin')
//当以命令行形式运行webpack或webpack-dev-server时，工具会发现我们是否
//提供要打包文件的入口和出口,此时，他会检查项目根目录中的配置文件，
// 并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，
// 进行打包构建


module.exports={
    entry:path.join(__dirname,'./src/main.js'),  //入口，表示要使用webpack打包哪个文件
    output:{//输出文件相关的配置
        path:path.join(__dirname,'./dist'),//指定打包好的文件，输出到哪个目录中去
        filename:'bundle.js'    //这是指定输出的文件的名称

    },
    plugins:[//所有的webpack插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定文件路径
            filename:'index.html'//设置生成的内存页面的名称

        })

    ],
    module:{//配置所有第三方loader模块
        rules:[//第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理less文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理less文件的loader
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'}
            // {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7631&name=[hase:8]-[name].[ext]'}

            //处理图片路径的loader
            //limit给定的值，是图片的大小，单位是byte,如果我们引用的图片，大于或等于
            //给定的limit值，则不会被转为base64格式的字符串，如果图片小于给定的limit值，
            //则会被转为base64的字符串
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级的es语法



        ]
    }
}
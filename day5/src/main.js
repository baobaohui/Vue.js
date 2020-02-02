// 这个main.js 使我们项目的JS入口文件
//1，导入Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于ES6的代码太高级，浏览器无法解析，所以该情况下调用会报错
import $ from 'jquery'

// const $ = require('jquery')

//使用import 语法，导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'
// 注意：webpack，默认只能打包处理JS类型的文件，无法处理其他的非JS类型的文件
// 如果要处理非JS类型的文件，我们需要手动安装一些合适第三方loader加载器
// 1，如果要打包处理css文件，需要安装cnpm i style-loader css-loader -D
// 2，打开webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做module，他是一个对象
//      在这个module对象身上，有个rules属性，这个rules属性是个数组；
//      这个数组存放了所有第三方文件的匹配和处理规则


// 注意：webpack处理第三方文件类型的过程
// 1，发现这个要处理的文件不是JS文件，然后就去配置文件中，查找有没有对应的第三方loader规则
// 2，如果能找到对应的规则，就会调用loader处理这种文件类型
// 3，在调用loader的时候，是从后往前调用的
// 4，当最后的一个loader调用完毕，会把处理的结果直接交给webpack进行打包合并
//      最终输出到bundle.js 中去




$(function () {
   $('li:odd').css('backgroundColor','yellow');
   $('li:even').css('backgroundColor',function () {
       return '#'+'D97634'
   })
});
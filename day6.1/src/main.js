//项目的js入口文件
console.log('ok');

import './css/index.css'
import './css/index.scss'

import 'bootstrap/dist/css/bootstrap.css'

//class关键字，是ES6中提供的新语法，使用来实现ES6中面向对象的编程，但是webpack不能直接解析
//所以需要使用 babel 并且加载loader模块

clas Person{
    static  info = {name:'zs',age:20}
}
// var p1 = new Person();

console.log(Person.info)
// 在webpack中，默认只能处理一部分ES6的新语法，高级的ES6语法和ES7语法 都处理不了
// 可以借助第三方的loader来帮助webpack处理这些高级的语法，当第三方loader把高级语法转化为
//低级语法后，会把结果交给webpack 去打包到 bundle.js 中

// 通过 Babel，实现高级语法到低级语法的转化
// 1，在webpack中，可以运行如下两套命令，安装Babel相关的loader功能：
// 1.1 第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
// 1.2 第二套包：cnpm i babel-preset-env babel-preset-stage-0 -D
// 2. 打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则：
// 2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
// 2.2 注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉
// 2.2.1 如果不排除node_modules，则babel会把node_modules中所有的第三方js文件，都打包编译
//         太慢，而且耗费资源
// 3.在项目的根目录中，新建一个叫做 .babelrc 的babel配置文件，这个配置文件属于json格式，所以不能写注释，字符串必须用双引号
// 3.1 在 .babelrc 写如下配置
// {
//     "presets":[],
//     "plugins":["transform-runtime"]
// }
// 4. 了解：目前安装的babel-preset-env 等于与版本字典，主要到语法对应版本，然后使用另一套进行转换

function Animal(name){
    this.name = name
}

var a1 = new Animal('baobaohui')
# vue
## day1
### 关于vue
    
    vue.js 前端框架 ，React 是最流行的一个前端框架(可以开发网站和手机app)
    
    Vue.js + Angular.js + React.js
    
    Vue 只关注与视图层，有配套的第三方库，整合进行大型项目的开发
    
    Vue 响应式系统
    
    效率提升历程：原生js->jQuery类库->前端模板引擎->Angular.js/Vue.js(减少不必要的DOM操作)
    
### 框架和库的区别
    
    框架：一套完整的解决方案，对项目的侵入性较大，如需改变的话需要重新架构
           - node 中的 express
    库(插件)：提供某一个小功能，对项目侵入性小
          
### Node(后端)MVC与前端 MVVM之间的区别
    
    MVC:model view(视图层) controller
        View->app.js->router.js->Controller层->Model层
    MVVM: M(页面数据) VM(二者之间的调度者) V(HTML)
### Vue基本代码与MVVM之间的对应关系
1,vue实例化对象.html

### 讲解 v-cloak, v-text,v-html的基本使用
### 插值表达式 和 v-text
### v-bind = :, v-on=@click
2,基础使用.html
### 跑马灯

### v-on 的缩写 和事件修饰符

事件修饰符
    .stop 阻止事件冒泡
    .prevent 阻止默认事件
    .capture 添加事件侦听器时使用事件捕获格式
    .self 只当事件在该元素本身(比如不是子元素)触发时触发回调
    .once 事件只能触发一次
    
3,事件修饰符+v-model.html

### Vue 指令之v-model 和 双向数据绑定
    
    v-model 实现表单元素的数据双向绑定
### 在 Vue中使用样式
    
    数组
    数组中使用三元表达式
    数组中嵌套对象
    直接使用对象
    
    内联样式
        对象就是无序键值对的集合
    
### Vue指令 v-for的四种使用方式     
### v-for中 key的使用注意事项
### v-if 和 v-show 的使用和特点

### 总结
    
    MVC 和 MVVM 的区别
    Vue中基本的代码的结构
    插值表达式 v-cloak v-text v-html v-bind v-on v-model v-for v-show
    事件修饰符 .stop .prevet .capture .self .once
    el 指定要控制的区域 data 是个对象，指定了控制的区域要用到的数据 methods虽然带了s后缀但是是个对象，这里可以自定义方法
    在 VM 实例中，如果要访问 data上的数据，或者要访问methods中的方法，必须带this
    在 v-for 要会使用key属性(只接受 string/number)
    v- model 只能用于单表元素的双向数据绑定
    在vue中绑定样式有两种方式 v-bind:style
    
## day2
    
过滤器
        
        全局过滤器
            Vue.filter()
            
        自定义过滤器
            filters:{}
        
按键
        
        @keyup.(keyCode/键名)
        @keyup.enter="add"
        @keyup.f2 = "add" = @keyup.113 = "add"
        
        自定义全局按键修饰符  
            @keyup.f2="add"
            Vue.config.keyCodes.f2 = 113
        Vue.directive() 定义全局的指令 
            定义 v-focus (获得某个输入框的焦点)
        
自定义指令
         
         Vue.directive('focus',function{}) 定义全局的指令 
                Vue.directive('focus',{
                    bind:function(el) {},
                    inserted:function(el) {},
                    updated:function() {}
                })
         对象中 directive
            directive:{
                'fontweight':{
                    bind:function(){}
                }
            }
          把指令写入到页面代码中
钩子函数
        
        bind
        inserted
        update
        componentUpdated
        unbind
        
        钩子函数参数
            el：指令锁绑定的元素，可以用来直接操作DOM
            binding：一个对象，包含以下属性
                name：指令名
                value：指令的绑定值
                oldValue：指令绑定的前一个值
                expression：绑定值的字符串形式
                arg：传给指令的参数
                modifiers：一个包含修饰符的对象
                
            vnode：Vue 编译生成的虚拟结点
            oldVnode：上一个虚拟节点
              
vue生命周期函数
生命周期函数图示：https://cn.vuejs.org/images/lifecycle.png

    创建周期的生命函数
        beforeCreate：实例在内存中被创建出来，此时，还没有初始化好data和methods属性
        created：实例已经在内存中创建好，此时data和methods已经创建ok，但还没有开始编译模板
        beforeMount：此时已经完成了模板的编译，但是还没有挂载到页面中
        mounted：此时，已经将编译好的模板，挂载到了页面指定的容器中显示
    运行期间的生命周期函数
        beforeUpdate
            状态更新之前执行此函数，此时data中的状态值是最新的，但是界面上显示的数据还是
               旧的，因为此时还没有开始重新渲染DOM节点
        updated
            实例更新完毕之后调用此函数，此时data中的状态值和界面上显示的数据都已经完成了更新，
                界面已经被重新渲染好了
    销毁期间的生命周期函数
        beforeDestroy
            
        destroyed
            实例销毁之后调用，调用后,Vue实例指示的所有东西都会解绑定，所有的事件监听器
                都会被移除，所有的子实例也会被销毁
数据提交
    
    vue-resource 实现get，post，jsonp请求(除了这个，还可以使用 'axios'的第三方包实现数据的请求)

结合Node手写JSON服务器剖析JSONP原理
    (认认真真的听力，认认真真的没懂，没学node.js,先留着)    
## day3

数据提交，采用get，post方法，提交数据

动画
    
            Enter                       Leave
    
    Opacity:0   Opacity:1       Opacity:1   Opacity:0
    
    v-enter     v-enter-to      v-leave     v-leave-to
    
        v-enter-active              v-leave-active
        
   第三方类库实现动画
   
   钩子函数实现动画
    
   列表动画
   
   组件
    
    什么是组件，组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，
    来划分不同的功能模块，将来我们需要什么样的功能，即可以去调用对应的组件即可
    
    模块化：是从代码逻辑的角度进行划分的，方便代码分层开发，保证每个功能模块的职能单一
    组件化：是从UI界面的角度进行划分的，前端的组件化，方便UI 组件的重用
    
    组件中的data及组件中的data为什么是function
        数据的独立性
    
    组件切换
    
    
## day4

父子组件传值  
    v-bind:parentmsg='msg'
    
    props:['parentmsg'],
组件传方法   

    使用事件绑定
        @func="父组件事件名"
    
        this.$emit('父组件事件名')
使用ref获取DOM元素和组件引导
    
    <login ref="mylogin"></login>
    console.log(this.$refs.mylogin.msg);

路由
    
    vue-router
    前端路由
    后端路由
## day5

名称案例
    
    第一种方法：使用@keyup="getFullname"完成名称案例
    第二种方法：使用 watch 监视数据变化 完成名称案例
    第三种方法：使用 computed 计算属性完成名称案例
    
    watch，computed，methods 的对比
    
    computed：属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算，主要当作属性来使用
    methods：方法，表示一个具体的操作，主要书写业务逻辑
    watch：一个对象，键是需要观察的表达式，值是对应回调函数主要用来监听某些特定数据
          的变化，从而进行某些具体的业务逻辑操作，可以看作是computed和methods的结合体

nrm 的使用和安装
    
    nrm 就是提供了一些常用的NPM包镜像地址，能够让我们快速的切换安装包时候的而服务器地址
    镜像
    
    npm i nrm -g  全局安装nrm包
    nrm ls  查看当前所有可用的镜像源地址以及当前所使用的镜像地址
    nrm use cnpm 切换不同的镜像源地址
webpack的概念
    
    网页中引用的一些静态资源
        js
            .js .jex .coffee .ts(TypeScript 类c#语言)
        css
            .css .less .sass .scss
        Image
            .jpg .png .gif .bmp .svg
        字体文件(Fonts) 
            .svg .ttf .eot .woff .woff2
        模板文件
            .ejs .jade .vue(这是在webpack中定义组件的方式)
    
    网页中引入过多静态资源后有什么问题
        1，网页加载速度慢，因为会发起很多二次请求
        2，要处理错综复杂的依赖关系
   
    如何解决上述问题
        1，合并、压缩、精灵图(多个图片合成一张图片)、图片的Base64编码
        2，可以使用requireJS，webpack解决各个包之间的复杂依赖关系
    
    如何完美实现上述两种解决方案
        1，使用Gulp，是基于task任务的，处理的较小
        2，使用webpack，基于整个项目进行构建
    
    什么是webpack
        webpack是前端的一个项目构建工具，它是基于Node.js开发出来的一个前端工具
        
    安装webpack   
        npm i webpack -g 全局安装 ==> npm install webpack -g
        webpack -v  查看安装的webpack版本
    
    webpack可以做什么
        1，webpack能够处理JS文件之间的相互依赖关系
        2，webpack能够处理JS的兼容问题，把高级的浏览器不识别的语法转成低级的浏览器能识别的语法
        
        
    webpack是怎么用的
    
        npm install webpack -g
        webpack --mode development      //指定是开发(production)和是生产
        webpack .\src\main.js -o .\dist\bundle.js   //使用webpack处理js文件
        (webpack 要打包的文件的路径 打包好的文件的路径)

    webpack 构建的简介形式
        创建 webpack.config.js 文件并配置
        然后 terminal中直接输入 webpack 即可
    
    webpack-dev-server 工具 实现自动打包编译的功能
        1，运行npm i webpack-dev-server -D 把这个工具安装到项目本地开发依赖
        2，安装完毕后，这个工具的用法和webpack命令的用法，完全一致
        3，由于，我们是在项目中本地安装的webpack-dev-server(不是全局 -g 命令安装)，
            无法当作脚本命令在 终端中直接运行
        4，注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装webpack
            cnpm i webpack -D
            cnpm i webpack-dev-server -D
            
            配置 package.json
                  "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "dev": "webpack-dev-server",
                        "build": "webpack --mode production"
                      }
                      
            npm run dev
        5，webpack-dev-server 打包生成的bundle.js文件，并没有存放到实际的物理磁盘上，而是，直接托管到了电脑的内存中，
            所以，我们在项目根目录中根本就找不到这个打保函的bundle.js
        6，webpack-dev-server 把打包好的文件以一种虚拟的形式，托管到了咱们项目的根目录中
            ，虽然看不到，但是等同于和dist src node-modules平级，有一个看不见的文件，叫做bundle.js
    webpack-dev-server 的常用命令参数
       
       第一种方法：package.json中 
        "dev": "webpack-dev-server --open --port 8080 --contentBase src --hot",
        第二种方法：webpack.config.js
                
                //启用热更新的第二步
                // const webpack = require('webpack');
                
                devServer:{ // 配置dev-server命令参数的第二种形式，相对来说，麻烦一些
                    //open --port 3000 --contentBase src --hot
                    open:true,//自动打开浏览器
                    port:3000,//设置启动时候的运行端口
                    contentBase:'src',//指定托管的根目录
                    hot:true //启用热更新的第一步
                },
                
    使用html-webpack-plugin插件配置启动页面(将html页面置于内存中，而不是之前的物理层)
        作用如下：
        1，在内存中生成一个页面
        2，自动把打包好的bundle.js 插入到生成的内存页面DOM中去
        启用步骤如下：
        1，运行cnpm i html-webpack-plugin 插件配置启动页面
        2，修改webpack.config.js 配置文件如下
        
            const webpack = require('webpack');
            //导入在内存中生成 HTML 页面的插件
            //只要是插件，都一定要放到 plugins 节点中去
            const htmlWebpackPlugin = require('html-webpack-plugin');
            // 配置插件的结点
            plugins:[
                new webpack.HotModuleReplacementPlugin(),//new 一个热攻心的模块对象，这是启用热更新的第三部
        
                //创建一个在内存中生成HTML页面的插件
                    new htmlWebpackPlugin({
                        template: path.join(__dirname,'./src/index.html'),//指定模板页面，将来会根据指定的页面路径，生成内存中的页面
                        filename:'index.html' //指定生成的页面的名称
                    })
                ]
            };
        3，npm run dev
        
    loader配置，处理css文件
        
         1，   //这个节点，用于配置所用第三方模块加载器
            module: {
                rules: [//所有第三方模块的匹配规则
                    {test:/\.css$/, use: ['style-loader','css-loader']},//配置处理 .css文件的第三方loader规则
        
                ]
            }
         2，cnpm i style-loader css-loader -D
         
         3，npm run dev 
    loader配置，处理scss文件
        1，{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置处理 .scss 文件的第三方loader规则
        2，cnpm i style-loader css-loader sass-loader
        3，npm run dev
## day6
    
    复习webpack的一些配置，和day5后面说的基本一样
    然后对于 图片加载的loader模块为
        cnpm i url-loader file-loader -D
    webpack.config.js module模块配置
    {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'}  图片类型
    {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'} 处理字体文件的loader

    关于webpack和npm中的几个问题的说明
        json里面不能写 // 注释
    
    webpack中的babel的配置
        main.js
            通过 Babel，实现高级语法到低级语法的转化
            1，在webpack中，可以运行如下两套命令，安装Babel相关的loader功能：
            1.1 第一套包：cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
            1.2 第二套包：cnpm i babel-preset-env babel-preset-stage-0 -D
            2. 打开webpack的配置文件，在module节点下的rules数组中，添加一个新的匹配规则：
            2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
            2.2 注意：在配置babel的loader规则的时候，必须把node_modules目录，通过exclude选项排除掉
            2.2.1 如果不排除node_modules，则babel会把node_modules中所有的第三方js文件，都打包编译
                    太慢，而且耗费资源
            3.在项目的根目录中，新建一个叫做 .babelrc 的babel配置文件，这个配置文件属于json格式，所以不能写注释，字符串必须用双引号
            3.1 在 .babelrc 写如下配置
            {
                "presets":[],
                "plugins":["transform-runtime"]
            }
            4. 了解：目前安装的babel-preset-env 等于与版本字典，主要到语法对应版本，然后使用另一套进行转换

        
        webpack.config.js
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级的es语法
        
    区分ewbpack中导入vue和普通网页导入vue的区别
        main.js
            
            在webpack中尝试使用vue：
                注意：在webpack中使用 import Vue from 'vue'导入的vue构造函数，功能不完整
                        只提供了runtime-only的方式，并没有提供向网页中那样的使用方式
                 //import Vue from 'vue'
                 import Vue from '../node_modules/vue/dist/vue.js/'
                 //包的查找规则：
                 // 1，找项目根目录中有没有node_modules的文件夹
                 // 2，在node_modules中根据报名，找对应的vue文件夹
                 // 3，在vue文件夹中农，找一个叫做package。json的包配置问价
                 // 4，在package.json文件中，查找一个main属性（main属性制定了这个包在被加载时候的入口文件）
                 
            第二种方式：
                webpack.config.js
                
                    module.exports中加入 
                        resolve:{
                        alias:{//修改vue被导入时候的包的路径
                            "vue$":"vue/dist/vue.js"
                            }
                        }
     在vue中结合render函数渲染指定的组件到容器中
        使用vue之前先安装vue的包
        cnpm i vue -S
        
        main.js
                       
            //1，导入login组件 (新建一个vue文件，就是一个组件)
            import login from './login.vue'
            //默认 .webpack无法打包.vue文件，需要安装相应的loader
            cnpm i vue-loader vue-template-compiler -D
            
            //2，在配置文件中，新增loader配置项{test:/\.vue$/,use:'vue-loader'}
            var vm = new Vue({
                    el:'#app',
                    data:{
                        msg:'123'
                    },
                   // render:function(createElements){
                     //   return createElements(login)
                       //     }
                       render:c=>c(login)  //和上面的作用等价
                    })
                    
     webpack 结合vue使用的总结
        1，安装vue 的包：cnpm i vue -S
        2，有webpack中，推荐使用.vue这个组件末班文件定义组件，所以需要安装能解析这种文件的loader
            cnpm i vue-loader vue-template-complier -D
        3，在main.js中，导入vue模块：import Vue from 'vue'
        4，定义一个.vue结尾的组件(就是下面的 login.vue)其中，组件有三部分组成：template script style
        5，使用 import login from './login.vue' 导入这个组件
        6，创建vm实例var vm = new Vue({el:'app',render:c=>c(login)})
        7，在页面中创建一个id为app的div元素，作为我们vm实例要控制的区域
        
           
    export default 和 export 的使用方法
        
        export default info
        
        export var title = " 小星星"
        import m222,{title} from './test.js'
        使用export向外暴露的成员，只能使用{}的形式来接收，这中形式叫做[按需导出]                 
        
    结合webpack使用vue-router
        
        import  Vue from 'vue'  //导入 vue-router包
        import VueRouter from 'vue-router'  //手动安装VueRouter
        Vue.use(VueRouter)
        
        import app from './App.vue'  //导入app组件
        import account from './main/Account.vue'  //导入account组件
        
        var router = new VueRouter({
        
        })//创建路有对象
    
    结合webpack实现children子路由
        
        创建路由对象
        var router = new VueRouter({
            routes:[
                {
                    path:'/account',
                    component:account,
                    children:[
                        {path:'login',component:login},
                        {path:'register',component:register},

                        
                    ]
                },
                {path:'/goodslist',component:goodslist}
            ]
        })
        
    组件中style标签lang属性和scoped属性的介绍
        
        <style lang="scss" scoped>
            //普通的style标签只支持普通的样式，如果想要启用scss或less，需要为style元素设置lang属性
            //对于在.vue组件中定义的style标签，建议都加上scoped属性，这样使得style样式作用于该组件
            body{
                div{
                    color:red;
                    }
            }
        </style>
        
    抽离路由模块
        
        将路由部分从main.js中拿出放在router.js中
        export default router //把路由对象暴露出去
##day 7
  
    scoped 的作用域
    
    Mint-UI中按钮组建的使用
        安装
        #vue 1.x
        npm install mint-ui@1 -S
        #vue 2.x
        npm install mint-ui -S
        
        引入全部组件
        import Vue from 'vue'
        import Mint from 'mint-ui';
        Vue.use(Mint)
        
    Mint-UI中Toast组件的使用
        
        app.vue 文件中的script部分
        <script>
            import {Toast} from "mint-ui";
            
            export default{
                data(){
                    return{};
                },
                
                created(){
                    this.getList()
                },
                
                methods:{
                    getList(){
                        //模拟获取列表的一个AJax方法
                        //在获取数据之前，立即弹出Toast提示用户，正在加载数据
                        this.show();
                        
                        setTimeout(function(){
                            //当3s过后，数据获取回来了，要把toast移除
                            this.toastInstance.close();
                        },3000);
                    },
                    show(){
                        var toastInstance = Toast({
                            message:"消息",
                            duration:-1,//如果是-1，弹出后不消失
                            position:"top",
                            iconClass:"glyphicon glyphicon-heart",//设置图标的类
                            className:"mytoast"//自定义toast的样式，需要自己提供一个类名
                        });
                    },
                }
                
            };
        </script>

    Mint-UI的按需导入组件
        
        import {Button} from 'mint-ui'
        //使用Vue.component 注册组件
        //Vue.component('mybtn',Button)
        Vue.component(Button.name,Button)
        
    介绍MUI
        
        MUI类似于bootstrap，需要自己手动再github官网上下载，然后导入进行使用
        MUI可以和Mint-ui进行衔接使用
    
    MUI的使用
        
        将MUI文件的dist文件更名为mui放到项目的src/lib中
        
        //将引用的代码片段放入app.vue文件中
        //然后 在main.js 中引入mui的样式表，和bootstrap相同
        import './lib/mui/css/mui.min.css'
    
        //导入bootstrap样式
        import 'bootstrap/dist/css/bootstrap.css'
        import './css/app.css'
  
    项目-vue项目演示
    项目-整理出一个基本的项目模板
    项目-制作项目首页的Header和Tabbar
    项目-把本地项目托管到码云中去  
    项目-使用vscode默认继承的Git工具快速提交代码
    项目-完成tabbar的小图标设置
    项目-完成tabbar路由链接的改造和路由亮度
    项目-实现tabbar路由组件的切换功能
    项目-完成首页轮播图样式布局
    项目-完成首页中轮播图数据的加载
        
        1.获取数据，使用vue-resource
        cnpm i vue-resource -S
        
        //main.js 中
        //导入vue-resource
        import VueResource from 'vue-resource'
        //安装vue-resource
        Vue.use(VueResource)
        
        2，app.vue中使用this.$http.get获取数据
        3，获取到的数据，要保存到data身上
        4，使用v-for循环渲染每个item项
    
    项目-完成首页中九宫格改造工程
    项目-完成组件切换时候的动画效果
    项目-讲一天的代码上传到git服务器

##day8
    
    Promise-关于promise要解决回调地狱问题的说明
    
    promise基本概念的介绍
    
    promise形式上和具体的promise异步操作的区别
    
    promise实例创建后就会立即执行里面的异步方法
    
    promise-通过.then指定成功和失败的回调
    
    promise-分析promise的执行步骤
    
    promise-打开promise的正确方式
    
    promise-捕获异常的两种方式
    
    promise-jquery中ajax使用promise指定成功回调函数
        
        $(function(){
            $('#btn').on('click',function(){
                $.ajax({
                    url:'./data.json',
                    type:'get',
                    dataType:'json',
                    success:function(data){
                        console.log(data)
                    }
    
                })
            })
        })
    
    项目-改造新闻资讯的路由链接
        
    项目-绘新闻资讯列表页面布局
        1，绘制界面，使用MUI中的media-list.html
    项目-获取新闻资讯列表并渲染页面
        2，使用vue-resource获取数据
            <script>
                
                import {Toast} from "mint-ui"
                
                export default{
                
                    data(){
                        return {
                            newslist:[]//新闻列表
                        };
                    },
                    created(){
                        this.getNewsList();
                    },
                    methods:{
                        getNewsList(){
                            //获取新闻列表
                            this.$http.get("api/getnewslist").then(result=>{
                                if(result.body.status === 0){
                                    //如果没有失败，应该把数据保存到data上
                                    this.newslist = result.body.message;
                                }else{
                                    Toast("获取新闻列表失败");
                                }
                            }
                        });
                    }
                };
            </script>

            
        3，渲染真实数据
        
    项目-完成新闻列表中时间格式化
        使用 moment 插件
        定义全局的过滤器 filter，利用管道符 | 竖杠 完成时间的格式化
        
        
    项目- 实现新闻资讯列表 点击跳转到新闻详情
        1，把列表中的每一项改造为router-link,同时，在跳转的时候应该提供唯一的id标识符
        2，创建新闻详情的组件页面 NewsInfo.vue
        3，在路由模块中，将新闻详情的路由地址和组件页面对应起来
    
    项目-获取并渲染新闻详情数据
      
    项目-绘制评论子组件的样式
        单独封装一个comment.vue评论子组件
            1，先创建一个单独的comment.vue组件模板
            2，在需要使用comment组件的页面中，先手动导入comment组件
                +‘import comment from './comment.vue'
            3，在父组件中，使用'comments'属性，将刚才导入comment组件，注册为自己的子组件
            4，将注册子组件时候的注册名称，以标签形式在页面中引用即可
        
    项目-加载首页评论内容
    
    项目-实现点击加载更多评论的功能
        1，为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
        2，点击加载更多，让pageIndex++，然后重新调用this.getComments()方法
            重新获取最新一页的数据
        3，为了防止新数据覆盖老数据的情况，我们在点击加载更多的时候，每当获取新数据，
            应该让老数据调用数组的concat方法，拼接上新数组
##day9   
    
    项目-完成发表评论的功能
        1，把文本框进做双向数据绑定
        2，为发表按钮绑定一个事件
        3，校验评论内容是否为空，为空则Toast提示用户，内容不能为空
        4，通过vue-resource发送一个请求，把评论内容提交给服务器
        5，当发表评论ok后，重新刷新列表，以查看最新的评论
            +如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论
            前几页的评论获取不到
            
            +换一种思路：党派评论成功后，在客户端，手动拼接处一个最新的评论对象，然后调用
            数组的unshift方法，把最新的评论追加到data中comments的开头，这样就能很好的实现
            刷新评论的功能
    
    项目-改造图片分析按钮为路由的链接并显示对应的页面
    
    项目-图片列表顶部导航条制作
        1，制作顶部的滑动条
        2，制作底部的图片列表
    
    制作顶部滑动条的坑
        1，需要借助于MUI中的tab-top-webview-main.html
        2，需要把slider区域的mui-fullscreen类去掉
        3，滑动条无法正常触发滑动，检查官方文档后发现，这是js组件，需要初始化
            +导入mui.js
            +调用官方提供的方式去初始化
        4，初始化滑动条的时候，导入的mui.js，但是控制台报错：'uncaught typeerror'
            也即是 严格模式下的冲突，mui.js中用到的这些东西和webpack打包好的bundle.js
            默认是启用严格模式，二者冲突
                解决方案：
                    1，把mui.js中的非严格模式的代码修改，不现实
                    2，把webpack打包时候的严格模式禁用掉
                    
                使用第二个解决方法，通过下面的插件移除严格模式
                    babel-plugin-transform-remove-strict-mode
                    
        5，刚进入图片分页面时，滑动条无法正常工作，发现，如果初始化滑动条，
            必须要等DOM元素加载完毕
            所以把初始化滑动条的代码，移动到mounted声明周期函数中
            
        6，进入图片分享页面后，tabbar无法切换，
            原因：样式类名冲突，修改类名并把原来的样式设置给新的样式名
        
        7，获取所有分类，并渲染分类列表
          
    项目-渲染分类列表的数据
    项目-获取对应分类的图片列表数据
        制作图片列表区域
            1，图片列表需要使用懒加载技术，我们可以使用 Mint-UI 提供的'lazy-load'
            2，根据'lazy-load'的使用文档，尝试使用
            3，渲染图片列表
            
    项目-美化图片列表并实现懒加载效果
    
    项目-实现图片详情的数据加载和界面美化
        点击图片跳转到图片详情页面
            1，在改造li成router-link的时候，需要使用tag属性指定要渲染为哪种元素
            
        实现详情页面的布局和美化
        
        完成图片详情中缩略图的制作   
            1，使用插件vue-preview 这个缩略图插件
            2，获取到所有的图片列表，然后使用v-for指令渲染数据
            3，注意：img标签上的class不能去掉
            4，注意：每个图片数据对象中必须有w和h属性 
            
    项目-改造商品列表路由
    项目-实现商品列表的经典两列布局
    
    项目-在安卓手机中调试网站
        1，保证手机可正常运行
        2，保证手机和开发项目的电脑处于同一个WIFI环境中，也就是说手机可以访问到电脑的ip
        3，打开自己的项目中package.json文件，在dev脚本中，添加一个--host指令，
            把当前电脑的wifi ip 地址，设置为 --host的指令值
            +如何查看自己电脑所处wifi的ip呢，在cmd终端中运行'ipconfig'
            +手机屏幕显示控制软件 Total Control
            +360免费wifi
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
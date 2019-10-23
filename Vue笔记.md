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

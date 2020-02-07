## day11
     项目-启用vuex并设计购物车数据存储方式
        main.js
            import Vuex from 'vuex'
            Vue.use(Vuex)
            
            var store = new Vuex.store({
                state:{},//this.$store.state.***
                mutations:{},//this.$store.commit('方法的名称','按需传递唯一的参数')
                getters:{},//this.$store.getters.***
            })
     项目-实现点击加入购物车功能
        拼接出所要加入购物车的商品信息存储到store中，调用store中的方法
        方法：在已有存储购物车商品信息的state中寻找那个具有相同id的商品，将数量相加
     
     项目-实现徽标数值的自动更新
        在getters中设置一个方法 getAllCount()，计算出state中car:[]中的数量
        然后调用该方法($store.getters.getAllCount)，实现徽标数值更新
        
     项目-实现购物车商品的本地持久存储
        state中的数据经过网页刷新之后就不存在了
        解决方案：将state中的数据每次更改后存储到本地的localStorage中
        localStorage.setItem('car',JSON.stringify(state.car))
        
        这样在每次启动该项目的时候都需要先获取本地存储中的car数组
        var car = JSON.parse(localStorage.getItem('car')||'[]')
     
     项目-绘制购物车页面中商品列表的布局
     
     项目-获取购物车中所有商品列表并加载显示
     
     项目-在循环购物车列表时候初始化数量值
     
     项目-上线购物车商品数量改变同步到store中
     
     项目-实现购物车中商品的删除
        调用点击事件，根据商品的id进行删除
        删除分为两部分，store中数据删除，把当前组件中的goodslist中，对应删除的那个商品
        this.goodslist.splice(index,1)
        this.$store.commit("removeFormCar",id)
        
     项目-绘制结算区域样式
         <mt-button type="danger">去结算</mt-button>
     
     项目-把store选中的状态同步到页面上
        v-model=“$store.getters.getGoodsSelected[item.id]”
     
     项目-同步商品的勾选状态到store中保存
        原来保存到store中的拼接信息有这个选项
        <mt-switch @change="">        </mt-switch>
     
     项目-实现勾选数量和总结的自动计算
        在getters中：
        方法(getGoodsCountAndAmount)：计算商品件数，根据单价进行计算，然后数据显示在页面中
        return 一个对象，
        然后显示：{{$store.getters.getGoodsCountAndAmount.amount}}
     
     项目-实现返回按钮的功能
        在app.vue中
        绑定一个点击事件(goBack)：this.$router.go(-1)
        
        在首页的时候隐藏返回按钮 
            在watch中进行监听路由("$route.path")
            如果路径等于"/home",将显示标志更改为false，不显示该按钮
        
        将该标志位在 created钩子函数中进行判断
            created(){
                this.flag = this.$route.path === "/home"?false:true;
            }
            
     项目-将项目托管到Apache并启用Gzip压缩
        http.conf文件中启用Gzip压缩
     
     项目-使用ngork把本机的网站端口映射到外网  
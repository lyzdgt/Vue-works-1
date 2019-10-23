// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    msg:"Hi",
    info:"nono"
  },
  template: '<div id="app"><p>  {{ msg }} </p></div>',
  beforeCreate:function(){
    console.log("创建前=========")
    console.log(this.msg)
    console.log(this.$el)
  },
  created:function(){
    console.log("已创建=========")
    console.log(this.msg)
    console.log(this.$el)
  },//有el选项，则继续编译过程
  //没有el选项，则停止编译，也意味着暂时停止了生命周期
  //在el选项填写且正确的时候，生命周期将正常进行
  //当我们不加el选项，但是手动执行vm.$mount(el)方法的话，也能够使暂停的生命周期进行下去
  beforeMount:function(){
    console.log("mount前=========")
    console.log(this.msg)
    console.log(this.$el)
  },
  mounted:function(){
    console.log("mounted=========")
    console.log(this.msg)
    console.log(this.$el)
  },
  beforeUpdate:function(){
    console.log("更新前=========")
  
  },
  updated:function(){
    console.log("更新完成=========")
    
  },
  beforeDestroy:function(){
    console.log("销毁前=========")
    console.log(this.msg)
    console.log(this.$el)
  },
  destroyed:function(){
    console.log("已销毁=========")
    console.log(this.msg)
    console.log(this.$el)
  }
})
vm.msg="Hello"
//当我们不加el选项，但是手动执行vm.$mount(el)方法的话，也能够使暂停的生命周期进行下去
//vm.$mount('#app')
//如同调用在Vue实例上调用$mounted会使暂停的生命周期继续一样，调用$destroy()会直接销毁实例
//vm.$destroy()('#app')
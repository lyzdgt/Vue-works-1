<template>
  <div class="hello">
    <h1>当前数字{{ msg }}</h1>
    <button @click="increame">+</button>
    <button @click="decreame">-</button>   
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      //在data中声明一个count变量，通过方法来更改
      msg:0
    }
  },
  methods:{
    //点击增加的方法
    increame(){
      //点击的时候修改data里count的值
      this.msg++;
    },
    //点击减小的方法
    decreame(){
      //点击的时候修改data里count的值
      this.msg--;

    }
  }
  //props: {
    //msg: Int8Array
  //}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div>
     <mt-cell :title="msg">
    </mt-cell>
    <mt-cell title="标题文字">
      <mt-spinner color="rgb(100, 100, 100)"></mt-spinner>
    </mt-cell>
    <mt-cell title="标题文字" value="说明文字">
      <mt-spinner color="#26a2ff"></mt-spinner>
    </mt-cell>
    <mt-cell title="标题文字" value="说明文字">
      <mt-spinner color="yellow"></mt-spinner>
    </mt-cell>



    <center>
      <img src="../../assets/logo.png">
    </center>
  </div>
</template>

<script>

import jcA from "../../libs/a/a.js";

export default {
  name: 'dept',
  data () {
    return {
      msg: '这个是一个部门的页面, 下面是引用assets文件夹的图片'
    }
  },
  mounted(){
    console.log(this.$route);
    console.log(jcA);
  }
}
</script>

<!-- 添加 "scoped" 属性 限制css只添加到当前的组件 -->
<style scoped>
</style>

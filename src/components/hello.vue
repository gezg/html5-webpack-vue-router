<template>
  <div>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
    <mt-cell title="标题文字" value="说明文字"></mt-cell>
    <mt-cell-swipe  
      title="可以向左滑动"
      :right="[
        {
          content: 'Delete',
          style: { background: 'red', color: '#fff' },
          handler: () => this.$messagebox('delete')
        }
      ]">
    </mt-cell-swipe>

    <hr />

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 15" :title="'内容 ' + n" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n"  :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n"  :key="n"/>
      </mt-tab-container-item>
    </mt-tab-container>


  </div>
</template>

<script>

import jcC from "../libs/c.js";

export default {
  name: 'hello',
  data(){
    return {
      selected: '1'
    }
  },
  mounted(){
  	console.log(jcC);
  }
}
</script>

<!-- 添加 "scoped" 属性 限制css只添加到当前的组件 -->
<style scoped>
</style>

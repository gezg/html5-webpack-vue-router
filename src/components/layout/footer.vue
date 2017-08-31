<template>
  <div class="mint-tabbar">
  	  <router-link :to="'/'" class="mint-tab-item">
			<i class="foot-icon jcm-smiley"></i>前端
	  </router-link>
	  <router-link :to="'user'" class="mint-tab-item">
		<i class="foot-icon jcm-wink"></i>设计师
	  </router-link>
	  <router-link :to="'dept'" class="mint-tab-item">
	    <i class="foot-icon jcm-confused2"></i>开发
	  </router-link>
  </div>
</template>


<script>
export default {
  name: 'jc-footer',
  data(){
  	return {
  		selected: 'foot1'
  	}
  }
}
</script>

<style>
.mint-tab-item-label{
	padding-top: 8px;
	min-height: 30px;
	font-size: 14px;
}
.foot-icon{
	height: 20px;
	width: 20px;
	font-size: 18px;
	margin-right: 5px;
}
</style>

<template>
    <div class="app-container">
  <!-- 顶部 -->
     <mt-header fixed title="我的vue项目"></mt-header>
  <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
					<a class="mui-tab-item mui-active" href="#tabbar">
						<span class="mui-icon mui-icon-home"></span>
						<span class="mui-tab-label">首页</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-chat">
						<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
						<span class="mui-tab-label">消息</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-contact">
						<span class="mui-icon mui-icon-contact"></span>
						<span class="mui-tab-label">通讯录</span>
					</a>
					<a class="mui-tab-item" href="#tabbar-with-map">
						<span class="mui-icon mui-icon-gear"></span>
						<span class="mui-tab-label">设置</span>
					</a>
				</nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .app-container{
      padding-top: 40px;
    }
</style>

// Mint-UI中按钮组件的使用
//     1. 有时候文档会被墙掉 --> https://cloud.tencent.com/developer/section/1489960
//     2. vue相关的组件
//       + https://youzan.github.io/vant/#/zh-CN/intro
//       + https://vue.ant.design/
//       + http://element.eleme.io/
//       + https://www.iviewui.com/
// . https://github.com/vuejs/awesome-vue
// 2. http://vue.awesometiny.com/
<template>
    <div class="layout">
        <!-- 左侧导航栏 -->
         <div class="menu">
            <Menu/>
         </div>
        <!-- 右侧内容 -->
         <div class="content">
            <Content/>
         </div>
    </div>
</template>
<script>
import Menu from './menu/menuPage.vue'
import Content from './content/contentPage.vue'
export default {
    components:{
        Menu,
        Content
    }
}
</script>
<style  scoped>
.layout {
    /* display: flex; */
}
.menu {
    width:200px;
    background-color: #a7a4a4;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
}
.content {
    /* flex: 1; */
    padding-left: 200px;
}
</style>
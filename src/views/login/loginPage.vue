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
import Menu from '../layout/menu/menuPage.vue'
import Content from '../layout/content/contentPage.vue'
export default {
    components:{
        Menu,
        Content
    }
}

</script>
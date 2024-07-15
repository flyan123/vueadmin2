<template>
    <div>
        <!-- 顶部  -->
         <HeaderPage/>
         <!-- 内容 -->
          <router-view> </router-view>
    </div>
</template>
<script>
import HeaderPage from './headerPage.vue';
export default {
    components:{
        HeaderPage
    }
}
</script>
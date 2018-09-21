<template>
    <div id="footnav" class="foot-nav-containner">
        <!-- <ul class="bottom-nav"> -->
            <router-link to="./index"><span>首页</span></router-link>
            <router-link to="./course" ><span>课程</span></router-link>
            <router-link to=""><span>院校</span></router-link>
            <router-link to="./myinfo"><span>我的</span></router-link>
        <!-- </ul>   -->
     </div>
</template>
<script>
export default {
    name: 'footnav',
    data () {
        return {
         
        }
    },
}
</script>
<style scoped>
.foot-nav-containner {
    width: 100%;
    height: 3rem;
    position: fixed;
    bottom:0;
    /* width: 100%; */
    z-index: 1001;
    /* border-top: 0.014rem solid #ddd; */
    background:#409EFF;
}
.bottom-nav {
    color:black;
}
.bottom-nav span {
    color: black;
} 
</style>


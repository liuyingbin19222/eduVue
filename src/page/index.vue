<template>
    <div>
        <indexHeader></indexHeader>
       <van-swipe :autoplay="3000">
            <van-swipe-item>
                <img id="slide" src="../assets/slide11.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img id="slide" src="../assets/slide2.jpg" />
            </van-swipe-item>
            <van-swipe-item>
                <img id="slide" src="../assets/slide33.jpg" />
            </van-swipe-item>  
        </van-swipe>
        <mymenu></mymenu>
        <mycourse></mycourse>
        <footnav></footnav>
    </div>
</template>
<script>
    import myheader from '@/components/myheader'
    import mymenu from '@/components/mymenu'
    import Vue from 'vue'
    import footnav from '@/components/footnav'
    import { Swipe, SwipeItem } from 'vant';
    import mycourse from '@/components/mycourse'
    import indexHeader from '@/components/indexHeader'
    Vue.use(Swipe).use(SwipeItem);
    export default {
        name:'index',
        data() {
            return {
                images: [
                    './assets/slide11.jpg',
                    './assets/slide2.jpg',
                    './assets/slide33.jpg'
                ]
            }
        },
        components:{
            myheader,
            mymenu,
            footnav,
            mycourse,
            indexHeader
        }
    }
</script>
<style scoped>
    #slide {
        margin-top: 0px;
        width: 100%;
        height: 8rem;
    }
</style>


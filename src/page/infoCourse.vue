<template>
    <div id="infoCourse">
        <myheader></myheader>
        <van-tabs v-model="active">
            <van-tab title="未开始">
                <van-row gutters = "20">
                    <van-col span="10" :offset="1">
                        <div id="course">
                            <img id="slide" src="../assets/course/computer.jpg" />
                        </div>
                    </van-col>
                    <van-col span="10" :offset="2">
                        <div id="course">
                            <img id="slide" src="../assets/course/computer.jpg" />
                        </div>
                    </van-col>
                </van-row>
            </van-tab>
            <van-tab title="进行中">内容 2</van-tab>
            <van-tab title="已完成">内容 3</van-tab>
            <!-- <van-tab title="标签 4">内容 4</van-tab> -->
        </van-tabs>

    </div>
</template>
<script>
import myheader from '@/components/myheader'
import indexHeader from '@/components/indexHeader'
export default {
    name:'infoCourse',
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        myheader,
        indexHeader
    }
}
</script>
<style scoped>
    img {
        width: 100%;
        height: 4rem;
    }
</style>

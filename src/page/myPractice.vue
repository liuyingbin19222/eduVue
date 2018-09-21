<template>
    <div id="myPractice">
        <myheader></myheader>
        <router-link to="./practiceDetail">
            <van-cell-group>
                <van-cell value="查看" icon="shop" is-link>
                    <template slot="title">
                        <span class="van-cell-text">完成调查报告</span>
                        <van-tag type="danger">重要</van-tag>
                    </template>
                </van-cell>
            </van-cell-group>
        </router-link>      
    </div>    
</template>
<script>
import myheader from '@/components/myheader'
export default {
    name:'myPractice',
    data(){
        return {

        }
    },
    components:{
        myheader
    }
}
</script>
<style scoped>

</style>

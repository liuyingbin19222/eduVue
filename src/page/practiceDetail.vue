<template>
    <div id="practiceDetail">
        <myheader></myheader>
        <van-panel title="完成调查报告" desc="内容" status="状态">
            <p id="text">截至国庆节之前，完成调查报告，并上交调查报告电子版</p>
            <p id="time">2018-09-08</p>
        </van-panel>
    </div>
</template>
<script>
import myheader from '@/components/myheader'
export default {
    name:'practiceDetail',
    data(){
        return {

        }
    },
    methods:{

    },
    components:{
        myheader
    }
}
</script>
<style scoped>
    #text {
        padding-left: 2rem;
        padding-right: 2rem;
        /* float: left; */
    }
    #time {
        float: right;
        margin-top: 0.5rem;
        padding-right: 2rem;
        font-size: 0.5rem;
    }
</style>

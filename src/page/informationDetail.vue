<template>
    <div id="informationDetail">
        <myheader></myheader>
        <van-panel title="标题" desc="描述信息" status="状态">
            <div>内容内容内容内容内容内容内容内容内容内容</div>
            <p id="time">2018-09-04</p>
        </van-panel>
    </div>
</template>
<script>
import myheader from '@/components/myheader'
export default {
    name:'informationDetail',
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
    #time {
        padding-left: 10rem;
        padding-top: 0.5rem;
    }
</style>

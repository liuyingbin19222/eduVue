<template>
    <div id="courseheader">
        <div>
            <van-icon name="arrow-left" id="left">
            </van-icon>
            <span id="yunzhi">课堂学习</span>
        </div>
    </div>
</template>
<script>
     export default {
        name:'courseheader',
        methods:{

        }
    }
</script>
<style >
#left {
    float: left;
    padding-top: 5%;
}
template {
    margin: 0px;
    padding: 0px;
    /* width: 100%;*/
    /* height: 100%;*/
}
#courseheader {
    margin: 0px;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 3em;
    background: #409EFF;
}
#yunzhi {
    display: block;
    padding-top: 3%;
    text-align: center;
}
</style>

<template>
    <div id="loginHeader">
        <span class="left"><router-link to="./myinfo">取消</router-link></span>
        <span class="middle">登陆</span>
        <span class="right"><router-link to="./register">注册</router-link></span>
    </div>    
</template>
<script>
export default {
    name:'loginHeader',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style scoped>
    template {
        width: 100%;
        margin: 0px;
        padding: 0px;
    }
    #loginHeader {
        width: 30rem;
        height: 4rem;
        background:#409EFF;
        display: table-cell;
        vertical-align: middle;
    }
    #loginHeader .left {
        float: left;
    }
    #loginHeader .middle {
        text-align: center;
    }
    #loginHeader .right {
        float: right;
    }
    .middle {
        font-size: 0.8rem;
        color: white;
    }
</style>

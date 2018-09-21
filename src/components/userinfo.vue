<template>
    <div id="user_info">
        <div id="van" class="user" @click="getLogin">
            <van-icon id="photo" name="photo" size="20px"  />
            <span>点击头像登陆</span>
        </div>
    </div>    
</template>
<script>
export default {
    name:'userinfo',
    methods:{
        getLogin(){
            this.$router.push("./login");
        }
    }
}
</script>
<style scoped>
    #user_info {
        margin-top: 0px;
        background: #58A7F8;
        width: 100%;
        margin: 0px;
        padding: 0px;
        height: 8rem;
    }
    #user_middle {
        margin-top: 10%;
    }
    .user {
        margin-top: 30%;
        position: relative;
        left: 0px !important;
        /* padding-left: 10%; */
        border: 1px solid red;
    }
    #van {
        margin-top: 0px;
    }
</style>

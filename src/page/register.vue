<template>
    <div id="register">
        <registerHeader></registerHeader>
        <div id="registerBox">
            <van-cell-group>
                <van-field label="邮箱" v-model="name" placeholder="请输入邮箱" />
            </van-cell-group>
            <van-cell-group>
                <van-field label="密码" v-model="password" placeholder="请输入密码" />
            </van-cell-group>
        </div>
        <p id="registerPass"><van-button size="large" id="button" type="primary" @click="register">注册</van-button></p>
    </div>    
</template> 
<script>
import registerHeader from '@/components/registerHeader'
export default {
    name:'register',
    data(){
        return {

        }
    },
    components:{
        registerHeader
    }
}
</script>
<style scoped>
    #register {
        position: relative;
        top: -3.7rem;
        margin-top: 0px;
    }
    #registerBox {
        width: 100%;
    } 
</style>

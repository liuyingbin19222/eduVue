<template>
    <div id="login">
        <loginHeader></loginHeader>
        <div id="loginBox">
            <van-cell-group>
                <van-field label="用户名" v-model="name" placeholder="请输入用户名" />
            </van-cell-group>
            <van-cell-group>
                <van-field label="密码" v-model="password" placeholder="请输入密码" />
            </van-cell-group>
        </div>
        <p>password:{{password}}</p>
        <p id="forgetPass"><span>忘记密码</span></p>
        <p id="loginPass"><van-button size="large" id="button" type="primary" @click="login('auth/login')">登陆</van-button></p>
    </div>
</template>
<script>
import loginHeader from '@/components/loginHeader'
import {baseurl} from '../service/api'
import axios from 'axios'

export default {
    name:'login',
    data(){
      return  {
          name:'',
          password:''
      }  
    },
    methods:{
        login(url){
            console.log('password'+this.password);
            axios.post(baseurl+url,{
                stunum:this.name,
                loginpass:this.password
            })
            .then((response)=>{
                console.log(response);
                if(response.code == 0){
                    this.$router.push('./myinfo');
                }else {
                    alert("登陆失败");
                }
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    },
    components:{
        loginHeader
    }
}
</script>
<style scoped>
    #login {
        position: relative;
        top: -3.7rem;
        margin-top: 0px;
    }
    #loginBox {
        background: white;
    }
    #forgetPass {
        float: left;
        font-size: 0.5rem;
    }
    #loginPass  {
        margin-top: 5rem;
        /* border: 1px solid red; */
        width: 100%;
        vertical-align: center;
        text-align: center;
        /* padding-left: 40%; */
    }
</style>

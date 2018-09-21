<template>
    <div id="myheader">
        <div>
            <van-icon name="arrow-left" id="left" v-show="isShow" @click="back">
            </van-icon>
            <span id="yunzhi">云智教育</span>
        </div>
    </div>
</template>
<script>
     export default {
        name:'myheader',
        data(){
            return {
                isShow:true
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
        },
        mounted:{
            $route(now,old){
                console.log("执行");
                if(now.path == './index'){
                    this.isShow = false;
                }else if(now.path == './myinfo'){
                   this.isShow = false; 
                }else if(now.path == './course'){
                   this.isShow = false; 
                }else {
                    this.isShow = true;
                }
            }       
        },
        watch:{
            $route(now,old){
                console.log("执行");
                if(now.path == './index'){
                    this.isShow = false;
                }else if(now.path == './myinfo'){
                   this.isShow = false; 
                }else if(now.path == './course'){
                   this.isShow = false; 
                }else {
                    this.isShow = true;
                }
            }
        }
    }
</script>
<style >
#left {
    float: left;
    padding-top: 5%;
    padding-left: 0.5rem;
}
template {
    margin: 0px;
    padding: 0px;
    /* width: 100%;*/
    /* height: 100%;*/
}
#myheader {
    position: fixed;
    top: 0px;
    z-index: 99;
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

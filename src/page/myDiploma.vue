<template>
    <div id="myDiploma">
        <myheader></myheader>
        <van-row v-show="isShow1">
            <van-col span="12" :offset="6">
                <div>
                    <img id="diplomaInfo" src="../assets/course/diplomaInfo.jpg" />
                </div>
            </van-col>
        </van-row>
        <van-row v-show="isShow1">
            <van-col span="12" :offset="6">
                <div>
                   <router-link to="./index">
                        <van-button type="primary" size="large">马上学习</van-button>
                    </router-link>
                </div>
            </van-col>
        </van-row>
        <van-row v-show="isShow2">
            <van-col span="10" :offset="2">
                <img id="mark" src="../assets/course/mark.jpg" />
                <p>计算机网络原理结业证书</p>
            </van-col>
            <!-- <van-col span="8">span: 8</van-col> -->
            <van-col span="10" :offset="1">
                <img id="mark" src="../assets/course/mark.jpg" />
                <p>计算机网络原理结业证书</p>
            </van-col>
        </van-row>

    </div>    
</template>
<script>
import myheader from '@/components/myheader';
export default {
    name:'myDiploma',
    data(){
        return {
            isShow1:false,
            isShow2:true
        }
    },
    components:{
        myheader
    }
}
</script>
<style scoped>
    #diplomaInfo {
        width: 100%;
    }
    #mark {
        width: 100%;
    }
</style>

<template>
    <div id="noticeHeader">
        <div id="myheader">
            <div>
                <router-link to="./myinfo">
                    <van-icon name="arrow-left" id="left">
                    </van-icon>
                </router-link>
                <span id="yunzhi">云智教育</span>
            </div>
        </div>
        <div id="noticeList">
            <van-cell-group>
                <router-link to="./informationDetail">
                    <van-cell title="标题" is-link value="查看" />
                    <span id="text">需要重新完成作业需要需要重新完成作业需要
                        需要重新完成作业需要需要重新完成作业需要</span>
                </router-link>
            </van-cell-group>
            <van-cell-group>
                
                <van-cell title="标题" is-link value="查看" />
                <span>需要重新完成作业需要需要重新完成作业需要
                    需要重新完成作业需要需要重新完成作业需要</span>
            </van-cell-group>
            <van-cell-group>
                <van-cell title="标题" is-link value="查看" />
                <span>需要重新完成作业需要需要重新完成作业需要
                    需要重新完成作业需要需要重新完成作业需要</span>
            </van-cell-group>
            <van-cell-group v-for="item in dataList">
                <van-cell title="标题" is-link value="查看" />
                <span>需要重新完成作业需要需要重新完成作业需要
                    需要重新完成作业需要需要重新完成作业需要</span>
            </van-cell-group>
        </div>
    </div>
</template>
<script>
import {baseurl} from '../service/api'
import axios from 'axios'
export default {
    name:'myNotice',
    data(){
        return {
            dataList:[],
        }
    },
    mounted()
    {
        getNoticeList('auth/getList');
    },
    methods:{
        getNoticeList(url){
            axios.get(baseurl+url)
                .then((response)=>{
                    console.log(response);
                })
                .catch((error)=>{
                    console.log(error);
                })
        }
    },
}
</script>
<style scoped>
#text {
    padding-left:3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
    width: 5rem;
}
#left {
    float: left;
    padding-top: 5%;
    padding-left: 0.5rem;
    /* padding-left: 2rem; */
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

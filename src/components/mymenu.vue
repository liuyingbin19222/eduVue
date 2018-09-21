<template>
    <div>
        <van-row gutter="20">
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course1}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course2}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course3}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course4}}</p>
                </div>
            </van-col>
        </van-row>
             <van-row gutter="20">
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course1}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course2}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course3}}</p>
                </div>
            </van-col>
            <van-col span="6">
                <div id="content">
                    <p><img id="course" src="../assets/menus/法律.png" /></p>
                    <p>{{course4}}</p>
                </div>
            </van-col>
        </van-row>
    </div>
</template>
<script>
    export default {
        name:'mymenu',
        data(){
            return{
                course1:'社科法律',
                course2:'创业',
                course3:'先修课',
                course4:'计算机'
            }
       
        },
        methods:{

        }
    }
</script>
<style scoped>
    #course {
        width: 50%;
        height:30%;
    }
    #content p {
        font-size: 0.8rem;
        font-weight: bold;
    }
</style>


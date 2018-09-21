<template>
    <div>
        <myheader></myheader>
        <van-row  ref="">
            <van-col span="10" :offset="1">
                <span>
                    <img id="course_img" src="../assets/course/computer.jpg" />{{course1}}
                </span>
            </van-col>
            <van-col span="10" :offset="2">
                <span>
                    <img id="course_img" src="../assets/course/computer.jpg" />{{course1}}
                </span>
            </van-col>
        </van-row>
        <van-row gutter="20" >
            <!-- <van-col v-for="item in items">
                <div>
                </div>
            </van-col> -->
        </van-row>
        <footnav></footnav>
    </div>
</template>
<script>
    // import getCourseList from '@/service/api'
    import courseheader from '@/components/courseheader'
    import footnav from '@/components/footnav'
    import indexHeader from '@/components/indexHeader'
    import myheader from '@/components/myheader'
    export default {
        name:'mycourse',
        data(){
            return {
                datalist:[],
                course1:'计算机教程'
            }
        },
        components:{
            courseheader,
            footnav,
            indexHeader,
            myheader
        },
        methods:{
            getdata(){
                datalist = getCourseList('')
            }
        }    
    }
</script>
<style scoped>
    template {
        margin:0px;
        padding: 0px;
    }
    #course {
        vertical-align: middle;
        border: 1px solid blue;
    }
    #course_img {
        width: 100%;
        height: 7rem;
    }
</style>


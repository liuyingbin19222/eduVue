<template>
    <div id="mycourse">
        <span>精品课程</span>
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
        <span>名师课程</span>
        <div id="famous_course">
            <van-panel id="panel" title="网络原理" desc="由清华大学老师讲授" status="状态">
                <div id="course_content"><img id="course" src="../assets/course/computer.jpg" /></div>
            </van-panel>
            <van-panel id="panel" title="网络原理" desc="描述信息" status="状态">
                <div id="course_content"><img id="course" src="../assets/course/computer.jpg" /></div>
            </van-panel>
            <van-panel id="panel" title="网络原理" desc="描述信息" status="状态">
                <div id="course_content"><img id="course" src="../assets/course/computer.jpg" /></div>
            </van-panel>
            <van-panel id="panel" title="网络原理" desc="描述信息" status="状态">
                <div id="course_content"><img id="course" src="../assets/course/computer.jpg" /></div>
            </van-panel>
        </div>
    </div>
</template>
<script>
export default {
    name:'mycourse',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    #mycourse {

    }
    #course_img {
        width: 100%;
        height: 7rem;
    }
    #panel {
        margin-top: 10px;
    }
    #famous_course {
        margin-bottom: 5rem;
    }
    #course {
        float: left;
        width: 30%;
        height: 100%;
        /* height: 50%; */
    }
    #course_content {
        padding-left: 1rem;
        height: 4rem;
    }
</style>




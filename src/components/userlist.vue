<template>
    <div id="user_list">
            <router-link to="./myinformation">
                <van-cell-group>
                    <van-cell title="我的消息" icon="location" is-link />
                </van-cell-group>
            </router-link>
            <router-link to="./infoCourse">
                <van-cell-group>
                    <van-cell title="我的课程" icon="location" is-link />
                </van-cell-group>
            </router-link>
           <van-cell-group>
                <van-cell title="我的关注" icon="location" is-link />
            </van-cell-group>
            <router-link to="./myDiploma">
                <van-cell-group>
                    <van-cell title="我的证书" icon="location" is-link  />
                </van-cell-group>
            </router-link>
            <router-link to="./myPractice">
                <van-cell-group>
                    <van-cell title="我的实训" icon="location" is-link />
                </van-cell-group>
            </router-link>
    </div>
</template>
<script>
export default {
    name:'userlist',
    data(){
        return {

        }
    },

}
</script>
<style scoped>

</style>

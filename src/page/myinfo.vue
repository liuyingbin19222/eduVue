<template>
    <div id="userinfo">
        <indexHeader></indexHeader>
        <userinfo></userinfo>
        <userlist></userlist>
        <footnav></footnav>
    </div>
</template>
<script>
import footnav from '@/components/footnav'
// import myheader from '@/components/myheader'
import userinfo from '@/components/userinfo'
import userlist from '@/components/userlist'
import indexHeader from '@/components/indexHeader'
export default {
    name:'myinfo',
    data(){
        return {

        }
    },
    components:{
        // myheader,
        userinfo,
        userlist,
        footnav,
        indexHeader
    }
}
</script>
<style scoped>

</style>

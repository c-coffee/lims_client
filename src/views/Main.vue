/**
* Created by vol on 2017/7/18.
*/
<template>
    <div class="main">
        <!--左右分栏设置-->
        <div class="left-column">
            <vSideBar class="el-sidebar" ></vSideBar>
        </div>
        <div class="right-column">
            <div class="mainboard">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>

import vSideBar from './SideBar.vue'
export default{
    components:{
        vSideBar
    }
}
</script>
<style>
    html{
        height:100%;
    }
    body{
        height:100%;
        width:100%;
        background-color:#58B7FF;
    }
    .left-column{
        width:260px;
        float:left;
        margin-right:-265px;
    }
    .right-column{
        float:left;
        width:99%;
    }
    .el-sidebar{
        background:#324157;
        position:fixed;
        top:0;
        bottom:0;
        overflow-x: hidden;
    }
    .mainboard{
        margin:10px;
        margin-left:277px;
    }
</style>
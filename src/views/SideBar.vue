/**
* Created by vol on 2017/7/19.
*/
<template>
    <div class="sidebar">
        <el-menu theme="dark" uniqueOpened>
            <el-menu-item index="1"><i class="el-icon-setting"></i>管理员&nbsp;&nbsp;&nbsp;&nbsp;注销</el-menu-item>
            <el-menu-item index="2"><el-input
                    placeholder="请输入样品信息"
                    icon="search"
                    class="searchInput"
            >
            </el-input></el-menu-item>
            <el-submenu index="3">
                <template slot="title">检验流程&nbsp;&nbsp;&nbsp;<sup class="el-badge__content is-dot"></sup></template>
                <el-menu-item-group>
                    <template slot="title">收样管理</template>
                    <el-menu-item index="2-1">送样登记</el-menu-item>
                    <el-menu-item index="2-2">收样确认&nbsp;&nbsp;&nbsp;<el-badge class="mark" :value="10" /></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">检验管理</template>
                    <el-menu-item index="3-1">任务分配&nbsp;&nbsp;&nbsp;<el-badge class="mark" :value="154" /></el-menu-item>
                    <el-menu-item index="3-2">检验登记</el-menu-item>
                    <el-menu-item index="3-3">结果校核</el-menu-item>
                    <el-menu-item index="3-4">结果审核</el-menu-item>
                    <el-menu-item index="3-5">检验查询</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">报告管理</template>
                    <el-menu-item index="4-1">任务初审</el-menu-item>
                    <el-menu-item index="4-2">报告编制</el-menu-item>
                    <el-menu-item index="4-3">报告审核</el-menu-item>
                    <el-menu-item index="4-4">报告审批</el-menu-item>
                    <el-menu-item index="4-5">报告归档</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group>
                    <template slot="title">统计报表</template>
                    <el-menu-item index="5-1">客户类别</el-menu-item>
                    <el-menu-item index="5-2">部门管理</el-menu-item>
                    <el-menu-item index="5-3">报告审核</el-menu-item>
                    <el-menu-item index="5-4">报告审批</el-menu-item>
                    <el-menu-item index="5-5">报告归档</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
                <template slot="title">基础设置</template>
                <el-menu-item index="5-1">客户类别</el-menu-item>
                <el-menu-item index="5-2">部门管理</el-menu-item>
                <el-menu-item index="5-3">报告审核</el-menu-item>
                <el-menu-item index="5-4">报告审批</el-menu-item>
                <el-menu-item index="5-5">报告归档</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">系统管理</template>
                <el-menu-item index="5-1" @click="changePath('user')">用户管理</el-menu-item>
                <el-menu-item index="5-2">权限设置</el-menu-item>
                <el-menu-item index="5-3">报告审核</el-menu-item>
                <el-menu-item index="5-4">报告审批</el-menu-item>
                <el-menu-item index="5-5">报告归档</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>

import ElBadge from "../../node_modules/element-ui/packages/badge/src/main.vue";
import ElMenuItemGroup from "../../node_modules/element-ui/packages/menu/src/menu-item-group.vue";

export default{
    methods:{
        changePath:function(path){
            this.$router.push({path:'/user'});
        }
    }

}
</script>
<style>
.item{
    padding:10px 0;
}
</style>
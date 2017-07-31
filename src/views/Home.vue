/**
* Created by vol on 2017/7/19.
*/
<template>
    <div class="home">
        <div class="jumbotron">
            <div class="header">
                <div class="logo">
                    <img src="../assets/img/logo.jpg">
                </div>
                <div class="companyInfo">
                    <h1 align="center" class="home-title">湖南省兽药饲料监察所</h1>
                    <h3 align="center" class="home-title-2">实验室管理系统</h3>
                </div>
            </div>
        </div>
        <div>
            <el-row>
                <el-col :span="16" >
                    <el-card style="height:350px; margin-right:10px;">
                        <div slot="header" class="clearfix">
                            <span style="line-height: 36px;"><i class="el-icon-time"></i> 全所任务情况</span>
                            <el-button style="float: right;" type="primary">刷新</el-button>
                        </div>
                        <div class="text item">
                            <el-steps  :active="1">
                                <el-step status="process" icon="edit" title="收样确认" description="10"></el-step>
                                <el-step status="error" title="检验进行中" description="350"></el-step>
                                <el-step status="success" title="报告编制" description="100"></el-step>
                                <el-step status="active" title="报告审核" description="62"></el-step>
                                <el-step status="wait" title="报告审批" description="122"></el-step>
                            </el-steps>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-card style="height:350px;">
                        <div slot="header" class="clearfix">
                            <span style="line-height: 36px;"><i class="el-icon-time"></i> 个人任务</span>
                            <el-button style="float: right;" type="primary">刷新</el-button>
                        </div>
                        <div class="text item">
                            <p style="float:left"> 任务分配</p><el-tag style="float:right" type="primary">154</el-tag>
                        </div>
                        <div class="text item">
                            <p style="float:left"> 检验登记</p><el-tag style="float:right" type="primary">266</el-tag>

                        </div>
                        <div class="text item">
                            <p style="float:left"> 结果校核</p><el-tag style="float:right" type="primary">18</el-tag>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default{

}
</script>
<style>
.home-title{
    font-size:40px;
    margin:10px;
}
.home-title-2{
    font-size:25px;
    padding-top:10px;
}

.jumbotron {
    padding-top: 10px;
    padding-bottom: 30px;
    margin-bottom: 10px;
    color: #324157;
    background-color: #fff;
    border:1px solid #324157;;
    border-radius:10px;
}
.header{
    margin:auto 50px;
    height:180px;
}
.logo{
    float:left;
    margin:20px;
}
.companyInfo{
    float:left;
    margin-top:40px;
}
.text {
    font-size: 14px;
}
.item {
    padding: 18px 0;
}
</style>
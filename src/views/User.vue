/**
* Created by vol on 2017/7/23.
*/
<template>
    <div class="User">
        <el-dialog title="添加用户"  :visible.sync="dlg_isShowAddUserDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="addUserForm" :label-position="dlg_labelPosition" :rules="addUser_rules" ref="addUserForm" label-width="80px">
                <el-form-item label="用户姓名" prop="username" class="is-required">
                    <el-input v-model="addUserForm.username"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号" prop="userid" class="is-required">
                    <el-input  auto-complete="off" v-model="addUserForm.userid"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="password" class="is-required">
                    <el-input  auto-complete="off" type="password" value="123" v-model="addUserForm.password"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" prop="tel">
                    <el-input  auto-complete="off" v-model="addUserForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="department" class="is-required">
                    <el-select v-model="addUserForm.department" placeholder="请选择部门...">
                        <el-option
                                v-for="item in deptInfo"
                                :key="item.id"
                                :label="item.deptName"
                                :value="item.deptName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dlg_isShowAddUserDlg=false;">取 消</el-button>
                    <el-button type="primary" @click="addUser()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="查看用户"  :visible.sync="dlg_isShowUserInfoDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="showUserInfoForm" :label-position="dlg_labelPosition" ref="showUserInfoForm" label-width="80px">
                <el-form-item label="用户姓名">
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.username"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号">
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.userid"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门">
                    <el-select  v-model="showUserInfoForm.department" placeholder="请选择部门...">
                        <el-option
                                v-for="item in deptInfo"
                                :key="item.id"
                                :label="item.deptName"
                                :value="item.id.toString()">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户签名">
                    <img src="../assets/sign.png" width="150">
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button type="primary" @click="dlg_isShowUserInfoDlg=false;">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="修改用户"  :visible.sync="dlg_isShowUpdateUserDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="updateUserInfoForm" :label-position="dlg_labelPosition" :rules="addUser_rules" ref="updateUserForm" label-width="80px">
                <el-form-item label="用户姓名" prop="username" class="is-required">
                    <el-input  auto-complete="off" v-model="updateUserInfoForm.username"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号" prop="userid" class="is-required">
                    <el-input  auto-complete="off" v-model="updateUserInfoForm.userid"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" v-model="updateUserInfoForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="department"  class="is-required">
                    <el-select v-model="updateUserInfoForm.department" placeholder="请选择部门...">
                        <el-option
                                v-for="item in deptInfo"
                                :key="item.id"
                                :label="item.deptName"
                                :value="item.id.toString()">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dlg_isShowUpdateUserDlg=false;">取 消</el-button>
                    <el-button type="primary" @click="updateUser()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="上传签名"  :visible.sync="dlg_isUploadSignDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dlg_isShowUpdateUserDlg=false;">取 消</el-button>
                    <el-button type="primary" @click="updateUser()">确 定</el-button>
            </span>
        </el-dialog>
        <el-dialog title="确定删除吗？"  :visible.sync="dlg_isDeleteUserDlg" size="tiny" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="showUserInfoForm" :label-position="dlg_labelPosition" ref="showUserInfoForm" label-width="80px">
            <el-form-item label="登录帐号">
                <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.loginName"></el-input>
            </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dlg_isDeleteUserDlg=false;">取 消</el-button>
                    <el-button type="primary" @click="dlg_isDeleteUserDlg=false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="userNav">
            <el-menu  class="el-menu-demo" mode="horizontal">
                <el-menu-item index="1" @click="dlg_isShowAddUserDlg=true;"><i class="el-icon-plus"></i>添加用户</el-menu-item>
                <el-menu-item style="float:right" index="5"><el-input placeholder="请输入查询内容" icon="search">
                </el-input></el-menu-item>
            </el-menu>
        </div>
        <div class="userTable">
            <div class="pageNum">
                <el-pagination
                        :page-sizes="pageSizes"
                        :page-size="pageSize"
                        layout="total, sizes, prev,  pager, next"
                        :total="totalUser">
                </el-pagination>
            </div>
            <el-table
                    :data="userList"
                    border
                    style="width: 100%">
                <el-table-column width="70" prop="id" label="序号"></el-table-column>
                <el-table-column
                        width="120"
                        prop="username"
                        label="姓名"
                        >
                </el-table-column>
                <el-table-column
                        width="120"
                        prop="userid"
                        label="用户名"
                        >
                </el-table-column>
                <el-table-column
                        width="150"
                        prop="tel"
                        label="手机"
                       >
                </el-table-column>
                <el-table-column
                        width="120"
                        prop="department"
                        label="所属部门"
                        >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        >
                    <template scope="scope">
                        <el-button type="text" size="small" @click="showUserInfo(scope.$index)">查看</el-button>
                        <el-button type="text" size="small" @click="showUpdateUserInfo(scope.$index);">修改</el-button>
                        <el-button type="text" size="small" @click="dlg_isUploadSignDlg=true;">上传签名</el-button>
                        <el-button type="text" size="small" @click="dlg_isDeleteUserDlg=true;">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return {
            //窗口显示，关闭标志
            dlg_isShowAddUserDlg:false,
            dlg_isShowUserInfoDlg:false,
            dlg_isShowUpdateUserDlg:false,
            dlg_isUploadSignDlg:false,
            dlg_isDeleteUserDlg:false,

            //页面初始数据
            deptInfo:[], //部门：下拉选项  created 时初始化

            //表格显示数据
            pageSizes:[10,30,50],
            pageSize:10,
            currentPage:1,
            totalUser:1000,


            dlg_modelCloseOption:false,
            dlg_labelPosition:'right',
            addUserForm:{
                username:'',
                userid:'',
                password:'',
                tel:'',
                department:''
            },
            showUserInfoForm:{},
            updateUserInfoForm:{},
            addUser_rules:{
                username:[
                    {required:true,message:'请输入用户姓名',trigger:'blur'}
                ],
                userid:[
                    {required:true,message:'请输入登录用户名',trigger:'blur'}
                ],
                password:[
                    {required:true,message:'请输入初始密码',trigger:'blur'}
                ],
                department:[
                    {required:true,message:'请选择所属部门',trigger:'change'}
                ]
            },
            userList:[]
        }
    },
    methods:{
        showUserInfo(index){
            this.$ajax.get('http://localhost:3333/user/getUserByUserId',
                {
                    params:{
                        userid:this.userList[index].userid
                    }
                })
                .then(function(res){
                    this.showUserInfoForm = res.data[0];
                    console.log(res);
                }.bind(this))
                .catch();

            this.dlg_isShowUserInfoDlg = true;
        },
        showUpdateUserInfo(index){
            this.$ajax.get('http://localhost:3333/user/getUserByUserId',
                {
                    params:{
                        userid:this.userList[index].userid
                    }
                })
                .then(function(res){
                    this.updateUserInfoForm = res.data[0];
                    console.log(this.updateUserInfoForm);
                }.bind(this))
                .catch();

            this.dlg_isShowUpdateUserDlg = true;
        },
        addUser(){
            this.$refs['addUserForm'].validate(function(valid){
                if(valid){
                    //添加用户信息,需要将密码进行md5加密
                    this.$ajax.post('http://localhost:3333/user/addUser',this.addUserForm)
                        .then(function(res){
                            console.log('res',res);
                            if(res.data.result===1){
                                //录入成功，给出提示信息并关闭当前窗口
                                this.$message({
                                    showClose:true,
                                    message:res.data.msg,
                                    type:'success'
                                });
                                this.dlg_isShowAddUserDlg = false;
                                //重置输入窗口
                                this.$refs.addUserForm.resetFields();
                            }else if(res.data.result===0){
                                //该用户id已经存在，让用户id窗口获取到焦点 并给出提示

                            }
                        }.bind(this)).catch(function(err){
                            console.log('err',err);
                        }.bind(this));
                }else{
                    console.log('error submit!');
                    return false;
                }
            }.bind(this));
        },
        updateUser(){
            this.$refs['updateUserForm'].validate(function(valid){
                if(valid){
                    //todo 完成数据提交
                    this.dlg_isShowUpdateUserDlg = false;
                }else{
                    console.log('error submit!');
                    return false;
                }
            }.bind(this));
        }
    },
    beforeMount:function(){
        //获取dept信息
        this.$ajax.get('http://localhost:3333/base/getDeptList')
            .then(function(res){
                this.deptInfo = res.data;
                //需要bind(this);
            }.bind(this))
            .catch(function(err){
                console.log(err);
            });
        //获取用户列表信息
        this.$ajax.get('http://localhost:3333/user/getUserList',
            {
                params:{
                    pageSize:this.pageSize,
                    currentPage:this.currentPage
                }

            })
            .then(function(res){
                this.totalUser = res.data.total;
                this.userList = res.data.users;
            }.bind(this))
            .catch();
    }
}
</script>
<style>
.userNav{
    position:fixed;
    top:10px;
    left:277px;
    right:24px;
    z-index:1000;
}
.userTable{
    margin-top:85px;
}
.pageNum{
    float:right;
    margin-bottom:5px;
}
</style>
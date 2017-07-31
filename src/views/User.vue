/**
* Created by vol on 2017/7/23.
*/
<template>
    <div class="User">
        <el-dialog title="添加用户"  :visible.sync="dlg_isShowAddUserDlg" size="small" :close-on-click-modal="dlg_modelCloseOption">
            <el-form :model="addUserForm" :label-position="dlg_labelPosition" :rules="addUser_rules" ref="addUserForm" label-width="80px">
                <el-form-item label="用户姓名" prop="name" class="is-required">
                    <el-input  auto-complete="off" v-model="addUserForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号" prop="loginName" class="is-required">
                    <el-input  auto-complete="off" v-model="addUserForm.loginName"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="pwd" class="is-required">
                    <el-input  auto-complete="off" value="123" v-model="addUserForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" v-model="addUserForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="dept"  class="is-required">
                    <el-select v-model="addUserForm.dept" placeholder="请选择部门...">
                        <el-option label="业务室" value="4"></el-option>
                        <el-option label="财务室" value="5"></el-option>
                        <el-option label="综合科" value="6"></el-option>
                        <el-option label="检验一室" value="1"></el-option>
                        <el-option label="检验二室" value="2"></el-option>
                        <el-option label="检验三室" value="3"></el-option>
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
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号">
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.loginName"></el-input>
                </el-form-item>
                <el-form-item label="初始密码">
                    <el-input  auto-complete="off" readonly="readonly" value="123" v-model="showUserInfoForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" readonly="readonly" v-model="showUserInfoForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门">
                    <el-select v-model="showUserInfoForm.dept" placeholder="请选择部门...">
                        <el-option label="业务室" value="4"></el-option>
                        <el-option label="财务室" value="5"></el-option>
                        <el-option label="综合科" value="6"></el-option>
                        <el-option label="检验一室" value="1"></el-option>
                        <el-option label="检验二室" value="2"></el-option>
                        <el-option label="检验三室" value="3"></el-option>
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
                <el-form-item label="用户姓名" prop="name" class="is-required">
                    <el-input  auto-complete="off" v-model="updateUserInfoForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录帐号" prop="loginName" class="is-required">
                    <el-input  auto-complete="off" readonly="readonly" v-model="updateUserInfoForm.loginName"></el-input>
                </el-form-item>
                <el-form-item label="初始密码" prop="pwd" class="is-required">
                    <el-input  auto-complete="off" value="123" v-model="updateUserInfoForm.pwd"></el-input>
                </el-form-item>
                <el-form-item label="联系手机" >
                    <el-input  auto-complete="off" v-model="updateUserInfoForm.tel"></el-input>
                </el-form-item>
                <el-form-item label="所属部门" prop="dept"  class="is-required">
                    <el-select v-model="updateUserInfoForm.dept" placeholder="请选择部门...">
                        <el-option label="业务室" value="4"></el-option>
                        <el-option label="财务室" value="5"></el-option>
                        <el-option label="综合科" value="6"></el-option>
                        <el-option label="检验一室" value="1"></el-option>
                        <el-option label="检验二室" value="2"></el-option>
                        <el-option label="检验三室" value="3"></el-option>
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
                        :page-sizes="[10, 30, 100]"
                        :page-size="10"
                        layout="total, sizes, prev,  pager, next"
                        :total="1000">
                </el-pagination>
            </div>
            <el-table
                    :data="userData"
                    border
                    style="width: 100%">
                <el-table-column width="70" prop="id" label="序号"></el-table-column>
                <el-table-column
                        width="150"
                        prop="name"
                        label="姓名"
                        >
                </el-table-column>
                <el-table-column
                        width="150"
                        prop="userId"
                        label="用户名"
                        >
                </el-table-column>
                <el-table-column
                        width="150"
                        prop="email"
                        label="手机"
                       >
                </el-table-column>
                <el-table-column
                        width="180"
                        prop="dept"
                        label="所属部门"
                        >
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        >
                    <template scope="scope">
                        <el-button type="text" size="small" @click="dlg_isShowUserInfoDlg=true;">查看</el-button>
                        <el-button type="text" size="small" @click="dlg_isShowUpdateUserDlg=true;">修改</el-button>
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
            page_size:10,
            current_page:1,

            dlg_modelCloseOption:false,
            dlg_labelPosition:'right',
            addUserForm:{
                name:'',
                loginName:'',
                pwd:'',
                tel:'',
                dept:''
            },
            showUserInfoForm:{
                name:'张三',
                loginName:'zhangsan',
                pwd:'123',
                tel:'13912345678',
                dept:'3'
            },
            updateUserInfoForm:{
                name:'张三',
                loginName:'zhangsan',
                pwd:'123',
                tel:'13912345678',
                dept:'3'
            },
            addUser_rules:{
                name:[
                    {required:true,message:'请输入用户姓名',trigger:'blur'}
                ],
                loginName:[
                    {required:true,message:'请输入登录用户名',trigger:'blur'}
                ],
                pwd:[
                    {required:true,message:'请输入初始密码',trigger:'blur'}
                ],
                dept:[
                    {required:true,message:'请选择所属部门',trigger:'change'}
                ]
            },
            userData:[
                {
                    id:1,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:2,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:3,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:4,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:5,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:6,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:7,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:8,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:9,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:10,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:11,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                },
                {
                    id:12,
                    name:'张三',
                    userId:'zhangSan',
                    email:'13912345678',
                    dept:'检验一室'
                }
            ]
        }
    },
    methods:{
        getUser(){

        },
        addUser(){
            this.$refs['addUserForm'].validate(function(valid){
                if(valid){
                    this.dlg_isShowAddUserDlg = false;
                }else{
                    console.log('error submit!');
                    return false;
                }
            }.bind(this));
        },
        updateUser(){
            this.$refs['updateUserForm'].validate(function(valid){
                if(valid){
                    this.dlg_isShowUpdateUserDlg = false;
                }else{
                    console.log('error submit!');
                    return false;
                }
            }.bind(this));
        }
    },
    created:function(){
        console.log('aaaa');
        //获取dept信息
        this.$ajax.get('http://localhost:3333/base/getDeptList')
            .then(function(res){
                console.log(res);
            })
            .catch(function(err){
                console.log(err);
            })
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
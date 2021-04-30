<template>
    <div class="webHeader">
        <router-link to="/index" class="logo">
            <img src="@/assets/images/logo.jpg" alt="" srcset="" >
        </router-link>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#32CD32"> 
            <el-menu-item index="1">
                <router-link to="/index">
                    首页
                </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/sale">
                    供应大厅
                </router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/class">
                    农技课堂
                </router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <router-link to="/communication">
                    农学交流角
                </router-link>
            </el-menu-item>
        </el-menu>
        <div v-if="!getIsLogin" class="login">
            <router-link to="/communication">
                登陆
            </router-link>
            <span>/</span>
            <router-link to="/communication">
                注册
            </router-link>
        </div>
        <div v-else>
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{getUserName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                        退出登陆
                    </el-dropdown-item>
                </el-dropdown-menu>
                </el-dropdown>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    name:'WebHeader',
    data(){
        return{
            activeIndex:'1'
        }
    },
    methods:{
        handleSelect(){

        }
    },
    computed:{
        ...mapGetters(['getIsLogin','getUserName'])
    }
}
</script>
<style lang="scss" scoped>
    .webHeader{
        width:1200px;
        height: 80px;
        line-height: 80px;
        display: flex;
        align-items: center;
        margin: 0 auto;
        .logo{
            width: 180px;
            height: 80px;
            line-height: 80px;
            img{
                width: 180px;
                height: 80px;
                line-height: 80px;
            }
        }
        .el-menu-demo{
            height: 80px;
            line-height: 80px;
            background-color: #ffffff;
            border: none;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;;
            text-decoration: none;
            .el-menu-item{
                font-size: 18px;
                color: #909399;
            }
        }
        .login{
            height: 40px;
            text-align: center;
            line-height: 40px;
            padding: 0 8px;
            border: 1px solid #909399;
            border-radius: 2px;
            overflow: hidden;
            a{
                color:#909399
            }
        }
    }
</style>

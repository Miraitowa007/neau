<template>
    <div class="class">
        <el-tabs type="border-card">
            <el-tab-pane label="精选">
                <ul  class="newsList">
                   <li class="list" v-for="(item,index) in FeaturedList" :key="index">
                       <img :src="item.imgsrc" alt="" srcset="">
                       <div class="title">{{item.title}}</div>
                   </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="最新">
                <ul>

                </ul>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return{
            FeaturedList:[],
            UptodateList:[]
        }
    },
    created(){
        this.$fetch.api_news.getNewsList().then((res)=>{
            this.FeaturedList=res.data.FeaturedList;
            this.UptodateList=res.data.UptodateList;
        })
    }
}
</script>
<style lang="scss">
.class{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
    .el-tabs {
        margin: 10px;
        .is-active{
            color: #fff !important;
            background: #32CD32 !important;
        }
        .newsList{
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            .list{
                width: 280px;
                height: 250px;
                padding: 8px;
                margin-right: 20px;
                margin-top: 20px;
                &:nth-of-type(4n){
                    margin-right: 0;
                }
                img{
                    width:240px;
                    height: 200px;
                    margin: 0;
                }
                .title{
                    font-weight: 600;
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                }
            }
        }
        
    }
}

</style>
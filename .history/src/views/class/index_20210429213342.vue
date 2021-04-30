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
                width: 268px;
                height: 268px;
                padding: 8px;
                margin-right: 25px;
                padding-top: 20px;
                box-sizing: border-box;
                &:nth-of-type(4n){
                    margin-right: 0;
                }
                img{
                    width:255px;
                    height: 240px;
                    margin: 0;
                }
                .title{
                    font-weight: bold;
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
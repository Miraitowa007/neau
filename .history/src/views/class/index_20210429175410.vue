<template>
    <div class="class">
        <el-tabs type="border-card">
            <el-tab-pane label="精选">
                <ul v-for="(item,index) in FeaturedList" :key="index" class="newsList">
                   <li class="list">
                       <img :src="item.imgsrc" alt="" srcset="">
                       <div>{{item.title}}</div>
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
                width: 300px;
                height: 400px;
            }
        }
        
    }
}

</style>
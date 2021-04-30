<template>
    <div class="class">
        <el-tabs type="border-card">
            <el-tab-pane label="精选">
                <div></div>
            </el-tab-pane>
            <el-tab-pane label="最新">
                <div></div>
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
    }
}
</script>
<style lang="scss">
.class{
    width: 1200px;
    margin: 0 auto;
    .el-tabs {
        margin: 10px;
        .is-active{
            color: #fff !important;
            background: #32CD32 !important;
        }
    }
}

</style>
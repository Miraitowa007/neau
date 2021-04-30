<template>
    <div class="communication">
        <header class="header">
            <div class="share">分享与求助</div>
            <button class="publish">
                <i class="el-icon-edit"></i>
                我要发布
            </button>
        </header>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.communication{
    width: 1200px;
    margin: 0 auto;
    .header{
        height: 60px;
        line-height: 60px;
        margin: 0 auto;
        display: flex;
        border: 1px solid #32CD32;
        position: relative;
        .share{
            margin-left: 20px;
        }
        .publish{
            width: 100px;
            height: 40px;
            border: none;
            position: absolute;
            top:10px;
            right: 20px;
        }
    }
}
</style>
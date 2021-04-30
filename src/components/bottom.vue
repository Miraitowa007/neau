<template>
    <div>
        <ul class="statement">
            <li >
                <div class="protection"></div>
                <div class="title">消费者保护</div>
            </li>
            <li >
                <div class="divery"></div>
                <div class="title">送货保证</div>
            </li>
            <li >
                <div class="response"></div>
                <div class="title">快速响应</div>
            </li>
            <li >
                <div class="pay"></div>
                <div class="title">安全支付环境</div>
            </li>
            <li >
                <div class="Guarantee"></div>
                <div class="title">真实保证</div>
            </li>
        </ul>
        <div class="bottom">If you have any other questions, please contact13604501205@163.com</div>
    </div>
</template>
<script>
export default {
    name:'bottom',
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.statement{
    width: 1200px;
    margin: 10px auto;
    display: flex;
    justify-content: space-around;
    li{
        border-right: 1px solid #e9e9e9;
        width: 240px;
        height: 182px;
        float: left;
        text-align: center;
        &:last-child{
            border: none;
        }
    }
    .title{
        color: #333;
        font-size: 14px;
        margin-top: 20px;
        display: block;
        font-weight: 700;
    }
    .protection{
        width: 50px;
        height: 52px;
        background: url('../assets/images/icon_sprite.png');
        margin: 40px auto 0;
    }
    .divery{
        width: 50px;
        height: 52px;
        background: url('../assets/images/icon_sprite.png');
        margin: 40px auto 0;
        background-position: 0 -64px
    }
    .response{
        width: 50px;
        height: 52px;
        background: url('../assets/images/icon_sprite.png');
        margin: 40px auto 0;
        background-position: 0 -114px
    }
    .pay{
        width: 50px;
        height: 52px;
        background: url('../assets/images/icon_sprite.png');
        margin: 40px auto 0;
        background-position: 0 -168px
    }
    .Guarantee{
        width: 50px;
        height: 52px;
        background: url('../assets/images/icon_sprite.png');
        margin: 40px auto 0;
        background-position: 0 -220px;
    }
}
.bottom{
    margin: 0 auto 15px;
    color: #bbb;
    font-size: 16px;
}
</style>
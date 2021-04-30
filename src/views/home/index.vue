<template>
    <div class="home">
        <el-carousel height="500px" margin-top="20px" class="banner_part">
            <el-carousel-item v-for="(item,index) in imgSrc" :key="index">
                <img :src="item" alt="" class="bg">
                <img :src="item" alt="" srcset="" class="banner">
            </el-carousel-item>
        </el-carousel>
        <div class="news">
            <div class="header">
                news
                <img src="@/assets/icons/speaker.png" class="icon_speaker">
            </div>
            <ul v-for="item in news" :key="item">
                <li class="list">
                    <span class="title">{{item}}</span>
                    <span class="span">></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                imgSrc:[
                    require('../../assets/images/banner2.jpg'),
                    require('../../assets/images/banner6.jpg'),
                    require('../../assets/images/banner8.jpg')
                ],
                news:[
                    '关于如何播种',
                    '关于如何播种',
                    '关于如何播种'

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home{
        margin: 0 auto;
        position: relative;
        .banner_part{
            position: relative;
        }
        .news{
            width: 300px;
            height: 400px;
            background: #fff;
            position: absolute;
            top: 2vh;
            right: 10vw;
            border-radius: 10px;
            box-shadow: 9px 9px 10px rgb(0 0 0 / 20%);
            z-index: 2;
            .header{
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                font-weight: bold;
                padding-left: 10px;
                text-align: left;
                border-bottom: 1px solid #EBEFF4;
                .icon_speaker{
                    width: 16px;
                }
            }
            .list{
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #EBEFF4;
                padding: 0 10px;
                cursor: pointer;
                display: flex;
                .title{
                    display: block;
                    margin: 0;
                    text-align: left;
                    width: 260px;
                }
                .span{
                    font-size: 16px;
                    color:#C0C0C0;
                }
            }
        }
        .bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 500px;
            filter: blur(20px);
            z-index: -1;
        }
        .banner{
            width:900px;
            height:500px;
            box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            margin-left: -300px;
        }
    }
</style>
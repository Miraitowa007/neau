<template>
    <div class="sale">
        <header class="search">
            <i class="el-icon-search"></i>
            <input v-model="searchName" placeholder="搜索您想要的商品"/>
            <button class="query" @click="getProductList">搜索</button>
        </header>
        <ul class="blockList">
            <li class="block">全部商品</li>
            <li class="block">新鲜水果</li>
            <li class="block">绿色蔬菜</li>
            <li class="block">禽畜肉蛋</li>
            <li class="block">粮油米面</li>
            <li class="block">种子种苗</li>
        </ul>
        <div class="product">
            <div v-for="(item,index) in productList" :key="index" class="productItem">
                <img :src="item.list.imgsrc" alt="" srcset="">
                <div class="price">{{item.list.price}}</div>
                <div class="name">{{item.list.name}}</div>
                <div class="place">{{item.list.place}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            searchName:'',
            productList:[]
        }
    },
    created() {
        this.getProductList();
        console.log(this.productList)
    },
    mounted() {
        let oli=document.getElementsByClassName('block');
        oli[0].classList="block active";
        for(let i=0;i<oli.length;i++){
            oli[i].onclick=function(){
                for(let i=0;i<oli.length;i++){
                    oli[i].classList="block";
                }
                oli[i].classList="block active";
            }
        }
        
    },
    methods: {
        getProductList(){
            this.$fetch.api_product.getProductList()
            .then(res=>{
                console.log(res.data)
                this.productList=res.data;
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .sale{
        width: 1200px;
        margin: 0 auto;
        .search{
            display: flex;
            width: 400px;
            height: 40px;
            line-height: 40px;
            text-align: left;
            padding-left: 10px;
            border: 2px solid #32CD32;
            overflow: hidden;
            margin: 10px auto;
            .el-icon-search{
                font-size: 18px;
                line-height: 40px;
                color: 	LightGrey;
            }
            input{
                width:300px;
                border:0;
                outline:none;
            }
            .query{
                border:none;
                height: 40px;
                flex-grow: 1.0;
                background: #32CD32;
                margin: 0;
                padding: 0;
                color: #fff;
            }
        }
        .blockList{
            display: flex;
            justify-content: space-between;
            .block{
                width: 180px;
                height: 80px;
                background:	#f0eeee;
                cursor: pointer;
                text-align: center;
                line-height: 80px;
                &:hover{
                    background: #cfcece;
                }
            }
            .active{
                background: #32CD32;
                opacity: 0.8;
            }
        }
        .product{
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            .productItem{
                width: 200px;
                height: 260px;
                margin-right: 50px;
                &:nth-of-type(5n){
                    margin-right: 0;
                }
                img{
                    width: 200px;
                    height: 200px;
                }
                .price{
                    font-size: 16px;
                    font-weight: 600;
                    text-align: left;
                    color:	#FF4500;
                    &::after{
                        content: '元/斤';
                        color:	#FF4500;
                        display: block;
                    }
                }
                .name{

                }
            }
        }
    }
</style>
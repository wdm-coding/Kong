<template>
  <div id="searchitem">
       <van-row type="flex" justify="center" align="center">
            <van-col span="4">
                <div class="pic-box" v-if="item.pic">
                   <img :src="item.pic.nows" alt="">
                </div>
            </van-col>
            <van-col span="15">
                <div class="text-box" v-if="item.directors">
                    <h3>{{item.title}}</h3>
                    <p><span>{{item.rating.count}}</span></p>
                    <p><span>{{item.directors[0].name}}</span></p>
                    <p><span>{{item.pubdate}}</span></p>
                </div>
            </van-col>
            <van-col span="4">
                <div class="btn-box">
                    <span>{{item.rating.count}}</span>
                </div>
            </van-col>
      </van-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row,Button } from 'vant';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
export default {
    name:"searchitem",
    props:["item"]
}
</script>

<style scoped>
    #searchitem{
        width:100%;height:130px;
        border-bottom:1px solid #999;
        border-top:1px solid #999;
        padding-top:10px;
    }
    .pic-box{
        height:120px;
        /* background-color: aqua; */
    }
    .pic-box img{
        width:100%;height:120px;
    }
    .text-box{
       height:120px;
       line-height:28px;
       /* background-color: chartreuse;  */
    }
    .text-box p{
        font-size:14px;
    }
    .btn-box{
        height:120px;
        text-align: right;
        line-height:120px;
        /* background-color: aqua; */
    }
</style>
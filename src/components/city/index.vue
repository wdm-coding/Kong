<template>
  <div id="city">
    <div class="city-box">
    <van-index-bar :sticky="true" :sticky-offset-top="100">
      <p>热门城市</p>
      <div class="hot-city">
        <van-row type="flex"  gutter="10" class="row-box">
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
          <van-col span="7" class="col-box" offset="1">span: 6</van-col>
        </van-row>
      </div>
          <van-index-anchor v-for="(item,index) in letterArr" :key="index" :index="item">
                <span>{{item}}</span>
                <van-cell
                  v-for="(v,i) in 3"
                  :key="i"
                  :title="v"
                  class="cell-box"
                />
          </van-index-anchor>
    </van-index-bar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor,cell,Col, Row  } from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(cell);
import { getMap } from '@/api';
export default {
    name:"city",
    data() {
    return {
      value: '',
      letterArr:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    };
  },
  mounted() {
    getMap().then((res)=>{
      console.log(res)
    })
  },
}
</script>

<style>
#city{
  height:100%;
  background-color:rgb(216, 213, 213);
  margin-top:110px !important;
  margin-bottom:50px !important;
}
.hot-city{
  text-align: left;
}
.row-box{
  background-color:rgb(243, 198, 198);
  padding:20px 10px;
}
.col-box{
  width:100px;height:40px;
  background-color:#fff;
  margin-top:10px;
  line-height:50px;
}
.cell-box{
   
  background-color:rgb(243, 198, 198);
}
.van-index-anchor{
  width:100% !important;
  padding:0 !important;
}
</style>
<template>
  <div id="search">
    <div class="searc-box">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="searc-list">
      <p>电影</p>
    </div>
    <Searchitem v-for="(v,i) in datalist" :key="i+'s'" :item="v"/>
  </div>
</template>

<script>
import Searchitem from './Searchitem';
import {requestData} from '@/api'
import Vue from 'vue';
import { Search } from 'vant';
Vue.use(Search);
export default {
    name:"search",
    data() {
    return {
        value: '',
        datalist:[]
      };
    },
    components:{
      Searchitem
    },
    mounted() {
      requestData('data/nowplaylist').then(res=>{
        console.log('res',res.data.items);
        this.datalist=res.data.items;
      })
    },

}
</script>

<style>
#search{
  height:100%;
  margin-top:110px !important;
  /* background-color:rgb(216, 213, 213); */
}
</style>
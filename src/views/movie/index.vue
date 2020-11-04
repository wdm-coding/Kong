<template>
  <div id="movie">
    <Head title="喵喵电影"/>
    <div class="tab-box">
          <van-tabs title-active-color="red" @click="onClick" v-model="activeName">
                    <van-tab :title-style="x" v-for="(v) in navbarlist" :key="v.path" :name="v.path">
                      <template #title>{{v.title}}<i :class="v.icon"></i></template>
                    </van-tab>
          </van-tabs>
    </div>
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
    <Footbar @myevent="mypath"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Col, Row,Tab, Tabs } from 'vant';
Vue.use(Col);
Vue.use(Row);
Vue.use(Tab);
Vue.use(Tabs);
import Head from '@/components/Header'
import Footbar from '@/components/Footer'
export default {
  name:'movie',
  data(){
  return{
    navbarlist:[
      {"title":"大连","icon":"el-icon-caret-bottom","path":"/movie/city"},
      {"title":"正在热映","icon":"","path":"/movie/nowPlaying"},
      {"title":"即将上映","icon":"","path":"/movie/willComing"},
      {"title":"","icon":"el-icon-search","path":"/movie/search"},
    ],
    x:"fontWeight:600",
    activeName:'/movie/nowPlaying'
  }
  },
  components:{
    Head,Footbar
  },
  mounted() {
    console.log('act',this.$router.history._startLocation)
    if(this.$router.history._startLocation==='/movie'){
        this.activeName='/movie/nowPlaying';
    }else if(this.$router.history._startLocation==="/"){
      this.activeName='/movie/nowPlaying';
    }else{
      this.activeName=this.$router.history._startLocation;
    }
  },
  methods:{
    onClick(path){
      this.$router.push(path);
      this.activeName=path;
    },
    mypath(path){
      console.log('movie  path',path)
      this.activeName=path;
    }
  }
}
</script>

<style scoped>
  .tab-box{
    width:100%;
    margin-top:62px;
    line-height:50px;
    text-align: center;
    border-bottom:1px solid #999;
    position:fixed;
    top:-8px;
    z-index:1000;
  }
  .el-icon-search{
    color:red;
    font-size:24px;
    font-weight: 600;
  }
</style>
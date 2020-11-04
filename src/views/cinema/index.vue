<template>
  <div id="cinema">
      <Head title="喵喵影院"/>
      <div class="sort-bar">
        <ul>
          
            <router-link tag="li" :to="v.path" v-for="(v,i) in sortList" :key="v.id" >
              <span @click="fn(i)">{{v.title}}</span><i class="el-icon-caret-bottom"></i>
              <p></p>
            </router-link>
          
        </ul>
      </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <Footbar/>
  </div>
</template>

<script>
import Head from '@/components/Header'
import Footbar from '@/components/Footer'
export default {
  name:'cinema',
  data(){
    return{
      // changeIndex:0,
        sortList:[
        {"title":"全城","id":1,"path":"/cinema/allcity"},
        {"title":"品牌","id":2,"path":"/cinema/brand"},
        {"title":"特色","id":3,"path":"/cinema/feature"},
        ]
    }
  },
  methods:{
    // fn(index){
    //   this.changeIndex=index;
    // },
    // changeRouter(){
    //   this.changeIndex=0;
    // }
  },
  mounted() {
    
  },
  components:{
    Head,Footbar
  }
}
</script>

<style scoped>
  #cinema{
   width:100% 
  }
  .sort-bar{
    margin-top:56px;
    background-color:rgb(248, 243, 243);
    border-bottom: 1px solid #999;
    width:100%;height:50px;
  }
  .sort-bar ul{
    display:flex;
    justify-content: space-around;
  }
  .sort-bar ul li{
    line-height:50px;
  }
  .router-link-active{
    font-weight:600;
    color:rgb(243, 51, 51);
  }
  .router-link-active p{
    position:absolute;
    top:100px;
    width:45px;
    border-bottom: 2px solid rgb(230, 28, 28);
  }
</style>
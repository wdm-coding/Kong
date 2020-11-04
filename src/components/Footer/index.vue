<template>
  <div id="footer">
      <el-row :gutter="20">
          <el-col :span="8" v-for="(v) in datalist" :key="v.id">
            <router-link tag="li" :to='v.path'>
              <div class="grid-content bg-purple" >
                  <van-icon :name="v.icon" size="25" @click="getPath()"/>
                  <span>{{v.title}}</span>
              </div>
            </router-link>
          </el-col>
        
      </el-row>
  </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name:"Foot",
  data(){
        return{
            datalist:[
                        {"title":'电影',"icon":"video","id":1,"path":"/movie"},
                        {"title":'影院',"icon":"vip-card","id":2,"path":"/cinema"},
                        {"title":'我的',"icon":"manager","id":3,"path":"/mine"}
                    ]
        }
    },
    methods:{
      getPath(){
        this.$emit('myevent','/movie/nowPlaying');
      }
    }
}
</script>

<style>
  #footer{
    position: fixed;
    bottom: -2px;
    width:100%;height:50px;
    background-color: hsl(0, 22%, 96%);
    text-align: center;
    line-height:26px;
    border-top:1px solid #999;
    /* z-index:1000; */
}
.iconfont{
  font-size:20px;
}
#head i{
    
    color: #333;
}
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .el-col .router-link-active{
    color:red;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    flex-direction: column;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>
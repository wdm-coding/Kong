<template>
  <div id="nowPlaying">
    <Nowplayitem  v-for="(v,i) in datalist" :key="i+'a'" :item="v" btn='购票' btnColor="danger"/>
  </div>
</template>

<script>
import Nowplayitem from './Nowplayitem'
import {requestData} from '@/api'
export default {
    name:'nowPlaying',
    data(){
      return{
        datalist:[]
      }
    },
    components:{
      Nowplayitem
    },
    mounted() {
      requestData('data/nowplaylist').then(res=>{
        console.log('res',res.data.items);
        this.datalist=res.data.items;
      })
    },
}
</script>

<style scoped>
#nowPlaying{
  margin-top:110px !important;
}
</style>
<template>
  <div id="willcoming">
    <Nowplayitem v-for="(v,i) in datalist" :key="i+'d'" :item="v" btn='预售' btnColor="info"/>
  </div>
</template>

<script>
import Nowplayitem from '../nowPlaying/Nowplayitem'
import {requestData} from '@/api'
export default {
    name:'willcoming',
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
#willcoming{
  margin-top:110px !important;
}
</style>
<template>
  <div id="head">
      <div class="headbar">
        <span>{{title}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'Head',
    props:{
      title:{
        type:String,
        default:"喵喵电影"
      }
    }
}
</script>

<style scoped>
  #head{
    position:fixed;
    width:100%;height:55px;
    top:0;
    z-index:1000;
  }
 .headbar{
   width:100%;height:55px;
   background-color: rgb(236, 44, 44);
   text-align: center;
   line-height:55px;
   font-size:20px;
   color:#fff;
   font-weight:600;
 }
</style>
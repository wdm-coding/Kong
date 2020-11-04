<template>
  <div id="allcity">
      <Cinemalist v-for="(v,i) in 10" :key="i"/>
  </div>
</template>

<script>
import Cinemalist from 'com/allcity/cinemalist';
export default {
    name:"allcity",
    components:{
      Cinemalist
    }
}
</script>

<style scoped>

</style>
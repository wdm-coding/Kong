<template>
  <div id="mine">
    <Head title="我的喵喵"/>
    <Login/>
    <Footbar/>
  </div>
</template>

<script>
import Head from '@/components/Header'
import Footbar from '@/components/Footer'
import Login from 'views/login'
export default {
  name:'mine',
  components:{
    Head,Footbar,Login
  }
}
</script>

<style scoped>

</style>
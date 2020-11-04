<template>
  <div id="cinemalist">
      <div class="cinema-item">
          <p>title <span>55元起</span></p>
          <p>address<span>555m</span></p>
          <div>
              <van-tag plain type="primary">标签</van-tag>
              <van-tag plain type="success">标签</van-tag>
              <van-tag plain type="danger">标签</van-tag>
              <van-tag plain type="warning">标签</van-tag>
          </div>
      </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tag } from 'vant';

Vue.use(Tag);
export default {

}
</script>

<style script>
    /* #cinemalist{
        height:110px;
        line-height:110px;
    } */
    .cinema-item{
        width:100%;height:110px;
        padding:15px 10px;
        line-height:30px;
        border-bottom: 1px solid #999;
        box-sizing: border-box;
    }
</style>
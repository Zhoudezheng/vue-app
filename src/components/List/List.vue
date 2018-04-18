<template>
    <div v-if="title">
      <div class="custom_tite pt10">
        <div class="leftimg titclass">
          <div class="img-meta">
            <img src="./images/2222.jpg" alt="">
          </div>
          <div class="more more2">
            <img src="./images/23a.png" alt="">
          </div>
        </div>
      </div>
      <div class="bcd" v-if="title.value">
        <img :src="title.value[0].share_target.param.image" alt="">
        <span class="haha"></span>
      </div>
      <div class="ft12">
        <div>{{title.value[0].share_target.param.title}}</div>
        <div>
          <span></span>
          <i>{{title.value[0].vid}}</i>
          <span class="ml10 mr10">|</span>
          {{title.value[0].video_size}}
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      props:{
        title:Object
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
 .leftimg titclass
   position relative
  .img-meta
    width 50%
    height 73px
    display inline-block
    img
      width 100%
      height 100%

  .more2
    width 40%
    height 73px
    display inline-block
    img
      width 61%
      height 72px
      margin-left 92px

  .ft12
    padding-bottom 20px
    padding-top 10px
    font-size 12px
  .bcd
    position relative
  .bcd img
    width 100%
    height 100%
  .bcd .haha
      background: url(./images/hha.png) 0 0 no-repeat;
      background-size: contain;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -10px;
      margin-top: -10px;
  .ft12 div
    text-align center
    .ml10
      margin-left 10px
    .mr10
      margin-right 10px

</style>

<template>
    <div>
      <header class="headers">
        <div class="left">
          <router-link  class='router'  to="/classif/leftclass" :class="{on:$route.path==='/classif/leftclass'}">分类</router-link>
        </div>
        <div class="right">
          <router-link  class='router' to="/classif/rightclass" :class="{on:$route.path==='/classif/rightclass'}">品牌</router-link>
        </div>
        <a href=""><img src="./images/search-ico.png" alt=""></a>
      </header>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
</template>
<script>
    export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .headers
    width 100%
    height 40px
    position fixed
    left 0
    right 0
    top 0
    border-bottom 1px solid slategray
    z-index 2
    background white
    div.left
      display inline-block
      width 46%
      height 40px
      text-align right
      line-height 40px
      margin-right 5px
      padding-right  5px
      font-size: 13px

    div.right
      display inline-block
      width 47%
      height 40px
      text-align left
      line-height 40px
      margin-left 5px
      padding-left   5px
      font-size: 13px;
    img
       position  absolute
       top: 14px
       right 14px
       width 15px
       height 15px



</style>

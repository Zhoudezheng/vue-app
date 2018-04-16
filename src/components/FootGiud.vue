<template>
  <div class="footernav">
    <ul class="footernav_ul">
      <li class="index-a"><a href="javascript:; "
                          :class="{on: '/miste'===$route.path}"
                         @click="goto('/miste')"></a></li>
      <li class="type-a"><a href="javascript:;"
                            :class="{on: '/classif'===$route.path}"
                            @click="goto('/classif')"></a></li>
      <li class="cart-a"><a href="javascript:;"
                            :class="{on: '/shoppingcart'===$route.path}"
                            @click="goto('/shoppingcart')"></a></li>
      <li class="myepet-a"><a href="javascript:;"
                              :class="{on: '/myself'===$route.path}"
                              @click="goto('/myself')"></a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        // 跳转到指定path的路由
        this.$router.replace(path)
      }

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footernav_ul
    width 100%
    height: 45px;
    border-top 1px solid #ccc
    position fixed
    left 0
    right 0
    bottom 0
    justify-content space-around
    text-align center
    line-height 45px
  .footernav_ul li
    width 25%
    float left
    height 55px
  .footernav_ul li a
    display block
    background-image url("/static/images/img (1).png")
    background-size 234px 163px
    margin 0 auto
    height 40px
    width 42px
    margin-top 2px
  .index-a a
    background-position -85px 0
  .index-a a.on
    background-position 0 0
  .type-a a
    background-position -85px -41px
  .type-a a.on
    background-position 0 -41px
  .cart-a a
    background-position -85px -81px
  .cart-a a.on
    background-position -128px -81px
  .myepet-a a
    background-position -85px -122px
  .myepet-a a.on
    background-position -42px -122px
</style>



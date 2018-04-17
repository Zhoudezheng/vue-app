<template>
  <div class="miste">
    <div class="headtop">
    <div>
      <div class="navhead">
        <img class="navlist" src="../../../static/images/1.jpg">
        <img class="navimg" src="../../../static/images/2.png">
      </div>
      <div class="navbar">
        <a href="javascript:;" class="nava">
          <span>狗狗</span>
          <span>|</span>
          <span>重庆</span>
          <i class="abc"></i>
        </a>
        <p class="navsearch">
         <a href=""><input type="search" placeholder="搜索商品和品牌">
         <span class="searcher"></span></a>
       </p>
        <a href="">
          <img class="xinxi" src="/static/images/01%20(8).png" alt="">
        </a>
      </div>
    </div>
    <div>
    <div class="bscroll">
      <ul class="abc" >
        <li class="on" v-for="(menu,index) in index.menus" :key="index"><a href="" ><span>{{menu.menu_name}}</span><i ></i></a></li>
      </ul>
    </div>
  </div>
    </div>
    <div class="bodytop">
    <div class="abc">
     <Banner></Banner>
    </div>
    <div>
      <div class="columnnavdiv">
        <Navbar></Navbar>
      </div>
    </div>
    <div>
      <div class="banner_item">
        <a href="">
          <img src="/static/images/11.gif" alt="">
        </a>
      </div>
    </div>
    </div>
    <Gide></Gide>
    <List></List>
    <Split></Split>
    <div class="flexBox2">
      <div class="flex-le">
        <img src="./images/333a.jpg" alt="">
        <img src="./images/333b.jpg" alt="">
      </div>
      <div  class="flex-le">
        <img src="./images/333c.jpg" alt="">
        <img src="./images/333d.jpg" alt="">
      </div>
    </div>
    <Split></Split>
    <div class="custom_tite pt10">
      <div class="leftimg titclass">
        <div class="img-meta">
          <img src="./images/2222.jpg" alt="">
        </div>
        <div class="more more2">
          <img src="./images/23a.png" alt="">
          <Split></Split>

        </div>
        <div class="hard">
          <ShopMist></ShopMist>
        </div>
        <List></List>
        <List></List>
        <List></List>
      </div>
      <div class="footimg">
        <img src="./images/7777.jpg" alt="">
      </div>
         <div>
           <Foot></Foot>
         </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import Gide from '../../components/Gide/Gide.vue'
  import List from '../../components/List/List.vue'
  import Split from '../../components/Split/Split.vue'
  import ShopMist from '../../components/ShopMIst/ShopMIst.vue'
  import Foot from '../../components/Foot/Foot.vue'
  import Banner from '../../components/Banner/Banner.vue'
  import Navbar from '../../components/Navbar/Navbar.vue'
    export default {
      mounted() {
        new BScroll('.bscroll', {
          scrollX: true,
          click: true
        });


        this.$store.dispatch('reqindex')
      },
      watch(){

      },
      computed:{
        ...mapState(['index'])
      },
      components:{
        Gide,
        List,
        Split,
        ShopMist,
        Foot,
        Banner,
        Navbar
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .headtop
    position fixed
    left 0
    top 0
    z-index 100
    background white
  .bodytop
    margin-top 140px
  .navhead
    position relative
   .navlist
     width 100%
   .navimg
     position absolute
     left 20px
     top 10px
     width 20px
     height 20px
  .navbar
    padding 15px  0 10px 10px
    position relative
    display inline-block
    span
      font-size 14px
    .nava i
      z-index 2
      font-style: normal;
      position: absolute;
      top: 26px;
      right: 243px;
      border-width: 4px;
      font-size: 0;
      line-height: 0;
      border-style: solid solid dotted;
      border-color: #898989 transparent transparent;
  .navsearch
    display inline-block
    margin-left 20px
    width 233px
    position relative
  .navsearch a input
    width: 100%;
    border: 0;
    height: 25px;
    background: #e9e9e9;
    border-radius: 4px;
    color: #bcbcbc;
    text-indent: 10px;
    font-size: 13px;
    outline: 0;
  .navsearch a .searcher
    position absolute
    width 10px
    height 10px
    background url("/static/images/search-ico (6).png") no-repeat
    background-size: 11px auto;
    top 8px
    left 210px
  .xinxi
    position absolute
    width 25px
    height 25px
    top 18px
    left 345px
  .bscroll ul
     width 140%
     display flex
     flex-direction row
    li
     width 20%
     text-align center
  .bscroll
    width 100%
  .bscroll ul li i
    position: absolute;
    bottom: -1px;
    left: 3.5%;
    width: 8%;
    height: 2px;
  .bscroll ul li.on i
    background green
    margin-bottom -2px
  .abc
    margin-top 6px


  .banner_item
     width 100%
  .banner_item img
     width 100%
     height 120px
  .flexBox2
    width 100%
    height 200px
    display flex
  .flexBox2 div
    height 100px
    width 50%
  .flexBox2 div img
    width 100%
    height 100%
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
      width 71%
      height 72px
      margin-left 92px
  .hard
    height 1250px
  .footimg
    width 100%
    height 30px
    img
     width 100%
     height 100%


</style>

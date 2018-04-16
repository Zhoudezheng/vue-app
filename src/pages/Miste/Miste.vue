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
        <li class="on"><a href="" ><span>首页</span><i ></i></a></li>
        <li><a href=""><span>狗狗主粮</span><i></i></a></li>
        <li><a href=""><span>零食</span><i></i></a></li>
        <li><a href=""><span>医疗保健</span><i></i></a></li>
        <li><a href=""><span>玩具</span><i></i></a></li>
        <li><a href=""><span>外出</span><i></i></a></li>
        <li><a href=""><span>服饰城</span><i></i></a></li>
      </ul>
    </div>
  </div>
    </div>
    <div class="bodytop">
    <div class="abc">
      <nav class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="#">
            <img src="/static/images/12.jpg">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="/static/images/13.jpg">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="/static/images/14.jpg">
          </a>
        </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="/static/images/15.jpg">
          </a>
        </div>
        <div class="swiper-slide">
            <a href="#">
              <img src="/static/images/16.jpg">
            </a>
          </div>
        <div class="swiper-slide">
          <a href="#">
            <img src="/static/images/17.jpg">
          </a>
        </div>
         </div>
      </div>
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
          <span class="swiper-pagination-bullet"></span>
        </div>
      </nav>
    </div>
    <div>
      <div class="columnnavdiv">
        <div>
          <ul class="hottype">
            <li>
              <a href="">
                <img src="/static/images/1a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/2a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/3a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/4a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/5a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/6a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/7a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/8a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/9a.jpg" alt="">
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/10a.jpg" alt="">
              </a>
            </li>
          </ul>
        </div>
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
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
    export default {
      mounted() {
        new BScroll('.bscroll', {
          scrollX: true,
          click: true
        });
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
              disableOnInteraction: false
            },
            pagination: { // 指定分页器容器
              el: '.swiper-pagination',
            }
//            el:
          })
        })
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .headtop
    position fixed
    left 0
    top 0
    z-index 10
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
  .banner  /*轮播*/
    width 100%
    height 100%
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          width 100%
          height 100%
          >a
            display block
            width 100%
            height 100%
            >img
              width 100%
              height 100%
  .swiper-pagination
    position: absolute;
    text-align: center;
    -webkit-transition: .3s;
    transition: .3s;
    -webkit-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 10
    top 270px
    left 40%
  .swiper-pagination-bullet
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
  .hottype
    width 100%
    display flex
    flex-flow wrap
    & li
      width 20%
      height 90px
    & li a img
       width 100%
       height 100%
  .banner_item
     width 100%
  .banner_item img
     width 100%
     height 120px
  .surprise-tit
     padding 10px
     height: 500px
  .titimg img
     width 20%


</style>

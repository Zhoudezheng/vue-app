<template>
    <div>
      <nav class="banner" v-if="cart.data">
        <div class="swiper-container" >
          <div class="swiper-wrapper"   >
            <div class="swiper-slide" v-for="(valu,index) in cart.data[1].value" :key="index">
              <a href="#">
                <img :src="valu.image">
              </a>
            </div>
          </div>
        </div>
        <div class="swiper-pagination">
          <span class="swiper-pagination-bullet"></span>
        </div>
      </nav>
    </div>
</template>
<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
    export default {
     mounted(){
      this.$store.dispatch('reqcart');
     },

     watch:{
      cart(){
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            autoplay:{
              disableOnInteraction: false,
            },

            pagination: { // 指定分页器容器
              el: '.swiper-pagination',
            }
          })
        })
      }

      },
      computed:{
        ...mapState(['cart'])
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
    background: red;
    opcity:0.5

</style>

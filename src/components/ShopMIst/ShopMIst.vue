<template>
    <div class="shopMist" v-if="index.datas">
      <img :src="index.datas[15].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[17].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[19].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[21].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[23].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[25].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[27].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[29].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[31].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[33].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[35].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[37].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[39].content_images[0][0].image" alt="">
      <Split></Split>
      <img :src="index.datas[41].content_images[0][0].image" alt="">
      <Split></Split>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
   import Split from '../Split/Split.vue'
    export default {
     components:{Split},
      mounted(){
       this.$store.dispatch('reqbrand')
      },
      computed:{
        ...mapState(['index'])
      }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopMist
    width 100%
    height 100%
    img
     width 100%
</style>

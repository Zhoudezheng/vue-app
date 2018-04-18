<template>
  <div class="aa">
    <router-view></router-view>
    <FootGiud ></FootGiud>
  </div>
</template>

<script>
  import FootGiud from './components/FootGiud/FootGiud.vue'
export default {
  components:{
    FootGiud
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .aa
    width 375px
</style>

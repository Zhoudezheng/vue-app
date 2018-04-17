<template>
  <div>
    <router-view></router-view>
    <FootGiud></FootGiud>
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

<style>
</style>

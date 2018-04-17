<template>
  <div>
    <ul class="hottype" v-if="index.datas">
      <li v-for="(menu,index) in index.datas[1].menus" :key="index">
        <a href="#">
          <img :src="menu.image">
          <span>{{menu.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState(['index'])
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
</style>

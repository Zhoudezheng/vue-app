<template>
  <div class="class" >
     <div class="leftclass">
     <div class="bscoolleft" ref="bscoolleft">
       <ul>
         <li class="list" :class="{on:index===cuttrindex}"
             @click="isShow(index)"
             v-for="(category,index) in classify.categorys" :key="index">{{category.name}}</li>
      </ul>
     </div>
      </div>
     <div class="rightclass" >
       <div class="bscoolright" ref="bscoolright">
       <div class="classlist" >
           <a class="righta" href="">{{cutterdex[0].title}}</a>
         <ul>
           <li v-for="(lis,index) in cutterdex[0].list" :key="index">
             <a href="" >
               <div>
                 <img :src="lis.photo" alt="">
               </div>
               <p>{{lis.name}}</p>
             </a>
           </li>
         </ul>
       </div>
       <span class="spilt"></span>
       <div class="classlist" v-if="cutterdex[1]" >
         <a class="righta" href="">{{cutterdex[1].title}}</a>
         <ul>
           <li v-for="(lis,index) in cutterdex[1].list" :key="index">
             <a href="" >
               <div>
                 <img :src="lis.logo" alt="">
               </div>
               <p>{{lis.name}}</p>
             </a>
           </li>
         </ul>
       </div>
       </div>
     </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex';
  import BScroll from 'better-scroll'
    export default {
    data(){
      return{
        cuttrindex:0
      }

    },
    mounted(){
      this.$store.dispatch('reqclassify',()=>{
        this.$nextTick(()=>{
          if(!this.scollleft){
            this.scollleft= new BScroll('.bscoolleft',{
              click:true,
              scrollY:true
            })
          }else {
            this.scollleft.refresh()
          }
          if(!this.scollleft){
            this.scollleft= new BScroll('.bscoolright',{
              click:true,
              scrollY:true
            })
          }else {
            this.scollleft.refresh()
          }
        })
      });
    },
    computed:{
      ...mapState(['classify']),
      cutterdex(){
        let {cuttrindex}=this;
        return this.classify.categorys[cuttrindex].cate_list
      }

     },
    methods:{
      isShow(index){
        this.cuttrindex=index
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

.class
   margin-top 40px
 .leftclass
   position: fixed;
   top: 40px;
   left: 0;
   bottom: 0;
   padding-bottom: 45px;
   border-right: 5px solid #f3f4f5;
   .bscoolleft
     height 100%
 ul
   height 670px
   li
     padding: 15px 0;
     border-bottom: 1px solid #f3f4f5;
     width: 70px;
     height 20px
     line-height 20px
     font-size: 13px;
     text-overflow: ellipsis;
     white-space: nowrap;
     overflow: hidden;
     list-style: none
     text-align center
     &.on
       color red

 .rightclass
    margin-left 75px
    border-top: 8px solid #f3f4f5;
 .classlist
     width 100%
     height 300px
     ul
      width 100%
      height 100%
      li
       float left
       width 33.33%
       /*display: list-item;*/
       height 116px

    .righta
     display block
     font-size 12px
     padding-left 8px
     margin-top 10px
     color: #999
    img
     width 90%
     height 90%
</style>

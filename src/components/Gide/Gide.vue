<template>
   <div>
     <div class="surprise">
       <div class="surprise-tit">
         <div class="titimg">
           <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" alt="">
         </div>
         <div class="nexttip">下一场开始</div>
         <div class="time">
           <span class="hour">11</span>
           <span>:</span>
           <span class="minute">00</span>
         </div>
         <div class="more">
           <a href="##">
             <img src="https://img2.epetbar.com/nowater/2018-02/02/12/80acfffe2d91b341fd2c8de903b3eace.png" alt="">
           </a>
         </div>
       </div>
       <div class="container" style="width: 100%;overflow: hidden">
         <div class="wrapper1">
           <ul class="content" style="width: 110%;display: flex;flex-direction: row">
             <li class="content_list">
               <a href="##">
                 <img src="https://img1.epetbar.com/2017-01/17/18/7dd229ee03e407cdeb9a72f502c68a6c.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
               </a>
               <div class="cred ftc mt5">
                 <span class="ft12">¥</span>
                 <span class="ft17">37.90</span>
               </div>
               <p class="c999 ftc ft12">省341.10</p>
             </li>
             <li class="content_list">
               <a href="##">
                 <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
               </a>
               <div class="cred ftc mt5">
                 <span class="ft12">¥</span>
                 <span class="ft17">37.90</span>
               </div>
               <p class="c999 ftc ft12">省341.10</p>
             </li>
             <li class="content_list">
               <a href="##">
                 <img src="https://img1.epetbar.com/2016-12/05/14/cc02bcab9790a4bec6c0777f90261963.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
               </a>
               <div class="cred ftc mt5">
                 <span class="ft12">¥</span>
                 <span class="ft17">37.90</span>
               </div>
               <p class="c999 ftc ft12">省341.10</p>
             </li>
             <li class="content_list">
               <a href="##">
                 <img src="https://img1.epetbar.com/2016-03/24/8/21212344cf9d8d35da2eda9219317ea8.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
               </a>
               <div class="cred ftc mt5">
                 <span class="ft12">¥</span>
                 <span class="ft17">37.90</span>
               </div>
               <p class="c999 ftc ft12">省341.10</p>
             </li>
           </ul>
         </div>
       </div>
     </div>
     <div class="page-line"></div>
     <div class="divboximg">
       <div class="divimg" style="width:50%;" >
         <a href="http://wap.epetht.com/guide.html?pet_type=dog&fw=0">
           <img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water" alt="" style="height: 250px">
         </a>
       </div >
       <div class="divimg" style="width: 48%">
         <a href="https://wap.epet.com/petschool/SchoolDetail.html?aid=116&fw=0" class="default_bg">
           <img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt="" style="height: 125px">
         </a>
         <a href="https://sale.epet.com/m/mould/fashion/detail.html?id=149&fw=0" class="default_bg">
           <img src="https://img2.epetbar.com/nowater/2018-04/03/09/06273e732679cfcf9e4a5e98d1cc0e8c.jpg@!water" alt="" style="height: 125px">
         </a>
       </div>
     </div>
     <div class="page-line"></div>
     <div class="ad">
       <a href="https://wap.epet.com/group/v226/main.html?groupType=miao&fw=0" class="pointer">
         <img src="https://img2.epetbar.com/nowater/2018-04/09/09/cb1638292b794ab005e83f38e6c2d7bf.jpg@!water" alt="">
       </a>
     </div>
     <div class="page-line"></div>
   </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
      mounted(){
        new BScroll('.wrapper1',{
          scrollX: true,
          click: true
        })
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    width 100%
    .surprise-tit
      display: flex
      flex-direction row
      padding 10px
      line-height 20px
      position relative
      .titimg
        img
          width 85px
          vertical-align top
      .nexttip
        font-size 13px
        line-height 20px
        margin-left 25%
      .time
        font-size 12px
        margin-left 5px
        .hour,.minute
          padding 1px 2px
          border 1px solid #ddd
      .more
        position absolute
        right 0
        top 3px
        width 68px
        img
         height 34px
  .content
    width 100%
    .content_list
      width 100px
      height 130px
      padding 5px
      img
        width 85px
        margin-left 5px
      .cred
        font-size 14px
        color red
        text-align center
      .c999
        font-size 12px
        color #999
        text-align center
        padding-top 4px

  .page-line
    box-sizing border-box
    width 100%
    height 10px
    background-color  #f3f4f5
    border 1px solid #dee9eb
  .divboximg
    height 250px
  .divimg
    display inline-block
  .ad
    height 160px
    img
      width 100%
</style>

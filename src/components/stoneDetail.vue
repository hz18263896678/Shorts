<template>
  <section>
    <header>
      <swiper :list="list" auto class="swiper" dots-class="custom-bottom"
              dots-position="center"></swiper>
    </header>
    <section>
      <ul class="imgDesc">
        <li>名称：</li>
        <li>规格：</li>
        <li>种类：</li>
        <li>区域：</li>
        <li>描述：</li>
        <li>获奖情况：</li>
      </ul>
      <div class="funcBar">
        <div class="left">
          <div style="margin-left:10px;float: left ">
            <img src="../assets/star.png">
          </div>
          <div style="margin-left:10px;float: left ">
            <img src="../assets/good.png">
            <div class="fc_num">1247</div>
          </div>
          <div style="margin-left:10px;float: left ">
            <img src="../assets/nogood.jpg">
            <div class="fc_num">5147</div>
          </div>
        </div>
        <div class="right">
          <router-link to=""><span>石馆</span></router-link>
        </div>
      </div>
      <div class="titleBar">
        热门评论(20124)
      </div>
      <div class="comment">
        <div class="c_row">
          <div class="c_row_left">
            <img class="p_head_image" src="../assets/head.png">

            <div>张三</div>

          </div>
        </div>
        <div class="c_row time">
          2017-2-16

        </div>
        <div class="c_row commentText">
          这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容这里是评论内容

        </div>
        <div class="c_row func">
          <div class="f_cycle">
            <img class="titleImage" src="../assets/good.png">
            <div>5</div>
          </div>
          <div class="f_cycle">
            <img class="titleImage" src="../assets/cycle.png">
            <div>5</div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
  import {Swiper, GroupTitle, SwiperItem, XButton, Divider} from 'vux'

  export default  {
    components: {
      Swiper,
      SwiperItem,
      GroupTitle,
      XButton,
      Divider
    },
    data(){
      return {
        list: ['http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
          'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
          'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'],
      }
    },
    methods: {}

  }
</script>
<style scoped>
  .swiper {
    width: 82%;
    height: 120px;
    margin: 0 auto;
  }

  .imgDesc {
    float: right;
    width: 90%;
    list-style-type: none;
  }

  .funcBar {
    float: left;
    width: 100%;
    margin-top: 5px;
  }

  .funcBar .left img {
    width: 25px;
    height: 30px;
  }

  .funcBar .left {
    float: left;
    width: 80%;
    height: 30px;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-color: #d2c0c0;
  }

  .funcBar .right span {
    color: #3fd6bb;
  }

  .funcBar .right {
    float: left;
    width: 19%;
    height: 30px;
    border-left: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    text-align: center;
    border-color: #d2c0c0;
  }

  .fc_num {
    float: left;
  }

  .titleBar {
    width: 100%;
    height: 30px;
    color: rgb(204, 102, 0);
    text-align: left;
    border-width: 0px;
    background: #fbfbfb;
    float: left;
    margin: 10px 0;
    padding: 0 12px;
  }
  .comment {
    width: 100%;
    height: auto;
    float: left;
    margin: 12px 0 0 11px;
  }

  .c_row {
    width: 100%;
    float: left;
    height: auto;
  }

  .c_row .c_row_left div {
    float: left;
  }

  .c_row .c_row_left .p_head_image {
    float: left;
    left: 0px;
    top: 0px;
    width: 25px;
    height: 25px;
    border-width: 0px;
  }

  .c_row .c_row_left .comm_detail img {
    width: 25px;
  }

  .c_row .c_row_left .comm_detail {
    float: right;
    width: auto;
    margin-right: 20px;
  }

  .time {
    font-size: 12px;
  }

  .f_cycle {
    width: 60px;
    height: 20px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(121, 121, 121, 1);
    border-radius: 10px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    float: right;
    margin: 0 17px 0 0;
  }

  .titleImage {
    border-width: 0px;
    left: 0px;
    top: 0px;
    margin: 0 0px 1px 10px;
    width: 19px;
    height: 17px;
    float: left;
  }

  .f_cycle div {
    width: 28px;
    height: auto;
    float: left;
    font-size: 13px;
    text-align: center;
  }

  .commentText {
    font-size: 12px;
    float: left;
    width: 94%;
  }
  .func {
    margin: 5px 0;
  }
</style>

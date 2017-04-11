<template>
  <section>
    <div class="block">
      <div class="top">
        <div class="top_l">
          <img src="../assets/pimg.jpg">
        </div>
        <div class="top_r">
          <ul>
            <li>石馆名称</li>
            <li>馆主名称</li>
            <li>馆主介绍</li>
            <li>联系方式</li>
            <li>石    龄</li>
          </ul>
        </div>
        <div class="bottom_o">
          <img src="../assets/edit.png" @click="">

        </div>
      </div>
    </div>
    <div class="block">
      <tab :animate="true">
        <tab-item active-class="active-6-1" selected>藏品鉴赏</tab-item>
        <tab-item active-class="active-6-2" >交易藏石</tab-item>
        <tab-item active-class="active-6-3">已售藏石</tab-item>
      </tab>
    </div>
    <div class="block" style="margin-top: 20px">
      <div class="stone">
        <img src="../assets/cycle.png" @click.stop="showReport" class="stoneMenu">
        <div class="hide_report" :class="showreport==true?showr:hider" @click="report">
          {{reportText}}
        </div>
        <div class="img">
          <img src="../assets/u28.png" alt="">
        </div>
        <div class="msg">
            <ul>
              <li>名称:</li>
              <li>规格:</li>
              <li>种类:</li>
              <li>上传时间:</li>
              <li>描述:</li>
            </ul>
        </div>
        <div class="bottom_comm">
          <div class="comm_l">
            V
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
      </div><div class="stone">

        <img src="../assets/cycle.png" @click.stop="showReport" class="stoneMenu">
        <div class="hide_report" :class="showreport==true?showr:hider" @click="report">
          {{reportText}}
        </div>
        <div class="img">
          <img src="../assets/u28.png" alt="">
        </div>
        <div class="msg">
            <ul>
              <li>名称:</li>
              <li>规格:</li>
              <li>种类:</li>
              <li>上传时间:</li>
              <li>描述:</li>
            </ul>
        </div>
        <div class="bottom_comm">
          <div class="comm_l">
            V
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
      </div>
    </div>
  </section>
</template>
<script>
  import {Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem} from 'vux'
  export default {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem
    },
    data(){
      return {
        showreport:false,
        reportText:'',
        hider:'hider',
        showr:'showr',

      }
    },
    methods: {
      report(){

      },
      showReport(){
        if(this.showreport==true){
          this.showreport=false;
        }else{
          this.showreport=true;
        }
      }
    }
  }
</script>
<style scoped>
  .block {
    width: 100%;
    height: auto;
    float: left;
  }
  .hide_report{
    display: none;
    width: 80px;
    height: 30px;
    line-height: 30px;
    position: absolute;
    text-align: center;
    border: 1px solid #e6dddd;
    background: #dedcdc;
    color: #fff;
    right: 10px;
  }
  .top {
    width: 93%;
    height: 170px;
    background: rgba(247, 247, 247, 1);
    margin: 3%;
    float: left;
  }

  .top .top_l img {
    width: 91%;
    height: auto;
    float: left;
    margin: 33px 0px 0 6px;
  }

  .top .top_l {
    width: 43%;
    height: auto;
    float: left;
  }

  .top .top_r ul {
    list-style-type: none;
    float: left;
    width: 100%;

  }
  .showr{
    display: block;
  }
  .hider{
    display: none;
  }
  .top .top_r {
    width: 57%;
    height: auto;
    float: left;
    font-size: 13px;
    margin: 35px 0 0 0px;
  }

  .bottom_o {
    float: left;
    height: 15%;
    width: 100%;
  }

  .bottom_o img {
    width: 24px;
    height: auto;
    float: right;
    padding: 0 16px;
  }

  .active-6-1 {
    color: rgb(252, 55, 140) !important;
    border-color: rgb(252, 55, 140) !important;
  }

  .active-6-2 {
    color: #04be02 !important;
    border-color: #04be02 !important;
  }

  .active-6-3 {
    color: rgb(55, 174, 252) !important;
    border-color: rgb(55, 174, 252) !important;
  }
  .stoneMenu{
    width: 19px;
    position: relative;
  }
  .stone {
    width: 100%;
    height:170px;
    float: left;
    padding: 11px;
  }
  .stone .img{
    float: left;
    width: 37%;
    height:80%;
  }
  .stone .img img{
    padding: 12%;
  }
  .stone .msg{
    float: left;
    width: 54%;
    height:80%;
  }
  .stone .msg ul{
    list-style-type: none;
    font-size: 13px;
    line-height: 25px;
  }
  .stone .bottom_comm .comm_l{
    float: left;
    padding: 0 20px;
  }
  .stone .bottom_comm{
    float: left;
    width: 100%;
    height: 20%;
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
    float: right;
  }

</style>

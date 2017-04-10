<template>
  <section>
    <header>
      <span>全部评论(20124)</span>
    </header>
    <section @click.stop="showReport">
      <div class="comment">
        <div class="c_row">
          <div class="c_row_left">
            <img class="p_head_image" src="../assets/head.png">

            <div>张三</div>
            <div class="comm_detail">
              <img src="../assets/cycle.png" @click.stop="showReport">
              <div class="hide_report" :class="showreport==true?showr:hider">
                  举报
              </div>
            </div>
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
    <footer>
      <div class="foot_c">
        <img src="../assets/comment.png" alt="">
        <span>10评论</span>
      </div>
      <div class="foot_c">
        <img src="../assets/good.png" alt="">
        <span>8点赞</span>
      </div>
    </footer>
  </section>
</template>
<script>
  export default {
    components: {
    },
    data(){
      return {
        showreport:false,
        hider:'hider',
        showr:'showr',
     }
    },
    methods:{
      showReport(event){
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
  header {
    color: rgb(204, 102, 0);
    left: 490px;
    top: 117px;
    width: 100%;
    height: 30px;
    color: rgb(204, 102, 0);
    margin-top: 20px;
    text-align: left;
    border-width: 0px;
    background: #fbfbfb;
  }

  header span {
    margin: 12px;
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
    font-size: 13px;
  }

  .func {
    margin: 5px 0;
  }

  footer {
    float: left;
    width: 100%;
    padding-left: 4%;
  }

  .foot_c {
    float: left;
    width: 170px;
    height: 30px;
    color: rgba(204, 204, 204, 0.709804);
    border: 1px solid;
  }

  .foot_c span {
    position: relative;
    top: 0px;
    left: 36px;
  }

  .foot_c img {
    position: relative;
    top: 5px;
    left: 40px;
    width: 20px;
    height: 20px;
    border-width: 0px;
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
  .showr{
    display: block;
  }
  .hider{
    display: none;
  }
</style>

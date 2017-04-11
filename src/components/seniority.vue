<template>
  <section>
      <header>
        <span>条件：</span>
        <span class="condition">热门奇石</span>
        <span class="condition">新石排行</span>
        <span class="condition">点赞最多</span>
        <span class="condition">收藏最多</span>
      </header>
    <div class="line"></div>
    <section class="content">
      <div class="stone">
        <img src="https://o5omsejde.qnssl.com/demo/test1.jpg" class="miniImg" alt="">
        <ul class="imgDesc">
          <li>名称：</li>
          <li>规格：</li>
          <li>种类：</li>
          <li>区域：</li>
          <li>描述：</li>
        </ul>
        <div class="s_foot">
            <div class="f_cycle">
              <img class="titleImage" src="../assets/cycle.png">
              <div>5</div>
            </div>
            <div class="f_cycle">
              <img class="titleImage" src="../assets/good.png">
              <div>5</div>
            </div>
        </div>
      </div>
      <div class="line"></div>
    </section>
  </section>
</template>
<script>

</script>
<style scoped>
  .condition{
    color: #3fdffb;
    margin: 0 10px;
  }

  header{
    margin-top: 10px;
    background-color: rgba(215, 215, 215, 1)
  }
  .imgDesc{
    float: left;
    list-style-type: none;
    margin-left: 10px;
    width: 52%;
  }
  .miniImg{
    width:150px;
    height:130px;
    margin-left: 10px;
    float: left;
  }
  .content{
    margin-top: 20px;
    float: left;
    width: 100%;
  }
  .stone{
    float: left;
    width:100%;
    height:auto;
  }
  .line{
    width: 95%;
    float: left;
    height:1px;
    background: black;
    text-align: center;
    margin: 8px;
  }
  .s_foot{
    width: 100%;
    height:auto;
    float: left;
  }
  .f_cycle{
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
    float: left;
    margin: 0 10px;
  }
  .titleImage{
    border-width: 0px;
    left: 0px;
    top: 0px;
    margin: 0 0px 1px 10px;
    width: 19px;
    height: 17px;
    float: left;
  }
  .f_cycle div{
    width: 28px;
    height: auto;
    float: left;
    font-size: 13px;
    text-align: center;
  }
</style>

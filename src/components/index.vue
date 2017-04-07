<template>
  <section>
    <header>
      <swiper :list="list" auto class="swiper" dots-class="custom-bottom"
              dots-position="center"></swiper>
    </header>
    <section style="float: left;">
      <ul class="stoneType">
        <li @click="clickStoneType('自然石')">自然石</li>
        <li @click="clickStoneType('玉石类')">玉石类</li>
        <li @click="clickStoneType('宝石类')">宝石类</li>
        <li @click="clickStoneType('矿石类')">矿石类</li>
        <li @click="clickStoneType('化石类')">化石类</li>
        <li @click="clickStoneType('临朐奇石')">临朐奇石</li>
        <li @click="clickStoneType('园林奇石')">园林奇石</li>
        <li @click="clickStoneType('奇石工艺')">奇石工艺</li>
        <li @click="clickStoneType('国外奇石')">国外奇石</li>
        <li @click="clickStoneType('其他奇石')">其他奇石</li>
        <li @click="clickStoneType('')">清空</li>
      </ul>
      <ul class="secondStone" :style="isShow=='自然石'?show:hidden">
        <li>黄蜡石</li>
        <li>草花石</li>
        <li>彩陶石</li>
        <li>戈壁石</li>
        <li>九龙壁</li>
        <li>钟乳石</li>
        <li>松花石</li>
        <li>乌江石</li>
        <li>三江石</li>
        <li>长江石</li>
        <li>大化石</li>
        <li>画面石</li>
        <li>水冲石</li>
        <li>卷纹石</li>
        <li>摩尔石</li>
        <li>肉石</li>
        <li>梨皮石</li>
        <li>来宾石</li>
        <li>金海石</li>
        <li>英德石</li>
        <li>灵璧石</li>
        <li>风砺石</li>
        <li>牡丹石</li>
        <li>七彩石</li>
        <li>鸡骨石</li>
        <li>三彩石</li>
        <li>蜡石</li>
        <li>鸡血石</li>
        <li>墨石</li>
        <li>贵州青</li>
        <li>幽兰石</li>
        <li>黄河石</li>
        <li>天峨石</li>
        <li>大湾石</li>
        <li>藏青花</li>
        <li>绿泥石</li>
        <li>大理石</li>
        <li>枣花石</li>
        <li>八音石</li>
        <li>巴林石</li>
        <li>结构石</li>
        <li>青花石</li>
        <li>金纹石</li>
        <li>雨花石</li>
        <li>菊花石</li>
        <li>三峡石</li>
        <li>岷江石</li>
        <li>涪江石</li>
        <li>其他</li>
      </ul>
      <ul class="secondStone" :style="isShow=='玉石类'?show:hidden">
        <li>白玉</li>
        <li>碧玉</li>
        <li>黄玉</li>
        <li>青玉</li>
        <li>墨玉</li>
        <li>红玉</li>
        <li>羊脂玉</li>
        <li>和田玉</li>
        <li>独山玉</li>
        <li>黄龙玉</li>
        <li>岫玉</li>
        <li>翡翠</li>
        <li>蓝田玉</li>
        <li>泰山玉</li>
        <li>阿富汗玉</li>
        <li>三江彩玉</li>
        <li>蝴蝶玉</li>
        <li>灵芝玉</li>
        <li>紫袍玉带石</li>
        <li>鸡血玉</li>
        <li>其他玉石</li>
      </ul>
      <ul class="secondStone" :style="isShow=='宝石类'?show:hidden">
        <li>水晶</li>
        <li>珊瑚</li>
        <li>珍珠</li>
        <li>红宝石</li>
        <li>蓝宝石</li>
        <li>祖母绿</li>
        <li>海蓝宝石</li>
        <li>猫眼石</li>
        <li>碧玺</li>
        <li>石榴石</li>
        <li>绿松石</li>
        <li>青金石</li>
        <li>玛瑙</li>
        <li>孔雀石</li>
        <li>其他宝石</li>
      </ul>
      <ul class="secondStone" :style="isShow=='矿石类'?show:hidden">
        <li>陨石</li>
        <li>沙漠玫瑰</li>
        <li>雄黄</li>
        <li>方解石</li>
        <li>冰洲石</li>
        <li>长石</li>
        <li>萤石</li>
        <li>电气石</li>
        <li>自然铜</li>
        <li>重晶石</li>
        <li>天青石</li>
        <li>天河石</li>
        <li>红柱石</li>
        <li>葡萄石</li>
        <li>其他矿石</li>
        <li>黄铁矿</li>
      </ul>
      <ul class="secondStone" :style="isShow=='化石类'?show:hidden">
        <li>树化玉</li>
        <li>古生物化石</li>
        <li>恐龙蛋化石</li>
        <li>珊瑚虫化石</li>
        <li>木化石</li>
      </ul>
      <ul class="secondStone" :style="isShow=='临朐奇石'?show:hidden">
        <li>红丝石</li>
      </ul>
      <ul class="secondStone" :style="isShow=='园林奇石'?show:hidden">
        <li>太湖石</li>
        <li>灵壁石</li>
        <li>三江石</li>
        <li>泰山石</li>
        <li>假山石</li>
        <li>其他石种</li>
      </ul>
      <ul class="secondStone" :style="isShow=='奇石工艺'?show:hidden">
        <li>石砚</li>
        <li>石雕</li>
        <li>石茶盘</li>
        <li>石印章</li>
        <li>松花石砚</li>
      </ul>
      <ul class="secondStone" :style="isShow=='国外奇石'?show:hidden">
        <li>巴西玛瑙</li>
        <li>缅甸硅化木</li>
        <li>缅甸翡翠</li>
        <li>意大利灵壁石</li>
        <li>加拿大彩石</li>
        <li>非洲玛瑙</li>
        <li>非洲绿棕石</li>
        <li>南非红碧玉</li>
      </ul>
      <ul class="secondStone" :style="isShow=='其他奇石'?show:hidden">
      </ul>
    </section>
    <section class="content">
      <div>
        <img src="https://o5omsejde.qnssl.com/demo/test1.jpg" class="miniImg" alt="">
        <ul class="imgDesc">
          <li>名称：</li>
          <li>规格：</li>
          <li>种类：</li>
          <li>区域：</li>
          <li>描述：</li>
        </ul>
      </div>
    </section>
  </section>
</template>
<script>
  import {Swiper, GroupTitle, SwiperItem, XButton, Divider} from 'vux'

  export default {
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
        isShow: '',
        show: 'display:block',
        hidden: 'display:none',
      }

    },
    methods: {
      clickStoneType(val){
        this.isShow = val;
      }
    }
  }
</script>
<style scoped>
  .swiper {
    width: 82%;
    height: 120px;
    margin: 0 auto;
  }

  .stoneType li {
    float: left;
    list-style-type: none;
    margin: 0 5px;
    color: #09f;
  }

  .secondStone {
    margin-top: 5px;
    float: left;
    clear: right;
  }

  .secondStone li {
    float: left;
    list-style-type: none;
    margin: 0 5px;
    color: #09f;
    font-size: 12px;
  }
  .imgDesc{
    float: left;
    list-style-type: none;
  }
  .miniImg{
    width:150px;
    height:130px;
    float: left;
  }
  .content{
    margin-top: 20px;
    float: left;
    width: 100%;
  }
</style>

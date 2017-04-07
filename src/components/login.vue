<template>
  <section>
    <h1>奇石网</h1>
    <h2>分享，热爱我的热爱</h2>
    <tab :line-width=2 active-color='#fc378c' v-model="index" class="tab">
      <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list" @click="demo2 = item" :key="index">{{item}}</tab-item>
    </tab>
    <swiper v-model="index" class="swiper" :show-dots="false">
      <swiper-item  :key="index">
        <div class="tab-swiper vux-center">
          <x-input  placeholder="手机号" :max="11"></x-input>
          <x-input  placeholder="密  码" type="password"></x-input>
          <x-button  type="primary" class="sub_btn" :show-loading="loginLoading" >登录</x-button>
        </div>
      </swiper-item>
      <swiper-item  :key="index">
        <div class="tab-swiper vux-center">
          <x-input  placeholder="手机号" :max="11"></x-input>
          <x-input  placeholder="密  码" type="password"></x-input>
          <x-input  placeholder="重复密码" type="password"></x-input>
          <x-button  type="primary" class="sub_btn" :show-loading="registLoading" >注册奇石网</x-button>
        </div>
      </swiper-item>
    </swiper>
  </section>
</template>
<script>
  import {Tab, TabItem,XInput, Sticky, Divider, XButton, Swiper, SwiperItem} from 'vux';
  export default  {
    components: {
      Tab,
      TabItem,
      Sticky,
      Divider,
      XButton,
      Swiper,
      SwiperItem,
      XInput,
    },
    data(){
        return {
          list:['登陆', '注册'],
          index: 0,
          demo2: '登陆',
          loginLoading:false,
          registLoading:false,
        }
    },
    methods:{

    }


  }
</script>
<style scoped>
  * {
    font-family: '微软雅黑';
  }
  .tab{
    margin-top: 30px;
  }
  h1 {
    color: #508CE9;
    text-align: center;
    margin-top: 30px;
    font-size: 38px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin-top: 10px;
  }
  .swiper{
    height:230px;
    margin:5px;
  }
  .sub_btn{
    margin-top: 10px;
  }
  .tab-swiper{
    background:#fbf9fe ;
  }
</style>

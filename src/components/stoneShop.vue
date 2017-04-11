<template>
  <section>
    <header>
        <group title="搜索">
          <x-input title="石馆名称" name="name" v-model="this.form.name" placeholder="请输入石馆名称"></x-input>
          <x-button type="primary" :show-loading="searchLoading">搜索</x-button>
        </group>
    </header>
    <divider>
      列表
    </divider>
    <section>
      <div class="shop">
        <div class="left">
          <img src="../assets/moution.jpg" alt="">
        </div>
        <div class="right">
          <ul class="imgDesc">
            <li>石馆名称：</li>
            <li>馆主名称：</li>
            <li>区    域：</li>
            <li>石    龄：</li>
            <li>石    种：</li>
          </ul>
        </div>
        <div class="foot">
          <img src="../assets/star.png" alt="">
        </div>
      </div>
    </section>
  </section>
</template>
<script>
  import { XInput, Group, XButton, Cell,Divider  } from 'vux'
  export default{
    components: {
      XInput,
      XButton,
      Group,
      Cell,
      Divider
    },
      data(){
          return {
            form:{
                name:''
            },
            searchLoading:false
          }
      },
    methods:{

    }
  }
</script>
<style scoped>
  header{
    width:100%;
    float: left;
    height: auto;
  }
  .shop{
    float: left;
    width:95%;
    height:auto;
    padding: 11px;
  }
  .shop .left img{
    width: 100%;
    height: 100%;
  }
  .shop .left{
    width: 42%;
    height: 125px;
    float: left;
    text-align: center;
    line-height: 194px;
  }
  .shop .right{
    width: 58%;
    height:125px;
    float: left;
  }
  .imgDesc{
    list-style-type: none;
    padding: 0 10px;
  }
  .foot{
    float: left;
    width: 100%;
  }
  .foot img{
    float: right;
    padding-right: 26px;
  }
</style>

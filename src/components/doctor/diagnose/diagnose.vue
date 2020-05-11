<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="3">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1" @click.native="checkApply">
          <Icon type="ios-navigate"></Icon>
          病人病情诊断
        </Menu-item>
        <Menu-item name="2" @click.native="personinformation">
          <Icon type="ios-keypad"></Icon>
          病人检查方法
        </Menu-item>
        <Menu-item name="3" @click.native="during">
          <Icon type="ios-analytics"></Icon>
          病人具体用药
        </Menu-item>
      </div>
    </Menu>
    <div class="layout-content">

    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return{
        userId:0,
      }
    },
    created() {
      this.userId = window.localStorage.getItem("userID")
    },
    methods:{

    },
  }
</script>

<style scoped>
  @import "diagnose.css";
</style>

<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <Menu-item name="1" @click.native="register">
          <Icon type="ios-navigate"></Icon>
          接受挂号
        </Menu-item>
        <Menu-item name="2">
          <Icon type="ios-keypad"></Icon>
          个人信息
        </Menu-item>
        <Menu-item name="3">
          <Icon type="ios-analytics"></Icon>
          历史病例
        </Menu-item>
      </div>
    </Menu>
    <div class="layout-content">

    </div>
  </div>
</template>
<script>
  import {register} from './personinformation'
  import {getPersonInformation} from "./personinformation";

  export default {
    data(){
      return{
        userId:0,
      }
    },
    created() {
      this.userId = window.localStorage.getItem("id")
      getPersonInformation(1)
    },
    methods:{
      register(){
        console.log("挂号")
        register(this.$router)
      }
    },
  }
</script>

<style scoped>
@import "personinformation.css";
</style>

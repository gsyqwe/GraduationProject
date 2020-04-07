<template>
  <transition
    appear
    appear-class="custom-appear-class"
    appear-active-class="custom-appear-active-class"
  >
    <div class="bg" id="bg" :style="{height: mapHeight}">

      <div class="login" style="margin-top:210px;margin-left: 65%;  " v-if="true">
        <div class="header">
          <div class="switch" id="switch">
            <a class="switch_btn_focus" id="switch_qlogin"  tabindex="7" @click="changetag(0)" >快速登录</a>
            <a class="switch_btn" id="switch_login"  tabindex="8" @click="changetag(1)">快速注册</a><div class="switch_bottom" id="switch_bottom" style="position: absolute; width: 64px; left: 0px;"></div>
          </div>
        </div>
        <!--登录方法-->
        <Form v-show="flag1" ref="formCustom" :model="formCustom" :label-width="80">
          <FormItem label="用户名：" prop="userID" style="margin-top: 20px">
            <i-input type="text" v-model="formCustom.userID" style="width: 250px" >
            </i-input>
          </FormItem>
          <FormItem label="密码：" prop="password">
            <i-input type="password" v-model="formCustom.password" style="width: 250px">
            </i-input>
          </FormItem>
          <FormItem >
            <Button type="primary" @click="login"  style="margin-left: 2%">登录</Button>
            <Button type="ghost" @click="reset" style="margin-left: 5%">重置</Button>
          </FormItem>
        </Form>
        <!--注册方法-->
        <Form v-show="flag2" ref="registerCustom" :model="registerCustom" :label-width="80">
          <FormItem label="真实姓名：" prop="userID" style="margin-top: 20px">
            <i-input type="text" v-model="registerCustom.name" style="width: 250px" >
            </i-input>
          </FormItem>
          <FormItem label="身份证号：" prop="idnumber">
            <i-input type="text" v-model="registerCustom.idnumber" style="width: 250px">
            </i-input>
          </FormItem>
          <FormItem label="手机号：" prop="phone">
            <i-input type="text" v-model="registerCustom.phone" style="width: 250px">
            </i-input>
          </FormItem>
          <FormItem label="登录名：" prop="loginname">
            <i-input type="text" v-model="registerCustom.loginname" style="width: 250px">
            </i-input>
          </FormItem>
          <FormItem label="密码：" prop="password">
            <i-input type="password" v-model="registerCustom.password" style="width: 250px">
            </i-input>
          </FormItem>
          <FormItem >
            <Button type="primary" @click="register"  style="margin-left: 2%">注册</Button>
            <Button type="ghost" @click="reset2" style="margin-left: 5%">重置</Button>
          </FormItem>
        </Form>
      </div>
    </div>
  </transition>
</template>

<script>
  import $ from 'jquery'
  import { login } from './login'
  import {register} from  './login'
  export default {
    data () {
      return {
        flag1 : true,
        flag2 : false,
        formCustom: {
          userID: '',
          password: '',
        },
        registerCustom:{
          name:'',//患者真实姓名
          idnumber:'',//患者身份证号
          phone:'',//患者手机号
          loginname:'',//患者登陆名
          password:'',//患者密码
        }
      }
    },
    computed: {
      //计算浏览器的高度
      mapHeight() {return $(window).height() +'px'}

    },
    methods: {
      //注册
      register(){
        if (this.registerCustom.name == ""){
          this.$Message.error("姓名不能为空！");
        }else if(this.registerCustom.idnumber == ""){
          this.$Message.error("身份证号不能为空！");
        }else  if(this.registerCustom.phone == ""){
          this.$Message.error("电话不能为空");
        }else if(this.registerCustom.loginname == ""){
          this.$Message.error("登录名不能为空");
        }else if(this.registerCustom.password == ""){
          this.$Message.error("密码不能为空");
        }else {
          register(this.registerCustom.name, this.registerCustom.idnumber, this.registerCustom.phone,
            this.registerCustom.loginname, this.registerCustom.password)
        }
      },
      //登录
      login(){
        if(this.formCustom.userID == ""){
          this.$Message.error("用户名不能为空！");
        }else if(this.formCustom.password == ""){
          this.$Message.error("密码不能为空！");
        }else {
          login(this.formCustom.userID,this.formCustom.password,this.$router)
        }
      },
      //重置
      reset(){
        this.formCustom.userID=''
        this.formCustom.password=''
      },
      //重置注册
      reset2(){

      },
      //进行切换
      changetag(num) {
        if (num == 0) {
          this.flag1 = true
          this.flag2 = false
        } else {
          this.flag1 = false
          this.flag2 = true
        }
      },
    }
  }

  $(function(){

    $('#switch_qlogin').click(function(){
      $('#switch_login').removeClass("switch_btn_focus").addClass('switch_btn');
      $('#switch_qlogin').removeClass("switch_btn").addClass('switch_btn_focus');
      $('#switch_bottom').animate({left:'0px',width:'70px'});
      $('#qlogin').css('display','none');
      $('#web_qr_login').css('display','block');

    });
    $('#switch_login').click(function(){

      $('#switch_login').removeClass("switch_btn").addClass('switch_btn_focus');
      $('#switch_qlogin').removeClass("switch_btn_focus").addClass('switch_btn');
      $('#switch_bottom').animate({left:'154px',width:'70px'});

      $('#qlogin').css('display','block');
      $('#web_qr_login').css('display','none');
    });
    if(getParam("a")=='0')
    {
      $('#switch_login').trigger('click');
    }

  });

</script>

<style scoped>
  @import "login.css";
</style>

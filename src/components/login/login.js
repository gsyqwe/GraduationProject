import $ from "jquery";

//登录方法
function login(userID,password,route) {
  console.log(userID+password)
  $.ajax({
    type:"POST",
    url:"api/PersonalInformationController/",
    data:{

    }
  })
}
//注册方法
function register(name,idnumber,phone,loginname,password) {
    $.ajax({
      type:"POST",
      url:"api/PersonalInformationController/addPatient",
      dataType:'json',
      data:{
        name : name,
        idnumber : idnumber,
        phone : phone,
        loginname : loginname,
        password : password
      },
      success : function(data) {
        var message = $.parseJSON(data);//后台返回的json数据需要转为对象
        console.log(message)
      },
    })
  }

export {
  login,
  register
}

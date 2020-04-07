import $ from "jquery";
//跳专到挂号
function register(route) {
  route.push("/register")
}
//获取个人信息
function getPersonInformation(id) {
  $.ajax({
    type: "GET",
    url: 'api/PersonalInformationController/getUserById',
    data: "id=" + id,
    dataType: "json",
    success: function (res) {

    },
  })
}

export {
  register,
  getPersonInformation
}

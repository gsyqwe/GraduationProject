import $ from "jquery";
//跳专到挂号
function register(route) {
  route.push("/admit")
}
//医生个人信息界面
function personinformation(route) {
  route.push("/doctor")
}
//根据科室id获取科室
function getDepartment(id,self) {
  self.$http.get('api//his/BasicInformationController/getDepartmentById',{
    params:{
      id:id
    }
  }).then(function (response) {
    self.doctorCustom.deptname=response.data.deptname
  })
}
//获取个人信息
function getPersonInformation(id,self) {
  self.$http.get('api//his/PersonalInformationController/getUserById', {
    params: {
      id:id
    }
  }).then(function (response) {
    self.doctorCustom.realname=response.data.realname
    self.doctorCustom.idnumber=response.data.idnumber
    getDepartment(response.data.deptid,self)
  }).catch(function (error) {
    self.$Message.error(error.response.data.message)
  })
}

export {
  register,
  getPersonInformation,
  personinformation
}

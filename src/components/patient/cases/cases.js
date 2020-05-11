import $ from "jquery";
function register(route) {
  route.push("/register")
}

function checkperson(route) {
  route.push("/personinformation")
}

function checkcases(route) {
  route.push("/checkcases")
}

export {
  register,
  checkperson,
  checkcases
}

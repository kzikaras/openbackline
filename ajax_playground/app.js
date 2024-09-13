// JS here
console.log("Hello from app.js");

// login
var login = (function () {
  axios
    .post("http://127.0.0.1:5000/login", {
      email: "test@test.com",
      password: "test",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((res) => console.log(res.response.data));
})();

// async function makeRequestWithJWT() {
//   const options = {
//     method: "post",
//     credentials: "same-origin",
//     headers: {
//       "X-CSRF-TOKEN": getCookie("csrf_access_token"),
//     },
//     email: "test@test.com",
//     password: "test",
//   };
//   const response = await fetch("http://127.0.0.1:5000/login", options);
//   const result = await response.json();
//   return result;
// }
// signup
// var signup = function () {
//   let random_num = Math.floor(Math.random() * 100000);
//   axios
//     .post("http://127.0.0.1:5000/signup", {
//       email: `test${random_num}@test.com`,
//       password: "test",
//       zipcode: `12345${random_num}`,
//       username: `test${random_num}`,
//     })
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((res) => console.log(res.response.data));
// };

// function getCookie(name) {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; ${name}=`);
//   if (parts.length === 2) return parts.pop().split(";").shift();
// }

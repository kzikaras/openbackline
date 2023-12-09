import axios from "axios";

function checkAuth() {
  let token = localStorage.getItem("open-backline-token");
  if (token) {
    axios
      .get("http://127.0.0.1:5000/check_auth", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);

        //user is OK to view page
        return true;
      })
      .catch((err) => {
        console.log(err);
        //user is not OK to view page
        return false;
      });
  } else {
    return false;
  }
}

export default checkAuth;

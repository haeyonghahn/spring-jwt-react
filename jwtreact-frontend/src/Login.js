import React from "react";
import { GoogleLogin } from "react-google-login";
import Axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
};

const responseGoogle = (response) => {
  console.log(1, response);
  // let jwtToken = await Axios.post(
  //   "http://localhost:8080/oauth/jwt/google",
  //   JSON.stringify(response),
  //   config
  // );
  // if (jwtToken.status === 200) {
  //   console.log(2, jwtToken.data);
  //   localStorage.setItem("jwtToken", jwtToken.data);
  // }
};

const Login = () => {
  return (
    <GoogleLogin
      clientId={"1059271174458-uei0eoop6r1ooqom8tad2d32jct2aqjr.apps.googleusercontent.com"}
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy="single_host_origin"
    />
  );
};

export default Login;
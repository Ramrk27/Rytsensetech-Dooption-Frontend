import React from "react";
import "./login.css";
import Header from "../../components/auth-components/login/Header";
import LoginContent from "../../components/auth-components/login/LoginContent";
const Login = () => {
 
  return (
    <div>
      <div class="wrapper">
        <Header />
        <LoginContent />
      </div>
    </div>
  );
};

export default Login;

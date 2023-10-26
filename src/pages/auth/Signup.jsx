import React from "react";
import "./signup.css";
import Header from "../../components/auth-components/signup/Header";
import SignupContent from "../../components/auth-components/signup/SignupContent";
const Signup = () => {
  return (
    <div>
      <div class="wrapper">
        <Header />
        <SignupContent />
      </div>
    </div>
  );
};

export default Signup;

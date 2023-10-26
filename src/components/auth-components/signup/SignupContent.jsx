import React from "react";
import { useNavigate } from "react-router-dom";

const SignupContent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="wrapper__center">
        <div class="site-content">
          <div class="site-content-in">
            {/* <!-- begin login --> */}
            <div class="login login-v2">
              {/* <!-- begin brand --> */}
              <div class="login-header">
                <div class="brand">
                  <a
                    onClick={() => {
                      navigate("/");
                    }}
                    class="brand__link"
                  >
                    <h3>Dooption</h3>
                  </a>
                  <h1>Registration</h1>
                </div>
              </div>
              {/* <!-- end brand --> */}
              <div class="login-content">
                <p class="login-content__redirect">
                  Already registered?{" "}
                  <a
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Log In
                  </a>
                </p>
                <div class="ajax-message js-message"></div>
                <form
                  action="https://pocketoption.com/en/register/"
                  method="post"
                  class="form-with-label"
                >
                  <div class="form-group form-group_with-label email-container  ">
                    <input
                      type="email"
                      name="email"
                      value=""
                      class="form-control"
                      required="1"
                      placeholder="Email *"
                    />{" "}
                    <label for="email">
                      Email <span>*</span>
                    </label>
                  </div>
                  <div class="form-group form-group_with-label password-container   password-container">
                    <input
                      type="password"
                      name="password"
                      value=""
                      id="pass"
                      class="form-control"
                      required="1"
                      placeholder="Password *"
                    />{" "}
                    <label for="password">
                      Password <span>*</span>
                    </label>
                    <div class="password-container__icon"></div>
                  </div>
                  <div class="form-group form-group_with-label  ">
                    <input
                      type="text"
                      name="promo_code"
                      value=""
                      id="promo_code"
                      class="form-control"
                    />{" "}
                    <label for="promo_code">
                      Enter promo code (if you have one)
                    </label>
                  </div>
                  <div class="form-bottom rules ">
                    <div class="checkbox">
                      <p class="ruls">
                        <label>
                          <input
                            type="checkbox"
                            name="rules"
                            value="1"
                            id="checkbox_pao"
                            required="1"
                          />{" "}
                          I have read and accepted the following agreement:{" "}
                          <a
                            href="https://pocketoption.com/pdf/offer_en.pdf"
                            target="_blank"
                          >
                            Public Offer
                          </a>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div class="form-group js-recaptcha-block recaptcha-block">
                    <div
                      class="g-recaptcha"
                      data-sitekey="6LcU2hgUAAAAAPHmrOrfTDy6DnROjq7Mr8LNwhNF"
                      data-theme="light"
                      data-type="image"
                      data-size="normal"
                    ></div>
                    <script
                      type="text/javascript"
                      src="https://www.google.com/recaptcha/api.js?render=onload&hl=en"
                      async
                      defer
                    ></script>
                    {/* <style>
.g-recaptcha {
transform: scale(1);
transform-origin: 0 0 !important;
display: none;
margin: 0 20%;
}
</style> */}

                    {/* <script type="text/javascript">
function refreshCaptcha(button) {
button.setAttribute('disabled', 'disabled');
button.classList.add('animate-rotate');
fetch('https://pocketoption.com/en/refresh-captcha/')
    .then(response => response.json())
    .then(data => {
        if (!data.html) return;

        button.classList.remove('animate-rotate');
        const elems = document.querySelectorAll('.js-recaptcha-block');
        elems.forEach(ele => {
            ele.innerHTML = data.html;
        })
        const inputs = document.querySelectorAll('.js-recaptcha-input');
        inputs.forEach(ele => {
            ele.addEventListener('input', function(){
                if (ele.value) {
                    ele.classList.add('form-control_filled');
                } else {
                    ele.classList.remove('form-control_filled');
                }
            })
        })
    }).catch(() => {});
}
</script> */}

                    {/* <style>
.animate-rotate {
animation: capchaRotate linear 1s infinite;
transform-origin: center;
}

@keyframes capchaRotate {
0% {
    transform: rotate(0);
}
100% {
    transform: rotate(360deg);
}
}
</style> */}
                  </div>
                  <div class="form-group">
                    <button
                      type="submit"
                      class="waves btn btn-green-light btn-block"
                    >
                      Sign Up
                    </button>
                  </div>
                  <div class="form-group social-container">
                    <p class="social-container__title">Or sign up with</p>
                    <div class="register-social">
                      <a
                        class="social-btn social-btn--gp"
                        href="https://pocketoption.com/en/login?social=Google"
                      >
                        Google
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContent;

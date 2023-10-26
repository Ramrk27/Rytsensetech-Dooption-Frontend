import React from "react";
import "./sidebar.css"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div class="sidebar sidebar_main">
        <div class="sidebar__tabs tabs">
          <div class="tabs__btn-container">
            <div class="tabs__btn active">Registration</div>
            <a  class="tabs__btn" onClick={()=>{navigate('/login')}}>
              Log In{" "}
            </a>
          </div>
          <div class="tabs__info-container">
            <div class="tabs__info active">
              <div class="sidebar__container">
                {/* <!-- begin login --> */}
                <div class="login login-v2">
                  <div class="sidebar__register">
                    <form
                      action="https://pocketoption.com/en/register/"
                      method="post"
                      class="form-with-label"
                    >
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          value=""
                          class="form-control"
                          required="1"
                          autocomplete="off"
                          placeholder="Email"
                        />{" "}
                        <label for="email">Email</label>
                      </div>
                      <div class="form-group  password-container">
                        <input
                          type="password"
                          name="password"
                          value=""
                          id="pass"
                          class="form-control"
                          required="1"
                          autocomplete="off"
                          placeholder="Password"
                        />{" "}
                        <label for="email">Password</label>
                        <div class="password-container__icon"></div>
                      </div>
                      <div class="form-group ">
                        <input
                          type="text"
                          name="promo_code"
                          value=""
                          id="promo_code"
                          class="form-control"
                          autocomplete="off"
                          placeholder="Promo code"
                        />{" "}
                        <label for="email">Promo code</label>
                      </div>
                      <div class="form-group  rules ">
                        <div class="checkbox">
                          <label>
                            I have read and accepted the following agreement:{" "}
                            <a
                              href="https://pocketoption.com/pdf/offer_en.pdf"
                              target="_blank"
                            >
                              Public Offer
                            </a>
                            <input
                              type="checkbox"
                              name="rules"
                              value="1"
                              id="checkbox_pao"
                              required="1"
                            />{" "}
                            <span class="checkmark"></span>
                          </label>
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
                      </div>
                      <div class="form-group">
                        <button type="submit" class="waves btn btn_gray">
                          Sign Up
                        </button>
                      </div>
                      <div
                        class="ajax-message js-message"
                        // style="display: none;"
                      ></div>
                      <div class="sidebar__soc-login">
                        <p class="login__subtitle">Or sign up with </p>
                        <div class="register-social">
                          <a
                            class="social-btn social-btn--sm social-btn--icon social-btn--gp"
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
            <div class="tabs__info">
              <div class="sidebar__container">
                {/* <!-- begin login --> */}
                <div class="login login-v2">
                  <div class="sidebar__login">
                    <form
                      action="https://pocketoption.com/en/login/"
                      method="POST"
                      class="form-with-label"
                    >
                      <div class="step1 js-step1">
                        <div class="form-group">
                          <input
                            type="email"
                            name="email"
                            value=""
                            class="form-control"
                            required="1"
                            placeholder="Email"
                          />{" "}
                          <label for="email">Email</label>
                        </div>
                        <div class="form-group   password-container">
                          <input
                            type="password"
                            name="password"
                            value=""
                            class="form-control"
                            required="1"
                            placeholder="Password"
                          />{" "}
                          <label for="email">Password</label>
                          <div class="password-container__icon"></div>
                        </div>
                        <div class="checkbox">
                          <div class="checkbox checkbox_small clearfix m-b-0 ">
                            <label>
                              <input
                                type="checkbox"
                                name="remember"
                                value="1"
                              />
                              Remember Me <span class="checkmark"></span>
                            </label>
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
                        </div>
                      </div>
                      <div class="step2 js-step2"></div>
                      <div class="submit-btn-wrap">
                        <button class="waves btn btn_gray" type="submit">
                          Login{" "}
                        </button>
                      </div>
                      <div class="form-group rules password-recovery ">
                        <div>
                          <p>
                            <a href="https://pocketoption.com/en/password_recovery/">
                              Password Recovery
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="ajax-message js-message"></div>
                      <div class="sidebar__soc-login">
                        <p class="login__subtitle">Or login with </p>
                        <div class="register-social">
                          <a
                            class="social-btn social-btn--sm social-btn--icon social-btn--gp"
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
        <div class="sidebar__soc-links">
          <div class="sidebar__container">
            <p class="login__subtitle">Follow us on:</p>
            <ul class="socials">
              <li class="socials__item">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://t.me/pocketoption"
                  class="socials__icon socials__icon--tl"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                  >
                    <g clip-path="url(#clip0_85_3770)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.2547 11.5881L10.8265 14.9501C10.3741 15.4502 10.1627 16.1235 10.2479 16.7929C10.3332 17.4623 10.7065 18.061 11.2705 18.4322C12.9227 19.5192 15.8374 21.4371 17.9532 22.8291C18.7975 23.3847 19.8666 23.4733 20.7911 23.064C21.7155 22.6553 22.3686 21.8043 22.5256 20.8058L24.9761 5.19133C25.0978 4.4171 24.7928 3.63727 24.1778 3.15121C23.5633 2.66515 22.7342 2.54798 22.0087 2.84455L0.966245 11.4529C0.371983 11.6962 -0.0120452 12.2793 0.000288551 12.9212C0.0126223 13.5631 0.417953 14.1316 1.02119 14.3519C1.99443 14.7079 3.31919 15.1923 4.37708 15.5786C5.77416 16.0899 7.32765 15.9396 8.60139 15.171L14.2547 11.5881ZM2.78827 12.8685L22.7661 4.69573C22.8233 4.67219 22.8889 4.68172 22.9377 4.71984C22.9859 4.75852 23.01 4.82019 23.0005 4.8813L20.55 20.4958C20.4984 20.8227 20.2842 21.1013 19.9815 21.2353C19.6788 21.3693 19.3289 21.3401 19.0526 21.1579L12.3699 16.7615C12.2937 16.711 12.2432 16.6303 12.232 16.54C12.2202 16.4498 12.2488 16.359 12.3099 16.2917L17.6717 10.7499C18.0838 10.2941 18.1001 9.60511 17.7093 9.13082C17.3185 8.65654 16.6391 8.54049 16.1126 8.8578L7.56816 13.4588C6.813 13.9141 5.89189 14.0032 5.06329 13.7005L2.78827 12.8685Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_85_3770">
                        <rect width="26" height="26" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://vk.com/pocketoption"
                  class="socials__icon socials__icon--vk"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                  >
                    <g clip-path="url(#clip0_85_3778)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.988892 12.5606V13.4406C0.988892 15.9876 0.992887 17.8976 1.19089 19.3686C1.41989 21.0706 1.91387 22.2486 2.82987 23.1636C3.74587 24.0786 4.9249 24.5716 6.6269 24.8006C8.0989 24.9986 10.0109 25.0026 12.5599 25.0026H13.4399C15.9889 25.0026 17.9009 24.9986 19.3729 24.8006C21.0749 24.5716 22.2539 24.0786 23.1699 23.1636C24.0859 22.2486 24.5799 21.0706 24.8089 19.3686C25.0069 17.8976 25.0109 15.9876 25.0109 13.4406V12.5606C25.0109 10.0136 25.0069 8.10358 24.8089 6.63258C24.5799 4.93058 24.0859 3.75253 23.1699 2.83753C22.2539 1.92253 21.0749 1.42956 19.3729 1.20056C17.9009 1.00256 15.9889 0.998535 13.4399 0.998535H12.5599C10.0109 0.998535 8.0989 1.00256 6.6269 1.20056C4.9249 1.42956 3.74587 1.92253 2.82987 2.83753C1.91387 3.75253 1.41989 4.93058 1.19089 6.63258C0.992887 8.10358 0.988892 10.0136 0.988892 12.5606ZM2.9889 12.5606C2.9889 10.1286 2.98389 8.30357 3.17389 6.89857C3.33189 5.72357 3.61087 4.88457 4.24387 4.25257C4.87587 3.62057 5.71689 3.34056 6.89289 3.18256C8.2989 2.99356 10.1249 2.99854 12.5599 2.99854H13.4399C15.8749 2.99854 17.7009 2.99356 19.1069 3.18256C20.2829 3.34056 21.1239 3.62057 21.7559 4.25257C22.3889 4.88457 22.6679 5.72357 22.8259 6.89857C23.0159 8.30357 23.0109 10.1286 23.0109 12.5606V13.4406C23.0109 15.8726 23.0159 17.6976 22.8259 19.1026C22.6679 20.2776 22.3889 21.1166 21.7559 21.7486C21.1239 22.3806 20.2829 22.6606 19.1069 22.8186C17.7009 23.0076 15.8749 23.0026 13.4399 23.0026H12.5599C10.1249 23.0026 8.2989 23.0076 6.89289 22.8186C5.71689 22.6606 4.87587 22.3806 4.24387 21.7486C3.61087 21.1166 3.33189 20.2776 3.17389 19.1026C2.98389 17.6976 2.9889 15.8726 2.9889 13.4406V12.5606ZM13.6439 17.7436C8.7179 17.7436 5.90787 14.3666 5.79087 8.74757H8.25889C8.33989 12.8716 10.1589 14.6186 11.5999 14.9796V8.74757H13.9229V12.3046C15.3459 12.1516 16.8409 10.5306 17.3449 8.74757H19.6679C19.2809 10.9446 17.6599 12.5656 16.5069 13.2326C17.6599 13.7726 19.5059 15.1866 20.2089 17.7436H17.6509C17.1019 16.0326 15.7329 14.7096 13.9229 14.5286V17.7436H13.6439Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_85_3778">
                        <rect width="26" height="26" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://twitter.com/PocketOption"
                  class="socials__icon socials__icon--tw"
                >
                  <svg
                    class="svg-icon"
                    width="25"
                    height="25"
                    viewBox="0 0 74 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_6_21)">
                      <path d="M44.0401 32.1643L71.5882 0H65.0602L41.1401 27.9278L22.0352 0H0L28.8903 42.2318L0 75.961H6.5284L31.7886 46.4683L51.9648 75.961H74L44.0385 32.1643H44.0401ZM35.0985 42.6039L32.1713 38.3985L8.88068 4.93625H18.9079L37.7037 31.9414L40.6309 36.1467L65.0633 71.2492H55.036L35.0985 42.6055V42.6039Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_21">
                        <rect width="74" height="76" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.instagram.com/potradeofficial/"
                  class="socials__icon socials__icon--ins"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M24.9858 7.68178C24.9858 3.99177 21.9938 0.999756 18.3028 0.999756C15.0368 0.999756 10.9488 0.999756 7.68277 0.999756C3.99176 0.999756 0.999756 3.99177 0.999756 7.68178C0.999756 10.9628 0.999756 15.0748 0.999756 18.3558C0.999756 22.0458 3.99176 25.0378 7.68277 25.0378C10.9488 25.0378 15.0368 25.0378 18.3028 25.0378C21.9938 25.0378 24.9858 22.0458 24.9858 18.3558V7.68178ZM22.9858 7.68178V18.3548C22.9858 20.9418 20.8888 23.0378 18.3028 23.0378C15.0368 23.0378 10.9488 23.0378 7.68277 23.0378C5.09676 23.0378 2.99976 20.9418 2.99976 18.3558C2.99976 18.3548 2.99976 7.68178 2.99976 7.68178C2.99976 5.09577 5.09676 2.99976 7.68277 2.99976C10.9488 2.99976 15.0368 2.99976 18.3028 2.99976C20.8888 2.99976 22.9858 5.09577 22.9858 7.68178ZM12.9998 7.04075C9.71077 7.04075 7.04077 9.71077 7.04077 12.9998C7.04077 16.2888 9.71077 18.9588 12.9998 18.9588C16.2888 18.9588 18.9598 16.2888 18.9598 12.9998C18.9598 9.71077 16.2888 7.04075 12.9998 7.04075ZM12.9998 9.04076C15.1858 9.04076 16.9598 10.8148 16.9598 12.9998C16.9598 15.1848 15.1858 16.9588 12.9998 16.9588C10.8148 16.9588 9.04077 15.1848 9.04077 12.9998C9.04077 10.8148 10.8148 9.04076 12.9998 9.04076ZM19.9888 6.05375C20.5368 6.05375 20.9818 6.49876 20.9818 7.04676C20.9818 7.59477 20.5368 8.04075 19.9888 8.04075C19.4398 8.04075 18.9948 7.59477 18.9948 7.04676C18.9948 6.49876 19.4398 6.05375 19.9888 6.05375Z"
                    />
                  </svg>
                </a>
              </li>
              <li class="socials__item">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://www.youtube.com/c/PocketOption"
                  class="socials__icon socials__icon--yt"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="svg-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.4832 8.05893C25.4832 8.05793 25.4821 8.05693 25.4821 8.05493C25.3201 5.78693 23.6091 3.93393 21.3611 3.59093C21.3581 3.59093 21.3551 3.58993 21.3511 3.58993C15.8741 2.80892 10.3181 2.82093 4.68311 3.61693C4.68111 3.61793 4.67911 3.61794 4.67711 3.61794C2.44611 3.94794 0.734104 5.76792 0.542103 8.01593C0.542103 8.01693 0.542103 8.01893 0.542103 8.02093C0.275103 11.3579 0.285101 14.6789 0.545102 17.987C0.546102 17.989 0.546101 17.991 0.546101 17.993C0.735102 20.243 2.44811 22.0679 4.68311 22.3989C4.68511 22.3989 4.68811 22.399 4.69111 22.4C10.2251 23.174 15.7741 23.191 21.3371 22.407C21.3401 22.407 21.3421 22.407 21.3451 22.406C23.5941 22.072 25.3111 20.224 25.4801 17.957C25.4801 17.955 25.4801 17.9539 25.4801 17.9519C25.7011 14.7799 25.7162 11.4859 25.4832 8.05893ZM23.4871 8.19693C23.7141 11.5269 23.7001 14.7269 23.4851 17.81C23.3851 19.143 22.3761 20.23 21.0531 20.428C15.6791 21.185 10.3191 21.167 4.97311 20.42C3.65911 20.224 2.65111 19.151 2.53911 17.8269C2.28711 14.6259 2.2771 11.4119 2.5351 8.18393C2.6491 6.86192 3.65511 5.79192 4.96711 5.59692C10.4091 4.82792 15.7741 4.81593 21.0631 5.56893C22.3851 5.77193 23.3911 6.86293 23.4871 8.19693ZM16.9881 13.8949C17.3271 13.7249 17.5411 13.3789 17.5411 12.9999C17.5411 12.6209 17.3271 12.2749 16.9881 12.1059L10.7561 8.98993C10.4461 8.83493 10.0781 8.85093 9.78412 9.03393C9.48912 9.21593 9.30912 9.53794 9.30912 9.88394V16.1159C9.30912 16.4629 9.48912 16.784 9.78412 16.967C10.0781 17.149 10.4461 17.165 10.7561 17.01L16.9881 13.8949ZM14.3051 12.9999L11.3091 14.4979V11.502L14.3051 12.9999Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

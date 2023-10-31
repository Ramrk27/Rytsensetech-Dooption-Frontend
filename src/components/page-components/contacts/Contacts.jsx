import React from "react";
import "./contact.css";
import Header from "../../home-components/header/Header";
import Footer from "../../home-components/footer/Footer";
import Sidebar from "../../home-components/side-bar/Sidebar";
import { useNavigate } from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--contacts">
        <section class="section top-section">
          <div class="container top-section__container">
            <div class="top-section__bg bg">
              <img
                src="/images/bg/contacts-bg.jpg "
                alt=""
                class="bg__item bg__item_1"
              />
              <div class="bg__item bg__item_gradient"></div>
            </div>
            <div class="content top-section__content">
              <div class="breadcrumbs-wrap">
                <ul class="breadcrumbs ">
                  <li class="breadcrumbs__item">
                    <a
                      class="breadcrumbs__link"
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li class="breadcrumbs__item breadcrumbs__item--active">
                    <span class="breadcrumbs__label">Contacts</span>
                  </li>
                </ul>{" "}
              </div>

              <h1 class="top-section__title">Contacts </h1>
            </div>
          </div>
        </section>

        <section class="section section_light-blue">
          <div class="container container_small-padding">
            <div class="content">
              <div class="contacts__list">
                <div class="contacts__item">
                  <p class="contacts__title">
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/contacts/ic-support.svg"
                      alt=""
                    />
                    Support Service{" "}
                  </p>
                  <div class="contacts__text">
                    <p>
                      Dooption support specialists are happy to answer any
                      questions you may have via built-in:
                    </p>
                  </div>
                  <p>
                    <a
                      class="link contacts__link"
                      href="https://pocketoption.com/en/cabinet/support/"
                    >
                      Support Desk
                    </a>
                  </p>
                </div>
                <div class="contacts__item">
                  <p class="contacts__title">
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/contacts/ic-help.svg"
                      alt=""
                    />
                    Community Help{" "}
                  </p>
                  <div class="contacts__text">
                    <p>
                      Find answers, ask questions, and connect with our
                      community of traders from around the world:
                    </p>
                  </div>
                  <p>
                    <a
                      class="link contacts__link js-link-with-get-param"
                      id="chat-block-trigger"
                      target="_blank"
                      href="https://pocketoption.com/en/cabinet/?openRoom=14906/"
                    >
                      General Chat
                    </a>
                  </p>
                </div>
                <div class="contacts__item">
                  <p class="contacts__title">
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/contacts/ic-hotline.svg"
                      alt=""
                    />
                    Hotline{" "}
                  </p>
                  <div class="contacts__text">
                    <p>
                      Reach us by phone if you need a quick-advice on general
                      questions:
                    </p>
                  </div>
                  <p>
                    <a
                      class="link contacts__link contacts__link_no-border"
                      href="tel:+917736383727"
                    >
                      +91 77363 83727
                    </a>
                  </p>
                  <p class="contacts__work-time">10:00-02:00 UTC+5:30 </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light-blue contacts-form">
          <div class="container">
            <div class="content">
              <div id="form-block" class="contacts-form__wrap">
                <div class="contacts-form__left">
                  <h2 class="contacts-form__title">Send us a message </h2>
                  <div class="contacts-form__desc">
                    <p>
                      We are looking forward to assisting you in a professional
                      and timely manner. Please complete the form below to
                      submit your question and our specialists will get back to
                      you.
                    </p>
                  </div>
                </div>
                <div class="contacts-form__right">
                  <form
                    method="post"
                    action="https://pocketoption.com/en/contacts/#form-block"
                    class="form-with-label form"
                  >
                    <div class="form__row">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value=""
                          class="form-control"
                          required
                        />
                        <label for="email">
                          Email <span>*</span>
                        </label>
                      </div>
                    </div>
                    <div class="form__row">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          autocomplete="off"
                          required
                        ></textarea>
                        <label for="message">
                          Message <span>*</span>
                        </label>
                      </div>
                    </div>
                    <div class="form__row form__row_rules">
                      <div class="form-group  rules ">
                        <div class="checkbox">
                          <label>
                            I have read and accepted the terms of the following
                            agreement:{" "}
                            <a
                              href="https://pocketoption.com/pdf/po_trade/po_privacy_en.pdf"
                              target="_blank"
                            >
                              Privacy Policy
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
                    </div>
                    <div class="form__row">
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
                      </div>
                    </div>

                    <button type="submit" class="btn btn_blue-gradient">
                      Send{" "}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default Contacts;

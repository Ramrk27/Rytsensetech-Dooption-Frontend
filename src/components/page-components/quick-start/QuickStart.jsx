import React from "react";
import Header from "../../../components/home-components/header/Header";
import Sidebar from "../../home-components/side-bar/Sidebar";
import "./quickstart.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../home-components/footer/Footer";

import Accordion from "react-bootstrap/Accordion";
const QuickStart = () => {
  const navigate = useNavigate();

  function toggleContent() {
    const visibleContent = document.querySelector(".visible-content");
    const hiddenContent = document.querySelector(".hidden-content");
    const button = document.querySelector(".see-more-button");

    if (visibleContent.style.display === "none") {
      visibleContent.style.display = "block";
      hiddenContent.style.display = "none";
      button.textContent = "See More";
    } else {
      visibleContent.style.display = "none";
      hiddenContent.style.display = "block";
      button.textContent = "See Less";
    }
  }
  return (
    <div>
      <Header />

      <div class="page page--quick-start">
        <section class="section top-section">
          <div class="container top-section__container_bg">
          <div class="container top-section__container">
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
                    <span class="breadcrumbs__label">Quick start</span>
                  </li>
                </ul>{" "}
              </div>

              <h1 class="top-section__title">
                How to trade <span>on financial markets</span>{" "}
              </h1>
              <p class="top-section__desc">
                With <span>Dooption</span>{" "}
              </p>
              <a
                onClick={() => {
                  navigate("/");
                }}
                class="btn btn_blue-gradient"
              >
                Start in one click{" "}
              </a>
            </div>
          </div>
          </div>
        </section>

        <section class="section section_light title-section">
          <div class="container title-section__container">
            <div class="content">
              <h2>
                Get started <span>in a few easy steps</span>{" "}
              </h2>
            </div>
          </div>
        </section>

        {/* <section class="section section_light steps steps_left js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__title-wrap">
                  <div class="steps__num">1</div>
                  <p class="steps__title">Registration </p>
                </div>

                <div class="steps__text">
                  <p>
                    Create a free trading account by using your email address or
                    simply authorize via Facebook and Google accounts.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    Registíndicen is a quite simple process. You are able to
                    choose one of the ways for registíndicen: sign up with an
                    email address, use your facebook account or use your google
                    account.{" "}
                  </p>
                  <p>
                    Select the most comfortable option and proceed with your
                    account registíndicen. Please note, that if you sign up via
                    facebook/google you will may need to reset your password{" "}
                    <a href="https://pocketoption.com/en/password_recovery/">
                      here
                    </a>{" "}
                    in order to login to your Dooption account by using email
                    and password instead.{" "}
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Enter your email and password{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Sign up using your Facebook profile{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_1_3@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Sign up using your Google profile{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_1@2x.png 2x"
                      alt="Registration icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/1_2@2x.png 2x"
                      alt="Registration icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light steps steps_right js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_1@2x.png 2x"
                      alt="Verification icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/2_2@2x.png 2x"
                      alt="Verification icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__title-wrap">
                  <div class="steps__num">2</div>
                  <p class="steps__title">Verification </p>
                </div>

                <div class="steps__text">
                  <p>
                    Make your account personalized. Enter your personal
                    information in the profile and upload both ID document and
                    address documents.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    Verification is a required procedure in order to protect
                    your account and funds from unauthorized access as well as
                    comply with all financial regulations and AML requirements.{" "}
                  </p>
                  <p>
                    It is always best to complete verification once you register
                    your account. Navigate to your{" "}
                    <a href="https://pocketoption.com/en/cabinet/profile/">
                      Profile
                    </a>{" "}
                    to enter all the personal and address information and upload
                    ID document and address proof documents.{" "}
                  </p>
                  <p>
                    Your account will be reviewed and confirmed once everything
                    is provided correctly, unlocking you all the features
                    Dooption platform has to offer!{" "}
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">Select the Profile menu </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">Open your Profile </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_2_3@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Enter personal info and upload docs{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light steps steps_left js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__title-wrap">
                  <div class="steps__num">3</div>
                  <p class="steps__title">Deposit </p>
                </div>

                <div class="steps__text">
                  <p>
                    Add funds to your trading account balance by using the most
                    comfortable deposit method. Processing time depends on the
                    chosen option.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    Once your account is fully verified all the offered deposit
                    options are available to you. Choose the one that is
                    comfortable for you and proceed with the displayed
                    instructions to complete your payment. Depending on the
                    chosen method, it may take some time for the transfer to
                    reflect on your Pocket Option trading account.
                  </p>
                  <p>
                    Please note that in accordance with the{" "}
                    <a href="https://pocketoption.com/pdf/offer_en.pdf">
                      Public Offer Agreement
                    </a>{" "}
                    as well as AML policies, you are able to withdraw funds via
                    the methods that you previously used for depositing on your
                    trading account.
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Select suitable payment method{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_3_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Enter the amount and complete your payment{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_1@2x.png 2x"
                      alt="Deposit icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/3_2@2x.png 2x"
                      alt="Deposit icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light steps steps_right js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_1@2x.png 2x"
                      alt="Trading icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/4_2@2x.png 2x"
                      alt="Trading icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__title-wrap">
                  <div class="steps__num">4</div>
                  <p class="steps__title">Trading </p>
                </div>

                <div class="steps__text">
                  <p>
                    Trading on Dooption is easy as 123. Choose a trading asset,
                    setup preferred chart layout and enable indicators for
                    better market analysis. Set the trade amount, purchase time
                    and place either a price decrease or increase order.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    Trading on Dooption is easy. You will need just a few things
                    to easily navigate the trading interface. Start by choose
                    the trading type (quick, digital or forex MT5), then select
                    the preferred trading asset (currency, stocks, commodities,
                    etc.) and set the chart type (area, line, candles, bars,
                    heiken ashi).
                  </p>
                  <p>
                    Thereafter, you will find yourself on the current market
                    situation of the chosen asset. Additionally, add the
                    required indicators to the chart, enable signals and
                    drawings to aid technical analysis of the market. Make your
                    forecast and place the order by using the trading panel. You
                    always can track and monitor your trading session in the
                    Trades menu.
                  </p>
                  <p>
                    View our comprehensive{" "}
                    <a href="https://pocketoption.com/en/cabinet/platform-guide/">
                      Platform Guide
                    </a>{" "}
                    to learn more about all the trading services Pocket Option
                    provides.
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Open the trading interface{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Select a desired trading asset{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_3@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Choose a preferred chart type{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_4_4@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Add indicators and drawings{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light steps steps_left js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__title-wrap">
                  <div class="steps__num">5</div>
                  <p class="steps__title">Profit </p>
                </div>

                <div class="steps__text">
                  <p>
                    Each correct forecast result in a profitable trade order.
                    The order amount plus the generated profit are automatically
                    added to your account balance. Manage your income properly,
                    invest further or withdraw profit if necessary.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    Each correct forecast result in profit — the originally
                    invested trade order amount plus the generated profit (in
                    accordance with the displayed asset payout %) are
                    automatically added to your account balance.{" "}
                  </p>
                  <p>
                    Manage your income properly, invest further or withdraw
                    profit if necessary. A PRO-trader always follows the money
                    management rules as well as always analyzes and finds the
                    best strategies to fit the current market situation. Read
                    more about trading strategies{" "}
                    <a href="https://pocketoption.com/en/cabinet/trading-strategies/">
                      here
                    </a>
                    .
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1.png"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1.png"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Place your forecast for a price increase or decrease{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2.jpg"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2.jpg"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_5_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Monitor your recently placed trades{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_1@2x.png 2x"
                      alt="Profit icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/5_2@2x.png 2x"
                      alt="Profit icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light steps steps_right js-step">
          <div class="container steps__container">
            <div class="content steps__content">
              <div class="steps__left">
                <div class="steps__img-wrap">
                  <img
                    class="steps__img steps__img_0"
                    src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/0.webp"
                    alt="Shadow"
                  />
                  <picture class="steps__img steps__img_1">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_1@2x.png 2x"
                      alt="Withdrawal icon 1"
                      loading="lazy"
                    />
                  </picture>
                  <picture class="steps__img steps__img_2">
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2@2x.webp 2x"
                      type="image/webp"
                    />
                    <source
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2@2x.png 2x"
                      type="image/png"
                    />
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2.png"
                      data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2.png"
                      srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/6_2@2x.png 2x"
                      alt="Withdrawal icon 2"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
              <div class="steps__right">
                <div class="steps__title-wrap">
                  <div class="steps__num">6</div>
                  <p class="steps__title">Withdrawal </p>
                </div>

                <div class="steps__text">
                  <p>
                    You can withdraw your trading account balance at any time
                    without any restrictions on the amount. Place a withdrawal
                    request via one of the methods previously used for
                    depositing and wait for it to be processed and sent.{" "}
                  </p>
                </div>
                <div class="steps__text steps__text_hidden">
                  <p>
                    If you do not have active deposit bonuses, you can withdraw
                    your trading account balance at any time without any
                    restrictions on the amount. In case you do have active
                    deposit bonus, the bonus amount will be withheld from your
                    balance if it is not executed it full. View the bonus
                    information and execution progress in the{" "}
                    <a href="https://pocketoption.com/en/cabinet/promo/">
                      Promo codes
                    </a>{" "}
                    section.
                  </p>
                  <p>
                    Place a withdrawal request via of the methods previously
                    used for depositing and wait for it to be processed and
                    sent. Depending on the chosen method, it may take some time
                    for the transfer to reflect on your account.
                  </p>
                </div>

                <div class="js-steps-slider steps__slider">
                  <div class="slider">
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1.png"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1.png"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_1@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">Select the Finance menu </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2.png"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2.png"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_2@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Open the Withdrawal section{" "}
                      </p>
                    </div>
                    <div class="slider__item">
                      <picture class="slider__img">
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3.webp 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3@2x.webp 2x"
                          type="image/webp"
                        />
                        <source
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3@2x.jpg 2x"
                          type="image/jpg"
                        />
                        <img
                          src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3.png"
                          data-src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3.png"
                          srcset="https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3.png 1x, https://pocketoption.com/themes/2017-09/img/pages/quick-start/QS_6_3@2x.jpg 2x"
                          alt=""
                          loading="lazy"
                        />
                      </picture>
                      <p class="slider__img-desc">
                        Complete the form and place your request{" "}
                      </p>
                    </div>
                  </div>
                  <div class="slider__arrows">
                    <a class="slider__arrow arrow arrow-left">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 1L2 11L12 21"
                          stroke="#96AEC1"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                    <div class="dots">
                      <div class="dots__btn"></div>
                      <div class="dots__line"></div>
                    </div>
                    <a class="slider__arrow arrow arrow-right">
                      <svg
                        width="13"
                        height="22"
                        viewBox="0 0 13 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L11 11L1 21"
                          stroke="#0099FA"
                          stroke-width="2"
                          class="slider-arrow-stroke"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="link steps__btn js-step-more-btn">
                  <span class="steps__visible-btn-text">Learn more </span>
                  <span class="steps__hidden-btn-text">Hide details </span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section class="section section_light steps steps_left js-step">
          <div class="container steps__container">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>REGISTRATION</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>VERIFICATION</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Deposit</Accordion.Header>
                <Accordion.Body>
                  Once your account is fully verified all the offered deposit
                  options are available to you. Choose the one that is
                  comfortable for you and proceed with the displayed
                  instructions to complete your payment. Depending on the chosen
                  method, it may take some time for the transfer to reflect on
                  your Dooption  trading account. Please note that in
                  accordance with the as well as AML policies, you are able to
                  withdraw funds via the methods that you previously used for
                  depositing on your trading account.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Trading</Accordion.Header>
                <Accordion.Body>
                  Trading on Dooption is easy as 123. Choose a trading asset,
                  setup preferred chart layout and enable indicators for better
                  market analysis. Set the trade amount, purchase time and place
                  either a price decrease or increase order. Trading on Dooption
                  is easy. You will need just a few things to easily navigate
                  the trading interface. Start by choose the trading type
                  (quick, digital or forex MT5), then select the preferred
                  trading asset (currency, stocks, commodities, etc.) and set
                  the chart type (area, line, candles, bars, heiken ashi).
                  Thereafter, you will find yourself on the current market
                  situation of the chosen asset. Additionally, add the required
                  indicators to the chart, enable signals and drawings to aid
                  technical analysis of the market. Make your forecast and place
                  the order by using the trading panel. You always can track and
                  monitor your trading session in the Trades menu.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Profit</Accordion.Header>
                <Accordion.Body>
                  Each correct forecast result in a profitable trade order. The
                  order amount plus the generated profit are automatically added
                  to your account balance. Manage your income properly, invest
                  further or withdraw profit if necessary. ass="steps__text
                  steps__text_hidden" Each correct forecast result in profit —
                  the originally invested trade order amount plus the generated
                  profit (in accordance with the displayed asset payout %) are
                  automatically added to your account balance. Manage your
                  income properly, invest further or withdraw profit if
                  necessary. A PRO-trader always follows the money management
                  rules as well as always analyzes and finds the best strategies
                  to fit the current market situation. Read more about trading
                  strategies{" "}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Withdrawal</Accordion.Header>
                <Accordion.Body>
                  You can withdraw your trading account balance at any time
                  without any restrictions on the amount. Place a withdrawal
                  request via one of the methods previously used for depositing
                  and wait for it to be processed and sent. If you do not have
                  active deposit bonuses, you can withdraw your trading account
                  balance at any time without any restrictions on the amount. In
                  case you do have active deposit bonus, the bonus amount will
                  be withheld from your balance if it is not executed it full.
                  View the bonus information and execution progress in the{" "}
                  section. Place a withdrawal request via of the methods
                  previously used for depositing and wait for it to be processed
                  and sent. Depending on the chosen method, it may take some
                  time for the transfer to reflect on your account.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </section>

        <section class="section info">
          <div class="container info__container">
            <div class="content info__content">
              <div class="info__item item">
                <div class="item__in social">
                  <div class="item__icon-wrap">
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/icon-social.svg"
                      alt="Social icon"
                      class="item__icon"
                    />
                  </div>
                  <h2 class="item__title">
                    Social <span>trading</span>{" "}
                  </h2>
                  <div class="item__text">
                    <p>
                      Social Trading is one of the many unique features Pocket
                      Option has to offer. It allows you to monitor progress,
                      view ratings, as well as setup automatic trading orders
                      copy of the most successful traders.
                    </p>
                    <p class="item__bold-text">
                      Start your passive income with social trading and copy PRO
                      traders.
                    </p>
                  </div>
                  <a
                    href="https://pocketoption.com/en/land/social-trading/"
                    target="_blank"
                    class="item__btn btn btn_blue-gradient"
                  >
                    Start copying{" "}
                  </a>
                </div>
              </div>
              <div class="info__item item">
                <div class="item__in chat">
                  <div class="item__icon-wrap">
                    <img
                      src="https://pocketoption.com/themes/2017-09/img/pages/quick-start/icon-chat.svg"
                      alt="Chat icon"
                      class="item__icon"
                    />
                  </div>
                  <h2 class="item__title">Chat </h2>
                  <div class="item__text">
                    <p>
                      Chat is another exclusive feature offered by Pocket
                      Option. Contact the support service and receive a reply in
                      a timely manner, communicate with other traders, create
                      your own chat groups. Get instant analytics information,
                      stay abreast of the latest news and promotions.
                    </p>
                    <p class="item__bold-text">
                      Truly social trading experience at your fingertips.
                    </p>
                  </div>
                  <a
                    href="https://pocketoption.com/en/cabinet?openRoom=14906/"
                    target="_blank"
                    class="item__btn btn btn_blue-gradient"
                  >
                    Open chat{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section risk-disclosure">
          <div class="content steps__content">
            <div class="container">
              <div class="content risk-disclosure__in">
                <p class="risk-disclosure__title">Risk Warning:</p>
                <p>
                  Trading on financial markets carries risks. Contracts for
                  Difference (‘CFDs’) are complex financial products that are
                  traded on margin. Trading CFDs carries a high level of risk
                  since leverage can work both to your advantage and
                  disadvantage. As a result, CFDs may not be suitable for all
                  investors because you may lose all your invested capital. You
                  should not risk more than you are prepared to lose. Before
                  deciding to trade, you need to ensure that you understand the
                  risks involved and taking into account your investment
                  objectives and level of experience
                </p>
                <p class="risk-disclosure__link-title">
                  <a
                    href="https://pocketoption.com/en/riskdisclosure/"
                    target="_blank"
                    class="risk-disclosure__link link link_light"
                  >
                    Risk Disclosure{" "}
                  </a>
                </p>
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

export default QuickStart;

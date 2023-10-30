import React from "react";
import Header from "../home-components/header/Header";
import Sidebar from "../home-components/side-bar/Sidebar";
import "./about.css";
import Footer from "../home-components/footer/Footer";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div class="page page--about-us">
        <section class="section top-section">
          <div class="container top-section__container_about_bg">
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
                      <span class="breadcrumbs__label">About Us</span>
                    </li>
                  </ul>{" "}
                </div>

                <h1 class="top-section__title">
                  <span>Our mission</span> is to provide the most innovative
                  trading experience{" "}
                </h1>
                <p class="top-section__desc">
                  Dooption was founded in 2017 by a team of talented IT and
                  FinTech specialists who wanted to prove that people don’t need
                  to compromise to earn on financial markets — that trading
                  should be accessible, convenient and more fun.
                </p>
                <p class="top-section__desc">
                  Today, we continue to develop, improve and constantly innovate
                  trading experience. We do believe that trading should be
                  available to anyone in the world.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="section section_light why">
          <div class="container container_small-padding why__container">
            <div class="content why__content">
              <div class="why__left">
                <h2>
                  <span>Why</span> choose us?
                </h2>
                <p class="why__text">
                  We started as a small company with a handful of customers. We
                  were new, our services were not as polished and popular as
                  today. By the end of 2017 we had:{" "}
                </p>
                <div class="why__list">
                  <div class="why__col">
                    <p class="why__num">
                      <i data-from="0" data-to="100000">
                        0
                      </i>
                    </p>
                    <p class="why__desc">active users</p>
                  </div>
                  <div class="why__col">
                    <p class="why__num">
                      $
                      <i data-from="0" data-to="500000000">
                        0
                      </i>
                    </p>
                    <p class="why__desc">trading turnover</p>
                  </div>
                  <div class="why__col">
                    <p class="why__num">
                      <i data-from="0" data-to="95">
                        0
                      </i>
                    </p>
                    <p class="why__desc">countries and regions</p>
                  </div>
                  <div class="why__col">
                    <p class="why__num">
                      $
                      <i data-from="0" data-to="850">
                        0
                      </i>
                      +
                    </p>
                    <p class="why__desc">average trader income per month</p>
                  </div>
                </div>
              </div>
              <div class="why__right">
                <div class="why__info info">
                  <img
                    src="https://pocketoption.com/themes/2017-09/img/pages/about/why-icon.png"
                    alt=""
                    class="info__img"
                  />
                  <div class="info__text">
                    <p>
                      The number of active users who appreciate our service
                      increases rapidly.{" "}
                    </p>
                    <p>
                      By the end of 2018 we hit our first million users mark.{" "}
                    </p>
                    <p>
                      In 2019 we already had <span>more than 10 million</span>{" "}
                      registered users.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="about-us_blue-bg">
          <section class="section how-we-work">
            <div class="container">
              <div class="content how-we-work__content">
                <div class="how-we-work__left">
                  <h2>
                    <span>How</span> we work with our clients?
                  </h2>
                </div>
                <div class="how-we-work__right">
                  <img
                    src="https://pocketoption.com/themes/2017-09/img/pages/about/quote.svg"
                    alt=""
                    class="how-we-work__svg"
                  />
                  <div class="how-we-work__text">
                    <p>
                      Client satisfaction has been our top priority since the
                      very beginning.
                    </p>

                    <p>
                      We aim not only to provide excellent customer support, but
                      also on listening to clients’ feedback carefully.
                    </p>
                    <p>Many wonderful ideas were inspired by our customers.</p>
                    <p>By the traders and for the traders! </p>
                  </div>
                  <div class="support-head">
                    <p class="support-head__desc">
                      <span class="support-head__name">Victor</span>
                      <span class="support-head__post">
                        Head of Dooption customer support
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="section documents">
            <div class="container container__no-padding">
              <div class="content documents__content">
                <div class="documents__img-wrap">
                  <img
                    src="https://pocketoption.com/themes/2017-09/img/pages/about/mail.png"
                    alt="Mail"
                    class="documents__img"
                  />
                </div>
                <div class="documents__info-wrap">
                  <div class="documents__left">
                    <h2>Documents </h2>
                    <p class="documents__desc">
                      Infinite Trade LLC is regulated by the Mwali International
                      Services Authority (License T2023322).
                    </p>
                  </div>
                  <div class="documents__right">
                    <ul class="documents__list list">
                      <li class="list__item">
                        <a
                          class="list__link"
                          target="_blank"
                          href="https://pocketoption.com/pdf/offer_en.pdf"
                        >
                          Terms and Conditions
                        </a>
                      </li>
                      <li class="list__item">
                        <a
                          class="list__link"
                          href="https://pocketoption.com/en/responsibility-disclosure/"
                        >
                          Responsibility Disclosure
                        </a>
                      </li>
                      <li class="list__item">
                        <a
                          class="list__link"
                          href="https://pocketoption.com/pdf/po_trade/po_privacy_en.pdf"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li class="list__item">
                        <a
                          class="list__link"
                          href="https://pocketoption.com/en/aml-policy/"
                        >
                          AML and KYC Policy
                        </a>
                      </li>
                      <li class="list__item">
                        <a
                          class="list__link"
                          onClick={() => {
                            navigate("/payment-policy");
                          }}
                        >
                          Payment Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section class="section timeline">
            <div class="container timeline__container"></div>
          </section> */}

          <section class="section core-values">
            <div class="container container__no-padding">
              <div class="content">
                <h2>
                  What we believe. <span>Our core values</span>
                </h2>
                <div class="core-values__list">
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/1.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Driving innovations</p>
                      <div class="item__text">
                        We stand on a constant pursuit of perfection. The
                        introduction of new cutting-edge features and setting
                        trends makes us the industry leaders.
                      </div>
                    </div>
                  </div>
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/2.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Customer loyalty</p>
                      <div class="item__text">
                        Enabling clients to become high-performance traders and
                        creating long-term relationships by being responsive and
                        relevant, and by consistently delivering top-notch
                        service.
                      </div>
                    </div>
                  </div>
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/3.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Truly social</p>
                      <div class="item__text">
                        We believe in the community. It drives us, it inspires
                        us. Сomfort and truly social interaction among our
                        customers is our top priority.
                      </div>
                    </div>
                  </div>
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/4.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Sustainability</p>
                      <div class="item__text">
                        Attracting, developing and retaining the best talent for
                        our project, challenging our people, demonstrating a
                        "can-do" attitude and fostering a collaborative and
                        supportive environment.
                      </div>
                    </div>
                  </div>
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/5.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Integrity</p>
                      <div class="item__text">
                        Personal integrity and legal compliance are essential to
                        our operation as a global enterprise. We're committed to
                        international policies and practices that benefit our
                        company and its clients.
                      </div>
                    </div>
                  </div>
                  <div class="core-values__item item">
                    <div class="item__in">
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/pages/about/icons/6.svg"
                        alt=""
                        class="item__icon"
                      />
                      <p class="item__title">Shared success</p>
                      <div class="item__text">
                        Our mission is to bring easy and accessible trading to
                        customers worldwide, making possible to benefit from
                        financial markets anytime and anywhere.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <section class="section social section_light">
          <div class="container container_small-padding" id="social">
            <div class="content">
              <h2>
                <span>In</span> the news
              </h2>
              <p class="social__text">
                Discover how our community, services and innovations are making
                headlines in the industry, in every country, every day.
              </p>
              <div class="social-link__list">
                <div class="social-link__item">
                  <a
                    href="https://www.facebook.com/pocketoption/"
                    target="_blank"
                    class="social-link__in social-link__in_fb"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="svg-icon"
                    >
                      <g clip-path="url(#clip0_85_3793)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.9999 0.499512C6.22892 0.499512 0.7229 6.0955 0.7229 13.0005C0.7229 19.9055 6.22892 25.5015 12.9999 25.5015C19.7709 25.5015 25.2769 19.9055 25.2769 13.0005C25.2769 6.0955 19.7709 0.499512 12.9999 0.499512ZM14.2979 23.4186V15.7715C14.2979 15.6545 14.3929 15.5585 14.5099 15.5585H16.8649L17.2829 12.8365H14.5099C14.3929 12.8365 14.2979 12.7415 14.2979 12.6235V10.5815C14.2979 10.0985 14.4219 9.62451 14.7289 9.26851C15.0359 8.91351 15.5279 8.66853 16.2849 8.66853H17.4449V6.38252C17.0639 6.32552 16.1259 6.20051 15.2199 6.20051C14.0399 6.20051 13.0619 6.55147 12.3809 7.23347C11.6989 7.91647 11.3199 8.9265 11.3199 10.2245V12.6235C11.3199 12.7415 11.2239 12.8365 11.1069 12.8365H8.55491V15.5585H11.1069C11.2239 15.5585 11.3199 15.6545 11.3199 15.7715V23.3615C6.44193 22.5415 2.7229 18.2075 2.7229 13.0005C2.7229 7.2105 7.32192 2.49952 12.9999 2.49952C18.6779 2.49952 23.2769 7.2105 23.2769 13.0005C23.2769 18.3425 19.3619 22.7656 14.2979 23.4186Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_85_3793">
                          <rect width="26" height="26" />
                        </clipPath>
                      </defs>
                    </svg>
                    Facebook{" "}
                  </a>
                </div>
                <div class="social-link__item">
                  <a
                    href="https://www.instagram.com/potradeofficial/"
                    target="_blank"
                    class="social-link__in social-link__in_ins"
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
                    instagram{" "}
                  </a>
                </div>
                <div class="social-link__item">
                  <a
                    href="https://t.me/pocketoption"
                    target="_blank"
                    class="social-link__in social-link__in_tg"
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
                    telegram{" "}
                  </a>
                </div>
                <div class="social-link__item">
                  <a
                    href="https://www.youtube.com/c/PocketOption"
                    target="_blank"
                    class="social-link__in social-link__in_yt"
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
                    YouTube{" "}
                  </a>
                </div>
                <div class="social-link__item">
                  <a
                    href="https://twitter.com/PocketOption"
                    target="_blank"
                    class="social-link__in social-link__in_tw"
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
                    twitter{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section class="section join-us">
          <div class="container">
            <div class="join-us__bg bg">
              <img
                src="https://pocketoption.com/themes/2017-09/img/pages/about/join-bg.png"
                alt=""
                class="bg__item bg__item_1"
              />
            </div>
            <div class="content join-us__content">
              <h2>
                Join <span>us</span>
              </h2>
              <p class="join-us__text">
                A trader career with <span>Dooption</span> puts you at the
                forefront of innovation in the digital age. Work with the
                brightest minds in business to imagine and invent the future.
              </p>
              <a
                href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                class="join-us__btn btn btn_white"
              >
                Try demo in one click
              </a>
            </div>
          </div>
        </section>
        <section class="section risk-disclosure">
          <div class="container">
            <div class="content risk-disclosure__in">
              <p class="risk-disclosure__title">Risk Warning:</p>
              <p>
                Trading on financial markets carries risks. Contracts for
                Difference (‘CFDs’) are complex financial products that are
                traded on margin. Trading CFDs carries a high level of risk
                since leverage can work both to your advantage and disadvantage.
                As a result, CFDs may not be suitable for all investors because
                you may lose all your invested capital. You should not risk more
                than you are prepared to lose. Before deciding to trade, you
                need to ensure that you understand the risks involved and taking
                into account your investment objectives and level of experience
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
        </section>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default About;

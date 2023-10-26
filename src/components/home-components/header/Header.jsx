import React, { useState } from "react";
import "./header.css";
import MobileHeader from "../mobile-header/MobileHeader";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  const [langOpen, setLangOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const toggleLangClass = () => {
    setLangOpen(!langOpen);
  };
  const toggleMobileHeader = () => {
    setMobOpen(!mobOpen);
  };
  return (
    <div>
      <div class="layout">
        <header class="section header header_dark">
          <div class="container">
            <div class="content">
              <a
              onClick={()=>{navigate('/')}}
                class="header__logo logo "
              >
                <h3 width="210" height="30">
                  Dooption{" "}
                </h3>
              </a>
              <div class="header__info info">
                <div class="info__icon-wrap">
                  <div class="info__icon info__icon_1"></div>
                  <div class="info__icon info__icon_2"></div>
                </div>
                <div class="info__text">
                  Optimized charts rendering engine reduces loading time and{" "}
                  <span>increases battery life up to 25%.</span>{" "}
                </div>
              </div>
              <div class="header__menu">
                <ul>
                  <li>
                    <a href="/">Free Demo</a>
                  </li>
                  <li>
                    <a onClick={()=>{navigate('/quick-start')}}>Quick start</a>
                  </li>
                  <li>
                    <a onClick={()=>{navigate("/about")}}>About us</a>
                  </li>
                </ul>
              </div>
              <div class="header__right">
                <div class="header__lang">
                  <div
                    class={`languages js-languages ${
                      langOpen ? "languages--opened" : ""
                    }`}
                    onClick={toggleLangClass}
                  >
                    <p class="languages__title">
                      <span class="languages__flag">
                        <img src="/images/flags-svg/gb.svg" alt="English" />
                      </span>
                      <span class="languages__title-text">En </span>
                    </p>
                    <ul class="languages__list">
                      <li class="languages__item">
                        <a class="languages__link" href="/ru/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/ru.svg" alt="Русский" />
                          </span>
                          <span class="languages__lang-name">Русский</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/pt/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/br.svg"
                              alt="Português"
                            />
                          </span>
                          <span class="languages__lang-name">Português</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/es/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/es.svg" alt="Español" />
                          </span>
                          <span class="languages__lang-name">Español</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/it/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/it.svg"
                              alt="Italiano"
                            />
                          </span>
                          <span class="languages__lang-name">Italiano</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/pl/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/pl.svg" alt="Polski" />
                          </span>
                          <span class="languages__lang-name">Polski</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/id/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/id.svg"
                              alt="Indonesian"
                            />
                          </span>
                          <span class="languages__lang-name">Indonesian</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/fr/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/fr.svg"
                              alt="Français"
                            />
                          </span>
                          <span class="languages__lang-name">Français</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/th/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/th.svg" alt="Thai" />
                          </span>
                          <span class="languages__lang-name">Thai</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/de/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/de.svg" alt="Deutsch" />
                          </span>
                          <span class="languages__lang-name">Deutsch</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/vt/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/vn.svg"
                              alt="Tiếng Việt"
                            />
                          </span>
                          <span class="languages__lang-name">Tiếng Việt</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/ar/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/ae.svg"
                              alt=" العربية"
                            />
                          </span>
                          <span class="languages__lang-name"> العربية</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/ms/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/my.svg" alt="Malay" />
                          </span>
                          <span class="languages__lang-name">Malay</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/zh/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/cn.svg" alt="中文" />
                          </span>
                          <span class="languages__lang-name">中文</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/tr/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/tr.svg" alt="Türkçe" />
                          </span>
                          <span class="languages__lang-name">Türkçe</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/ja/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/jp.svg" alt="日本語" />
                          </span>
                          <span class="languages__lang-name">日本語</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/ko/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/kr.svg" alt="한국어" />
                          </span>
                          <span class="languages__lang-name">한국어</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/fa/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/ir.svg" alt="فارسی" />
                          </span>
                          <span class="languages__lang-name">فارسی</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/sr/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/rs.svg" alt="Српски" />
                          </span>
                          <span class="languages__lang-name">Српски</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/ro/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/ro.svg" alt="Română" />
                          </span>
                          <span class="languages__lang-name">Română</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/hr/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/hr.svg"
                              alt="Hrvatski"
                            />
                          </span>
                          <span class="languages__lang-name">Hrvatski</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/hi/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/in.svg" alt="हिन्दी" />
                          </span>
                          <span class="languages__lang-name">हिन्दी</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/el/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/gr.svg"
                              alt="ελληνικά"
                            />
                          </span>
                          <span class="languages__lang-name">ελληνικά</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/bn/">
                          <span class="languages__flag">
                            <img src="/images/flags-svg/bd.svg" alt="বাংলা" />
                          </span>
                          <span class="languages__lang-name">বাংলা</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/uk/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/ua.svg"
                              alt="Українська"
                            />
                          </span>
                          <span class="languages__lang-name">Українська</span>
                        </a>
                      </li>
                      <li class="languages__item">
                        <a class="languages__link" href="/fi/">
                          <span class="languages__flag">
                            <img
                              src="/images/flags-svg/ph.svg"
                              alt="Pilipinas"
                            />
                          </span>
                          <span class="languages__lang-name">Pilipinas</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="header__btns">
                  <a
                    href="https://m.pocketoption.com/en/login/"
                    class="link link_dark "
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="header-login-icon"
                    >
                      <path
                        fill-rule="evenodd"
                        class="icon-sign-in"
                        clip-rule="evenodd"
                        d="M12.9071 0C5.78491 0 0 5.78406 0 12.908C0 20.032 5.78491 25.8161 12.9071 25.8161C20.0292 25.8161 25.8142 20.032 25.8142 12.908C25.8142 5.78406 20.0292 0 12.9071 0ZM20.54 20.8947C17.1879 14.8163 7.99492 14.7605 5.37635 20.9912C7.34492 22.8317 9.99134 23.9589 12.9071 23.9589C15.8692 23.9589 18.5529 22.7927 20.54 20.8947ZM21.8307 19.4257C23.1679 17.5982 23.9571 15.3446 23.9571 12.908C23.9571 6.8092 19.0078 1.85714 12.9071 1.85714C6.80634 1.85714 1.85714 6.8092 1.85714 12.908C1.85714 15.3734 2.66497 17.6512 4.02997 19.4907C5.26497 17.1665 7.29855 15.6548 9.61069 14.9546C8.28284 13.9796 7.41928 12.4038 7.41928 10.6284C7.41928 7.66998 9.81501 5.2687 12.7772 5.2687C15.73 5.2687 18.1349 7.66998 18.1349 10.6284C18.1349 12.414 17.2529 13.9973 15.9157 14.9713C18.2464 15.6724 20.3914 17.1581 21.8307 19.4257ZM12.7772 7.12584C14.7086 7.12584 16.2778 8.69512 16.2778 10.6284C16.2778 12.5608 14.7086 14.13 12.7772 14.13C10.8364 14.13 9.27642 12.5608 9.27642 10.6284C9.27642 8.69512 10.8364 7.12584 12.7772 7.12584Z"
                      />
                    </svg>
                    Sign in
                  </a>
                </div>
                <div
                  class={`header__menu-btn js-trigger-btn ${
                    mobOpen ? "open" : ""
                  }`}
                  onClick={toggleMobileHeader}
                >
                  <span class="line"></span>
                  <span class="line"></span>
                  <span class="line"></span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <header class="section header header-mobile header_dark">
          <div class="container">
            <div class="header-mobile__left">
              <div
                class={`header__menu-btn js-trigger-btn ${
                  mobOpen ? "open" : ""
                }`}
                onClick={toggleMobileHeader}
              >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div>
            </div>
            <div class="header__info info">
              <div class="info__icon-wrap">
                <div class="info__icon info__icon_1"></div>
                <div class="info__icon info__icon_2"></div>
              </div>
              <div class="info__text">
                Optimized charts rendering engine reduces loading time and{" "}
                <span>increases battery life up to 25%.</span>{" "}
              </div>
            </div>
            <div class="header-mobile__center">
              <a href="https://pocketoption.com/en/" class="header__logo logo">
                <picture class="">
                  <source
                    srcset="https://pocketoption.com/themes/2017-09/img/logo-mobile.webp 1x, https://pocketoption.com/themes/2017-09/img/logo-mobile@2x.webp 2x"
                    type="image/webp"
                  />
                  <source
                    srcset="https://pocketoption.com/themes/2017-09/img/logo-mobile.png 1x, https://pocketoption.com/themes/2017-09/img/logo-mobile@2x.png 2x"
                    type="image/png"
                  />
                  <img
                    src="https://pocketoption.com/themes/2017-09/img/logo-mobile.png"
                    data-src="https://pocketoption.com/themes/2017-09/img/logo-mobile.png"
                    data-srcset="https://pocketoption.com/themes/2017-09/img/logo-mobile.png 1x, https://pocketoption.com/themes/2017-09/img/logo-mobile@2x.png 2x"
                    alt="Logo"
                    class=""
                    loading="lazy"
                  />
                </picture>
              </a>
            </div>

            <div class="header-mobile__right">
              <a
                href="https://pocketoption.com/en/login/"
                class="btn btn_blue header-mobile__btn"
              >
                Login
              </a>
            </div>
          </div>
        </header>
      </div>
      <MobileHeader mobOpen={mobOpen} />
    </div>
  );
};

export default Header;

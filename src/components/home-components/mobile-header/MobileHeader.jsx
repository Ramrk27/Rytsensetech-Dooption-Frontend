import React from "react";
import "./mobile-header.css";
import { useNavigate } from "react-router-dom";
import QuickStart from "../../page-components/quick-start/QuickStart";
const MobileHeader = ({ mobOpen }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        class={`mobile-block js-mobile-block ${
          mobOpen ? "mobile-block--opened" : ""
        }  `}
      >
        <div class="container mobile-block__container">
          <div class="mobile-block__in">
            <div class="">
              <div class="mobile-block__mob">
                <div class="mobile-block__lang">
                  <div class="languages js-languages">
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
              </div>
              <p class="mobile-block__title">Menu </p>
            </div>
            <nav class="mobile-nav">
              <div class="mobile-nav__col mobile-nav__col_2">
                <div class="mb-block">
                  <div class="mb-block__in">
                    <div class="mb-block__title">How it works</div>
                    <ul>
                      <li>
                        {/* <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                        >
                          Free Demo
                        </a> */}
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                         onClick={()=>{<QuickStart/>}}
                        >
                          Quick start
                        </a>
                      </li>
                      {/* <li>
                        <a
                          class="mb-block__link"
                           href="https://m.pocketoption.com/en/cabinet/demo-high-low/?try-demo=1&redirectUrl=cabinet/platform-guide"
                        >
                          Education
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                <div class="mb-block">
                  <div class="mb-block__in">
                    <div class="mb-block__title">Why Dooption</div>
                    <ul>
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={() => {
                            navigate("/assets-trading");
                          }}
                        >
                          100+ Trading Instruments
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={() => {
                            navigate("/payment-systems");
                          }}
                        >
                          Instant Deposits and Withdrawals
                        </a>
                      </li>
                      {/* <li>
                        <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/en/cabinet/demo-high-low/?try-demo=1&redirectUrl=cabinet/deposit-step-1"
                        >
                          Promo & Bonuses
                        </a>
                      </li> */}
                      {/* <li>
                        <a
                          class="mb-block__link"
                          target="_blank"
                          href="https://m.pocketoption.com/en/land/social-trading/"
                        >
                          Social trading
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
                {/* <div class="mb-block">
                  <div class="mb-block__in">
                    <div class="mb-block__title">Affiliate programs</div>
                    <ul>
                      <li>
                        <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/en/affiliate-program/"
                        >
                          Become an Affiliate
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/en/regional-representative/"
                        >
                          Become IB partner
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div class="mobile-nav__col mobile-nav__col_2">
                <div class="mb-block">
                  <div class="mb-block__in">
                    <div class="mb-block__title">About Us</div>
                    <ul>
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={() => {
                            navigate("/about");
                          }}
                        >
                          About company
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={() => {
                            navigate("/contacts");
                          }}
                        >
                          Contacts
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                       onClick={()=>{navigate("/riviews")}}
                        >
                          Reviews
                        </a>
                      </li>
                      {/* <li>
                        <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/en/cabinet/support/"
                        >
                          Support Service
                        </a>
                      </li> */}
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={()=>{navigate("/regulatory-environment")}}
                        >
                          Regulation
                        </a>
                      </li>
                      {/* <li>
                        <a
                          class="mb-block__link"
                          target="_blank"
                          href="https://m.pocketoption.com/pdf/offer_en.pdf"
                        >
                          Terms and Conditions
                        </a>
                      </li> */}
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={()=>{navigate("/kyc-policy")}}
                        >
                          AML and KYC Policy
                        </a>
                      </li>
                      {/* <li>
                        <a
                          class="mb-block__link"
                          href="https://m.pocketoption.com/pdf/po_trade/po_privacy_en.pdf"
                        >
                          Privacy Policy
                        </a>
                      </li> */}
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={()=>{navigate('/payment-policy')}}
                        >
                          Payment Policy
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link"
                          onClick={()=>{navigate("/responsibility-policy")}}
                        >
                          Responsibility Disclosure
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="mobile-nav__col mobile-nav__col_3">
                <div class="mb-block">
                  <div class="mb-block__in mb-block__in_transparent">
                    <a
                      onClick={()=>{navigate('/signup')}}
                      class="btn btn_blue btn_small-side-padding"
                    >
                      Registration{" "}
                    </a>
                    <a
                      onClick={()=>{navigate("login")}}
                      class="btn btn_white btn_small-side-padding"
                    >
                      Log In{" "}
                    </a>
                  </div>
                </div>
                {/* <div class="mb-block">
                  <div class="mb-block__in mb-block__in_white">
                    <div class="mb-block__title">Platforms</div>
                    <ul>
                      <li>
                        <a
                          class="mb-block__link mb-block__link_web"
                          href="https://m.pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                        >
                          Web App
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noopener"
                          class="mb-block__link mb-block__link_android js-android-link"
                          href="https://play.google.com/store/apps/details?id=com.potradeweb"
                          target="_blank"
                        >
                          Android
                        </a>
                      </li>
                      <li>
                        <a
                          class="mb-block__link mb-block__link_tb"
                          href="https://m.pocketoption.com/en/cabinet/telegram/link/"
                          target="_blank"
                        >
                          Telegram Bot
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;

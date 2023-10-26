import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="wrapper__top">
        <header class="site-header">
          <div class="login-container">
            <a
              class="site-header__back-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              To home page
            </a>

            <div class="languages js-languages">    
              <p class="languages__title">
                <span class="languages__flag">
                  <img src="/images/flags-svg/gb.svg" alt="English" />
                </span>
                <span class="languages__title-text">En </span>
              </p>
              <ul class="languages__list">
                <li class="languages__item">
                  <a class="languages__link" href="/ru/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ru.svg" alt="Русский" />
                    </span>
                    <span class="languages__lang-name">Русский</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/pt/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/br.svg" alt="Português" />
                    </span>
                    <span class="languages__lang-name">Português</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/es/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/es.svg" alt="Español" />
                    </span>
                    <span class="languages__lang-name">Español</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/it/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/it.svg" alt="Italiano" />
                    </span>
                    <span class="languages__lang-name">Italiano</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/pl/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/pl.svg" alt="Polski" />
                    </span>
                    <span class="languages__lang-name">Polski</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/id/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/id.svg" alt="Indonesian" />
                    </span>
                    <span class="languages__lang-name">Indonesian</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/fr/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/fr.svg" alt="Français" />
                    </span>
                    <span class="languages__lang-name">Français</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/th/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/th.svg" alt="Thai" />
                    </span>
                    <span class="languages__lang-name">Thai</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/de/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/de.svg" alt="Deutsch" />
                    </span>
                    <span class="languages__lang-name">Deutsch</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/vt/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/vn.svg" alt="Tiếng Việt" />
                    </span>
                    <span class="languages__lang-name">Tiếng Việt</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/ar/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ae.svg" alt=" العربية" />
                    </span>
                    <span class="languages__lang-name"> العربية</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/ms/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/my.svg" alt="Malay" />
                    </span>
                    <span class="languages__lang-name">Malay</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/zh/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/cn.svg" alt="中文" />
                    </span>
                    <span class="languages__lang-name">中文</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/tr/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/tr.svg" alt="Türkçe" />
                    </span>
                    <span class="languages__lang-name">Türkçe</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/ja/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/jp.svg" alt="日本語" />
                    </span>
                    <span class="languages__lang-name">日本語</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/ko/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/kr.svg" alt="한국어" />
                    </span>
                    <span class="languages__lang-name">한국어</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/fa/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ir.svg" alt="فارسی" />
                    </span>
                    <span class="languages__lang-name">فارسی</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/sr/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/rs.svg" alt="Српски" />
                    </span>
                    <span class="languages__lang-name">Српски</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/ro/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ro.svg" alt="Română" />
                    </span>
                    <span class="languages__lang-name">Română</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/hr/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/hr.svg" alt="Hrvatski" />
                    </span>
                    <span class="languages__lang-name">Hrvatski</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/hi/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/in.svg" alt="हिन्दी" />
                    </span>
                    <span class="languages__lang-name">हिन्दी</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/el/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/gr.svg" alt="ελληνικά" />
                    </span>
                    <span class="languages__lang-name">ελληνικά</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/bn/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/bd.svg" alt="বাংলা" />
                    </span>
                    <span class="languages__lang-name">বাংলা</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/uk/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ua.svg" alt="Українська" />
                    </span>
                    <span class="languages__lang-name">Українська</span>
                  </a>
                </li>
                <li class="languages__item">
                  <a class="languages__link" href="/fi/register/">
                    <span class="languages__flag">
                      <img src="/images/flags-svg/ph.svg" alt="Pilipinas" />
                    </span>
                    <span class="languages__lang-name">Pilipinas</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./content.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Sliding from "../sliding-comp/Sliding";
const Content = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const items = [
    {
      src: "/images/cards/card-2.png",
      alt: "First slide",
      title: "ACHIEVEMENTS",
    },
    {
      src: "/images/cards/card-3.png",
      alt: "Second slide",
      title: "PAYMENT METHODS",
    },
    {
      src: "/images/cards/card-4.png",
      alt: "Third slide",
      title: "GREAT COMMUNITY",
    },
    {
      src: "/images/cards/card-6.png",
      alt: "First slide",
      title: "WHY PEOPLE CHOOSE US",
    },
    {
      src: "/images/cards/card-1.png",
      alt: "Second slide",
      title: "TECHNICAL ANALYSIS TOOL",
    },
    {
      src: "/images/cards/card-5.png",
      alt: "Third slide",
      title: "TRADING ASSETS",
    },
  ];
  const totalItems = items.length;
  return (
    <div>
      <section class="section main-slider">
        <div class="container main-slider__container">
          <div class="content main-slider__content">
            <div class="main-slider__in">
              <h1 class="main-slider__title">
                Because you <br /> are the best
                <br /> you deserve the best
              </h1>
              <div class="main-slider__desc">
                <p class="main-slider__desc_bold">
                  Join the largest gathering and online trading platform
                </p>
                <p>
                  With access to trading in more than 100 global trading assets
                  in just one platform.
                </p>
              </div>
              <div class="main-slider__btn-container">
                <a
                  href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  class="btn btn_blue-gradient main-slider__btn"
                >
                  Start in one click
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section_light conditions" id="conditions">
        <div class="section_light_second_bg">
          <div class="container">
            <div class="content">
              <div class="conditions__in">
                <h2>Place your trades on best conditions</h2>
                <ul class="conditions__list">
                  <li class="conditions__item">
                    <p class="conditions__num">
                      $
                      <i data-from="0" data-to="5">
                        0
                      </i>
                      <span class="conditions__star">*</span>
                    </p>
                    <span class="conditions__subtitle">
                      Minimum investment amount
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      $
                      <i data-from="0" data-to="1">
                        0
                      </i>
                    </p>
                    <span class="conditions__subtitle">
                      Minimum trade amount
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      $
                      <i data-from="0" data-to="50000">
                        0
                      </i>
                    </p>
                    <span class="conditions__subtitle">
                      Virtual money on your Demo account
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      <i data-from="0" data-to="50">
                        0
                      </i>
                      +
                    </p>
                    <span class="conditions__subtitle">Payment methods</span>
                  </li>
                  <li class="conditions__item conditions__item_nomargin">
                    <p class="conditions__num">$0</p>
                    <span class="conditions__subtitle">
                      No commission on deposit and withdrawal
                    </span>
                  </li>
                  <li class="conditions__item conditions__item_nomargin">
                    <p class="conditions__num">
                      <i data-from="0" data-to="100">
                        0
                      </i>
                      +
                    </p>
                    <span class="conditions__subtitle">Assets for trading</span>
                  </li>
                </ul>

                <div class="monitor rotate">
                  <picture>
                    <img
                      src="/images/bg/joshh.png"
                      alt="Monitor"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section_light why-we">
        <div class="container">
          <div class="content why-we__in">
            <h2>
              <span>Why</span> choose us?
            </h2>
            <ul class="why-list">
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--flexible-trading"
                  href="https://pocketoption.com/en/cabinet/high-low/"
                >
                  <img
                    src="/images/contents/flex-trader.png"
                    alt="Icon 1"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Flexible Trading</p>
                  <p class="why-list__sub-title">
                    Latest trends: quick and digital trading, express trades,
                    Forex MT5, pending orders, trades copying. Payouts up to
                    218%.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--education"
                  href="https://pocketoption.com/en/cabinet/platform-guide/"
                >
                  <img
                    src="/images/contents/education.png"
                    alt="Icon 2"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Comprehensive Education</p>
                  <p class="why-list__sub-title">
                    Our help section contains tutorials, guides and various
                    trading strategies.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--diverse-trading-instruments"
                  href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                >
                  <img
                    src="/images/contents/trade-instr.png"
                    alt="Icon 3"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Diverse Trading Instruments</p>
                  <p class="why-list__sub-title">
                    Assets suitable for any trader: currency, commodities,
                    stocks.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--demo-account"
                  href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                >
                  <img
                    src="/images/contents/demo.png"
                    alt="Icon 4"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Demo Account</p>
                  <p class="why-list__sub-title">
                    Try all platform benefits on the Demo account using virtual
                    money. No investment needed, no risks involved.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--deposit-withdrawals"
                  href="https://pocketoption.com/en/payment-methods/"
                >
                  <img
                    src="/images/contents/deposit.png"
                    alt="Icon 5"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Easy Deposits and Withdrawals</p>
                  <p class="why-list__sub-title">
                    Use the most convenient payment method for hassle-free
                    deposits and withdrawals.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--high-customer-loyalty"
                  href="https://pocketoption.com/en/cabinet/high-low/"
                >
                  <img
                    src="/images/contents/customer-loyalty.png"
                    alt="Icon 6"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">High Customer Loyalty</p>
                  <p class="why-list__sub-title">
                    Trading tournaments, regular bonuses, gifts, promo codes and
                    contests are available to any trader.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--trading-advantages"
                  href="https://pocketoption.com/en/cabinet/profile/achievements/market/"
                >
                  <img
                    src="/images/contents/trade-adv.png"
                    alt="Icon 7"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Trading Advantages</p>
                  <p class="why-list__sub-title">
                    Use cashback and other advantages for a more comfortable
                    trading experience with minimal risks.
                  </p>
                </a>
              </li>
              <li class="why-list__">
                <a
                  class="why-list__link why-list__link--indicators-and-signals"
                  href="https://pocketoption.com/en/cabinet/high-low/#open-chart-settings-indicators-modal"
                >
                  <img
                    src="/images/contents/indicators.png"
                    alt="Icon 8"
                    class="lazy"
                    loading="lazy"
                  />
                  <p class="why-list__title">Indicators and Signals</p>
                  <p class="why-list__sub-title">
                    Everything you need for a top-tier trading experience
                    including popular indicators and signals.
                  </p>
                </a>
              </li>
              <li class="why-list__item_start-trading start-trading">
                <div class="start-trading__inn">
                  <p class="start-trading__text">Trade in one click </p>
                  <a
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                    class="btn btn_blue-gradient"
                  >
                    Start trading
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section slider offers">
        <div class="container">
          <div class="content offers__in">
            {/* <div class="slider__arrows">
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
            </div> */}

            {/* <div class="offers__corners">
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-1.png"
                class="offers__corner offers__corner_1"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-2.png"
                class="offers__corner offers__corner_2"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-3.png"
                class="offers__corner offers__corner_3"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-4.png"
                class="offers__corner offers__corner_4"
                alt=""
                loading="lazy"
              />
            </div> */}
            {/* <div class="offers__list">
              <a
                href="https://pocketoption.com/en/payment-methods/"
                class="offers__item offers__item_payment-methods"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/one.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/one.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Payment methods</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/assets-current/"
                class="offers__item offers__item_trading-assets"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/two.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/two.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Trading assets</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/profile/achievements/"
                target="_blank"
                class="offers__item offers__item_achievements"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/three.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/three.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Achievements</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/applications/"
                target="_blank"
                class="offers__item offers__item_apps"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/four.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/four.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Apps for any device</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/reviews/"
                target="_blank"
                class="offers__item offers__item_why"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.png 2x"
                        alt="Feedback icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.png 2x"
                        alt="Feedback icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Why people choose us</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/platform-guide/#indicators"
                target="_blank"
                class="offers__item offers__item_tech-analysis"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.png 2x"
                        alt="Analytic icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.png 2x"
                        alt="Analytic icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Technical Analysis Tools</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/platform-guide/#enabling-trading-signals"
                target="_blank"
                class="offers__item offers__item_signals"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.png 2x"
                        alt="Signal icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.png 2x"
                        alt="Signal icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Signals</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet?openRoom=14906/"
                target="_blank"
                class="offers__item offers__item_community"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.png 2x"
                        alt="Community icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.png 2x"
                        alt="Community icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Great community</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/land/social-trading/"
                target="_blank"
                class="offers__item offers__item_social-trading"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.png 2x"
                        alt="Social icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.png 2x"
                        alt="Social icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Social trading</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/affiliate-program/"
                class="offers__item offers__item_affiliate-programs"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.png 2x"
                        alt="Case icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.png 2x"
                        alt="Case icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Affiliate program</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
            </div> */}

            <Sliding items={items} itemsPerPage={3} />
            {/* <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/cards/edit-three.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>Payment Method</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/cards/edit-two.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/bg/sec-one.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
      </section>

      {/* <section class="section section_light check-your-luck">
        <div class="container container__no-padding">
          <div class="content check-your-luck__in">
            <div class="check-your-luck__left">
              <h2>Test Your Luck!</h2>
              <p class="title-desc">
                Enter your email address and get a special offer from Dooption .
                If the luck is on your side, you will receive a free gift!{" "}
              </p>
            </div>
            <div class="check-your-luck__right">
              <div class="alert alert--danger"></div>
              <div class="form-wrap">
                <form
                  action="https://pocketoption.com/en/check-your-luck/"
                  method="post"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="btn btn_blue-gradient"
                    data-fancybox
                    data-src="#check-your-luck-captcha-modal"
                  >
                    Check it now{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section class="section section_light applications">
        <div class="container">
          <div class="content applications__in">
            <h2>Web application for any device </h2>
            <ul class="devices">
              <li class="devices__item">
                <a
                  rel="noopener"
                  href="https://play.google.com/store/apps/details?id=com.potradeweb"
                  target="_blank"
                  class="devices__btn devices__btn_android js-android-link"
                >
                  <div class="devices__top">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M46.6196 21.5973C46.6196 13.6461 40.1753 7.19971 32.2218 7.19971C30.748 7.19971 29.2525 7.19971 27.776 7.19971C19.8252 7.19971 13.3781 13.6461 13.3781 21.5973C13.3781 28.9693 13.3781 37.4664 13.3781 42.6763C13.3781 45.3749 15.567 47.5632 18.2671 47.5632C24.5619 47.5632 35.4385 47.5632 41.7333 47.5632C44.4334 47.5632 46.6196 45.3749 46.6196 42.6763C46.6196 37.4664 46.6196 28.9693 46.6196 21.5973Z"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                      />
                      <path
                        d="M13.379 24.0632H46.6208"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                      />
                      <path
                        d="M22.8769 47.561V57.3054"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M37.1234 47.561V57.3054"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M52 24.062V38.5557"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M7.99286 24.062V38.5557"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M38.7584 8.18183L44.247 2.69459"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M21.2415 8.18183L15.753 2.69459"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    <p class="devices__title">Android</p>
                  </div>
                  <div class="devices__link">Download</div>
                </a>
              </li>
              <li class="devices__item">
                <a
                  href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  class="devices__btn devices__btn_web"
                >
                  <div class="devices__top">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M56.7969 12.9715C56.7969 11.0126 56.0185 9.13224 54.6309 7.74576C53.2461 6.35927 51.365 5.58057 49.4048 5.58057C39.1812 5.58057 20.8265 5.58057 10.6028 5.58057C8.64271 5.58057 6.76156 6.35927 5.37678 7.74576C3.98918 9.13224 3.21075 11.0126 3.21075 12.9715C3.21075 22.1804 3.21075 37.8198 3.21075 47.0287C3.21075 48.9877 3.98918 50.868 5.37678 52.2545C6.76156 53.6409 8.64271 54.4196 10.6028 54.4196C20.8265 54.4196 39.1812 54.4196 49.4048 54.4196C51.365 54.4196 53.2461 53.6409 54.6309 52.2545C56.0185 50.868 56.7969 48.9877 56.7969 47.0287C56.7969 37.8198 56.7969 22.1804 56.7969 12.9715Z"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.20721 18.6665H56.7927"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M10.4264 14.5148C11.6639 14.5148 12.6672 13.5115 12.6672 12.274C12.6672 11.0364 11.6639 10.0332 10.4264 10.0332C9.18884 10.0332 8.18561 11.0364 8.18561 12.274C8.18561 13.5115 9.18884 14.5148 10.4264 14.5148Z"
                        class="app-icon-fill"
                      />
                      <path
                        d="M17.1488 14.5148C18.3864 14.5148 19.3896 13.5115 19.3896 12.274C19.3896 11.0364 18.3864 10.0332 17.1488 10.0332C15.9113 10.0332 14.908 11.0364 14.908 12.274C14.908 13.5115 15.9113 14.5148 17.1488 14.5148Z"
                        class="app-icon-fill"
                      />
                      <path
                        d="M23.871 14.5148C25.1085 14.5148 26.1118 13.5115 26.1118 12.274C26.1118 11.0364 25.1085 10.0332 23.871 10.0332C22.6334 10.0332 21.6302 11.0364 21.6302 12.274C21.6302 13.5115 22.6334 14.5148 23.871 14.5148Z"
                        class="app-icon-fill"
                      />
                    </svg>
                    <p class="devices__title">Web App</p>
                  </div>
                  <div class="devices__link">Open</div>
                </a>
              </li>
              <li class="devices__item">
                <a
                  href="https://pocketoption.com/cabinet/telegram/link"
                  target="_blank"
                  class="devices__btn devices__btn_tg"
                >
                  <div class="devices__top">
                    <svg
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7205 30.5304C11.4164 30.6551 11.2202 30.9535 11.2266 31.2817C11.2322 31.6106 11.4397 31.9018 11.7486 32.0144C13.1458 32.5252 15.0464 33.2201 16.5634 33.7743C18.1601 34.3583 19.9352 34.187 21.3911 33.3086C24.7541 31.2793 30.9548 27.5383 34.1327 25.6207C34.2783 25.533 34.4666 25.5652 34.5743 25.6963C34.6829 25.8274 34.6781 26.018 34.5639 26.1443C32.3978 28.5397 28.5072 32.8405 26.3885 35.1819C26.0201 35.5897 25.848 36.1375 25.9172 36.6828C25.9871 37.2274 26.2912 37.7148 26.7497 38.0173C29.1201 39.5769 33.3027 42.3285 36.3375 44.3257C37.1418 44.8542 38.1593 44.9387 39.0401 44.5493C39.9208 44.16 40.5426 43.3501 40.6922 42.3985C41.6534 36.2718 43.3835 25.2531 44.208 19.9967C44.3021 19.3967 44.0664 18.7934 43.5902 18.417C43.1141 18.0405 42.4722 17.9504 41.9108 18.1797C35.0835 20.9732 17.5343 28.1519 11.7205 30.5304Z"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.0001 56.9142C44.8643 56.9142 56.9141 44.8644 56.9141 30.0002C56.9141 15.136 44.8643 3.08618 30.0001 3.08618C15.1359 3.08618 3.08606 15.136 3.08606 30.0002C3.08606 44.8644 15.1359 56.9142 30.0001 56.9142Z"
                        class="app-icon-stroke"
                        stroke-width="2"
                        stroke-miterlimit="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p class="devices__title">Telegram bot</p>
                  </div>
                  <div class="devices__link">Subscribe</div>
                </a>
              </li>
            </ul>

            <div class="phone-container">
              <picture class="phone phone_android">
                <img src="/images/contents/android-img.png" alt="Android" />
              </picture>
              <picture class="phone phone_iphone">
                <img src="/images/contents/iphone-img.png" alt="Iphone" />
              </picture>
            </div>
          </div>
        </div>
      </section> */}

      <section class="section section_light reviews-slider">
        <div class="container reviews-slider__container">
          <div class="content reviews-slider__in">
            <h2 class="reviews-slider__title">What people say about us </h2>
            <p class="reviews-slider__title-desc">
              More than 10 million customers worldwide trust us and earn daily.
            </p>
            <div class="js-reviews-slider slider">
              <div class="slider__left">
                <div class="slider__in">
                  <div class="rv-slider">
                    <div class="review-item">
                      <div class="review-item__top">
                        <div class="review-item__stars">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>{" "}
                        </div>
                        <div class="review-item__date">2023-10-14 17:13:21</div>
                      </div>
                      <div class="review-item__text">
                        <span class="js-review-text-prev">
                          I Jai singh is trader I'd : 68341479 sharing my
                          experience of one of the trading platform name '
                          Pocketoption'. The platform's simplicity is one of its
                          standout features. Newcomers to trading will
                          appreciate the intuitive design, which allows for easy
                          navigation and quick order execution. PocketOption.com
                          offers a variety of
                        </span>
                        <span class="js-review-text-next">
                          {" "}
                          trading options, including binary options, digital
                          options, and cryptocurrencies, providing a diverse
                          range of assets to trade. One of the platform's
                          strengths is its demo account feature, which enables
                          users to practice trading without risking real money.
                          This is invaluable for beginners seeking to hone their
                          skills and develop effective trading strategies.
                          PocketOption.com's customer support is responsive and
                          helpful, providing assistance to users whenever
                          needed. The mobile app is robust, making it convenient
                          for traders on the go. Withdrawal was very quick and
                          fast it took hardly 15 min to get my withdrawal from
                          the platform.
                        </span>
                        <span class="js-review-dots">...</span>
                      </div>
                      <a
                        href="#"
                        class="review-item__more-btn js-show-full-review-btn"
                      >
                        Show full review
                      </a>
                      <a
                        href="#"
                        class="review-item__more-btn js-hide-full-review-btn"
                      >
                        Hide full review
                      </a>
                    </div>
                    <div class="review-item__footer">
                      <div class="review-item__flag languages__flag">
                        <img src="/images/flags-svg/in.svg" alt="" />{" "}
                      </div>
                      <div class="review-item__user-data">
                        <div class="review-item__fio">
                          <a
                            href="https://pocketoption.com/en/cabinet/?mo=trading-profile&uid=68341479"
                            class="js-link-with-get-param"
                            target="_blank"
                          >
                            Jai S.{" "}
                          </a>
                        </div>
                        <div class="review-item__uid">
                          <a
                            href="https://pocketoption.com/en/cabinet/?mo=trading-profile&uid=68341479"
                            class="js-link-with-get-param"
                            target="_blank"
                          >
                            UID 68341479
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__right">
                <div class="slider__footer slider-footer">
                  <a
                    onClick={() => {
                      navigate("/riviews");
                    }}
                    class="slider-footer__link-all slider__link-all"
                  >
                    All reviews
                  </a>
                  <p class="slider-footer__text">
                    Your feedback helps us to improve our platform and provide
                    you with the best trading experience tailored to your needs.
                    View ratings and post your own suggestions. We appreciate
                    your feedback!{" "}
                  </p>
                  <a
                    onClick={() => {
                      navigate("/riviews");
                    }}
                    class="btn btn_light-blue slider-footer__btn"
                  >
                    Submit a review{" "}
                  </a>
                  <div class="slider__info-text slider-footer__desc">
                    the reviews are published without any changes to the
                    original text{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section mt100pm">
        <div class="container">
          <div class="content">
            <div class="payment-methods">
              <ul class="payment-methods-list">
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/master_visa_maestro.webp" />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/pm.webp" />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/vload.png" />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/wm.webp" />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/jeton.png" />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img src="/images/contents/advcash.png" />
                  </picture>
                </li>
                <li class="payment-methods-list__item payment-methods-list__item_last">
                  <a
                    href="https://pocketoption.com/en/payment-methods/"
                    class="payment-methods-list__link"
                  >
                    More
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;

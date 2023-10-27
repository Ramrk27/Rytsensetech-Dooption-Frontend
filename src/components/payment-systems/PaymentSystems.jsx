import React from "react";
import Header from "../home-components/header/Header";
import Footer from "../home-components/footer/Footer";
import Sidebar from "../home-components/side-bar/Sidebar";
import { useNavigate } from "react-router-dom";

const PaymentSystems = () => {
  const navigate = useNavigate()
  return (
    <div>

        <Header/>
      <div class="page page--payment-methods page_dark-blue">
     

        <section class="section pm-section">
          <div class="container container__no-padding">
            <div class="content">
            <div class="content top-section__content">
              <div class="breadcrumbs-wrap">
                <ul class="breadcrumbs ">
                  <li class="breadcrumbs__item">
                    <a
                      class="breadcrumbs__link"
                     onClick={()=>{navigate("/")}}
                    >
                      Home
                    </a>
                  </li>
                  <li class="breadcrumbs__item breadcrumbs__item--active">
                    <span class="breadcrumbs__label">Payment systems</span>
                  </li>
                </ul>
              </div>

              <h1 class="top-section__title">
                A wide range of payment systems{" "}
              </h1>
              <p class="top-section__desc">
                Variety of deposit and withdrawal methods for convenient online
                trading{" "}
              </p>
            </div>
              <ul class="pm-list">
                <li class="pm-list__item touchngo">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/touchngo-light.webp 1x, https://pocketoption.com/images/payments/logo2/touchngo-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/touchngo-light.png 1x, https://pocketoption.com/images/payments/logo2/touchngo-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/touchngo-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/touchngo-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/touchngo-light.png 1x, https://pocketoption.com/images/payments/logo2/touchngo-light@2x.png 2x"
                            alt="Touch&Go"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Touch&Go</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-id">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-id-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-id-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-id-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-id-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-id-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-id-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-id-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-id-light@2x.png 2x"
                            alt="Internet Banking"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Internet Banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item momopay">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/momopay-light.webp 1x, https://pocketoption.com/images/payments/logo2/momopay-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/momopay-light.png 1x, https://pocketoption.com/images/payments/logo2/momopay-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/momopay-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/momopay-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/momopay-light.png 1x, https://pocketoption.com/images/payments/logo2/momopay-light@2x.png 2x"
                            alt="MoMo Pay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">MoMo Pay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-vn">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-vn-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-vn-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-vn-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-vn-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-vn-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-vn-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-vn-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-vn-light@2x.png 2x"
                            alt="QR pay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">QR pay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item online-vietnam-banks">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light.webp 1x, https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light.png 1x, https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light.png 1x, https://pocketoption.com/images/payments/logo2/online-vietnam-banks-light@2x.png 2x"
                            alt="Internet Banking"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Internet Banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item master_visa_maestro">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/master_visa_maestro-light.webp 1x, https://pocketoption.com/images/payments/logo2/master_visa_maestro-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/master_visa_maestro-light.png 1x, https://pocketoption.com/images/payments/logo2/master_visa_maestro-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/master_visa_maestro-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/master_visa_maestro-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/master_visa_maestro-light.png 1x, https://pocketoption.com/images/payments/logo2/master_visa_maestro-light@2x.png 2x"
                            alt="Visa, Mastercard, Maestro"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Visa, Mastercard, Maestro</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Cards</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item cc-eu">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cc-eu-light.webp 1x, https://pocketoption.com/images/payments/logo2/cc-eu-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cc-eu-light.png 1x, https://pocketoption.com/images/payments/logo2/cc-eu-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/cc-eu-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/cc-eu-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/cc-eu-light.png 1x, https://pocketoption.com/images/payments/logo2/cc-eu-light@2x.png 2x"
                            alt="Visa, Mastercard"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Visa, Mastercard</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Cards</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item jazz-cash">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/jazz-cash-light.webp 1x, https://pocketoption.com/images/payments/logo2/jazz-cash-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/jazz-cash-light.png 1x, https://pocketoption.com/images/payments/logo2/jazz-cash-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/jazz-cash-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/jazz-cash-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/jazz-cash-light.png 1x, https://pocketoption.com/images/payments/logo2/jazz-cash-light@2x.png 2x"
                            alt="JazzCash"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">JazzCash</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item easypaisa">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/easypaisa-light.webp 1x, https://pocketoption.com/images/payments/logo2/easypaisa-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/easypaisa-light.png 1x, https://pocketoption.com/images/payments/logo2/easypaisa-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/easypaisa-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/easypaisa-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/easypaisa-light.png 1x, https://pocketoption.com/images/payments/logo2/easypaisa-light@2x.png 2x"
                            alt="Easypaisa"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Easypaisa</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item airtel_mobile">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/airtel_mobile-light.webp 1x, https://pocketoption.com/images/payments/logo2/airtel_mobile-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/airtel_mobile-light.png 1x, https://pocketoption.com/images/payments/logo2/airtel_mobile-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/airtel_mobile-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/airtel_mobile-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/airtel_mobile-light.png 1x, https://pocketoption.com/images/payments/logo2/airtel_mobile-light@2x.png 2x"
                            alt="Airtel"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Airtel</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item mpesa">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mpesa-light.webp 1x, https://pocketoption.com/images/payments/logo2/mpesa-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mpesa-light.png 1x, https://pocketoption.com/images/payments/logo2/mpesa-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/mpesa-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/mpesa-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/mpesa-light.png 1x, https://pocketoption.com/images/payments/logo2/mpesa-light@2x.png 2x"
                            alt="M-Pesa"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">M-Pesa</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item qr_thai_bank">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/qr_thai_bank-light.webp 1x, https://pocketoption.com/images/payments/logo2/qr_thai_bank-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/qr_thai_bank-light.png 1x, https://pocketoption.com/images/payments/logo2/qr_thai_bank-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/qr_thai_bank-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/qr_thai_bank-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/qr_thai_bank-light.png 1x, https://pocketoption.com/images/payments/logo2/qr_thai_bank-light@2x.png 2x"
                            alt="Thailand QR banking"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Thailand QR banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item upi">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/upi-light.webp 1x, https://pocketoption.com/images/payments/logo2/upi-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/upi-light.png 1x, https://pocketoption.com/images/payments/logo2/upi-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/upi-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/upi-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/upi-light.png 1x, https://pocketoption.com/images/payments/logo2/upi-light@2x.png 2x"
                            alt="UPI"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">UPI</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-th">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-th-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-th-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-th-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-th-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-th-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-th-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-th-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-th-light@2x.png 2x"
                            alt="Bank Transfer"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Bank Transfer</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item payzen_korea">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <img
                          src="https://pocketoption.com/images/payments/logo2/payzen_korea.png"
                          alt="Online Banking"
                          loading="lazy"
                          class="pm-list__img lazy"
                        />
                      </div>
                      <p class="pm-list__name">Online Banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item mtn">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mtn-light.webp 1x, https://pocketoption.com/images/payments/logo2/mtn-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mtn-light.png 1x, https://pocketoption.com/images/payments/logo2/mtn-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/mtn-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/mtn-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/mtn-light.png 1x, https://pocketoption.com/images/payments/logo2/mtn-light@2x.png 2x"
                            alt="MTN"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">MTN</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item promptpay">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/promptpay-light.webp 1x, https://pocketoption.com/images/payments/logo2/promptpay-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/promptpay-light.png 1x, https://pocketoption.com/images/payments/logo2/promptpay-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/promptpay-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/promptpay-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/promptpay-light.png 1x, https://pocketoption.com/images/payments/logo2/promptpay-light@2x.png 2x"
                            alt="Promptpay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Promptpay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item grabpay">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/grabpay-light.webp 1x, https://pocketoption.com/images/payments/logo2/grabpay-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/grabpay-light.png 1x, https://pocketoption.com/images/payments/logo2/grabpay-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/grabpay-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/grabpay-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/grabpay-light.png 1x, https://pocketoption.com/images/payments/logo2/grabpay-light@2x.png 2x"
                            alt="GrabPay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">GrabPay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-mx">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mx-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-mx-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mx-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-mx-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-mx-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-mx-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mx-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-mx-light@2x.png 2x"
                            alt="Mexico Online Banking"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Mexico Online Banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-jp">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-jp-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-jp-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-jp-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-jp-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-jp-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-jp-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-jp-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-jp-light@2x.png 2x"
                            alt="Bank Transfer"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Bank Transfer</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item shopee">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/shopee-light.webp 1x, https://pocketoption.com/images/payments/logo2/shopee-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/shopee-light.png 1x, https://pocketoption.com/images/payments/logo2/shopee-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/shopee-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/shopee-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/shopee-light.png 1x, https://pocketoption.com/images/payments/logo2/shopee-light@2x.png 2x"
                            alt="Shopee"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Shopee</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-la">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-la-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-la-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-la-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-la-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-la-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-la-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-la-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-la-light@2x.png 2x"
                            alt="QR Banking LAK"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">QR Banking LAK</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-kh">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-kh-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-kh-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-kh-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-kh-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-kh-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-kh-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-kh-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-kh-light@2x.png 2x"
                            alt="QR Banking KHR"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">QR Banking KHR</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item boost">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/boost-light.webp 1x, https://pocketoption.com/images/payments/logo2/boost-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/boost-light.png 1x, https://pocketoption.com/images/payments/logo2/boost-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/boost-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/boost-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/boost-light.png 1x, https://pocketoption.com/images/payments/logo2/boost-light@2x.png 2x"
                            alt="Boost"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Boost</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item qris">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/qris-light.webp 1x, https://pocketoption.com/images/payments/logo2/qris-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/qris-light.png 1x, https://pocketoption.com/images/payments/logo2/qris-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/qris-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/qris-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/qris-light.png 1x, https://pocketoption.com/images/payments/logo2/qris-light@2x.png 2x"
                            alt="QRIS"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">QRIS</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-mm">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mm-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-mm-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mm-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-mm-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-mm-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-mm-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-mm-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-mm-light@2x.png 2x"
                            alt="QR Banking MMK"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">QR Banking MMK</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item usd_coin">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/usd_coin-light.webp 1x, https://pocketoption.com/images/payments/logo2/usd_coin-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/usd_coin-light.png 1x, https://pocketoption.com/images/payments/logo2/usd_coin-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/usd_coin-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/usd_coin-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/usd_coin-light.png 1x, https://pocketoption.com/images/payments/logo2/usd_coin-light@2x.png 2x"
                            alt="USD Coin (USDC) TRC-20"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">USD Coin (USDC) TRC-20</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item tether_trc20">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tether_trc20-light.webp 1x, https://pocketoption.com/images/payments/logo2/tether_trc20-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tether_trc20-light.png 1x, https://pocketoption.com/images/payments/logo2/tether_trc20-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/tether_trc20-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/tether_trc20-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/tether_trc20-light.png 1x, https://pocketoption.com/images/payments/logo2/tether_trc20-light@2x.png 2x"
                            alt="Tether (USDT) TRC-20"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Tether (USDT) TRC-20</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item yoomoney">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/yoomoney-light.webp 1x, https://pocketoption.com/images/payments/logo2/yoomoney-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/yoomoney-light.png 1x, https://pocketoption.com/images/payments/logo2/yoomoney-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/yoomoney-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/yoomoney-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/yoomoney-light.png 1x, https://pocketoption.com/images/payments/logo2/yoomoney-light@2x.png 2x"
                            alt="YooMoney"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">YooMoney</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item ethereum">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-light.webp 1x, https://pocketoption.com/images/payments/logo2/ethereum-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-light.png 1x, https://pocketoption.com/images/payments/logo2/ethereum-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/ethereum-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/ethereum-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-light.png 1x, https://pocketoption.com/images/payments/logo2/ethereum-light@2x.png 2x"
                            alt="Ethereum (ETH) ERC-20"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Ethereum (ETH) ERC-20</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item eos">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/eos-light.webp 1x, https://pocketoption.com/images/payments/logo2/eos-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/eos-light.png 1x, https://pocketoption.com/images/payments/logo2/eos-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/eos-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/eos-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/eos-light.png 1x, https://pocketoption.com/images/payments/logo2/eos-light@2x.png 2x"
                            alt="Stellar (XLM)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Stellar (XLM)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item orange">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/orange-light.webp 1x, https://pocketoption.com/images/payments/logo2/orange-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/orange-light.png 1x, https://pocketoption.com/images/payments/logo2/orange-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/orange-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/orange-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/orange-light.png 1x, https://pocketoption.com/images/payments/logo2/orange-light@2x.png 2x"
                            alt="Orange (XOF)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Orange (XOF)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item expresso">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/expresso-light.webp 1x, https://pocketoption.com/images/payments/logo2/expresso-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/expresso-light.png 1x, https://pocketoption.com/images/payments/logo2/expresso-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/expresso-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/expresso-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/expresso-light.png 1x, https://pocketoption.com/images/payments/logo2/expresso-light@2x.png 2x"
                            alt="Expresso (XOF)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Expresso (XOF)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item tether-polygon">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tether-polygon-light.webp 1x, https://pocketoption.com/images/payments/logo2/tether-polygon-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tether-polygon-light.png 1x, https://pocketoption.com/images/payments/logo2/tether-polygon-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/tether-polygon-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/tether-polygon-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/tether-polygon-light.png 1x, https://pocketoption.com/images/payments/logo2/tether-polygon-light@2x.png 2x"
                            alt="Tether Polygon (USDT)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Tether Polygon (USDT)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item ethereum-black">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-black-light.webp 1x, https://pocketoption.com/images/payments/logo2/ethereum-black-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-black-light.png 1x, https://pocketoption.com/images/payments/logo2/ethereum-black-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/ethereum-black-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/ethereum-black-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/ethereum-black-light.png 1x, https://pocketoption.com/images/payments/logo2/ethereum-black-light@2x.png 2x"
                            alt="Ethereum Classic (ETC)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Ethereum Classic (ETC)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item btc_cach">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/btc_cach-light.webp 1x, https://pocketoption.com/images/payments/logo2/btc_cach-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/btc_cach-light.png 1x, https://pocketoption.com/images/payments/logo2/btc_cach-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/btc_cach-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/btc_cach-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/btc_cach-light.png 1x, https://pocketoption.com/images/payments/logo2/btc_cach-light@2x.png 2x"
                            alt="Bitcoin Cash (BCH)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Bitcoin Cash (BCH)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item dai">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/dai-light.webp 1x, https://pocketoption.com/images/payments/logo2/dai-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/dai-light.png 1x, https://pocketoption.com/images/payments/logo2/dai-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/dai-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/dai-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/dai-light.png 1x, https://pocketoption.com/images/payments/logo2/dai-light@2x.png 2x"
                            alt="Dai (DAI)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Dai (DAI)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item ton">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ton-light.webp 1x, https://pocketoption.com/images/payments/logo2/ton-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/ton-light.png 1x, https://pocketoption.com/images/payments/logo2/ton-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/ton-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/ton-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/ton-light.png 1x, https://pocketoption.com/images/payments/logo2/ton-light@2x.png 2x"
                            alt="Toncoin (TON)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Toncoin (TON)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item cosmos">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cosmos-light.webp 1x, https://pocketoption.com/images/payments/logo2/cosmos-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cosmos-light.png 1x, https://pocketoption.com/images/payments/logo2/cosmos-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/cosmos-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/cosmos-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/cosmos-light.png 1x, https://pocketoption.com/images/payments/logo2/cosmos-light@2x.png 2x"
                            alt="Cosmos (ATOM)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Cosmos (ATOM)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item chainlink">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/chainlink-light.webp 1x, https://pocketoption.com/images/payments/logo2/chainlink-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/chainlink-light.png 1x, https://pocketoption.com/images/payments/logo2/chainlink-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/chainlink-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/chainlink-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/chainlink-light.png 1x, https://pocketoption.com/images/payments/logo2/chainlink-light@2x.png 2x"
                            alt="Chainlink (LINK)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Chainlink (LINK)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item apecoin">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/apecoin-light.webp 1x, https://pocketoption.com/images/payments/logo2/apecoin-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/apecoin-light.png 1x, https://pocketoption.com/images/payments/logo2/apecoin-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/apecoin-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/apecoin-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/apecoin-light.png 1x, https://pocketoption.com/images/payments/logo2/apecoin-light@2x.png 2x"
                            alt="ApeCoin (APE)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">ApeCoin (APE)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item uniswap">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/uniswap-light.webp 1x, https://pocketoption.com/images/payments/logo2/uniswap-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/uniswap-light.png 1x, https://pocketoption.com/images/payments/logo2/uniswap-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/uniswap-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/uniswap-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/uniswap-light.png 1x, https://pocketoption.com/images/payments/logo2/uniswap-light@2x.png 2x"
                            alt="Uniswap (UNI)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Uniswap (UNI)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item payretailers_cash">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_cash-light.webp 1x, https://pocketoption.com/images/payments/logo2/payretailers_cash-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_cash-light.png 1x, https://pocketoption.com/images/payments/logo2/payretailers_cash-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/payretailers_cash-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/payretailers_cash-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_cash-light.png 1x, https://pocketoption.com/images/payments/logo2/payretailers_cash-light@2x.png 2x"
                            alt="LATAM Cash"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">LATAM Cash</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item payretailers_online">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_online-light.webp 1x, https://pocketoption.com/images/payments/logo2/payretailers_online-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_online-light.png 1x, https://pocketoption.com/images/payments/logo2/payretailers_online-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/payretailers_online-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/payretailers_online-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/payretailers_online-light.png 1x, https://pocketoption.com/images/payments/logo2/payretailers_online-light@2x.png 2x"
                            alt="LATAM Banking"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">LATAM Banking</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item altel">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/altel-light.webp 1x, https://pocketoption.com/images/payments/logo2/altel-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/altel-light.png 1x, https://pocketoption.com/images/payments/logo2/altel-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/altel-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/altel-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/altel-light.png 1x, https://pocketoption.com/images/payments/logo2/altel-light@2x.png 2x"
                            alt="Altel"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Altel</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item kcell">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/kcell-light.webp 1x, https://pocketoption.com/images/payments/logo2/kcell-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/kcell-light.png 1x, https://pocketoption.com/images/payments/logo2/kcell-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/kcell-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/kcell-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/kcell-light.png 1x, https://pocketoption.com/images/payments/logo2/kcell-light@2x.png 2x"
                            alt="Kcell"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Kcell</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Mobile</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-ae">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-ae-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-ae-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-ae-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-ae-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-ae-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-ae-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-ae-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-ae-light@2x.png 2x"
                            alt="Bank transfer AED"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Bank transfer AED</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item novabank">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/novabank-light.webp 1x, https://pocketoption.com/images/payments/logo2/novabank-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/novabank-light.png 1x, https://pocketoption.com/images/payments/logo2/novabank-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/novabank-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/novabank-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/novabank-light.png 1x, https://pocketoption.com/images/payments/logo2/novabank-light@2x.png 2x"
                            alt="Havale"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Havale</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item mefete">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mefete-light.webp 1x, https://pocketoption.com/images/payments/logo2/mefete-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/mefete-light.png 1x, https://pocketoption.com/images/payments/logo2/mefete-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/mefete-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/mefete-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/mefete-light.png 1x, https://pocketoption.com/images/payments/logo2/mefete-light@2x.png 2x"
                            alt="Mefete"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Mefete</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item papara">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/papara-light.webp 1x, https://pocketoption.com/images/payments/logo2/papara-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/papara-light.png 1x, https://pocketoption.com/images/payments/logo2/papara-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/papara-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/papara-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/papara-light.png 1x, https://pocketoption.com/images/payments/logo2/papara-light@2x.png 2x"
                            alt="Papara"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Papara</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item paybolt">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/paybolt-light.webp 1x, https://pocketoption.com/images/payments/logo2/paybolt-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/paybolt-light.png 1x, https://pocketoption.com/images/payments/logo2/paybolt-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/paybolt-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/paybolt-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/paybolt-light.png 1x, https://pocketoption.com/images/payments/logo2/paybolt-light@2x.png 2x"
                            alt="Paybol"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Paybol</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item payfix">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payfix-light.webp 1x, https://pocketoption.com/images/payments/logo2/payfix-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payfix-light.png 1x, https://pocketoption.com/images/payments/logo2/payfix-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/payfix-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/payfix-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/payfix-light.png 1x, https://pocketoption.com/images/payments/logo2/payfix-light@2x.png 2x"
                            alt="Payfix"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Payfix</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item pep">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/pep-light.webp 1x, https://pocketoption.com/images/payments/logo2/pep-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/pep-light.png 1x, https://pocketoption.com/images/payments/logo2/pep-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/pep-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/pep-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/pep-light.png 1x, https://pocketoption.com/images/payments/logo2/pep-light@2x.png 2x"
                            alt="Pep"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Pep</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item banking-pk">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-pk-light.webp 1x, https://pocketoption.com/images/payments/logo2/banking-pk-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/banking-pk-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-pk-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/banking-pk-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/banking-pk-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/banking-pk-light.png 1x, https://pocketoption.com/images/payments/logo2/banking-pk-light@2x.png 2x"
                            alt="Bank transfer PKR"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Bank transfer PKR</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item payredeem">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payredeem-light.webp 1x, https://pocketoption.com/images/payments/logo2/payredeem-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/payredeem-light.png 1x, https://pocketoption.com/images/payments/logo2/payredeem-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/payredeem-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/payredeem-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/payredeem-light.png 1x, https://pocketoption.com/images/payments/logo2/payredeem-light@2x.png 2x"
                            alt="PayRedeem"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">PayRedeem</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item upi2">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/upi2-light.webp 1x, https://pocketoption.com/images/payments/logo2/upi2-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/upi2-light.png 1x, https://pocketoption.com/images/payments/logo2/upi2-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/upi2-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/upi2-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/upi2-light.png 1x, https://pocketoption.com/images/payments/logo2/upi2-light@2x.png 2x"
                            alt="UPI"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">UPI</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item gcash">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/gcash-light.webp 1x, https://pocketoption.com/images/payments/logo2/gcash-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/gcash-light.png 1x, https://pocketoption.com/images/payments/logo2/gcash-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/gcash-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/gcash-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/gcash-light.png 1x, https://pocketoption.com/images/payments/logo2/gcash-light@2x.png 2x"
                            alt="Gcash"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Gcash</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item coins-ph">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/coins-ph-light.webp 1x, https://pocketoption.com/images/payments/logo2/coins-ph-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/coins-ph-light.png 1x, https://pocketoption.com/images/payments/logo2/coins-ph-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/coins-ph-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/coins-ph-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/coins-ph-light.png 1x, https://pocketoption.com/images/payments/logo2/coins-ph-light@2x.png 2x"
                            alt="Coins.ph"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Coins.ph</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item paymaya">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/paymaya-light.webp 1x, https://pocketoption.com/images/payments/logo2/paymaya-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/paymaya-light.png 1x, https://pocketoption.com/images/payments/logo2/paymaya-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/paymaya-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/paymaya-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/paymaya-light.png 1x, https://pocketoption.com/images/payments/logo2/paymaya-light@2x.png 2x"
                            alt="PayMaya"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">PayMaya</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item oxxo">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/oxxo-light.webp 1x, https://pocketoption.com/images/payments/logo2/oxxo-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/oxxo-light.png 1x, https://pocketoption.com/images/payments/logo2/oxxo-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/oxxo-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/oxxo-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/oxxo-light.png 1x, https://pocketoption.com/images/payments/logo2/oxxo-light@2x.png 2x"
                            alt="Oxxo"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Oxxo</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Bank</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item wm">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/wm-light.webp 1x, https://pocketoption.com/images/payments/logo2/wm-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/wm-light.png 1x, https://pocketoption.com/images/payments/logo2/wm-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/wm-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/wm-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/wm-light.png 1x, https://pocketoption.com/images/payments/logo2/wm-light@2x.png 2x"
                            alt="WebMoney"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">WebMoney</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item jeton">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/jeton-light.webp 1x, https://pocketoption.com/images/payments/logo2/jeton-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/jeton-light.png 1x, https://pocketoption.com/images/payments/logo2/jeton-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/jeton-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/jeton-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/jeton-light.png 1x, https://pocketoption.com/images/payments/logo2/jeton-light@2x.png 2x"
                            alt="Jeton"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Jeton</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item perfect-money">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/perfect-money-light.webp 1x, https://pocketoption.com/images/payments/logo2/perfect-money-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/perfect-money-light.png 1x, https://pocketoption.com/images/payments/logo2/perfect-money-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/perfect-money-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/perfect-money-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/perfect-money-light.png 1x, https://pocketoption.com/images/payments/logo2/perfect-money-light@2x.png 2x"
                            alt="Perfect Money"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Perfect Money</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0.5%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item algorand">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/algorand-light.webp 1x, https://pocketoption.com/images/payments/logo2/algorand-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/algorand-light.png 1x, https://pocketoption.com/images/payments/logo2/algorand-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/algorand-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/algorand-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/algorand-light.png 1x, https://pocketoption.com/images/payments/logo2/algorand-light@2x.png 2x"
                            alt="Algorand (ALGO)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Algorand (ALGO)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item shiba_inu">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/shiba_inu-light.webp 1x, https://pocketoption.com/images/payments/logo2/shiba_inu-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/shiba_inu-light.png 1x, https://pocketoption.com/images/payments/logo2/shiba_inu-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/shiba_inu-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/shiba_inu-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/shiba_inu-light.png 1x, https://pocketoption.com/images/payments/logo2/shiba_inu-light@2x.png 2x"
                            alt="Shiba Inu (SHIB)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Shiba Inu (SHIB)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item cardano">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cardano-light.webp 1x, https://pocketoption.com/images/payments/logo2/cardano-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cardano-light.png 1x, https://pocketoption.com/images/payments/logo2/cardano-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/cardano-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/cardano-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/cardano-light.png 1x, https://pocketoption.com/images/payments/logo2/cardano-light@2x.png 2x"
                            alt="Cardano (ADA)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Cardano (ADA)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item avalanche">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/avalanche-light.webp 1x, https://pocketoption.com/images/payments/logo2/avalanche-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/avalanche-light.png 1x, https://pocketoption.com/images/payments/logo2/avalanche-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/avalanche-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/avalanche-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/avalanche-light.png 1x, https://pocketoption.com/images/payments/logo2/avalanche-light@2x.png 2x"
                            alt="Avalanche (AVAX)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Avalanche (AVAX)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item cronos">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cronos-light.webp 1x, https://pocketoption.com/images/payments/logo2/cronos-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/cronos-light.png 1x, https://pocketoption.com/images/payments/logo2/cronos-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/cronos-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/cronos-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/cronos-light.png 1x, https://pocketoption.com/images/payments/logo2/cronos-light@2x.png 2x"
                            alt="Cronos (CRO)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Cronos (CRO)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item polkadot">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/polkadot-light.webp 1x, https://pocketoption.com/images/payments/logo2/polkadot-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/polkadot-light.png 1x, https://pocketoption.com/images/payments/logo2/polkadot-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/polkadot-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/polkadot-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/polkadot-light.png 1x, https://pocketoption.com/images/payments/logo2/polkadot-light@2x.png 2x"
                            alt="Polkadot (DOT)"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Polkadot (DOT)</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">Crypto currency</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item fasapay">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/fasapay-light.webp 1x, https://pocketoption.com/images/payments/logo2/fasapay-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/fasapay-light.png 1x, https://pocketoption.com/images/payments/logo2/fasapay-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/fasapay-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/fasapay-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/fasapay-light.png 1x, https://pocketoption.com/images/payments/logo2/fasapay-light@2x.png 2x"
                            alt="FasaPay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">FasaPay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item advcash">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/advcash-light.webp 1x, https://pocketoption.com/images/payments/logo2/advcash-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/advcash-light.png 1x, https://pocketoption.com/images/payments/logo2/advcash-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/advcash-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/advcash-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/advcash-light.png 1x, https://pocketoption.com/images/payments/logo2/advcash-light@2x.png 2x"
                            alt="Advcash"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Advcash</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item dana">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/dana-light.webp 1x, https://pocketoption.com/images/payments/logo2/dana-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/dana-light.png 1x, https://pocketoption.com/images/payments/logo2/dana-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/dana-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/dana-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/dana-light.png 1x, https://pocketoption.com/images/payments/logo2/dana-light@2x.png 2x"
                            alt="Dana"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Dana</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li class="pm-list__item tigerpay">
                  <a
                    class="pm-list__link"
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  >
                    <div class="pm-list__top">
                      <div class="pm-list__img-wrap">
                        <picture class="pm-list__img">
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tigerpay-light.webp 1x, https://pocketoption.com/images/payments/logo2/tigerpay-light@2x.webp 2x"
                            type="image/webp"
                          />
                          <source
                            srcset="https://pocketoption.com/images/payments/logo2/tigerpay-light.png 1x, https://pocketoption.com/images/payments/logo2/tigerpay-light@2x.png 2x"
                            type="image/png"
                          />
                          <img
                            src="https://pocketoption.com/images/payments/logo2/tigerpay-light.png"
                            data-src="https://pocketoption.com/images/payments/logo2/tigerpay-light.png"
                            srcset="https://pocketoption.com/images/payments/logo2/tigerpay-light.png 1x, https://pocketoption.com/images/payments/logo2/tigerpay-light@2x.png 2x"
                            alt="Tiger Pay"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <p class="pm-list__name">Tiger Pay</p>
                    </div>
                    <div class="info">
                      <div class="info__row">
                        <div class="info__commission">
                          <span class="info__label">Commission:</span>
                          <span class="info__value">0%</span>
                        </div>
                        <div class="info__min-amount">
                          <span class="info__label">Type:</span>
                          <span class="info__value">E-payments</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
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
      <Footer/>
      <Sidebar/>
    </div>
  );
};

export default PaymentSystems;

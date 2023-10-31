import React from "react";
import Header from "../../home-components/header/Header";
import Sidebar from "../../home-components/side-bar/Sidebar";
import { useNavigate } from "react-router-dom";
import Footer from "../../home-components/footer/Footer";
import "./assets-trading.css"

const AssetsTrading = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--assets page_dark-blue">
        <div class="page__in">
          <section class="section assets-section">
            <div class="container container__no-padding">
              <div class="content">
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
                    <span class="breadcrumbs__label">
                      Assets trading schedule
                    </span>
                  </li>
                </ul>
                <h1>Assets trading schedule</h1>
                <div class="tab-list">
                  <ul>
                    <li>
                      <a
                        href="https://pocketoption.com/en/assets-current/"
                        class="btn active"
                      >
                        Current
                      </a>
                    </li>
                    <li>
                      <a href="https://pocketoption.com/en/assets/" class="btn">
                        Market
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://pocketoption.com/en/assets-otc/"
                        class="btn"
                      >
                        OTC
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content  tab-content__current">
                  <div class="assets-table-date">
                    Сurrent list of available assets with corresponding payouts.
                    Relevant for: 12:13, 26.10.2023*
                  </div>
                  <div class="assets-table-header">
                    <div class="left-block">
                      Assets<div class="utc-label">(UTC+2)</div>
                    </div>
                    <div class="payout-label">Payout</div>
                    <div class="right-block">
                      <div class="assets__filters filter">
                        <div class="filter__item">
                          <input
                            type="checkbox"
                            value="currency"
                            class="filter__checkbox filter__checkbox_currency"
                            id="checkbox-currency"
                            checked
                          />
                          <label for="checkbox-currency">
                            <span>Currency</span>
                          </label>
                        </div>
                        <div class="filter__item">
                          <input
                            type="checkbox"
                            value="commodity"
                            class="filter__checkbox filter__checkbox_commodity"
                            id="checkbox-commodity"
                            checked
                          />
                          <label for="checkbox-commodity">
                            <span>Commodities</span>
                          </label>
                        </div>
                        <div class="filter__item">
                          <input
                            type="checkbox"
                            value="stock"
                            class="filter__checkbox filter__checkbox_stock"
                            id="checkbox-stock"
                            checked
                          />
                          <label for="checkbox-stock">
                            <span>Stocks</span>
                          </label>
                        </div>
                        <div class="filter__item">
                          <input
                            type="checkbox"
                            value="cryptocurrency"
                            class="filter__checkbox filter__checkbox_cryptocurrencies"
                            id="checkbox-cryptocurrencies"
                            checked
                          />
                          <label for="checkbox-cryptocurrencies">
                            <span>Crypto currencies</span>
                          </label>
                        </div>
                        <div class="filter__item">
                          <input
                            type="checkbox"
                            value="index"
                            class="filter__checkbox filter__checkbox_indeces"
                            id="checkbox-indeces"
                            checked
                          />
                          <label for="checkbox-indeces">
                            <span>Indices</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="assets-table">
                    <div class="divider js-type-currency">Currency</div>
                    <div class="assets-table-container js-type-currency">
                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/TRY OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/USD OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CNH OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/AUD OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/NZD OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CAD/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CAD/CHF OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/USD OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/CHF OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/CAD OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CHF/NOK OTC</div>

                        <div class="payout">
                          <div class="payout__in">91%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">90%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">89%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/CHF OTC</div>

                        <div class="payout">
                          <div class="payout__in">89%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/USD</div>

                        <div class="payout">
                          <div class="payout__in">89%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CHF/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">88%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/JPY</div>

                        <div class="payout">
                          <div class="payout__in">88%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/USD</div>

                        <div class="payout">
                          <div class="payout__in">87%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">NZD/USD OTC</div>

                        <div class="payout">
                          <div class="payout__in">86%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">NZD/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">86%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/AUD</div>

                        <div class="payout">
                          <div class="payout__in">85%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CHF</div>

                        <div class="payout">
                          <div class="payout__in">85%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CAD/CHF</div>

                        <div class="payout">
                          <div class="payout__in">85%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/CAD</div>

                        <div class="payout">
                          <div class="payout__in">85%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/CAD</div>

                        <div class="payout">
                          <div class="payout__in">84%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/AUD</div>

                        <div class="payout">
                          <div class="payout__in">84%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CHF/JPY</div>

                        <div class="payout">
                          <div class="payout__in">82%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/JPY OTC</div>

                        <div class="payout">
                          <div class="payout__in">82%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/NZD OTC</div>

                        <div class="payout">
                          <div class="payout__in">82%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/CAD</div>

                        <div class="payout">
                          <div class="payout__in">82%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/CHF</div>

                        <div class="payout">
                          <div class="payout__in">82%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/CHF</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CAD/JPY</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CHF OTC</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/RUB OTC</div>

                        <div class="payout">
                          <div class="payout__in">78%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/HUF OTC</div>

                        <div class="payout">
                          <div class="payout__in">77%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CAD</div>

                        <div class="payout">
                          <div class="payout__in">75%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUD/CHF</div>

                        <div class="payout">
                          <div class="payout__in">74%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/JPY</div>

                        <div class="payout">
                          <div class="payout__in">69%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/GBP OTC</div>

                        <div class="payout">
                          <div class="payout__in">66%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CNH</div>

                        <div class="payout">
                          <div class="payout__in">62%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/RUB OTC</div>

                        <div class="payout">
                          <div class="payout__in">61%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">USD/CAD OTC</div>

                        <div class="payout">
                          <div class="payout__in">59%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/JPY</div>

                        <div class="payout">
                          <div class="payout__in">57%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">GBP/USD</div>

                        <div class="payout">
                          <div class="payout__in">50%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">EUR/JPY</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>
                    </div>
                    <div class="divider js-type-commodity">Commodities</div>
                    <div class="assets-table-container js-type-commodity">
                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Gold OTC</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Brent Oil OTC</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">WTI Crude Oil OTC</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Silver OTC</div>

                        <div class="payout">
                          <div class="payout__in">80%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Natural Gas OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Platinum spot OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Palladium spot OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>
                    </div>
                    <div class="divider js-type-stock">Stocks</div>
                    <div class="assets-table-container js-type-stock">
                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Johnson & Johnson OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Pfizer Inc OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">American Express OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Tesla OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Intel OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">FACEBOOK INC OTC</div>

                        <div class="payout">
                          <div class="payout__in">92%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Apple OTC</div>

                        <div class="payout">
                          <div class="payout__in">90%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">McDonald's OTC</div>

                        <div class="payout">
                          <div class="payout__in">89%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Alibaba OTC</div>

                        <div class="payout">
                          <div class="payout__in">88%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Netflix OTC</div>

                        <div class="payout">
                          <div class="payout__in">88%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">ExxonMobil OTC</div>

                        <div class="payout">
                          <div class="payout__in">85%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">VISA OTC</div>

                        <div class="payout">
                          <div class="payout__in">77%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">FedEx OTC</div>

                        <div class="payout">
                          <div class="payout__in">75%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Amazon OTC</div>

                        <div class="payout">
                          <div class="payout__in">73%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Cisco OTC</div>

                        <div class="payout">
                          <div class="payout__in">73%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Boeing Company OTC</div>

                        <div class="payout">
                          <div class="payout__in">73%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">TWITTER OTC</div>

                        <div class="payout">
                          <div class="payout__in">60%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Microsoft OTC</div>

                        <div class="payout">
                          <div class="payout__in">55%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Citigroup Inc OTC</div>

                        <div class="payout">
                          <div class="payout__in">53%</div>
                        </div>
                      </div>
                    </div>
                    <div class="divider js-type-cryptocurrency">
                      Crypto currencies
                    </div>
                    <div class="assets-table-container js-type-cryptocurrency">
                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Dash</div>

                        <div class="payout">
                          <div class="payout__in">25%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">Bitcoin</div>

                        <div class="payout">
                          <div class="payout__in">15%</div>
                        </div>
                      </div>
                    </div>
                    <div class="divider js-type-index">Indices</div>
                    <div class="assets-table-container js-type-index">
                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AUS 200 OTC</div>

                        <div class="payout">
                          <div class="payout__in">67%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">SMI 20</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">CAC 40</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">AEX 25</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">US100 OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">DJI30 OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">SP500 OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">D30EUR OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">JPN225 OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">F40EUR OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">100GBP OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">E35EUR OTC</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">SP500</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">E35EUR</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>

                      <div class="row traded">
                        <div class=" trading-status traded">
                          <div class="trading-status-indicator trading animate"></div>
                          <div class="tooltip-content">
                            <div class="tooltip-text">
                              Asset is available for trading at the moment
                            </div>
                          </div>
                        </div>
                        <div class="symbol">US100</div>

                        <div class="payout">
                          <div class="payout__in">45%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="assets-table-comment">
                    *The featured data is relevant only at the time of page
                    loading and is for reference purposes only.
                  </div>
                  <div class="assets-table-comment">
                    *Asset schedule is specified in server time (UTC+2)..
                  </div>{" "}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default AssetsTrading;

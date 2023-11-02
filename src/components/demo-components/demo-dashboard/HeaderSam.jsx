import React, { useState } from "react";
import "./headersam.css";

import { useNavigate } from "react-router-dom";
import MobileHeader from "../../home-components/mobile-header/MobileHeader";

const HeaderSam = () => {
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const toggleLangClass = () => {
    setLangOpen(!langOpen);
  };
  const toggleMobileHeader = () => {
    setMobOpen(!mobOpen);
  };
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  return (
    <div class="layout header_dash_top">
      <div class="section header dash_header_top">
        <div class="container dash-header">
          <div class="content">
            <a
              onClick={() => {
                navigate("/");
              }}
              class="header__logo logo "
            >
              <img
                src="/images/logo/logo-no-background.png"
                width="160"
                height="30"
              />
            </a>
            {/* <div class="header__menu">
              <div class="header__dash_btns">
                <div class="header__progress_bar">
                  <div class="header__progress">
                    <span>Place Your First Forecast</span>
                  </div>
                </div>
              </div>
            </div> */}
          
            <div class="header__dash_right">
              <div class="header__dash_btns">
                <div class="header__dash_user">
                  <div class="quick-trading" onClick={toggleBoxVisibility}>
                    $ 0.00
                  </div>
                </div>
              </div>
              <div class="header__dash_btns">
                <div class="header__dash_user">
                  <div class="topup-dash">TopUp</div>
                </div>
              </div>
              <div class="header__dash_btns">
                <div class="header__dash_user">
                  <div>
                    <img
                      src="/images/dashboard/user-main.png"
                      alt="English"
                      style={{
                        width: "40px",
                        height: "40px",
                        "margin-right": "10px",
                      }}
                    />
                  </div>
                </div>
              </div>
              {/* <div
                class={`header__menu-btn js-trigger-btn ${
                  mobOpen ? "open" : ""
                }`}
                onClick={toggleMobileHeader}
              >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {isBoxVisible && (
          <div className="quick-trading-box">
            <p>
              This is the login box. You can add your login form or content
              here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSam;

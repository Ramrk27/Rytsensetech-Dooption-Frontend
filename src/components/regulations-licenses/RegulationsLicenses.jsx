import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../home-components/header/Header";
import Footer from "../home-components/footer/Footer";
import Sidebar from "../home-components/side-bar/Sidebar";
import "./regulation.css"
const RegulationsLicenses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--regulatory-environment page_dark-blue">
        <section class="section top">
          <div class="container container__no-padding">
            <h1>Regulations & Licenses</h1>
          </div>
        </section>

        <section class="section top-block">
          <div class="container container__no-padding top-block__in">
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
                <li class="breadcrumbs__item">
                  <a
                    class="breadcrumbs__link"
                    onClick={() => {
                      navigate("/about");
                    }}
                  >
                    About company
                  </a>
                </li>
                <li class="breadcrumbs__item breadcrumbs__item--active">
                  <span class="breadcrumbs__label">Regulatory Environment</span>
                </li>
              </ul>{" "}
            </div>
          </div>
        </section>

        <div class="page__in">
          <section class="section re__section">
            <div class="container re__container">
              <div class="content">
                <div class="re__row">
                  <div class="re__left">
                    <div class="re__flag">
                      <img
                        data-src="https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/COM.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/COM.png 1x, https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/COM@2x.png 2x"
                        alt="Flag sv"
                        class="lazy"
                      />
                    </div>
                    <div class="re__text">
                      <p class="re__text-title">
                        International Ibc Regulation Act 2014 Brokerage License{" "}
                      </p>
                      <p>Autonomous Island Of Mwali (Mohéli) Comoros Union </p>
                      <p>
                        Infinite Trade LLC is registered at Republic Of Costa
                        Rica, San Jose- San Jose Mata Redonda, Neighborhood Las
                        Vegas, Blue Building Diagonal To La Salle High School
                        with the registíndicen number 4062001303240.
                      </p>
                      <p>
                        The Registrar of International Business Companies
                        certifies that having satisfied all the requirements in
                        respect of incorporationunder International Business
                        Company Act, that all the requirements of said Act in
                        respect of incorporation have been complied with. In
                        accordance with the mandate granted to the Office of
                        Mwali International Services Authority by the
                        International Act 2001 of the Autonomous Istand of Mwali
                        (Mohéli).{" "}
                      </p>
                    </div>
                  </div>
                  <div class="re__right">
                    <p class="re__sert-title">View Certificate:</p>
                    <a
                      class="re__sert"
                      data-fancybox
                      data-type="ajax"
                      data-src="https://pocketoption.com/en/ajax/modal/comoras-certificate2/"
                    >
                      <img
                        data-src="https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/com-sert-prev2.jpg"
                        srcset="https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/com-sert-prev2.jpg 1x, https://pocketoption.com/themes/2017-09/img/pages/regulatory-environment/com-sert-prev2@2x.jpg 2x"
                        alt="Certificate"
                        class="lazy"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <Sidebar/>
    </div>
  );
};

export default RegulationsLicenses;

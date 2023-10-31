import React from "react";
import Footer from "../../home-components/footer/Footer";
import Sidebar from "../../home-components/side-bar/Sidebar";
import Header from "../../home-components/header/Header";
import { useNavigate } from "react-router-dom";

const ResponsibilityDisclosure = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--responsability-deisclosure">
        <div class="page page--responsability-deisclosure">
          <section class="section top-section top-section_no-img">
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
                      <span class="breadcrumbs__label">
                        Responsibility Disclosure
                      </span>
                    </li>
                  </ul>{" "}
                </div>

                <h1 class="top-section__title">Responsibility Disclosure </h1>
              </div>
            </div>
          </section>
          <section class="section text-section">
            <div class="container text-section__container">
              <div class="content">
                <p>
                  The provided goods and services have not been ordered by an
                  individual or a company using WebMoney Transfer system. As an
                  independent service provider company, we make independent
                  decisions on prices and offers. Companies using WebMoney
                  Transfer system do not charge any fees and do not receive any
                  other kinds of recompense for providing these services, and
                  they are not liable for our activity.
                </p>
                <p>
                  The certification by WebMoney Transfer only confirms our
                  contact details and proves the identity. It's carried out at
                  our request and does not imply any kind of connection with
                  WebMoney operators' sales.
                </p>
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

export default ResponsibilityDisclosure;

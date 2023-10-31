import React from "react";
import Header from "../../home-components/header/Header";
import Footer from "../../home-components/footer/Footer";
import Sidebar from "../../home-components/side-bar/Sidebar";
import "./kycpolicy.css";
import { useNavigate } from "react-router-dom";
const KycPolicy = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--aml-policy">
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
                    <span class="breadcrumbs__label">AML and KYC Policy</span>
                  </li>
                </ul>{" "}
              </div>

              <h1 class="top-section__title">
                Anti Money-Laundering (AML) and Know Your Customer (KYC) Policy{" "}
              </h1>
            </div>
          </div>
        </section>

        <section class="section text-section">
          <div class="container text-section__container">
            <div class="content">
              <p>
                1. It is the policy of pocketoption.com and its affiliates,
                (hereinafter «The Company») to prohibit and actively pursue the
                prevention of money laundering and any activity that facilitates
                money laundering or the funding of terrorist or criminal
                activities. The Company requires its officers, employees and
                affiliates to adhere to these standards in preventing the use of
                its products and services for money laundering purposes.
              </p>
              <p>
                2. For the purposes of the Policy, money laundering is generally
                defined as engaging in acts designed to conceal or disguise the
                true origins of criminally derived proceeds so that the unlawful
                proceeds appear to have been derived from legitimate origins or
                constitute legitimate assets.
              </p>
              <p>
                3. Generally, money laundering occurs in three stages. Cash
                first enters the financial system at the «placement» stage,
                where the cash generated from criminal activities is converted
                into monetary instruments, such as money orders or traveler's
                checks, or deposited into accounts at financial institutions. At
                the «layering» stage, the funds are transferred or moved into
                other accounts or other financial institutions to further
                separate the money from its criminal origin. At the
                «integíndicen» stage, the funds are reintroduced into the
                economy and used to purchase legitimate assets or to fund other
                criminal activities or legitimate businesses. Terrorist
                financing may not involve the proceeds of criminal conduct, but
                rather an attempt to conceal the origin or intended use of the
                funds, which will later be used for criminal purposes.
              </p>
              <p>
                4. Each employee of The Company, whose duties are associated
                with the provision of products and services of The Company and
                who directly or indirectly deals with the clientele of The
                Company, is expected to know the requirements of the applicable
                laws and regulations which affect his or her job
                responsibilities, and it shall be the affirmative duty of such
                employee to carry out these responsibilities at all times in a
                manner that complies with the requirements of the relevant laws
                and regulations.
              </p>
              <p>
                5. The laws and regulations include, but not limited to:
                «Customer Due Diligence for Banks» (2001) and «General Guide to
                Account Opening and Customer Identification» (2003) of Basel
                Committee of banking Supervision, Forty + nine Recommendations
                for Money Laundering of FATF, USA Patriot Act (2001), Prevention
                and Suppression of Money Laundering Activities Law of (1996).
              </p>
              <p>
                6. To ensure that this general policy is carried out, management
                of The Company has established and maintains an ongoing program
                for the purpose of assuring compliance with the relevant laws
                and regulations and the prevention of money laundering. This
                program seeks to coordinate the specific regulatory requirements
                throughout the group within a consolidated framework in order to
                effectively manage the group's risk of exposure to money
                laundering and terrorist financing across all business units,
                functions, and legal entities.
              </p>
              <p>
                7. Each of the affiliates of The Company is required to comply
                with AML and KYC policies.
              </p>
              <p>
                8. All identification documentation and services records shall
                be kept for the minimum period of time required by local law.
              </p>
              <p>
                9. All new employees shall receive anti-money laundering
                training as part of the mandatory new-hire training program. All
                applicable employees are also required to complete AML and KYC
                training annually. Participation in additional targeted training
                programs is required for all employees with day to day AML and
                KYC responsibilities.
              </p>
              <p>
                10. The Company has the right to request from the Client to
                confirm his/her registíndicen information indicated at the
                moment of opening the trading account at its discretion and at
                any time. In order to verify the data, the Company may request
                from the Client to provide notarized copies of: passport,
                driver's license or national identity card; bank account
                statements or utility bills in order to confirm the residence
                address. In some cases, the Company may ask the Client to
                provide a photograph of the Client holding the identity card
                close to his/her face. Detailed requirements for client
                identification are specified in the AML Policy section on the
                Company's official website.
              </p>
              <p>
                11. The verification procedure is not mandatory for the Client's
                identification data if the Client has not received such a
                request from the Company. The Client may voluntarily send a copy
                of the passport or other document proving his/her identity to
                the Company's client support department to ensure verification
                of the said personal data. The Client must take into account
                that when depositing/withdrawing funds via bank transfer, he/she
                must provide documents for full verification of the name and
                address in connection with the specifics of the execution and
                processing of bank transactions.
              </p>
              <p>
                12. If any Client’s registíndicen data (full name, address or
                phone number) have changed, the Client is obligated to
                immediately notify the Company’s client support department of
                these changes with a request to modify these data or make
                changes without assistance in the Client’s Profile.
              </p>
              <p>
                12.1. To change the phone number indicated at the registíndicen
                of the Client’s Profile, the Client must provide a document
                confirming ownership of the new phone number (agreement with a
                mobile phone service provider) and a photo of the ID held close
                to the Client’s face. The Client’s personal data must be the
                same in both documents.
              </p>
              <p>
                13. The Client is responsible for authenticity of the documents
                (their copies) and recognizes the right of the Company to
                contact the appropriate authorities of the country that has
                issued the documents to validate their authenticity.
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

export default KycPolicy;

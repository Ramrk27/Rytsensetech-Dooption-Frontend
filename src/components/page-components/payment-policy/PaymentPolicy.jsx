import React from "react";
import Header from "../../home-components/header/Header";
import Footer from "../../home-components/footer/Footer";
import Sidebar from "../../home-components/side-bar/Sidebar";
import { useNavigate } from "react-router-dom";

const PaymentPolicy = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="page page--payment-policy">
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
                    <span class="breadcrumbs__label">Payment Policy</span>
                  </li>
                </ul>{" "}
              </div>

              <h1 class="top-section__title">Payment Policy </h1>
            </div>
          </div>
        </section>

        <section class="section text-section">
          <div class="container text-section__container">
            <div class="content">
              <p>
                1.1 The company is financially responsible for the clients
                account balance in any particular moment.
              </p>
              <p>
                1.2 Company's financial responsibility starts with the first
                record about the customer's deposit and continues up to a full
                withdrawal of funds.
              </p>
              <p>
                1.3 The client has the right to demand from the Company any
                amount of funds which is available in his/her account at the
                time of the enquiry.
              </p>
              <p>
                1.4 The only official methods of deposits/withdrawals are the
                methods which appear on the company's official website. The
                client assumes all the risks related to the usage of these
                payment methods since the payment methods are not the company's
                partners and not the company's responsibility. The company is
                not responsible for any delay or cancelation of a transaction
                which was caused by the payment method. In case the client has
                any claims related to any of the payment methods, it is his/her
                responsibility to contact the support service of the particular
                payment method and to notify the company about those claims.
              </p>
              <p>
                1.5 The company does not assume any responsibility for the
                activity of any third party service providers which the customer
                may use in order to make a deposit/withdrawal. The company's
                financial responsibility for the client's funds starts when the
                funds have been loaded to the company's bank account or any
                other account related to the payment methods which appear on the
                company's website. In case any fraud is detected during or after
                a financial transaction, the company reserves the right to
                cancel such transaction and freeze the client's account.
                <br />
                The Company's responsibility for the clients' funds ends when
                the funds are withdrawn from the company's bank account or any
                other account related to the company.
              </p>
              <p>
                1.6 In case of any technical mistakes related to financial
                transactions, the company reserves the right to cancel such
                transactions and their results.
              </p>
              <p>
                1.7 The client may have only one registered account on the
                company's website. In case the company detects any duplication
                of the customer's accounts, the company reserves the right to
                freeze the customer's accounts and funds without the right of
                withdrawal.
              </p>
              <p>2. Client's registíndicen</p>
              <p>2.1 Client's registíndicen is based on two main steps:</p>
              <p>
                - Client's web registíndicen.
                <br />- Client's identity verification.
              </p>
              <p>In order to complete the first step the client needs to:</p>
              <p>
                - Provide the company with his/her real identity and contact
                details.
                <br />- To accept the company's agreements and their appendices.
              </p>
              <p>
                2.2 In order to complete the second step the company needs to
                request and the client needs to provide
              </p>
              <p>
                - a scan or digital photo of his/her identification document.
                <br />- full copy of all the pages of his/her ID documet with
                the photo and personal details.
              </p>
              <p>
                The company reserves the right to demand from the client any
                other documents, such as payment bills, bank confirmation, bank
                card scans or any other document that may be necessary during
                the identification process.
              </p>
              <p>
                2.3 The identification process must be completed in 10 business
                days since the company`s request. In some cases the company may
                increase the identification period up to 30 working days.
              </p>
              <p>3. Deposit process</p>
              <p>
                In order to make a deposit, the client shall to make an enquiry
                from his Personal Cabinet. In order to complete the enquiry, the
                client needs to choose any of the payment methods from the list,
                fill in all the necessary details and continue with the payment.
              </p>
              <p>The following currencies are available for deposit: USD</p>
              <p>
                Withdrawal request processing time depends on the payment method
                and may vary from one method to another. The company cannot
                regulate the processing time. In case of using electronic
                payment methods, the transaction time can vary from seconds to
                days. In case of using direct bank wire, the transaction time
                can be from 3 up to 45 business days.
              </p>
              <p>
                Any transactions made by the Client must be executed through the
                determined source of the transaction, belonging exclusively to
                the Client, who carries out the payment by his/her own funds.
                The withdrawal, refund, compensation, and other payments carried
                out from the Client’s account can only be made using the same
                account (bank, or payment card) that was used to deposit the
                funds. Withdrawal from the Account may be carried out only in
                the same currency in which the corresponding deposit was made.
              </p>
              <p>4. Taxes</p>
              <p>
                The company is not a tax agent and does not provide the clients'
                financial information to any third parties. This information can
                only be provided in case of an official demand from government
                agencies.
              </p>
              <p>5. Refund policy</p>
              <p>
                5.1 At any time a Client can withdraw a part or all funds from
                his/her Account by sending the Company a Request for Withdrawal
                containing the Client’s order to withdraw money from the
                Client’s Account, which complies with the following terms:
              </p>
              <p>
                - the Company will execute the order for withdrawal from the
                Client’s trading account, which will be limited by the remaining
                balance of the Client’s Account at the time of order execution.
                If the amount withdrawn by the Client (including commissions and
                other expenses as per this Regulation) exceeds the balance of
                the Client's Account, the Company may reject the order after
                explaining the reason for the rejection.;
              </p>
              <p>
                - the Client's order to withdraw money from the Client's Account
                must comply with the requirements and restrictions set forth by
                current legislation and other provisions of the countries in the
                jurisdiction of which such transaction is made;
              </p>
              <p>
                - money from the Client's Account must be withdrawn to the same
                payment system with the same purse ID that was previously used
                by the Client to deposit funds to the Account. The Company may
                limit the amount of the withdrawal to a payment system with
                amount of the deposits came on the Client's account from that
                payment system. The Company may, at its discretion, make
                exceptions to this rule and withdraw Client money to other
                payment systems, but the Company may at any time ask the Client
                for the payment information for the other payment systems, and
                the Client must provide the Company with that payment
                information.;
              </p>
              <p>
                5.2 A Request for Withdrawal is executed by transferring the
                funds to the Client’s External Account by an Agent authorized by
                the Company.
              </p>
              <p>
                5.3 The Client shall make a Request for Withdrawal in the
                currency of the deposit. If the deposit currency is different
                from the transfer currency, the Company will convert transfer
                amount into the transfer currency at the exchange rate
                established by the Company as of the time when the funds are
                debited from the Client’s Account.
              </p>
              <p>
                5.4 The currency in which the Company makes transfers to the
                Client’s External Account may be displayed in the Client’s
                Dashboard, depending on the currency of the Client’s Account and
                the withdrawal method.
              </p>
              <p>
                5.5 The conversion rate, commission and other expenses related
                to each withdrawal method are set by the Company and may be
                changed at any time at the Company’s sole discretion. The
                exchange rate may differ from the currency exchange rate set by
                the authorities of a particular country and from the current
                market exchange rate for the relevant currencies. In the cases
                established by Payment Service Providers, funds may be withdrawn
                from the Client’s Account in a currency that is different from
                the currency of the Client’s External Account.
              </p>
              <p>
                5.6 The Company reserves the right to set minimum and maximum
                withdrawal amounts depending on the withdrawal method. These
                restrictions will be set out in the Client's Dashboard.
              </p>
              <p>
                5.7 The withdrawal order is deemed accepted by the Company if it
                is created in the Client’s Dashboard, and is displayed in the
                Balance History section and in the Company’s system for
                accounting clients’ requests. An order created in any manner
                other than that specified in this clause will not be accepted
                and executed by the Company.
              </p>
              <p>
                5.8 The funds will be withdrawn from the Client's account within
                five (5) business days.
              </p>
              <p>
                5.9 If the funds sent by the Company pursuant to a Request for
                Withdrawal have not arrived in the Client's External Account
                after five (5) business days, the Client may ask the Company to
                investigate this transfer.
              </p>
              <p>
                5.10 If the Client has made an error in the payment information
                when drawing up a Request for Withdrawal that resulted in a
                failure to transfer money to the Client's External Account, the
                Client will pay a commission for resolving the situation.
              </p>
              <p>
                5.11 The Client's profit in excess of the funds deposited by the
                Client may be transferred to the Client's External Account only
                by a method agreed by the Company and Client, and if the Client
                made a deposit to his/her account by a certain method, the
                Company has the right to withdraw a previous deposit of the
                Client by the same method.
              </p>
              <p>6. Payment methods for withdrawals</p>
              <p>6.1 Bank transfer.</p>
              <p>
                6.1.1 The Client may send a Request for Withdrawal by bank wire
                transfer at any time if the Company accepts this method at the
                time of funds transfer.
              </p>
              <p>
                6.1.2 The Client may make a Request for Withdrawal only to a
                bank account opened in his/her name. The Company will not accept
                and execute orders to transfer money to a bank account of a
                third party.
              </p>
              <p>
                6.1.3 The Company must send the money to the Client's bank
                account in accordance with the information in the Request for
                Withdrawal if the conditions of clause 7.1.2. of this Regulation
                are met.
              </p>
              <p>
                The Client understands and agrees that the Company assumes no
                liability for the time a bank transfer takes.
              </p>
              <p>6.2 Electronic transfer.</p>
              <p>
                6.2.1 The Client may send a Request for Withdrawal by electronic
                transfer at any time if the Company uses this method when the
                transfer is made.
              </p>
              <p>
                6.2.2 The Client may make a Request for Withdrawal only to
                his/her personal electronic payment system wallet.
              </p>
              <p>
                6.2.3 The Company must send money to the Client's electronic
                account in accordance with the information in the Request for
                Withdrawal.
              </p>
              <p>
                6.2.4 The Client understands and acknowledges that the Company
                is not responsible for the time an electronic transfer takes or
                for the circumstances resulting in a technical failure during
                the transfer if they occurred through no fault of the Company.
              </p>
              <p>
                6.3 The Company may, at its discretion, offer the Client other
                methods for withdrawing money from the Client's account. This
                information is posted in the Dashboard.
              </p>
            </div>
          </div>
        </section>

        {/* <section class="section mt100pm">
          <div class="container">
            <div class="content mt100pm__in">
              <div class="payment-methods">
                <ul class="payment-methods-list">
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro.webp 1x, https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro.png 1x,https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro.png 1x, https://m.pocketoption.com/images/payments/logo-white/master_visa_maestro@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/vload.webp 1x, https://m.pocketoption.com/images/payments/logo-white/vload@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/vload.png 1x,https://m.pocketoption.com/images/payments/logo-white/vload@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/vload.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/vload.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/vload.png 1x, https://m.pocketoption.com/images/payments/logo-white/vload@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/wm.webp 1x, https://m.pocketoption.com/images/payments/logo-white/wm@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/wm.png 1x,https://m.pocketoption.com/images/payments/logo-white/wm@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/wm.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/wm.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/wm.png 1x, https://m.pocketoption.com/images/payments/logo-white/wm@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/jeton.webp 1x, https://m.pocketoption.com/images/payments/logo-white/jeton@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/jeton.png 1x,https://m.pocketoption.com/images/payments/logo-white/jeton@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/jeton.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/jeton.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/jeton.png 1x, https://m.pocketoption.com/images/payments/logo-white/jeton@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/advcash.webp 1x, https://m.pocketoption.com/images/payments/logo-white/advcash@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/advcash.png 1x,https://m.pocketoption.com/images/payments/logo-white/advcash@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/advcash.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/advcash.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/advcash.png 1x, https://m.pocketoption.com/images/payments/logo-white/advcash@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item">
                    <picture class="payment-methods-list__img">
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/pm.webp 1x, https://m.pocketoption.com/images/payments/logo-white/pm@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://m.pocketoption.com/images/payments/logo-white/pm.png 1x,https://m.pocketoption.com/images/payments/logo-white/pm@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://m.pocketoption.com/images/payments/logo-white/pm.png"
                        data-src="https://m.pocketoption.com/images/payments/logo-white/pm.png"
                        data-srcset="https://m.pocketoption.com/images/payments/logo-white/pm.png 1x, https://m.pocketoption.com/images/payments/logo-white/pm@2x.png 2x"
                        alt=""
                        loading="lazy"
                      />
                    </picture>
                  </li>
                  <li class="payment-methods-list__item payment-methods-list__item_last">
                    <a
                      href="https://m.pocketoption.com/en/payment-methods/"
                      class="payment-methods-list__link"
                    >
                      More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default PaymentPolicy;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import DemoPage from "./pages/demo/DemoPage";
import About from "./components/page-components/about/About";
import AssetsTrading from "./components/page-components/assets-trading/AssetsTrading";
import Contacts from "./components/page-components/contacts/Contacts";
import KycPolicy from "./components/page-components/kyc-policy/KycPolicy";
import PaymentPolicy from "./components/page-components/payment-policy/PaymentPolicy";
import PaymentSystems from "./components/page-components/payment-systems/PaymentSystems";
import QuickStart from "./components/page-components/quick-start/QuickStart";
import RegulationsLicenses from "./components/page-components/regulations-licenses/RegulationsLicenses";
import ResponsibilityDisclosure from "./components/page-components/responsibility-disclosure/ResponsibilityDisclosure";
import Riview from "./components/page-components/riviews/Riview";
import HeaderSam from "./components/demo-components/demo-dashboard/HeaderSam";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/about" element={<About />} />
          <Route path="/assets-trading" element={<AssetsTrading />} />
          <Route path="/payment-systems" element={<PaymentSystems />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/riviews" element={<Riview />} />
          <Route
            path="/regulatory-environment"
            element={<RegulationsLicenses />}
          />
          <Route path="/kyc-policy" element={<KycPolicy />} />
          <Route path="/payment-policy" element={<PaymentPolicy />} />
          <Route
            path="/responsibility-policy"
            element={<ResponsibilityDisclosure />}
          />
          <Route path="/demo-page" element={<DemoPage />} />
          <Route path="/head" element={<HeaderSam/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

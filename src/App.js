import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/home/Homepage';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import QuickStart from './components/quick-start/QuickStart';
import About from './components/about/About';
import AssetsTrading from './components/assets-trading/AssetsTrading';
import PaymentSystems from './components/payment-systems/PaymentSystems';
import Contacts from './components/contacts/Contacts';
import Riview from './components/riviews/Riview';
import RegulationsLicenses from './components/regulations-licenses/RegulationsLicenses';
import KycPolicy from './components/kyc-policy/KycPolicy';
import PaymentPolicy from './components/payment-policy/PaymentPolicy';
import ResponsibilityDisclosure from './components/responsibility-disclosure/ResponsibilityDisclosure';
import DemoPage from './pages/demo/DemoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/quick-start' element={<QuickStart/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/assets-trading' element={<AssetsTrading/>}/>
        <Route path='/payment-systems' element={<PaymentSystems/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/riviews' element={<Riview/>}/>
        <Route path='/regulatory-environment' element={<RegulationsLicenses/>}/>
        <Route path='/kyc-policy' element={<KycPolicy/>}/>
        <Route path='/payment-policy' element={<PaymentPolicy/>}/>
        <Route path='/responsibility-policy' element={<ResponsibilityDisclosure/>}/>
        <Route path='/demo-page' element={<DemoPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

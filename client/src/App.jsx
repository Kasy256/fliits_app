import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Carshare from './pages/Carshare';
import Home from './pages/Home'; 
import CarListingForm from './pages/CarListingForm';
import AfterSearch from './pages/AfterSearch';
import CarInfoPage from './pages/CarInfoPage';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import ForgotPassword from './components/ForgotPassword';
import FeedbackForm from './components/FeedbackForm';
import PaymentInfo from './pages/PaymentInfo';
import Cars from './components/Cars';

import './App.css';
import '@fontsource/roboto'; 

function App() {
  
  
  return (
    <Router>
      <div className="App">
    
        <Routes>
          {/* Define routes for each page */}
          <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Carshare" element={<Carshare />} />
        <Route path="/car-listing" element={<CarListingForm />} />
        <Route path="/AfterSearch" element={<AfterSearch/>} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/CarInfoPage" element={<CarInfoPage />} />
        <Route path="/FeedBackForm" element={<FeedbackForm />} />
        <Route path='/PaymentPage' element={<PaymentInfo />} />
        <Route path="/" element={<Home />} />
        </Routes>
       
        <Footer />
        </div>
      </Router>



  );
}

export default App;

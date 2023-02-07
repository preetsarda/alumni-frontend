import logo from './logo.svg';
import './App.css';
import Create_Box from './Components/Event/event_creation';
import Home from './pages/Home_page';
import Dashboard from './pages/Dashboard';
import { Route, Routes, Switch } from "react-router-dom";
import Navbar from './Components/Navbar';
import Sign_up from './pages/Sign_UP';
import Alumni_Form from './Components/Sign Up/Alumni_form';
import Institute_Page from './pages/Institute_Profile';
import AlumProfile from './pages/Alumni_Profile';
import Company_Form from './Components/Sign Up/Company_form';
import Company_Page from './pages/Company_Profile';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Dashboard />} />
        <Route path='/signup' element={<Sign_up />} />
        <Route path='signup/alum' element={<Alumni_Form />} />
        <Route path='/signup/company' element={<Company_Form />} />
        <Route path='/profile/alum' element={<AlumProfile />} />
        <Route path='/profile/institute' element={<Institute_Page/>} />
        <Route path='/profile/comp' element={<Company_Page/>} />
      </Routes>
    </div>
  );
}

export default App;

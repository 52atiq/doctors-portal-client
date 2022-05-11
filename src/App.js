
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login/Login';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home> </Home>}></Route>
      <Route path='/about' element={<About> </About>}></Route>
      <Route path='/login' element={<Login> </Login>}></Route>
      <Route path='/appointment' element={<Appointment></Appointment>}></Route>
    </Routes>
  
    </div>
  );
}

export default App;

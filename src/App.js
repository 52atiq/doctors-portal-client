
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login/Login';
import RequireAuth from './Auth/RequireAuth/RequireAuth';
import SignUp from './Auth/SignUp/SignUp';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Dashboard/Dashboard';
import MyAppointments from './Dashboard/MyAppointments';
import MyReview from './Dashboard/MyReview';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home> </Home>}></Route>
      <Route path='/about' element={<About> </About>}></Route>
      <Route path='/login' element={<Login> </Login>}></Route>
      <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>
      }></Route>
      <Route path='dashboard' element={
       <RequireAuth>
          <Dashboard></Dashboard>
       </RequireAuth>
      }>
        <Route index element={<MyAppointments></MyAppointments>}></Route>
        <Route path='review' element={<MyReview></MyReview>}></Route>
      </Route>
    </Routes>
    <ToastContainer />
  
    </div>
  );
}

export default App;

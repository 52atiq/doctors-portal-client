
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login/Login';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home> </Home>}></Route>
      <Route path='/about' element={<About> </About>}></Route>
      <Route path='/login' element={<Login> </Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppointmentPage from './Pages/Appointment/AppointmentPage';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import Navbar from './Pages/Sheared/Navbar/Navbar';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path="/" element={<Home></Home>}></Route>
         <Route path="login" element={<Login></Login>}></Route>
         <Route path="signup" element={<Signup></Signup>}></Route>
         <Route path="appointment" element={<AppointmentPage></AppointmentPage>}></Route>
       </Routes>
    </div>
  );
}

export default App;

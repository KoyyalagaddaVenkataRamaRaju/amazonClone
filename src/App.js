import './App.css';
import Navbaar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign_in';
import SignUp from './components/signup_sign/SignUp';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
   <>
   <Navbaar />
   <Newnav/>
   <Routes>
    <Route path='/' element={<Maincomp />} />
    <Route path='/login' element={<Sign_in />} />
    <Route path='/register' element={<SignUp />} />
   </Routes>
    <Footer />
   </>

  );
}

export default App;

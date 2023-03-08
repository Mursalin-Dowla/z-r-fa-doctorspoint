import './App.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Learn from './components/Learn/Learn';
import Achievements from './components/Achievements/Achievements';
import Blog from './components/Blog/Blog';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ResetPassword from './components/Login/ResetPassword';

function App() {
  return (
    <>
     <Header />
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/learn' element={<Learn />}></Route>
        <Route path='/achievements' element={<Achievements />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/resetpassword' element={<ResetPassword />}></Route>
     </Routes>
     {/* <Footer /> */}
    </>
  );
}

export default App;

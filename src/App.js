import './App.css';
import Home from './componants/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './componants/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AfterSendingMail from './componants/Pages/AfterSendingMail';
import ErrorPage from './componants/Pages/ErrorPage';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/login' element={<Login/>}></Route>      
        <Route path='/mailsuccess' element={<AfterSendingMail/>}></Route>      
        <Route path='*' element={<ErrorPage/>}></Route>      
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

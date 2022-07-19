import './App.css';
import Home from './componants/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './componants/Login/Login';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>      
      </Routes>
    </div>
  );
}

export default App;

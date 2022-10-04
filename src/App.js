import './App.css';
import Home from './componants/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './componants/Login/Login';
import Projects from './componants/pages/Projects';
import Error from './componants/pages/Error';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        
              
      </Routes>
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Create } from './pages/Create';
import { Register } from './pages/Register';
import { Result } from './pages/Result';
import { Navbar } from './components/navbar';
import {TeacherDashboard} from './pages/TeacherDashboard'
import { Logout } from './pages/Logout';
import { UpdateResult } from './pages/updateResult';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/teacher' element={<TeacherDashboard/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/updateResult' element={<UpdateResult/>}/>
      </Routes>
    
    </BrowserRouter>
    
    </>
  );
};

export default App;
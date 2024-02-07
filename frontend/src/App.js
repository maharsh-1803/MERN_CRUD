import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router';
import  DashBoard  from './components/dashboard/DashBoard';
import  postUser  from './components/postUser/postUser';
import  noMatch  from './components/noMatch/noMatch';
import  Header  from './components/header/Header';


function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<DashBoard/>}></Route>
        <Route path='/user' element={<postUser/>}></Route>
        <Route path='/user/:id' element={<updateUser/>}></Route>
        <Route path='/' element={<noMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;

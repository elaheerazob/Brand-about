import { Routes,Route } from 'react-router';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { About } from './Component/About/About';
import Banner from './Component/About/Banner';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path="about" element={<About></About>}></Route>
      <Route path='banner' element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Temperatures from './components/temperatures/Temperatures';
import Currency from './components/currency/Currency';
import TimeZone from './components/time/TimeZone';
import Home from './components/home/Home'

import { NavLink, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <form action="">
        <h1>Master Converter</h1>

        <>
          <nav>
            <ul>
              <li><NavLink className={({isActive}) => (isActive ? 'active' : 'inactive')} to='/'>Home</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/temperatures'>Temperatures</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/currency'>Currency</NavLink></li>
              <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/time_zone'>Time Zone</NavLink></li>
            </ul>
          </nav>
        </>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/temperatures' element={<Temperatures />} />
          <Route path='/currency' element={<Currency />} />
          <Route path='/time_zone' element={<TimeZone />} />
        </Routes>




      </form>

    </div>
  );
}

export default App;

import './App.css';
import Temperatures from './components/temperatures/Temperatures';
import Currency from './components/currency/Currency';
import TimeZone from './components/time/TimeZone';
import Home from './components/home/Home'

import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <form action="">
        <h1>Master Converter</h1>

        <>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/temperatures'>Temperatures</Link></li>
              <li><Link to='/currency'>Currency</Link></li>
              <li><Link to='/time_zone'>Time Zone</Link></li>
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

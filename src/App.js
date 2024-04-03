import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Temperatures from './components/temperatures/Temperatures';
import Currency from './components/currency/Currency';
import TimeZone from './components/time/TimeZone';
function App() {
  return (
    <div className="App">
      <form action="">
          <h1>Master Converter</h1>
         <Router>
          <div>
            <li>
              <Link to='/currency'>Currency</Link>
            </li>
            <li>
              <Link to='/temperatures'>Temperatures</Link>
            </li>
            <li>
              <Link to='/time_zone'>Time Zone</Link>
            </li>
          </div>
         </Router>
          
      </form>

    </div>
  );
}

export default App;

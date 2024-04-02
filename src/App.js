import './App.css';
import Temperatures from './components/temperatures/Temperatures'

function App() {
  return (
    <div className="App">
      <form action="">
        <h1>Master Converter</h1>
        <h3>Currency | Temperatures | Time Zone
        </h3>
         <Temperatures />
      </form>
     
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { AlertA } from './component/Alert';

function App() {
  return (
    <div className="App">
      <AlertA/>
      <Navbar/>
    </div>
  );
}

export default App;

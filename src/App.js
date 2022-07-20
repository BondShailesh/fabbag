import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import { AlertA } from './component/Alert';
import Caurosel from './pages/SlideShow';

function App() {
  return (
    <div className="App">
      <AlertA/>
      <Navbar/>
      <Caurosel/>
    </div>
  );
}

export default App;

import './App.css';
import { AlertA } from './component/Alert';
import Navbar from './component/Navbar';
import AllRoutes from './pages/AllRoutes';

function App() {
  return (
    <div className="App">
      <AlertA />
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;

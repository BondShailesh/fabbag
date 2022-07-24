import './App.css';
import { AlertA } from './component/Alert';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import AllRoutes from './pages/AllRoutes';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/commonproduct"><AlertA /> </Link>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

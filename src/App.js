
import './App.css';
import Footer from './Components/Footer/Footer';

import MainRoutes from './Components/Pages/MainRoutes';
import Navbar from './Components/Pages/Navbar';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;

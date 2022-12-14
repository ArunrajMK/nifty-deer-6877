
import { useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';

import MainRoutes from './Components/Pages/MainRoutes';
import Navbar from './Components/Pages/Navbar';
import SecondNavbar from './Components/SignPages/SecondNavbar';
import Signin from './Pages/Signin';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      
       {
          JSON.parse(localStorage.getItem("userName"))
          ? <SecondNavbar/>
            :
              <Navbar />

        }
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;

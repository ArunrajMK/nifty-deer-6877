
import './App.css';
import Footer from './Components/Footer/Footer';

import MainRoutes from './Components/Pages/MainRoutes';
import Navbar from './Components/Pages/Navbar';
import SecondNavbar from './Components/SignPages/SecondNavbar';
import Signin from './Pages/Signin';

function App() {
  return (
    <div className="App">
      
       {
          JSON.parse(localStorage.getItem("userName"))
          ? <SecondNavbar/>
          // : <NavLink className="link" to="/signin">
            :  <Navbar />
          // </NavLink>
        }
      <MainRoutes />
      <Footer />
      
    </div>
  );
}

export default App;

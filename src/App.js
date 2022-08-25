
import './App.css';
import MainRoutes from './Components/Pages/MainRoutes';
import Navbar from './Components/Pages/Navbar';
import Signin from './Pages/Signin';

function App() {
  return (
    <div className="App">
      {/* hi */}
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;

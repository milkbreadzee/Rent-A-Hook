import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home'
import NewProduct from './pages/NewProduct/NewProduct';
import Shop from './pages/Shop/Shop';

function App() {
  return (
   <div>
    <Header />
   <Home/>
   </div>
  );
}

export default App;

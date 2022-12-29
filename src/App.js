import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home'
import NewProduct from './pages/NewProduct/NewProduct';

function App() {
  return (
   <div>
    <Header />
    <Home />
    <NewProduct />

   </div>
  );
}

export default App;

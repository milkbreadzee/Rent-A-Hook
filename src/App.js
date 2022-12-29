import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop';
import MostPopular from './pages/MostPopular/MostPopular';

function App() {
  return (
   <div>
    <Header />
   <Home/>
   <MostPopular />
   </div>
  );
}

export default App;

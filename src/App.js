import './App.css';
import Navigation from './components/Navbar';
import Players from './components/Players';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <Routes>
          <Route path='/' element={<Players/>}></Route>
          <Route path='/Player/:id' element={<Detail/>}></Route>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

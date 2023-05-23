import './App.css';
import Main from './screens/Main';
import Header from './components/Header';
import AboutUs from './screens/AboutUs';
import Demos from './screens/Demos';
import Estimates from './screens/Estimates';
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='about-us' element={<AboutUs />}/>
          <Route path='demos' element={<Demos />}/>
          <Route path='request' element={<Estimates />}/>
        </Routes>
    </div>
  );
}

export default App;

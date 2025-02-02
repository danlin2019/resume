import { Outlet } from 'react-router-dom'
import './App.scss';
import BgLine from './components/Bg_line';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
      <BgLine/>
      <Footer/>
    </div>
  )
}

export default App;

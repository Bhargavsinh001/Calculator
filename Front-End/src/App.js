
import './App.css';

import Home from './Home';
import {Routes, Route} from 'react-router-dom';
import Nav from './Nav';
import Effect from './Effect';
import Calculator from './Calculator';



function App() {
 return (
  <>
  <Nav />
  {/* <Calculator />
   <Home />
   <Effect /> */}
   

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/effect' element={<Effect />}/>
      <Route path='/calculator' element={<Calculator />} />
    </Routes>
  </>
 )
}

export default App;

import { toast } from 'react-hot-toast';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Notfound from './pages/Notfound';
import Navbar from './component/Navbar';
import Category from './pages/Category';


function App() {
 
   return (
    <>
      <Navbar/>

        <Routes> 
        
           <Route path='/' element={<Home></Home>}> </Route>
           <Route path='/cart' element={<Cart></Cart>}> </Route>
           <Route path='/category' element={<Category></Category>}></Route>
           <Route path='*' element={<Notfound></Notfound>}></Route>

        </Routes>
    </>

  );
}

export default App;

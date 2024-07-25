import NavbarOne from './components/NavbarOne';
import Navbartwo from './components/NavbarTwo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Form/Login';
import Registration from './Form/Registration';
import Slider from './home/slider';
import Slider2 from './home/slider2';
import Slickslider from './home/slickslider';
import Footer from './components/footer';
import Shoes from './pages/product';
import React from 'react';
import Category from './pages/category_all';
import Category2 from './pages/category_mobiles';
import AddTOcart from './pages/addTOcart';

import './App.css';

const MainLayout=({children})=>{
  return(
    <>
    <NavbarOne/>
    <Navbartwo/>
    {children}
  
    <Footer/>
    </>
  )
}

const Home=()=> {
  return (
    <>
    <Slickslider/>
    <Slider/>
    <Slider2/>
    
    </>
  )
}



function App() {
  return (
   
    
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout><Home/></MainLayout>} />
            <Route path="Login" element={<MainLayout><Login/></MainLayout>}/>
            <Route path="Registration" element={<MainLayout><Registration/></MainLayout>}/>
            <Route path="/product/:id" element={<MainLayout><Shoes/></MainLayout>}/>
            <Route path="/category/:id" element={<MainLayout><Category/></MainLayout>}/>
            <Route path="/Mobile/Tablets_category" element={<MainLayout><Category2/></MainLayout>}/>

            <Route path="/addTOcart" element={<MainLayout><AddTOcart/></MainLayout>}/>
            <Route path="/!!Registration" element={<MainLayout><Registration/></MainLayout>}/>



        </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

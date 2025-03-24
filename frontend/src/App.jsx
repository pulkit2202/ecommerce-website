import React from 'react'
// import { BrowserRouter,Routes,Route} from 'react-router-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router=createBrowserRouter(
  [
    {path:"/",
      element:
      <div>
        <ToastContainer/>
           <Navbar/>
           <SearchBar/>
         <Home/>
         <Footer/>
      </div>
    },
    {path:"/collection",
      element: <div>
        <ToastContainer/>
         <Navbar/><SearchBar/><Collection/>
         <Footer/>
     </div>
    },
     
    {path:"/about",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <About/>
        <Footer/>
    
        </div>
    },
      
    {path:"/contact",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <Contact/>
        <Footer/>
    
        </div>
    },
      
    {path:"/product/:productId",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <Product/>
        <Footer/>
    
        </div>
    },
      
    {path:"/cart",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <Cart/>
        <Footer/>
    
        </div>
    },
      
    {path:"/login",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <Login/>
        <Footer/>
        </div>
    },
      
    {path:"/placeorder",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <PlaceOrder/>
        <Footer/>
        </div>
    },
      
    {path:"/orders",
      element: <div>
        <ToastContainer/>
          <Navbar/><SearchBar/>
        <Orders/>
        <Footer/>
    
        </div>
    },

     
     
  ]
);


 
 const App = () => {
   return (
     <div className='px-4 sm:px-[5vw] md:px[7vw] lg:px[9vw]'>
      
      {/* <Navbar/>
     
      <Routes>
     
     <Route path='/' element={Home}/>
     <Route path='/collection' element={Collection}/>
     <Route path='/about' element={About}/>
     <Route path='/contact' element={Contact}/>
     <Route path='/product/:productId' element={Product}/>
     <Route path='/cart' element={Cart}/>
     <Route path='/login' element={Login}/>
     <Route path='/place-order' element={PlaceOrder}/>
     <Route path='/orders' element={Orders}/>

   </Routes> */}
   <RouterProvider router={router}/>
     
     </div>
   )
 }
 
 export default App
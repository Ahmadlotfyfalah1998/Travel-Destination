//import logo from './logo.svg';
//import './App.css';
///import Header from "./components/header/Header";
//import Footer from "./components/footer/Footer";
//import Tours from "./components/tours/Tours";


import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
//import Tour from "./components/tours/tour/Tour";
import TourDetails from "./components/TourDetails/TourDetails";
//import Navbar from "./components/Navbar/Navbar";

let tours=require("./data/db.json")





function App() {
 
  return (
    <>
    
     
   
   
    <Routes>
    <Route path="/"  element={<Home tour={tours} />}></Route>
    <Route   path="/city/:id"  element={<TourDetails tour={tours}/>}></Route>
    </Routes>
 
 
    </>
  );
}

export default App;



//
   


























   //
  
   




































// return (
//   <>
  
//   <Header/>
// 


// }

//   <Footer/>
//   </>
// );
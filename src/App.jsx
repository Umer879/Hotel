import React from "react"
import TopHeader from "./Component/TopHeader/Header";
import Navbar from "./Component/Navbar/Navbar";
import HeroSlider from "./Component/Hero/Hero";
import Services from "./Component/Services/Service";
import HotelRooms from "./Component/Hotel/Hotel";
import Subscribe from "./Component/Subscribe/Subscribe";
import Spot from "./Component/Spots/Spot";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 return(
  <div>
  <TopHeader />
  <Navbar />
  <HeroSlider />
  <Services />
  <HotelRooms />
  <Subscribe />
  <Spot />
  </div>
 )
  
}

export default App

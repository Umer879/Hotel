import React from 'react'
import HeroSlider from './Hero/Hero'
import Services from './Services/Service'
import HotelRooms from './Hotel/Hotel'
import Subscribe from './Subscribe/Subscribe'
import Spot from './Spots/Spot'
import ProjectCompletion from './Completion/Completion'
import Team from './Team/Team'
import Reviews from './Reviews/Reviews'
import Newsletter from './News/News'
import Footer from './Footer/Footer'
const HomeComponent = () => {
    return (
        <main>
            <HeroSlider />
            <Services />
            <HotelRooms />
            <Subscribe />
            <Spot />
            <ProjectCompletion />
            <Team />
            <Reviews />
            <Newsletter />
            <Footer />
        </main>
    )
}

export default HomeComponent

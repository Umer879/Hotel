import React from 'react'
import Banner from '../Component/Banner/Banner'
import Reviews from '../Component/Reviews/Reviews'
import Team from '../Component/Team/Team'
import Subscribe from '../Component/Subscribe/Subscribe'
import Footer from '../Component/Footer/Footer'
const AboutComponent = () => {
  return (
    <div>
      <Banner title={'About Us'} />
      <Reviews />
      <Team />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default AboutComponent

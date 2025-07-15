import React from 'react'
import Banner from '../Component/Banner/Banner'
import Subscribe from '../Component/Subscribe/Subscribe'
import Serveces from '../Component/Services/Service'
import Footer from '../Component/Footer/Footer'
const ServiceComponent = () => {
  return (
    <div>
     <Banner title={'Our Services'} />
     <Subscribe />
     <Serveces />
     <Footer />
    </div>
  )
}

export default ServiceComponent

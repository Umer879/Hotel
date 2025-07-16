import React from 'react'
import Banner from '../Component/Banner/Banner'
import Subscribe from '../Component/Subscribe/Subscribe'
import Services from '../Component/Services/Service'
import Footer from '../Component/Footer/Footer'
const ServiceComponent = () => {
  return (
    <div>
     <Banner title={'Our Services'} />
     <Services />
     <Subscribe />
     <Footer />
    </div>
  )
}

export default ServiceComponent

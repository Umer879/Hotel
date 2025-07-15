import React from 'react'
import Banner from './Banner/Banner'
import ContactForm from './ContactForm/ContactForm'
import Map from './Map/Map'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'
const ContactComponent = () => {
  return (
    <div>
      <Banner title={'Contact US '} />
      <ContactForm />
      <Map />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ContactComponent

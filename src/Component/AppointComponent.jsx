import React from 'react'
import Banner from './Banner/Banner'
import AppointmentForm from './AppointementForm/AppointementForm'
import Footer from './Footer/Footer'
const AppointComponent = () => {
  return (
    <div>
        <Banner title='Make An Appointement' />
      <AppointmentForm />
      <Footer />
    </div>
  )
}

export default AppointComponent

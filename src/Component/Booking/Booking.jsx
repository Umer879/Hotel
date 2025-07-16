import React from 'react'
import Banner from '../Banner/Banner'
import Features from './features'
import BookingForm from './BookingForm'
const Booking = () => {
  return (
    <div>
      <Banner title={'Room Booking'} />
      <Features />
      <BookingForm />
    </div>
  )
}

export default Booking

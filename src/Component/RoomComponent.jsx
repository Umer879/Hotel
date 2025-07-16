import React from 'react'
import Banner from './Banner/Banner'
import Rooms from './Rooms/allRooms'
import Subscribe from './Subscribe/Subscribe'
import Footer from './Footer/Footer'
const RoomComponent = () => {
  return (
    <div>
      <Banner title={'Gallery Boxed'} />
      <Rooms />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default RoomComponent

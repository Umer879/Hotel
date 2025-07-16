import React from "react";
import { FaCheck } from "react-icons/fa";
import tb2 from '../../assets/resources/tb2.avif'
import roomImg from "../../assets/resources/r1.avif"

const features = [
    "Master Bed",
    "Sea View Balcony",
    "Air Conditioned",
    "Free Wi-Fi",
    "Car Parking",
    "Private Bathroom",
    "Swimming Pool Access",
  ];

export default function BookingSection() {
  return (
    <section className="py-5 bg-light booking-features">
      <div className="container">
        <div className="row align-items-center">
          {/* Room Image */}
          <div className="col-12 col-md-6">
            <img
              src={roomImg}
              alt="Room"
              className="img-fluid"
            />
          </div>

          {/* Room Info & Features */}
          <div className="col-12 col-md-6">
              <div className="container mb-4 heading">
                    <h2 className="fs-1">
                      Deluxe <span>Sea View Room</span>
                    </h2>
                    <img src={tb2} alt="underline" className="underline-img" />
                  </div>
            <p className="text-muted">
              Experience luxury and comfort with our deluxe sea view rooms,
              featuring elegant interiors, a spacious balcony with breathtaking views,
              and modern amenities designed for your relaxation.
            </p>

       <ul className="list-unstyled mb-4">
              {features.map((item, index) => (
                <li key={index} className="mb-2 d-flex align-items-center">
                  <FaCheck className="me-2 check" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

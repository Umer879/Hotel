import React from "react";
import "./Service.css";
import tb2 from '../../assets/resources/tb2.avif'
export default function Services() {
  const services = [
    { icon: "fa-solid fa-bed", title: "Master BedRooms", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: "fa-solid fa-water", title: "Sea View Balcony", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: "fa-solid fa-car", title: "Car Parking", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: "fa-solid fa-bath", title: "Bath Room", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: "fa-solid fa-person-swimming", title: "Swimming Pool", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." },
    { icon: "fa-solid fa-utensils", title: "Restaurant", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis amet harum odit modi voluptatum tempora dolores error ut animi quia." }
  ];

  return (
    <section className="services-section py-5">
      <div className="text-center mb-4">
        <h2 className="fs-1">Our <span style={{ color: '#77ba00' }}>Services</span></h2>
        <img src={tb2} alt="text-decoration" />
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 d-flex justify-content-between"
            >
              <div className="service-card d-flex flex-column align-items-start p-3">
                <div className="icon-box d-flex justify-content-center align-items-center mb-3">
                  <i className={service.icon}></i>
                </div>
                <h5 className="fw-bold service-title">{service.title}</h5>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

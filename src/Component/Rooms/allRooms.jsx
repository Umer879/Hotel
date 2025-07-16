import React, { useState } from "react";
import { FaLink, FaSearch } from "react-icons/fa";

import room1 from "../../assets/gallery/9.avif";
import room2 from "../../assets/gallery/10.avif";
import room3 from "../../assets/gallery/11.avif";
import room4 from "../../assets/gallery/12.avif";
import room5 from "../../assets/gallery/13.avif";
import room6 from "../../assets/gallery/14.avif";
import room7 from "../../assets/gallery/15.avif";
import room8 from "../../assets/gallery/16.avif";
import room9 from "../../assets/gallery/17.avif";

const allRooms = [
  { img: room1, category: "Bed Room" },
  { img: room2, category: "Bed Room" },
  { img: room3, category: "Bed Room" },
  { img: room4, category: "Delux Room" },
  { img: room5, category: "Delux Room" },
  { img: room6, category: "Delux Room" },
  { img: room7, category: "Luxury Room" },
  { img: room8, category: "Luxury Room" },
  { img: room9, category: "Luxury Room" },
];

const categories = [
  "Show All",
  "Bed Room",
  "Delux Room",
  "Luxury Room",
  "Bath Room",
  "Double Room",
];

export default function HotelGallery() {
  const [filter, setFilter] = useState("Show All");

  const filteredRooms =
    filter === "Show All"
      ? allRooms
      : allRooms.filter((room) => room.category === filter);

  return (
    <section className="py-5">
      <div className="container">
        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setFilter(cat)}
              className={` px-4 mt-2 ${
                filter === cat ? "active-filter" : "inactive-filter"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Room Images */}
        <div className="row g-3 gallery-grid">
          {filteredRooms.map((room, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-lg-4 gallery-item fade-in position-relative"
            >
              <div className="room-card overflow-hidden position-relative">
                <img
                  src={room.img}
                  alt={`Room ${index + 1}`}
                  className="img-fluid w-100 transition-img"
                  style={{ height: "240px", objectFit: "cover" }}
                />
                <div className="overlay d-flex justify-content-center align-items-center gap-3">
                  <span className="icon-circle">
                    <FaLink />
                  </span>
                  <span className="icon-circle">
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
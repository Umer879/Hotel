import React from "react";
import tb2 from "../../assets/resources/tb2.avif";
import img1 from "../../assets/resources/sp-2.avif";
import img2 from "../../assets/resources/sp-1.avif";
import img3 from "../../assets/resources/sp-3.avif";

export default function Spot() {
  return (
    <section className="spot-section" style={{ backgroundColor: "#f6f6f6" }}>
      <div className="container px-0">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fs-1 text-dark">
            Nearby <span style={{ color: "#77ba00" }}>Attractive Spots</span>
          </h2>
          <img src={tb2} alt="underline" className="underline-img" />
        </div>

        {/* Unified Row */}
        <div className="row g-0 overflow-hidden">
          {/* Column 1 - Text */}
          <div className="col-lg-6 d-flex flex-column justify-content-center px-4 py-4 bg-white">
            <h4 className="fw-bold">Ennany Beach</h4>
            <p>
              They call him Flipper Flipper faster than lightning no one you see is smarter than he black gold all of them had hair of gold like their mother the young one in curls never heard the word.
            </p>
            <button
              className="btn text-uppercase px-4 fw-bold mt-2 myBtn"
              style={{ backgroundColor: "#77ba00", color: "#fff",  width: "fit-content" }}
            >
              Read More
            </button>
          </div>

          {/* Column 2 - Image */}
          <div className="col-lg-3">
            <img src={img1} alt="Spot 1" className="w-100 h-100 object-fit-cover" />
          </div>

          {/* Column 3 - Text */}
          <div className="col-lg-3 d-flex flex-column justify-content-center px-4 py-4 bg-white">
            <h4 className="fw-bold">Dora Beach</h4>
            <p>
              They call him Flipper Flipper faster than lightning no one you see is smarter than he black gold.
            </p>
            <button
              className="btn text-uppercase px-4 fw-bold mt-2 myBtn"
              style={{ backgroundColor: "#77ba00", color: "#fff",  width: "fit-content" }}
            >
              Read More
            </button>
          </div>

          {/* Column 4 - Image */}
          <div className="col-lg-6">
            <img src={img2} alt="Spot 2" className="w-100 h-100 object-fit-cover" />
          </div>

          {/* Column 5 - Text */}
          <div className="col-lg-3 d-flex flex-column justify-content-center px-4 py-4 bg-white">
            <h4 className="fw-bold">Bandorban</h4>
            <p>
              They call him Flipper Flipper faster than lightning no one you see is smarter than he black gold.
            </p>
            <button
              className="btn text-uppercase px-4 fw-bold mt-2 myBtn"
              style={{ backgroundColor: "#77ba00", color: "#fff",  width: "fit-content" }}
            >
              Read More
            </button>
          </div>

          {/* Column 6 - Image */}
          <div className="col-lg-3">
            <img src={img3} alt="Spot 3" className="w-100 h-100 object-fit-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

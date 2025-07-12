import React from "react";

export default function Subscribe() {
  return (
    <section
      className="subscribe-section d-flex justify-content-between align-items-center px-5"
      style={{ height: "18vh", backgroundColor: "#77ba00" }}
    >
      <h3 className="text-white mb-0">Subscribe Newsletter!</h3>
      <button className="text-uppercase fw-bold text-white subscribe" style={{fontSize: '12px'}}>
        Subscribe Now 
      </button>
    </section>
  );
}

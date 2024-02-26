import React from "react";
import products from "../assets/3.png";
const Body = () => {
  return (
    <div className="body-cont">
      <p className="body-text">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={products} alt="Products Offered" className="products-img" />
      <p className="body-products">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
    </div>
  );
};

export default Body;

import React from "react";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
const products = [
  "CHEMICALS & PROCESS",
  "POWER",
  "WATER & WASTE WATER",
  "OILS & GAS",
  "PHARMA",
  "SUGARS & DISTILLERIES",
  "PAPER & PULP",
  "MARINE & DEFENCE",
  "METAL & MINING",
  "FOOD & BEVERAGE",
  "PETROCHEMICAL & REFINERIES",
  "SOLAR",
  "BUILDING",
  "HVAC",
  "FIRE FIGHTING",
  "AGRICULTURE & RESIDENTIAL",
];

const Footer = () => {
  return (
    <div className="footer">
      <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
      <p>
        {products.map((data, index) => (
          <span key={index}>
            {data}
            {index !== products.length - 1 && (
              <span className="separator"> | </span>
            )}
          </span>
        ))}
      </p>
      <footer>
        <div>
          <CallIcon />
          <p>Toll Free: 1800 200 1234</p>
        </div>
        <div>
          <FacebookIcon />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div>
          <LanguageIcon />
          <p>www.cripumps.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

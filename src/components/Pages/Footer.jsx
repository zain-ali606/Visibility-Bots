// src/components/Footer.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-sky-500 text-white py-10 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">

        {/* Contact Info */}
        <div className="flex flex-col space-y-3 animate-fadeInUp">
          <a href="mailto:info@visibilitybots.com" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaEnvelope /> <span>info@visibilitybots.com</span>
          </a>
          <a href="tel:+923217031736" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaPhoneAlt /> <span>+92 321 7031736 / +92 3071112984</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-blue-600 transition">
            <FaMapMarkerAlt /> <span>18-Z-J Madina Town Susan Road, Faisalabad, Pakistan</span>
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 animate-fadeInUp">
          <a href="https://visibilitybots.com/solutions/" className="hover:text-blue-600 transition">Solutions</a>
          <a href="https://visibilitybots.com/services/" className="hover:text-blue-600 transition">Services</a>
          <a href="https://visibilitybots.com/products/" className="hover:text-blue-600 transition">Products</a>
        </div>

        {/* Company Links */}
        <div className="flex flex-col space-y-3 animate-fadeInUp">
          <a href="https://visibilitybots.com/about/" className="hover:text-blue-600 transition">About us</a>
          <a href="https://visibilitybots.com/career/" className="hover:text-blue-600 transition">Career</a>
          <a href="https://visibilitybots.com/contact/" className="hover:text-blue-600 transition">Contact us</a>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-3 animate-fadeInUp">
          <span>Follow us on:</span>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/visibilitybots/" className="hover:text-blue-700 transition"><FaLinkedin size={20} /></a>
            <a href="https://www.facebook.com/visibilitybots/?_rdr" className="hover:text-blue-600 transition"><FaFacebookF size={20} /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-8 text-center border-t-white border-t-2 bg-sky-500 text-white animate-fadeInUp">
        <p>
          Copyright &copy; {`${new Date().getFullYear()}`} Visibility Bots. All rights reserved |{" "}
          <em>
            Designed by{" "}
            <a href="https://fiverr.com/webscopic" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
              {new Date().getFullYear() !== 2025 ? "Zain Ali" : "Hassan"}
            </a>
          </em>
        </p>
      </div>
    </footer>
  );
};


export default Footer;

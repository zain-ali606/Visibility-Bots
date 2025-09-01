// src/components/ExpertiseSection.jsx
import React from "react";
import { FaServer, FaCloud, FaBolt } from "react-icons/fa";
import { TiTree } from "react-icons/ti";   // Typicons
import { MdOutlineBuild } from "react-icons/md"; // Material


const services = [
  {
    icon: <FaServer className="text-4xl text-green-600" />,
    title: "Embedded Design",
    link: "/embedded-system-design",
  },
  {
    icon: <FaCloud className="text-4xl text-blue-500" />,
    title: "Firmware Development",
    link: "/firmware-development",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500" />,
    title: "PCB Designs",
    link: "/pcb-design",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-purple-600"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        fill="currentColor"
      >
        <path d="M475.115 163.781L336 252.309v-68.28c0-18.916-20.931-30.399-36.885-20.248L160 252.309V56c0-13.255-10.745-24-24-24H24C10.745 32 0 42.745 0 56v400c0 13.255 10.745 24 24 24h464c13.255 0 24-10.745 24-24V184.029c0-18.917-20.931-30.399-36.885-20.248z"/>
      </svg>
    ),
    title: "Industrial Automation and PLCs",
    link: "/industrial-automation-and-plcs",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-16 bg-sky-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:gap-10 items-center">
          {/* Left Column */}
          <div className="md:w-1/2 space-y-6">
            <h6 className="text-white uppercase tracking-wider font-semibold animate-fadeInUp">
              Our Expertise
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold animate-fadeInUp">
              Services We Offer
            </h2>
            <p className="text-white animate-fadeInUp delay-100">
              At Visibility Bots, we deliver cutting-edge solutions in Internet
              of Things (IoT) and industrial automation, recognizing the
              critical importance of efficient services and robust communication
              infrastructure. Our commitment lies in developing innovative
              embedded designs and intelligent IoT-based solutions that position
              us at the forefront of technological advancement.
            </p>
            <a
              href="/services"
              className="inline-block bg-gray-700 text-white px-6 py-2 rounded-md hover:bg-gray-500 transition-all animate-fadeInUp delay-200"
            >
              Learn More
            </a>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 md:mt-0">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => (window.location.href = service.link)}
                className="flex items-center gap-4 p-4 border-l-2 border-green-600 rounded-md bg-white shadow-md hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>{service.icon}</div>
                <h4 className="font-semibold text-gray-800">{service.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

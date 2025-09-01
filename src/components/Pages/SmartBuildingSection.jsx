import React, { useEffect, useState } from "react";

export default function SmartBuildingSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const industries = [
    {
      id: "01",
      title: "Smart Factory",
      description:
        "Embrace the future of manufacturing with smart factories that prioritize automation, efficiency, and real-time data. Our solutions streamline processes, reduce downtime, and elevate productivity.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/pexels-kjbromme-16544056-scaled.jpg",
    },
    {
      id: "02",
      title: "Smart City",
      description:
        "Transforming urban landscapes into smart, connected cities. With intelligent infrastructure, IoT integration, and sustainable design, we’re creating spaces that improve life and safety.",
      img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-city-hp.png",
    },
    {
      id: "03",
      title: "Smart Agriculture",
      description:
        "Empowering farmers with intelligent technology for optimized crop management and resource efficiency. Bringing precision and sustainability to farming.",
      img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-agri-hp.png",
    },
    {
      id: "04",
      title: "Smart Building",
      description:
        "Redefining the way buildings operate with connected systems. We focus on energy efficiency, climate automation, and security for adaptive environments.",
      img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-building-hp.png",
    },
  ];

  return (
    <section className="px-6 py-12 md:px-16 bg-white">
      {/* Section Header */}
      <div
        className={`text-center mb-12 transform transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h6 className="text-sm text-gray-500 uppercase tracking-wide">
          Work Progress
        </h6>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          INDUSTRIES WE WORK IN
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Every business is unique, and so are our solutions. Here’s how we
          tailor our expertise to your needs.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid gap-16">
        {industries.map((industry, index) => (
          <div
            key={industry.id}
            className={`grid md:grid-cols-2 gap-8 items-center px-6 transform transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${200 + index * 200}ms` }}
          >
          <div className="absolute left-0 top-0 h-full w-[2px] bg-blue-600"></div>
            {/* Text */}
            <div>
              <h5 className="text-xl font-aptos font-semibold text-gray-800">
                <span className="text-blue-600 mr-2 font-bold">
                  {industry.id}.
                </span>
                {industry.title}
              </h5>
              <p className="mt-4 text-gray-600">{industry.description}</p>
            </div>
            {/* Image */}
           <div className="overflow-hidden rounded-2xl shadow-lg">
  <img
    src={industry.img}
    alt={industry.title}
     sizes="(max-width: 768px) 100vw, (max-width: 1536px) 80vw, 1200px"
     className="w-full aspect-[2560/1624] object-cover transition-transform duration-500 hover:scale-105"
  />
</div>
          </div>
        ))}
      </div>
       
    </section>
  );
}

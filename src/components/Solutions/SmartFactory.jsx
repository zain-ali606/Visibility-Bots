import React from "react";
import { useEffect,useRef, useState } from "react";




const features = [
    {
      title: "Scalable IoT Integration",
      description:
        "Easily integrate IoT devices and sensors into existing systems, with scalable solutions that grow with your needs.",
      delay: "delay-200",
    },
    {
      title: "Advanced Analytics and Reporting",
      description:
        "Leverage powerful analytics to gain insights into every part of your operation, enabling data-driven decision-making and continuous improvement.",
      delay: "delay-300",
    },
    {
      title: "Customizable and Modular",
      description:
        "Our Smart Factory Solutions are tailored to your specific industry requirements, from discrete manufacturing to process-based production, providing flexibility and modularity.",
      delay: "delay-400",
    },
  ];
  const factoryFeatures = [
    {
      title: "Real-Time Machine",
      description:
        "Access real-time data on equipment health, production metrics, and environmental conditions. Our solutions provide end-to-end visibility to detect anomalies and respond instantly.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/manufacturing-1.png",
      delay: "delay-200",
    },
    {
      title: "Assert Tracking",
      description:
        "Improve operational efficiency and reduce losses with our real-time Asset Tracking solution. Monitor the location, status, and movement of valuable equipment.",
      img: "https://visibilitybots.com/wp-content/uploads/2025/05/assert-tracking-300x300.png",
      delay: "delay-300",
    },
    {
      title: "Smart Energy Monitoring",
      description:
        "Optimize energy usage with smart monitoring systems, reducing waste, lowering costs, and supporting sustainable industrial operations.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/bolt-1.png",
      delay: "delay-400",
    },
    {
      title: "Inventory Monitoring",
      description:
        "Enhance inventory control with real-time monitoring, minimizing stockouts, reducing overstock, and improving supply chain efficiency.",
      img: "https://visibilitybots.com/wp-content/uploads/2025/05/inventory-monitoring-2-300x300.png",
      delay: "delay-500",
    },
      {
    title: "Scalable IoT Integration",
    description: "Easily integrate IoT devices and sensors into existing systems, with scalable solutions that grow with your needs.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/IoT-Solution-300x300.png",
    delay: "delay-200",
 },
    {
    title: "Advanced Analytics and Reporting",
    description: "Leverage powerful analytics to gain insights into every part of your operation, enabling data-driven decision-making and continuous improvement.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/Analytics-Solution-300x300.png",
    delay: "delay-300",
  },
  {
    title: "Customizable and Modular",
    description: "Our Smart Factory Solutions are tailored to your specific industry requirements, providing flexibility and modularity.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/Customizable-Solution-300x300.png",
    delay: "delay-400",
  },
  {
    title: "Environment Monitoring",
    description: "Maintain safe workspaces with environment monitoring, tracking temperature, humidity, and air quality in real time.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/Environment-Monitoring-Solution-300x300.png",
    delay: "delay-500",
  },
   {
    title: "Tank Level Monitoring",
    description: "Monitor liquid levels in real time with tank level monitoring, preventing overflows, reducing downtime, and optimizing resource management.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/tank-level-monitoring-300x300.png",
    delay: "delay-200",
  },
  {
    title: "Steam / Water / Gas Flow Monitoring",
    description: "Track steam, water, and gas flow with precision to improve process efficiency, detect leaks early, and reduce utility.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/water-meter.png",
    delay: "delay-300",
  },
  {
    title: "Production Tracking",
    description: "Gain real-time visibility into critical production processes, improving output, reducing downtime, and ensuring timely order fulfillment.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/production-300x300.png",
    delay: "delay-400",
  },
  {
    title: "Wireless Fire Detection & Emergency Alerts",
    description: "Ensure safety with a wireless fire detection and emergency alert system, fast response, and protection of assets.",
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/Wireless-Fire-Detection-Emergency-Alerts-300x300.png",
    delay: "delay-500",
  },
  ];
  



export default function SmartFactorySolutions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);
  
  const [isVisible2, setIsVisible2] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  
  const [imageLoaded, setImageLoaded] = useState(false);
   const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);


 // Intersection Observer: triggers animation when section enters viewport
const [isVisible3, setIsVisible3] = useState(false);
 const sectionRef2 = useRef(null);
   useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible3(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section className="relative bg-gray-600 py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl font-serif font-bold mt-20 text-white mb-6 transform transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Smart Factory Solutions
        </h1>

        {/* Description */}
        <p
          className={`text-2xl md:text-xl text-white leading-relaxed transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Visibility Bots’ Smart Factory Solutions bring Industry 4.0 to life
          with intelligent, connected systems that maximize productivity,
          efficiency, and safety across manufacturing operations. By integrating
          IoT, AI, and advanced data analytics, we empower factories to operate
          smarter, reduce downtime, and enhance overall equipment effectiveness
          (OEE).
        </p>
      </div>
    </section>
    <section className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`px-7 py-12 rounded-2xl  bg-slate/50 backdrop-blur-md border border-black/30 shadow-lg transition-all duration-1000 ${feature.delay} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-bold mb-3 font-serif">
              {feature.title}
            </h3>
            <p className="text-black leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
       <section className="py-12 bg-white text-center">
      <h2
        className={`text-3xl md:text-4xl font-serif font-bold text-black transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Transform Your Factory with Visibility Bots
      </h2>
    </section>

    
    <section className="py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {factoryFeatures.map((feature, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-black/5 shadow-lg text-center transition-all duration-1000 hover:border-t-black hover:-translate-y-2 hover:scale-105 ${feature.delay} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <img
                src={feature.img}
                alt={feature.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-3 font-times">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-black text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>

    
   <section className="py-16 bg-gray-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
          
          {/* Left Image Container - Matching Elementor fadeInUp animation */}
          <div className="flex justify-center md:justify-start">
            <div
              className={`transition-all duration-1000 ease-out transform ${
                isVisible2
                  ? "opacity-100 translate-y-0 rotate-0" 
                  : "opacity-0 translate-y-16 -rotate-3"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="relative group">
                {/* Enhanced image container with Elementor-like effects */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:rotate-1">
                  
                  {/* Loading skeleton */}
                  {!imageLoaded && (
                    <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 rounded-2xl animate-pulse"></div>
                  )}
                  
                  {/* Main image with srcset support */}
                  <img
                    ref={imageRef}
                    src="https://visibilitybots.com/wp-content/uploads/2025/05/manufacturing.png"
                    srcSet="https://visibilitybots.com/wp-content/uploads/2025/05/manufacturing-300x300.png 300w, https://visibilitybots.com/wp-content/uploads/2025/05/manufacturing-768x768.png 768w, https://visibilitybots.com/wp-content/uploads/2025/05/manufacturing.png 1024w"
                    sizes="(max-width: 768px) 300px, (max-width: 1024px) 768px, 1024px"
                    alt="Manufacturing Industry Solutions"
                    className={`w-full max-w-md mx-auto rounded-2xl transition-all duration-700 hover:scale-105 ${
                      imageLoaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Floating elements */}
                  <div className={`absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-ping transition-all duration-1000 ${
                    isVisible2 ? "opacity-75" : "opacity-0"
                  }`} style={{ animationDelay: "1s" }}></div>
                  
                  <div className={`absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse transition-all duration-1000 ${
                    isVisible2 ? "opacity-60" : "opacity-0"
                  }`} style={{ animationDelay: "1.5s" }}></div>
                </div>
              </div>
            </div>
          </div>

        {/* Right Content */}
        <div
          className={`transition-all duration-1000 ease-in-out delay-200 transform ${
            isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl md:font-serif  font-serif text-black font-bold mb-6">
            Industries Served
          </h2>
          <p className="text-black leading-relaxed">
            Visibility Bots’ Smart Factory Solutions serve a wide range of
            industries, including automotive, electronics, food and beverage,
            and heavy machinery. Whether you’re looking to modernize a single
            production line or transform an entire facility, we provide the
            tools and expertise for a seamless transition to a smart factory.
          </p>
        </div>
      </div>
    </section>
{/*Lead Your Industry into the Future*/}
    <section ref={sectionRef2} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div
          className={`transition-all duration-1000 ease-in-out transform ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl text-black md:text-4xl font-serif font-bold mb-6">
            Lead Your Industry into the Future
          </h2>
          <p className="text-black/100 leading-relaxed">
            Embrace the power of automation, data, and connectivity with
            Visibility Bots’ Smart Factory Solutions. Together, we’ll unlock new
            efficiencies, enhance productivity, and drive your factory forward
            in the era of digital transformation.
          </p>
        </div>

        {/* Right Image */}
        <div
          className={`transition-all duration-1000 ease-in-out delay-200 transform ${
            isVisible3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src="https://visibilitybots.com/wp-content/uploads/2025/05/manager.png"
            alt="Lead Industry"
            className="w-full max-w-md mx-auto md:mx-0"
          />
        </div>
      </div>
    </section>
   </>
  );
}



  


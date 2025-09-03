import React, { useState,useRef, useEffect } from 'react';

const features = [
  {
    id: 1,
    title: "Precision Crop Monitoring",
    description:
      "Monitor soil health, moisture levels, crop conditions, and environmental factors in real time to ensure optimal growth conditions and reduce waste."
  },
  {
    id: 2,
    title: "Irrigation Automation",
    description:
      "Utilize smart irrigation systems that adjust water levels based on real-time data, conserving water and improving crop yields while reducing operational costs."
  },
  {
    id: 3,
    title: "Weather and Climate Tracking",
    description:
      "Leverage advanced weather forecasting and climate analysis to predict conditions that impact crop health, helping you plan effectively and protect against extreme weather."
  },
  {
    id: 4,
    title: "Livestock Monitoring",
    description:
      "Track livestock health and behaviour using IoT-enabled sensors, ensuring animal welfare and early detection of health issues to minimize losses."
  },
  {
    id: 5,
    title: "Supply Chain Optimization",
    description:
      "Monitor and manage post-harvest logistics, ensuring that produce moves efficiently from field to market, reducing spoilage and improving profitability."
  }
];

const AgricultureFeatures = [
  {
    id: 1,
    title: "Data-Driven Decision Making",
    description:
      "Our solutions provide actionable insights, helping you make informed decisions that maximize yield and minimize resource use."
  },
  {
    id: 2,
    title: "Remote Access and Control",
    description:
      "Monitor and manage your agricultural operations from anywhere with our intuitive app and web platform, providing flexibility and control at your fingertips."
  },
  {
    id: 3,
    title: "Sustainable Resource Management",
    description:
      "Conserve water, energy, and other critical resources with efficient, data-driven practices that support long-term environmental sustainability."
  },
  {
    id: 4,
    title: "Customizable Solutions",
    description:
      "Whether you manage a large-scale farm or a small agricultural operation, our solutions are tailored to fit your specific needs, from crop production to livestock management."
  }
];

const SmartAgriculture = () => {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => setVisible(true), 200);
      return () => clearTimeout(timer);
    }, []);
    
    

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    features.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 200);
    });
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
          Smart Agriculture Solutions
        </h1>

        {/* Description */}
        <p
          className={`text-2xl md:text-xl text-white leading-relaxed transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Visibility Bots’ Smart Agriculture Solutions empower farmers and agribusinesses with the latest IoT technology to boost productivity, improve crop quality, and optimize resource usage. Our solutions provide real-time insights, automation, and control across agricultural operations, helping you make smarter, data-driven decisions for a more sustainable and profitable future.
        </p>
      </div>
    </section>

   
    <section className="py-16 font-serif">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12  px-6">
        
        {/* Left Column */}
        <div>
          <h2 className="text-4xl text-black font-serif font-bold mb-4">
            Transforming Agriculture with Visibility Bots
          </h2>
          <p className="text-black/95 mb-6">
            Revolutionize your farming operations with advanced automation and
            PLC solutions from Visibility Bots. From precision irrigation systems 
            to automated greenhouse controls, our technology empowers sustainable 
            agriculture with enhanced efficiency and productivity. Harness the power 
            of smart automation to optimize resources, increase yields, and reduce costs. 
            Partner with us to cultivate a smarter, more sustainable future in agriculture.
          </p>
          <a
            href="#"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            See More
          </a>
        </div>

        {/* Right Column - Features List */}
        <div className="max-w-2xl mx-auto p-8  min-h-screen">
          <div className="relative">
            {/* Main vertical line */}
            <div
              aria-hidden="true"
              className="absolute left-6 top-0 w-0.5 h-full bg-gradient-to-b from-blue-400 to-blue-500 opacity-30"
            ></div>
            
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li 
                  key={feature.id}
                  className={`relative transition-all duration-700 ease-out transform ${
                    visibleItems.includes(index) 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Dot on line */}
                  <div
                    aria-hidden="true"
                    className="absolute left-4 top-8 w-4 h-4 rounded-full bg-black shadow-lg z-10"
                  ></div>

                  {/* Feature card */}
                  <div
                    className={`ml-20 rounded-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group ${
                      visibleItems.includes(index) ? 'hover:-translate-y-1' : ''
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-black/95 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Accent bar */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 left-0 w-1 h-full bg-white rounded-l-xl opacity-0"
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

     <section className=" py-8 bg-white text-center">
      <h2
        className={`text-3xl md:text-4xl font-black font-serif  text-black transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Key Features of Our Smart Agriculture Solutions
      </h2>
    </section>
      <section className="py-16 font-serif  bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {AgricultureFeatures.map((feature, i) => (
          <div
            key={i}
            className={`p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-black/5 shadow-lg text-center transition-all duration-1000 hover:border-t-black hover:-translate-y-2 hover:scale-105 ${feature.delay} ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            
            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 font-times">
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

    <section className="py-16" ref={sectionRef}>
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
            Applications Across Agriculture
          </h2>
          <p className="text-black leading-relaxed">
             Visibility Bots’ Smart Agriculture Solutions are designed for a range
            of applications, from field crop farming to greenhouse management
            and livestock monitoring, delivering tailored technology to every
            corner of agriculture.
          </p>
        </div>
      </div>
    </section>

   <section className="py-16 font-serif text-black ">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:gap-12">
        
        {/* Left Column - Heading + Text */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp">
            Cultivating a Sustainable Future
          </h2>
          <p className="">
            With Visibility Bots’ Smart Agriculture Solutions, you can increase yield, reduce costs, and adopt sustainable practices that benefit your business and the environment. Together, let’s grow the farms of tomorrow—efficient, intelligent, and resilient.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="md:w-1/2">
          <img
            src="https://visibilitybots.com/wp-content/uploads/2025/05/Cultivating-a-Sustainable-Future-1-1024x683.png"
            alt="Cultivating a Sustainable Future"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default SmartAgriculture;

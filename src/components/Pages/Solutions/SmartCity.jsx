import React, { useState,Ref, useEffect } from 'react';

const cityFeatures = [
    {
      title: "Smart Traffic Management",
      description:
        "Optimize traffic flow and reduce congestion with intelligent traffic management systems, including smart signals, adaptive routing, and real-time analytics on vehicle and pedestrian movement.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/12/traffic.png",
    },
    {
      title: "Real-Time Environment Monitoring",
      description:
        "Track air quality, noise levels, and other environmental factors in real time to promote healthier urban living and respond quickly to pollution events.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/manufacturing-1.png",
    },
    {
      title: "Smart Lighting and Energy Management",
      description:
        "Implement energy-efficient, adaptive lighting systems that respond to real-time conditions, improving visibility, safety, and energy savings across city streets and public spaces.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/bolt-1.png",
    },
  ];

  const UIFeatures = [
    {
      title: "End-to-End Connectivity",
      description:
        "Our solutions integrate seamlessly with existing city infrastructure using scalable, resilient, secure, smart IoT networks for reliable connectivity across all devices and systems.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/12/traffic.png",
      delay: "delay-[200ms]",
    },
    {
      title: "Citizen Engagement and Transparency",
      description:
        "Our platforms allow for public data sharing and citizen engagement, increasing transparency and enabling community involvement in city improvement initiatives.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/manufacturing-1.png",
      delay: "delay-[360ms]",
    },
    {
      title: "Data Analytics and Predictive Insights",
      description:
        "Gain actionable insights through advanced data analytics, helping city administrators make proactive, data-driven decisions to improve urban living.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/bolt-1.png",
      delay: "delay-[280ms]",
    },
    {
      title: "Sustainability and Resource Optimization",
      description:
        "Drive sustainable urban growth with solutions that conserve energy, reduce emissions, and optimize city resources for long-term ecological and economic benefits.",
      img: "https://visibilitybots.com/wp-content/uploads/2024/11/eco.png",
      delay: "delay-[360ms]",
    },
  ];


const Smartcity= ()=>{

    const [visible, setVisible] = useState(false);
      
        useEffect(() => {
          const timer = setTimeout(() => setVisible(true), 200);
          return () => clearTimeout(timer);
        }, []);

    return(
        <>
    <section className="relative bg-gray-500 py-20 px-6 md:px-12 lg:px-20 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h1
          className={`text-5xl md:text-6xl font-serif font-bold mt-20 text-white mb-6 transform transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Smart City Solutions
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

     <section className=" py-8 bg-white text-center">
      <h2
        className={`text-3xl md:text-4xl font-black font-serif  text-black transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Building Smart, Connected Cities with Visibility Bots
      </h2>
    </section>

       
    <section className="py-16 font-serif bg-white text-black">
      <div className="max-w-7xl   mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {cityFeatures.map((feature, i) => (
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

      <section className="py-16 font-serif bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-wide transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Innovative <span className="text-blue-600">UI/UX</span> Solutions for You
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {UIFeatures.map((feature, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-black/5 shadow-lg text-center transition-all duration-1000 hover:border-t-black hover:-translate-y-2 hover:scale-105 ${feature.delay} ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"  
              } ${(i === 3)? "col-span-4 col-end-2 " : "" }`}
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
      </div>
    </section>


    </>);
};

export default Smartcity;
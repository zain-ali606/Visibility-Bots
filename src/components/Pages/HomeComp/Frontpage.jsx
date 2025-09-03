import React, { useEffect, useState } from "react";


const Frontpage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const imgData = [
    {
      imgsrc: "/img/2024/11/IT-Business-Hero-Image.webp",
      alt: "IoT Technology Network",
      width: "1024",
      height: "1024",
      loading: "eager",
      decoding: "async",
    },
    {
      imgsrc: "/img/2024/11/IT-Business-Hero-Image-2.webp",
      alt: "Smart Devices",
      width: "420",
      height: "200",
      loading: "lazy",
      decoding: "async",
    },
    {
      imgsrc: "/img/2024/11/IT-Business-Hero-Image-3.webp",
      alt: "Connected Systems",
      width: "446",
      height: "148",
      loading: "lazy",
      decoding: "async",
    },
    {
      imgsrc: "/img/2024/11/IT-Business-Hero-Image-4.webp",
      alt: "Digital Innovation",
      width: "420",
      height: "200",
      loading: "lazy",
      decoding: "async",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto space-x-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Icon Card */}
            <div className="flex items-center justify-center">
              <div
                className={`flex items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 
                  border border-white/20 shadow-2xl max-w-md w-full transform transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }
                  hover:scale-105 hover:bg-white/15 hover:shadow-xl hover:border-white/30`}
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform duration-300">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-orange-500"
                      >
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-xl font-bold mb-2 leading-tight">
                    Empowering the Future
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Innovative solutions for modern business challenges with
                    cutting-edge technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Text and Buttons */}
            <div className="flex items-center justify-center mt-8">
              <div
                className={`text-center text-white transform transition-all duration-700 ease-out
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1
                  className="text-5xl lg:text-6xl font-serif text-left font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent"
                  style={{ fontFamily: "Times New Roman, serif" }}
                >
                  Enabling IOT based digital transformation
                </h1>
                <p className="text-lg text-white/90 mb-8 max-w-6xl text-left mx-auto leading-relaxed">
                  Partner with us to harness the full potential of IoT
                  technology, where innovation meets reliability to drive your
                  vision forward in a seamlessly connected world.
                </p>

                {/* Elementor-style square buttons */}
                <div className="flex gap-6 justify-center mt-6">
                  <a
                    href="#contact"
                    className="bg-white/20 text-white text-sm font-medium uppercase px-6 py-3 border border-white/30 hover:border-white/50 hover:bg-white/30 transition-all duration-300 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#"
                    className="bg-white/20 text-white text-sm font-medium uppercase px-6 py-3 border border-white/30 hover:border-white/50 hover:bg-white/30 transition-all duration-300 rounded-md shadow-md hover:shadow-lg hover:-translate-y-1"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full relative">
            {/* Main Image */}
            <div
              className={`transition-all duration-1000 ease-in-out 
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: "100ms" }}
            >
              <img
                src={imgData[0].imgsrc}
                alt={imgData[0].alt}
                width={imgData[0].width}
                height={imgData[0].height}
                loading={imgData[0].loading}
                decoding={imgData[0].decoding}
                className="w-full max-w-[512px] mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Floating Images */}
            {imgData.slice(1).map((img, index) => (
              <div
                key={index}
                className={`
                  absolute transition-all duration-700 ease-in-out
                  ${isVisible ? "opacity-80 translate-y-0" : "opacity-0 translate-y-8"}
                  hover:opacity-100 hover:scale-110 hover:z-10
                `}
                style={{
                  top: `${20 + (index * 120)}px`,
                  left: index % 2 === 0 ? "-60px" : "auto",
                  right: index % 2 === 1 ? "-60px" : "auto",
                  transitionDelay: `${300 + (index * 200)}ms`,
                  zIndex: 10 - index,
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20 shadow-xl">
                  <img
                    src={img.imgsrc}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading={img.loading}
                    decoding={img.decoding}
                    className="rounded-lg w-32 h-16 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
 



const Lightbulb = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
  </svg>
);

const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" strokeWidth="2"/>
  </svg>
);

const Building2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
  </svg>
);

const Paintbrush = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2"/>
  </svg>
);

const Code2 = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="16,18 22,12 16,6" strokeWidth="2"/>
    <polyline points="8,6 2,12 8,18" strokeWidth="2"/>
  </svg>
);

const Bug = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect width="8" height="14" x="8" y="6" rx="4" strokeWidth="2"/>
    <path d="m19 7-3 2" strokeWidth="2"/>
    <path d="m5 7 3 2" strokeWidth="2"/>
    <path d="m19 19-3-2" strokeWidth="2"/>
    <path d="m5 19 3-2" strokeWidth="2"/>
    <path d="M20 13h-4" strokeWidth="2"/>
    <path d="M4 13h4" strokeWidth="2"/>
    <path d="m10 4 1-2" strokeWidth="2"/>
    <path d="m14 4-1-2" strokeWidth="2"/>
  </svg>
);

const Rocket = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
  </svg>
);

const HelpingHand = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);

const steps = [
  { title: "Ideation", desc: "Generating fresh ideas tailored to your needs.", icon: Lightbulb },
  { title: "Strategy", desc: "Planning an effective approach to achieve goals.", icon: Target },
  { title: "Architecture", desc: "Structuring the project's foundation and flow.", icon: Building2 },
  { title: "Design", desc: "Crafting a visually appealing and functional layout.", icon: Paintbrush },
  { title: "Development", desc: "Building and coding the project components.", icon: Code2 },
  { title: "Testing", desc: "Ensuring everything works smoothly and reliably.", icon: Bug },
  { title: "Deploy", desc: "Launching the finished product to the world.", icon: Rocket },
  { title: "Support", desc: "Providing ongoing support and improvements.", icon: HelpingHand },
];



function ProcessCircle() {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const radius = 180;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActive((prev) => (prev + 1) % steps.length);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className=" p-16 bg-gray-50">
    <div className="min-h-auto shadow-xl/30 mx-auto bg-gray-50 rounded-xl  flex flex-col items-center justify-center p-8 ">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">How We Do Things</h2>

      {/* Circle container */}
      <div 
        className="relative w-[500px] h-[500px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {steps.map((step, i) => {
          const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const Icon = step.icon;

          return (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`absolute flex items-center justify-center w-16 h-16 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110
              ${active === i ? "bg-blue-600 text-white scale-110" : "bg-white text-gray-700 hover:bg-blue-50"}`}
              style={{
                top: `calc(50% + ${y}px - 2rem)`,
                left: `calc(50% + ${x}px - 2rem)`,
              }}
            >
              <Icon className="w-7 h-7" />
            </button>
          );
        })}

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Center content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-[240px] bg-white rounded-2xl p-6 shadow-xl border border-gray-200 transition-all duration-300">
          <div className="mb-4 flex justify-center">
            {React.createElement(steps[active].icon, {
              className: "w-12 h-12 text-blue-600"
            })}
          </div>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{steps[active].title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{steps[active].desc}</p>
          <div className="mt-4 text-xs text-gray-400">
            Step {active + 1} of {steps.length}
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="flex gap-2 mt-8">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              active === i ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}


//Who we AboutSection
const AboutSection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 py-12 bg-white">
      {/* Left Column - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://visibilitybots.com/wp-content/uploads/2025/05/homepage3.png"
          alt="About Us Illustration"
          className="w-full max-w-md md:max-w-full animate-fade-in-up delay-100"
          loading="lazy"
        />
      </div>

      {/* Right Column - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h6 className="text-sm font-semibold text-gray-500 uppercase animate-fade-in-up delay-200">
          About us
        </h6>
        <h2 className="text-3xl text-black md:text-5xl font-bold tracking-tight animate-fade-in-up delay-300">
          WHO WE ARE
        </h2>
        <p className="text-gray-700 animate-fade-in-up delay-400">
          Visibility Bots specialize in delivering innovative IoT solutions that
          integrate cutting-edge hardware and software to empower businesses.
          Our skilled team is dedicated to harnessing advanced technologies like
          the Internet of Things, Embedded Development, Cloud Computing, and
          Wireless Connectivity to drive your success, ensuring improved
          efficiency and real-time monitoring of processes.
        </p>
        <p className="text-gray-700 animate-fade-in-up delay-500">
          At Visibility Bots, we are committed to quality and continuous
          innovation, developing tailored solutions that reduce costs and
          enhance operational performance. Join us in transforming your business
          and achieving new heights with our state-of-the-art solutions.
        </p>
      </div>
    </section>
  );
};
const MissionSection = () => {
  return (
    <section className="px-6 md:px-14 py-12  bg-white">
    <div className="rounded-md bg-sky-500 px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto text-center  space-y-6">
        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
          Our Mission
        </h2>

        {/* Mission Statement */}
        <p className="text-white text-base md:text-lg animate-fade-in-up delay-500">
          The company’s mission is to use creativity, knowledge, and skills to
          bring IoT and embedded-based solutions to society. Our goal is to be a
          leading company providing state-of-the-art digital high-tech solutions
          using the latest technological trends and innovations. We are
          committed to transforming industries through the power of the Internet
          of Things, enabling our clients to achieve their smarter, innovative
          future today.
        </p>
      </div>
      </div>
    </section>
  );
};

export { Frontpage, ProcessCircle, AboutSection, MissionSection};
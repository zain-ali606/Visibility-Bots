import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Bilal R.",
    role: "Product Development Manager",
    image: "https://visibilitybots.com/wp-content/uploads/2024/11/pexels-photo-7179713-e1731581932846.jpeg",
    text: "Amazing service! The team understood our needs perfectly and delivered beyond our expectations. Highly recommended!",
    rating: 5
  },
  {
    name: "Ayesha N.",
    role: "Innovation Specialist",
    image: "https://visibilitybots.com/wp-content/uploads/2024/11/pexels-photo-8303349-e1731582258174.jpeg",
    text: "From start to finish, their dedication was outstanding. The results have added incredible value to our business!",
    rating: 5
  },
  {
    name: "Hamza K.",
    role: "Operations Engineer",
    image: "https://visibilitybots.com/wp-content/uploads/2024/11/pexels-photo-938639.webp",
    text: "Efficient, professional, and easy to work with. They turned our vision into reality flawlessly. Truly impressive work!",
    rating: 5
  },
  {
    name: "Saad M.",
    role: "Technical Project Lead",
    image: "https://visibilitybots.com/wp-content/uploads/2024/11/Modern-Business-Testimonial-Image-3.webp",
    text: "Their expertise and attention to detail made all the difference. Our project wouldn't have been the same without them!",
    rating: 5
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play with hover pause
  useEffect(() => {
    if (!isAutoPlaying || isHovering) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        const newIndex = prev >= maxIndex ? 0 : prev + 1;
        setAnimationKey(k => k + 1);
        return newIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView, isAutoPlaying, isHovering]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setAnimationKey(k => k + 1);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    setAnimationKey(k => k + 1);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setAnimationKey(k => k + 1);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-indigo-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h6 className="text-indigo-600 font-semibold mb-3 text-sm tracking-wider uppercase relative">
              <span className="relative z-10">Testimonials</span>
              <div className="absolute inset-0 bg-indigo-100 rounded-full blur-sm opacity-50 animate-pulse"></div>
            </h6>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
            Client Success Stories: What Our Partners Say
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from our clients who've experienced the impact of our solutions firsthand. Their success stories speak to our commitment to excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group hover:bg-white hover:scale-110 border border-white/50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 group hover:bg-white hover:scale-110 border border-white/50"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-all duration-700 ease-out gap-8"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(testimonials.length / itemsPerView) * 100}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={`${index}-${animationKey}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-3 hover:bg-white group border border-white/50 overflow-hidden">
                    {/* Card Background Animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Floating Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                      <Quote className="w-8 h-8 text-indigo-600 transform rotate-12" />
                    </div>

                    {/* Profile Image with Advanced Effects */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-28 h-28 rounded-full object-cover ring-4 ring-white/80 group-hover:ring-indigo-200 transition-all duration-500 group-hover:scale-110 relative z-10 shadow-lg"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=6366f1&color=fff&size=112`;
                          }}
                        />
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-indigo-400/50 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '8s'}}></div>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex mb-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-yellow-400 fill-current transform group-hover:scale-110 transition-transform duration-300" 
                          style={{transitionDelay: `${i * 100}ms`}}
                        />
                      ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors duration-300">
                        {testimonial.name}
                      </h3>
                      <p className="text-indigo-600 mb-6 font-semibold text-sm tracking-wide uppercase">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg group-hover:text-gray-800 transition-colors duration-300 relative">
                        <span className="relative z-10">{testimonial.text}</span>
                      </p>
                    </div>

                    {/* Animated bottom accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full scale-110'
                    : 'w-3 h-3 bg-gray-300 hover:bg-indigo-400 rounded-full hover:scale-125'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-md opacity-60 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>

          {/* Animated Progress Bar */}
          <div className="relative w-full bg-gray-200/60 rounded-full h-2 mt-8 overflow-hidden backdrop-blur-sm">
            <div 
              className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-700 ease-out relative"
              style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full"></div>
              <div className="absolute right-0 top-0 w-4 h-full bg-white/50 rounded-full blur-sm animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Auto-play Controls */}
        <div className="text-center mt-10">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group border border-white/50 hover:border-indigo-200"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
              isAutoPlaying 
                ? 'bg-gradient-to-r from-green-400 to-green-500 shadow-lg shadow-green-500/30 animate-pulse' 
                : 'bg-gradient-to-r from-gray-400 to-gray-500'
            }`} />
            <span className="text-gray-700 font-medium group-hover:text-indigo-700 transition-colors duration-300">
              {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to toggle
            </span>
            <div className="w-2 h-2 rounded-full bg-indigo-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Floating Elements Animation */}
        <div className="absolute top-10 left-10 opacity-20">
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        </div>
        <div className="absolute top-32 right-20 opacity-20">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="absolute bottom-20 left-32 opacity-20">
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .card-enter {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
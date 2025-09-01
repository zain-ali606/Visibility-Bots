// src/components/IndustriesSection.jsx
import { motion } from "framer-motion";
import { Cog, Building2, TreePine, City } from "lucide-react";

const industries = [
  {
    id: "01",
    title: "Smart Factory",
    desc: "Embrace the future of manufacturing with smart factories that prioritize automation, efficiency, and real-time data. Our solutions streamline processes, reduce downtime, and elevate productivity.",
    icon: <Cog className="w-10 h-10 text-indigo-500" />,
    img: "https://visibilitybots.com/wp-content/uploads/2024/11/pexels-kjbromme-16544056-scaled.jpg",
  },
  {
    id: "02",
    title: "Smart City",
    desc: "Transforming urban landscapes into smart, connected cities. With intelligent infrastructure, IoT integration, and sustainable design, we're creating safer, greener, and more efficient spaces.",
    icon: <City className="w-10 h-10 text-pink-500" />,
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-city-hp.png",
  },
  {
    id: "03",
    title: "Smart Agriculture",
    desc: "Empowering farmers with intelligent technology for optimized crop management and resource efficiency. Our smart agriculture solutions enhance productivity and sustainability.",
    icon: <TreePine className="w-10 h-10 text-green-500" />,
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-agri-hp.png",
  },
  {
    id: "04",
    title: "Smart Building",
    desc: "Redefining building operations with advanced, connected systems. From energy efficiency to security, our solutions create environments that adapt to occupant needs.",
    icon: <Building2 className="w-10 h-10 text-blue-500" />,
    img: "https://visibilitybots.com/wp-content/uploads/2025/05/smart-building-hp.png",
  },
];

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    rotateY: -10,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for smoothness
    },
  },
};

const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180,
    opacity: 0
  },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: 0.3,
    },
  },
  hover: {
    rotate: 360,
    scale: 1.2,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const imageVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    filter: "blur(10px)"
  },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.08,
    y: -10,
    filter: "brightness(1.1) contrast(1.1)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const textVariants = {
  hidden: { 
    opacity: 0,
    x: -50,
    filter: "blur(5px)"
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: 0.4,
    },
  },
};

const numberVariants = {
  hidden: { 
    opacity: 0,
    scale: 0,
    rotate: -90
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      delay: 0.1,
    },
  },
};

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Enhanced Heading with Smooth Animations */}
      <div className="text-center max-w-4xl mx-auto mb-20 px-6">
        <motion.h6
          className="text-indigo-600 font-semibold uppercase tracking-wider text-sm"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ 
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Work Progress
        </motion.h6>
        
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2 
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          INDUSTRIES WE WORK IN
        </motion.h2>
        
        <motion.p
          className="text-gray-600 mt-6 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4 
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Every business is unique, and so are our solutions. Here's how we
          tailor our expertise to your needs.
        </motion.p>
      </div>

      {/* Enhanced Industry Cards Container */}
      <motion.div 
        className="max-w-7xl mx-auto space-y-24 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {industries.map((item, idx) => (
          <motion.div
            key={item.id}
            className={`group flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
            variants={cardVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Enhanced Text Content */}
            <motion.div 
              className="flex-1 space-y-6"
              variants={textVariants}
            >
              {/* Icon and Title Row */}
              <div className="flex items-center gap-6">
                {/* Enhanced Number Badge */}
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-bold text-xl shadow-lg"
                  variants={numberVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                    transition: { duration: 0.3 }
                  }}
                >
                  {item.id}
                </motion.div>
                
                {/* Animated Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="p-3 rounded-lg bg-white shadow-md"
                >
                  {item.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h3
                  className="text-2xl lg:text-3xl font-bold text-gray-900"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.6
                  }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Enhanced Description */}
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.8
                }}
                viewport={{ once: true }}
              >
                {item.desc}
              </motion.p>

              {/* Enhanced Learn More Button */}
              <motion.button
                className="mt-6 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
                  background: "linear-gradient(to right, #4338ca, #7c3aed)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 1
                }}
                viewport={{ once: true }}
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Enhanced Image Container */}
            <motion.div 
              className="flex-1 relative group"
              variants={imageVariants}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Enhanced Image */}
              <motion.img
                src={item.img}
                alt={item.title}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                variants={imageVariants}
                whileHover="hover"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-20 group-hover:opacity-40"
                animate={{
                  y: [0, 15, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        ))}
    

      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-pink-100 to-blue-100 rounded-full blur-3xl opacity-30"
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </section>
  );
}
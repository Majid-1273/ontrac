import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Settings, Activity, BarChart3, Shield, HardDrive, Download } from "lucide-react";

const Process = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const processItems = [
    {
      title: "IT ADMINISTRATION",
      icon: Settings,
      description: [
        "Our advanced ticketing system combined with our documentation management platform ensures all aspects of it runs smoothly and clients always have access to current information.",
        "Our custom processes are built for small business and ensure a smooth setup and operation of all services and support.",
        "Organization advanced ticketing and documentation system to keep your it organized."
      ]
    },
    {
      title: "SYSTEMS MONITORING",
      icon: Activity,
      description: [
        "By monitoring over 5,000 aspects of your systems 24/7, we can detect and remove problems before they impact your it infrastructure",
        "Most issues can be resolved remotely with no disruption to your business.",
        "At the same time, your exposure to security risks is dramatically lessened, and frustration from unstable it resources almost vanishes."
      ]
    },
    {
      title: "REPORTING",
      icon: BarChart3,
      description: [
        "Comprehensive reporting provides valuable insight into the health of your infrastructure. Providing upgrade forecasting, warranty status, end of year depreciation.",
        "Simplifies detailed inventory management and upgrade forecasting and planning."
      ]
    },
    {
      title: "MANAGED ANTI VIRUS",
      icon: Shield,
      description: [
        "When a threat is detected we begin remediation immediately. Eliminating worry about renewal dates or additional bills and vendors to manage.",
        "One more way to streamline it function and increase employee productivity."
      ]
    },
    {
      title: "MANAGED BACKUPS",
      icon: HardDrive,
      description: [
        "Our monitored backup solutions can protect your data from user error, theft, flood, and fire.",
        "On-site and off-site backups are monitored 24/7 to ensure they're both working properly."
      ]
    },
    {
      title: "PATCH MANAGEMENT",
      icon: Download,
      description: [
        "Patching software fixes security vulnerabilities and improves it performance. We'll regularly install updates to keep your system current, safe and running efficiently.",
        "We provide patch management for all major os's and applications including windows, osx, adobe, java, chrome, firefox, and many others."
      ]
    }
  ];

  const renderProcessCard = (item, index) => {
    const isHovered = hoveredItem === index;
    const Icon = item.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        onHoverStart={() => setHoveredItem(index)}
        onHoverEnd={() => setHoveredItem(null)}
        className="w-full md:w-[45%] lg:w-[30%] flex"
        key={index}
      >
        <div className="bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl transform hover:scale-102 transition-all duration-500 hover:shadow-3xl w-full">
          <motion.div
            animate={{
              scale: isHovered ? 1.02 : 1,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className=" h-full"
          >
            <div className="bg-gradient-to-br from-[#2EC4D2] via-blue-500 to-blue-600 p-8 rounded-xl shadow-lg transform hover:translate-y-[-5px] transition-all duration-300 h-full flex flex-col">
              <div className="flex justify-center mb-6">
                <Icon size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-tight text-center">
                {item.title}
              </h3>
              <div className="text-white/95 leading-relaxed space-y-4 flex-grow">
                {item.description.map((para, idx) => (
                  <p key={idx} className="text-base font-light">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 min-h-screen py-4 px-6">
      <div className="container mx-auto">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#2EC4D2] via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text tracking-tight">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience our comprehensive IT management approach designed to keep your business running smoothly
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {processItems.map((item, index) => renderProcessCard(item, index))}
        </div>
      </div>
    </div>
  );
};

export default Process;
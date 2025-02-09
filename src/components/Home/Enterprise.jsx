import React from 'react';

const Enterprise = () => {
  return (
    <div className="w-full bg-gray-300 p-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-blue-950 mb-4">
            ENTERPRISE
          </h2>
          <div className="w-48 h-1 bg-blue-950 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Empty space container */}
          <div className="h-full w-full" />
          
          {/* Content container */}
          <div className="flex flex-col justify-center">
            <div className="bg-[#1e3a8a] p-12">
              <p className="text-lg leading-relaxed text-white mb-8">
                At OnTrac, we understand that addressing technology issues after they arise can be costlier and more disruptive. That's why our proactive IT management is strategically crafted to save you money and preemptively eliminate potential technology challenges for your business in New York City.
              </p>
              
              <p className="text-lg leading-relaxed text-white mb-8">
                OnTrac offers a comprehensive suite of monitoring and maintenance services. We collaborate with you to design a customized program that aligns with your specific business needs, ensuring a seamless and efficient IT environment.
              </p>
              
              <p className="text-lg leading-relaxed text-white">
                Choose OnTrac for a proactive IT solution that not only saves you money but also provides peace of mind, allowing you to focus on what matters most – the success of your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
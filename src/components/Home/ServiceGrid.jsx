import React from "react";
import img from "../../assets/pprocess.jpg";
import { 
  ShieldCheck, Server, MonitorSmartphone, Camera, 
  Globe, Lock, Database, Code, Cpu, CloudLightning, LifeBuoy, Wifi
} from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const ServiceGrid = () => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      services: [
        { icon: ShieldCheck, text: "Cyber Security" },
        { icon: Server, text: "Cloud Solutions" },
        { icon: MonitorSmartphone, text: "IT Support" },
        { icon: Camera, text: "Surveillance" },
        { icon: Globe, text: "Networking" },
        { icon: Lock, text: "Data Privacy" },
        { icon: Database, text: "Database Management" },
        { icon: Code, text: "Software Development" },
        { icon: Cpu, text: "AI Solutions" },
        { icon: CloudLightning, text: "Cloud Security" },
        { icon: LifeBuoy, text: "IT Consultancy" },
        { icon: Wifi, text: "Wireless Solutions" },
      ],
    },
    Arabic: {
      services: [
        { icon: ShieldCheck, text: "الأمن السيبراني" },
        { icon: Server, text: "الحلول السحابية" },
        { icon: MonitorSmartphone, text: "دعم تكنولوجيا المعلومات" },
        { icon: Camera, text: "المراقبة" },
        { icon: Globe, text: "الشبكات" },
        { icon: Lock, text: "خصوصية البيانات" },
        { icon: Database, text: "إدارة قواعد البيانات" },
        { icon: Code, text: "تطوير البرمجيات" },
        { icon: Cpu, text: "حلول الذكاء الاصطناعي" },
        { icon: CloudLightning, text: "أمان السحابة" },
        { icon: LifeBuoy, text: "استشارات تكنولوجيا المعلومات" },
        { icon: Wifi, text: "حلول الشبكات اللاسلكية" },
      ],
    },
  };

  const t = translations[selectedLanguage];

  return (
<div className="w-full bg-gray-300 px-4 md:px-8 lg:px-16 py-16 flex flex-col items-center justify-center">
  {/* Centered Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-4">OUR SERVICES</h2>
    <div className="w-24 md:w-48 h-1 bg-blue-950 mx-auto"></div>
  </div>
  
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center w-full">
    {/* Service Boxes */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
      {t.services.map(({ icon: Icon, text }, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 p-4 md:p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition text-center"
        >
          <Icon className="w-10 md:w-12 h-10 md:h-12 text-blue-500" />
          <span className="text-gray-800 font-medium text-sm md:text-lg">{text}</span>
        </div>
      ))}
    </div>

    {/* Image Placeholder */}
    <div className="w-full h-full rounded-lg flex items-center justify-center">
      <img src={img} alt="Process" className="w-full h-auto md:h-full object-cover rounded-lg" />
    </div>
  </div>
</div>

  );
};

export default ServiceGrid;

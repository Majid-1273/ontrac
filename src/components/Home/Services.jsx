import React from "react";
import { useLanguage } from "../../LanguageContext";
import { 
  FaLock, FaCloud, FaPhone, FaDatabase, FaUserTie, 
  FaProjectDiagram, FaShieldAlt, FaServer, FaChartLine 
} from "react-icons/fa";

const Services = () => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      title: "OUR SERVICES",
      services: [
        { icon: <FaLock size={40} />, title: "Security", description: "Enhancing your security posture, our services encompass DNS filtering and comprehensive end-user training, delivering a proactive approach to safeguard your devices and networks." },
        { icon: <FaCloud size={40} />, title: "Cloud Solutions", description: "Gain complete implementation, seamless migration, and ongoing support for your cloud-based tools. This includes comprehensive services for VoIP phone systems, Azure, AWS, and Office 365, ensuring optimal performance and reliability." },
        { icon: <FaPhone size={40} />, title: "Help Desk", description: "Access round-the-clock support through our help desk options, offering both on-site and remote assistance. Benefit from reliable support via phone and email, ensuring prompt and effective resolution of your IT issues." },
        { icon: <FaDatabase size={40} />, title: "Backups", description: "Ensure the safety of your critical business data with our backup solutions. We provide automated, secure, and scalable data backup services to prevent data loss and ensure business continuity." },
        { icon: <FaUserTie size={40} />, title: "Virtual CIO", description: "Elevate your business with expert guidance from our Virtual CIO services. We help streamline your IT strategy, optimize operations, and implement technology solutions tailored to your business goals." },
        { icon: <FaProjectDiagram size={40} />, title: "Projects", description: "Streamline your operations with our project management expertise. From planning to execution, we ensure smooth project workflows that align with your objectives and drive success." },
        { icon: <FaShieldAlt size={40} />, title: "Compliance & Risk Management", description: "Ensure regulatory compliance and minimize risks with our tailored compliance and risk management services, helping your business adhere to industry standards and avoid security threats." },
        { icon: <FaServer size={40} />, title: "Managed IT Services", description: "Our managed IT services provide proactive support, maintenance, and monitoring, ensuring your IT infrastructure remains secure, efficient, and optimized for business success." },
        { icon: <FaChartLine size={40} />, title: "Business Intelligence", description: "Leverage data-driven insights with our business intelligence solutions, enabling informed decision-making and strategic planning for sustainable growth." },
      ],
    },
    Arabic: {
      // Arabic translations remain the same
      title: "خدماتنا",
      services: [
        { icon: <FaLock size={40} />, title: "الأمان", description: "تعزيز موقف الأمان لديك، تشمل خدماتنا تصفية DNS والتدريب الشامل للمستخدمين النهائيين، مما يوفر نهجًا استباقيًا لحماية أجهزتك وشبكاتك." },
        { icon: <FaCloud size={40} />, title: "الحلول السحابية", description: "احصل على تنفيذ كامل، وترحيل سلس، ودعم مستمر لأدواتك المستندة إلى السحابة. يشمل ذلك خدمات شاملة لأنظمة الهاتف VoIP، وAzure، وAWS، وOffice 365، مما يضمن الأداء الأمثل والموثوقية." },
        { icon: <FaPhone size={40} />, title: "مكتب المساعدة", description: "احصل على دعم على مدار الساعة من خلال خيارات مكتب المساعدة لدينا، التي تقدم المساعدة في الموقع وعن بُعد. استفد من الدعم الموثوق به عبر الهاتف والبريد الإلكتروني، مما يضمن حلًا سريعًا وفعالًا لمشكلات تكنولوجيا المعلومات لديك." },
        { icon: <FaDatabase size={40} />, title: "النسخ الاحتياطي", description: "تأكد من أمان بيانات عملك الهامة من خلال حلول النسخ الاحتياطي الخاصة بنا. نحن نقدم خدمات نسخ احتياطي للبيانات آلية وآمنة وقابلة للتطوير لمنع فقدان البيانات وضمان استمرارية الأعمال." },
        { icon: <FaUserTie size={40} />, title: "الرئيس التنفيذي الافتراضي", description: "ارتقِ بأعمالك من خلال التوجيه الخبير من خدمات الرئيس التنفيذي الافتراضي لدينا. نساعدك على تبسيط استراتيجية تكنولوجيا المعلومات وتحسين العمليات وتنفيذ حلول تقنية مخصصة لأهداف عملك." },
        { icon: <FaProjectDiagram size={40} />, title: "المشاريع", description: "قم بتبسيط عملياتك من خلال خبرتنا في إدارة المشاريع. بدءًا من التخطيط وحتى التنفيذ، نضمن تدفقات عمل سلسة تتماشى مع أهدافك وتقودك إلى النجاح." },
        { icon: <FaShieldAlt size={40} />, title: "الامتثال وإدارة المخاطر", description: "ضمان الامتثال التنظيمي وتقليل المخاطر من خلال خدمات الامتثال وإدارة المخاطر المصممة خصيصًا، مما يساعد عملك على الالتزام بالمعايير الصناعية وتجنب التهديدات الأمنية." },
        { icon: <FaServer size={40} />, title: "خدمات تكنولوجيا المعلومات المدارة", description: "توفر خدمات تكنولوجيا المعلومات المدارة لدينا الدعم والصيانة والمراقبة الاستباقية، مما يضمن أن تظل بنيتك التحتية لتكنولوجيا المعلومات آمنة وفعالة ومحسّنة لنجاح الأعمال." },
        { icon: <FaChartLine size={40} />, title: "تحليل الأعمال", description: "استفد من الرؤى المستندة إلى البيانات من خلال حلول تحليل الأعمال لدينا، مما يتيح اتخاذ قرارات مستنيرة وتخطيطًا استراتيجيًا لتحقيق النمو المستدام." },
      ],
    },
  };

  const t = translations[selectedLanguage];

  return (
    <section className="w-full bg-gradient-to-r from-[#2EC4D2] to-blue-600 text-gray-800 p-8 sm:p-10 md:p-12 lg:p-16">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-white">{t.title}</h2>
    <div className="w-32 sm:w-40 md:w-48 h-1 bg-white mx-auto mb-10 sm:mb-12"></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
      {t.services.map((service, index) => (
        <div 
          key={index} 
          className="bg-gradient-to-r from-[#2EC4D2] to-blue-600 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
          <div className="mb-3 sm:mb-4 text-white">{service.icon}</div>
          <h3 className="text-base sm:text-lg font-semibold text-white">{service.title}</h3>
          <p className="text-xs sm:text-sm mt-2 text-gray-200">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Settings, Activity, BarChart3, Shield, HardDrive, Download } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const Process = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const { selectedLanguage } = useLanguage();

  const processItems = {
    English: [
      {
        title: "IT ADMINISTRATION",
        icon: Settings,
        description: [
          "Our advanced ticketing system combined with our documentation management platform ensures all aspects of IT run smoothly and clients always have access to current information.",
          "Our custom processes are built for small businesses and ensure a smooth setup and operation of all services and support.",
          "Organization advanced ticketing and documentation system to keep your IT organized.",
        ],
      },
      {
        title: "SYSTEMS MONITORING",
        icon: Activity,
        description: [
          "By monitoring over 5,000 aspects of your systems 24/7, we can detect and remove problems before they impact your IT infrastructure.",
          "Most issues can be resolved remotely with no disruption to your business.",
          "At the same time, your exposure to security risks is dramatically lessened, and frustration from unstable IT resources almost vanishes.",
        ],
      },
      {
        title: "REPORTING",
        icon: BarChart3,
        description: [
          "Comprehensive reporting provides valuable insight into the health of your infrastructure, including upgrade forecasting, warranty status, and end-of-year depreciation.",
          "Simplifies detailed inventory management and upgrade forecasting and planning.",
        ],
      },
      {
        title: "MANAGED ANTI VIRUS",
        icon: Shield,
        description: [
          "When a threat is detected, we begin remediation immediately. Eliminating worry about renewal dates or additional bills and vendors to manage.",
          "One more way to streamline IT functions and increase employee productivity.",
        ],
      },
      {
        title: "MANAGED BACKUPS",
        icon: HardDrive,
        description: [
          "Our monitored backup solutions can protect your data from user error, theft, flood, and fire.",
          "On-site and off-site backups are monitored 24/7 to ensure they're both working properly.",
        ],
      },
      {
        title: "PATCH MANAGEMENT",
        icon: Download,
        description: [
          "Patching software fixes security vulnerabilities and improves IT performance. We'll regularly install updates to keep your system current, safe, and running efficiently.",
          "We provide patch management for all major OSs and applications including Windows, macOS, Adobe, Java, Chrome, Firefox, and many others.",
        ],
      },
    ],
    Arabic: [
      {
        title: "إدارة تكنولوجيا المعلومات",
        icon: Settings,
        description: [
          "يضمن نظام التذاكر المتقدم الخاص بنا إلى جانب منصة إدارة الوثائق تشغيل جميع جوانب تكنولوجيا المعلومات بسلاسة، مع توفير وصول دائم للعملاء إلى المعلومات الحالية.",
          "تم تصميم عملياتنا المخصصة للشركات الصغيرة لضمان إعداد وتشغيل سلس لجميع الخدمات والدعم.",
          "نظام متقدم لإدارة التذاكر والوثائق للحفاظ على تنظيم تكنولوجيا المعلومات لديك.",
        ],
      },
      {
        title: "مراقبة الأنظمة",
        icon: Activity,
        description: [
          "من خلال مراقبة أكثر من 5,000 عنصر من أنظمتك على مدار الساعة، يمكننا اكتشاف المشكلات وإصلاحها قبل أن تؤثر على البنية التحتية لتكنولوجيا المعلومات لديك.",
          "يمكن حل معظم المشكلات عن بُعد دون أي تعطيل لأعمالك.",
          "في نفس الوقت، يتم تقليل تعرضك للمخاطر الأمنية بشكل كبير، ويختفي الإحباط الناتج عن موارد تكنولوجيا المعلومات غير المستقرة تقريبًا.",
        ],
      },
      {
        title: "التقارير",
        icon: BarChart3,
        description: [
          "توفر التقارير الشاملة رؤى قيمة حول صحة البنية التحتية لديك، بما في ذلك التنبؤ بالترقيات، وحالة الضمان، والاستهلاك السنوي.",
          "يبسط إدارة المخزون التفصيلية والتخطيط لترقية الأنظمة.",
        ],
      },
      {
        title: "إدارة مضاد الفيروسات",
        icon: Shield,
        description: [
          "عند اكتشاف تهديد، نبدأ في معالجته على الفور، مما يزيل القلق بشأن مواعيد التجديد أو الفواتير الإضافية أو التعامل مع مزودين آخرين.",
          "طريقة أخرى لتحسين وظائف تكنولوجيا المعلومات وزيادة إنتاجية الموظفين.",
        ],
      },
      {
        title: "إدارة النسخ الاحتياطي",
        icon: HardDrive,
        description: [
          "يمكن لحلول النسخ الاحتياطي المراقبة لدينا حماية بياناتك من الأخطاء البشرية أو السرقة أو الفيضانات أو الحرائق.",
          "يتم مراقبة النسخ الاحتياطية المحلية والبعيدة على مدار الساعة لضمان عملها بشكل صحيح.",
        ],
      },
      {
        title: "إدارة التحديثات",
        icon: Download,
        description: [
          "تحديث البرامج يعمل على إصلاح الثغرات الأمنية وتحسين أداء تكنولوجيا المعلومات. سنقوم بتثبيت التحديثات بانتظام للحفاظ على أنظمتك محدثة وآمنة وعاملة بكفاءة.",
          "نوفر إدارة التحديثات لجميع أنظمة التشغيل الرئيسية والتطبيقات، بما في ذلك Windows و macOS و Adobe و Java و Chrome و Firefox والعديد غيرها.",
        ],
      },
    ],
  };

  const currentTranslation = processItems[selectedLanguage] || processItems.English;

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
            {selectedLanguage === "Arabic" ? "عمليتنا" : "Our Process"}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            {selectedLanguage === "Arabic"
              ? "اختبر نهجنا الشامل في إدارة تكنولوجيا المعلومات المصمم للحفاظ على سير عملك بسلاسة"
              : "Experience our comprehensive IT management approach designed to keep your business running smoothly"}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {currentTranslation.map((item, index) => (
            <motion.div key={index} className="w-full md:w-[45%] lg:w-[30%] flex">
              <div className="bg-gradient-to-br from-[#2EC4D2] via-blue-500 to-blue-600 backdrop-blur-sm shadow-2xl rounded-2xl transform hover:scale-102 transition-all duration-500 hover:shadow-3xl w-full">
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <item.icon size={48} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">{item.title}</h3>
                  <div className="text-white/95 leading-relaxed space-y-4">
                    {item.description.map((para, idx) => (
                      <p key={idx} className="text-base font-light">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;

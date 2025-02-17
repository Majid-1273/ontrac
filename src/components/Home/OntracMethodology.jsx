import React from "react";
import { Lock, Search, TrendingUp, Shield, CheckCircle, Clock, Target, BarChart3 } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

const OntracMethodology = () => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      title: "ONTRAC Methodology",
      steps: [
        { icon: Lock, title: "SECURE", description: "To enhance the security of your system, we implement robust measures to safeguard your data and infrastructure, ensuring a resilient and protected environment for your organization." },
        { icon: Search, title: "ANALYZE", description: "We conduct a comprehensive examination of your organization, delving into your current state and future aspirations. This in-depth analysis guides the development of a strategic blueprint, laying the groundwork for your sustained success over the long term." },
        { icon: TrendingUp, title: "OPTIMIZE", description: "We streamline and refine your operations to maximize efficiency and performance. Our optimization strategies are tailored to enhance processes, boost productivity, and drive overall improvement in your organization." },
        { icon: Shield, title: "PROTECT", description: "We ensure your business continuity by implementing security measures that prevent potential threats and vulnerabilities." },
        { icon: CheckCircle, title: "VALIDATE", description: "Through rigorous testing and verification, we ensure all processes meet quality and compliance standards before deployment." },
        { icon: Clock, title: "MONITOR", description: "Continuous monitoring allows us to track performance and proactively address any issues before they escalate." },
        { icon: Target, title: "IMPLEMENT", description: "Our well-structured implementation strategies ensure smooth transitions and minimal disruptions to operations." },
        { icon: BarChart3, title: "IMPROVE", description: "We use data-driven insights to constantly refine strategies, ensuring ongoing growth and success for your organization." },
      ],
    },
    Arabic: {
      title: "منهجية ONTRAC",
      steps: [
        { icon: Lock, title: "حماية", description: "لتحسين أمان نظامك، نقوم بتنفيذ تدابير قوية لحماية بياناتك وبنيتك التحتية، مما يضمن بيئة مرنة وآمنة لمؤسستك." },
        { icon: Search, title: "تحليل", description: "نجري فحصًا شاملاً لمؤسستك، والتعمق في وضعك الحالي وتطلعاتك المستقبلية. يوجه هذا التحليل المتعمق تطوير مخطط استراتيجي يمهد الطريق لنجاحك المستدام على المدى الطويل." },
        { icon: TrendingUp, title: "تحسين", description: "نعمل على تحسين عملياتك لتعظيم الكفاءة والأداء. تم تصميم استراتيجيات التحسين لدينا لتعزيز العمليات وزيادة الإنتاجية وتحقيق تحسين شامل في مؤسستك." },
        { icon: Shield, title: "حماية", description: "نضمن استمرارية عملك من خلال تنفيذ تدابير أمان تمنع التهديدات المحتملة ونقاط الضعف." },
        { icon: CheckCircle, title: "تحقق", description: "من خلال الاختبار والتحقق الصارمين، نضمن أن جميع العمليات تلبي معايير الجودة والامتثال قبل النشر." },
        { icon: Clock, title: "مراقبة", description: "يتيح لنا المراقبة المستمرة تتبع الأداء ومعالجة أي مشكلات قبل تفاقمها." },
        { icon: Target, title: "تنفيذ", description: "تضمن استراتيجيات التنفيذ المهيكلة لدينا عمليات انتقال سلسة وأقل قدر من الاضطرابات في العمليات." },
        { icon: BarChart3, title: "تحسين", description: "نستخدم الرؤى المستندة إلى البيانات لتحسين الاستراتيجيات باستمرار، مما يضمن النمو والنجاح المستمر لمؤسستك." },
      ],
    },
  };

  const t = translations[selectedLanguage];

  return (
    <section className="bg-gray-100 px-4 md:px-8 lg:px-16 py-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {t.steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full mx-auto mb-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OntracMethodology;
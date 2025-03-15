import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import about from "../../assets/1.jpg";

function Enterprise() {
    const { selectedLanguage } = useLanguage();

    const translations = {
        English: {
            heading: "OUR ENTERPRISE SERVICES",
            subheading1:
                "At OnTrac, we understand that addressing technology issues after they arise can be costlier and more disruptive. That's why our proactive IT management is strategically crafted to save you money and preemptively eliminate potential technology challenges for your business in Dubai.",
            subheading2:
                "Our approach integrates routine preventative maintenance and robust real-time monitoring across your critical network, desktop, and mobile devices. This proactive stance aims to minimize technology downtime, maximize staff productivity, and provide a more predictable budget for your IT expenses.",
            subheading3:
                "OnTrac offers a comprehensive suite of monitoring and maintenance services. We collaborate with you to design a customized program that aligns with your specific business needs, ensuring a seamless and efficient IT environment.",
            subheading4:
                "Choose OnTrac for a proactive IT solution that not only saves you money but also provides peace of mind, allowing you to focus on what matters most – the success of your business.",
        },
        Arabic: {
            heading: "خدماتنا للمؤسسات",
            subheading1:
                "في OnTrac، ندرك أن التعامل مع مشكلات التكنولوجيا بعد حدوثها يمكن أن يكون أكثر تكلفةً وأكثر إزعاجًا. لهذا السبب، صممنا إدارة تكنولوجيا المعلومات الاستباقية لدينا بعناية لتوفير المال والقضاء على التحديات المحتملة قبل أن تؤثر على عملك في نيويورك.",
            subheading2:
                "يتكامل نهجنا مع الصيانة الوقائية الروتينية والمراقبة في الوقت الفعلي عبر شبكتك الأساسية وأجهزة الكمبيوتر المكتبية والمحمولة لديك. يهدف هذا النهج الاستباقي إلى تقليل وقت التوقف التكنولوجي، وزيادة إنتاجية الموظفين، وتوفير ميزانية أكثر استقرارًا لنفقات تكنولوجيا المعلومات لديك.",
            subheading3:
                "تقدم OnTrac مجموعة شاملة من خدمات المراقبة والصيانة. نحن نعمل معك على تصميم برنامج مخصص يتماشى مع احتياجات عملك الخاصة لضمان بيئة تقنية سلسة وفعالة.",
            subheading4:
                "اختر OnTrac لحل تكنولوجيا المعلومات الاستباقي الذي لا يوفر لك المال فحسب، بل يمنحك راحة البال أيضًا، مما يسمح لك بالتركيز على ما هو أكثر أهمية – نجاح عملك.",
        },
    };

    const currentTranslation =
        translations[selectedLanguage] || translations.English;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <div className="w-full overflow-hidden flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-auto">
                <img src={about} alt="" className="w-full h-full object-cover" />
            </div>

            {/* Content Section */}
            <div className={`w-full lg:w-1/2 bg-gradient-to-b from-[#2EC4D2] to-blue-600 opacity-90 flex items-center justify-center px-6 py-10 h-auto text-${selectedLanguage === "Arabic" ? "right" : "center"}`}>
                <motion.div
                    className="relative container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-xl md:text-5xl font-extrabold mb-6 text-white"
                    >
                        {currentTranslation.heading}
                    </motion.h1>

                    {/* Subheadings */}
                    {[currentTranslation.subheading1, currentTranslation.subheading2, currentTranslation.subheading3, currentTranslation.subheading4].map(
                        (text, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                className="text-md md:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed mb-4"
                            >
                                {text}
                            </motion.p>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default Enterprise;

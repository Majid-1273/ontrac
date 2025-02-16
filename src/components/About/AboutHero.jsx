import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import about from "../../assets/about.jpg";

function AboutHero() {
    const { selectedLanguage } = useLanguage();

    const translations = {
        English: {
            heading: "OUR ENTERPRISE SERVICES",
            subheading1:
                "At OnTrac, we understand that addressing technology issues after they arise can be costlier and more disruptive. That's why our proactive IT management is strategically crafted to save you money and preemptively eliminate potential technology challenges for your business in New York City.",
            subheading2:
                "Our approach integrates routine preventative maintenance and robust real-time monitoring across your critical network, desktop, and mobile devices. This proactive stance aims to minimize technology downtime, maximize staff productivity, and provide a more predictable budget for your IT expenses.",

            subheading3:
                "OnTrac offers a comprehensive suite of monitoring and maintenance services. We collaborate with you to design a customized program that aligns with your specific business needs, ensuring a seamless and efficient IT environment.",
            subheading4:
                "Choose OnTrac for a proactive IT solution that not only saves you money but also provides peace of mind, allowing you to focus on what matters most – the success of your business.",
        },



        Arabic: {
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
        <div className="w-full overflow-hidden lg:flex ">
            <div className="lg:w-1/2 ">
                <img src={about} alt="" className="lg:h-[650px] xl:h-[512px]" />

            </div>

            <div className="lg:w-1/2  bg-gradient-to-b from-[#2EC4D2] to-blue-600 opacity-90">
                <motion.div
                    className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                />


                {/* Content */}
                <div className="relative container mx-auto text-center py-4 px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >

                        <motion.h1
                            variants={itemVariants}
                            className="text-xl md:text-5xl font-extrabold mb-6 text-white flex items-center justify-center gap-4"
                        >
                            {currentTranslation.heading}
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-md md:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed"
                        >
                            {currentTranslation.subheading1}
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-md md:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed"
                        >
                            {currentTranslation.subheading2}
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-md md:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed"
                        >
                            {currentTranslation.subheading3}
                        </motion.p>
                        <motion.p
                            variants={itemVariants}
                            className="text-md md:text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed"
                        >
                            {currentTranslation.subheading4}
                        </motion.p>

                    </motion.div>

                </div>
            </div>

        </div>
    );
}

export default AboutHero;

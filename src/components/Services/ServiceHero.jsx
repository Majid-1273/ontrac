import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";

function ServiceHero() {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      heading: "What We Offer",
      subheading:
        "OnTrac in Dubai offers proactive IT management, saving costs with preventative measures and real-time monitoring. Tailored services ensure smooth operations, letting you focus on business success.",
    },
    Arabic: {
      heading: "تحدث معنا",
      subheading:
        "سواء كنت مهتمًا بخدماتنا أو تحتاج إلى المساعدة، فإن فريقنا مستعد لدعمك. اتصل بنا وسنلبي احتياجاتك، سواء كان ذلك استكشاف عروضنا أو الحصول على المساعدة التي تحتاجها.",
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
    <div className="relative w-full overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2EC4D2] to-blue-600 opacity-90">
        <motion.div
          className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto text-center py-4 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white flex items-center justify-center gap-4"
          >
            {currentTranslation.heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-cyan-50 max-w-2xl mx-auto leading-relaxed"
          >
            {currentTranslation.subheading}
          </motion.p>

        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default ServiceHero;

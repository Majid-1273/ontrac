import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";

function TalkUs() {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      heading: "Talk to us",
      subheading:
        "Whether you're interested in our services or need assistance, our team is ready to support you. Give us a call, and we'll take care of your needs, whether it's exploring our offerings or getting the help you require.",
      buttonLabel: "Ontrac",
      callUs: "Call us now",
      getStarted: "Get Started",
    },
    Arabic: {
      heading: "تحدث معنا",
      subheading:
        "سواء كنت مهتمًا بخدماتنا أو تحتاج إلى المساعدة، فإن فريقنا مستعد لدعمك. اتصل بنا وسنلبي احتياجاتك، سواء كان ذلك استكشاف عروضنا أو الحصول على المساعدة التي تحتاجها.",
      buttonLabel: "Ontrac",
      callUs: "اتصل بنا الآن",
      getStarted: "ابدأ الآن",
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
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-block">
            <div className="px-6 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <span className="flex items-center space-x-2">
                <span>{currentTranslation.buttonLabel}</span>
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white flex items-center justify-center gap-4"
          >
            <MessageCircle className="w-8 h-8 md:w-12 md:h-12" />
            {currentTranslation.heading}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-cyan-50 max-w-2xl mx-auto leading-relaxed"
          >
            {currentTranslation.subheading}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white text-[#2EC4D2] font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
              <span>{currentTranslation.getStarted}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold flex items-center space-x-2 hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              <Phone className="w-5 h-5" />
              <span>{currentTranslation.callUs}</span>
            </motion.button>
          </motion.div>
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

export default TalkUs;

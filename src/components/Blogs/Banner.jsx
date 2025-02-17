import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import dubai from "../../assets/dubai.jpg";

const Banner = () => {
  const { selectedLanguage } = useLanguage();
  const [scrollY, setScrollY] = React.useState(0);

  const translations = {
    English: {
      heading: "Blogs",
      subheading: "Stay updated with the latest insights, trends, and stories from the tech world."
    },
    Arabic: {
      heading: "المدونات",
      subheading: "ابق على اطلاع بأحدث الرؤى والاتجاهات والقصص من عالم التكنولوجيا."
    }
  };

  const currentTranslation = translations[selectedLanguage] || translations.English;

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${dubai})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          y: scrollY * 0.5,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/70 via-[#2EC4D2]/90 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
        <div className={`text-center max-w-4xl mx-auto ${selectedLanguage === "Arabic" ? "rtl" : "ltr"}`}>
          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg"
          >
            {currentTranslation.heading}
          </motion.h1>

          {/* Animated Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90 text-center mt-4"
          >
            {currentTranslation.subheading}
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-white/80 rounded-full mx-auto mt-6"
          />
        </div>
      </div>

      {/* Animated Overlay Shapes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl"
      />
    </div>
  );
};

export default Banner;
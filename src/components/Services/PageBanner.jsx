import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import { ChevronDown } from "lucide-react";
import dubai from '../../assets/dubai.jpg';

const PageBanner = () => {
    const { selectedLanguage } = useLanguage();

    const translations = {
        English: {
            heading: "Our Services",
            subheading: "Discover our wide range of offerings",
            scrollText: "Scroll to explore"
        },
        Arabic: {
            heading: "خدماتنا",
            subheading: "اكتشف مجموعتنا الواسعة من العروض",
            scrollText: "مرر لاستكشاف"
        }
    };


    const currentTranslation = translations[selectedLanguage] || translations.English;

    // Parallax effect on scroll
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative h-[100vh] w-full overflow-hidden">
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: `url(${dubai})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    y: scrollY * 0.5
                }}
            >
                {/* Enhanced Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/70 via-[#2EC4D2]/90 to-transparent"></div>
            </motion.div>

            {/* Content Container - Centered Both Vertically and Horizontally */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col items-center justify-center gap-6">
                        {/* Main Heading with Enhanced Animation */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`text-6xl md:text-7xl font-bold text-white text-center
                ${selectedLanguage === 'Arabic' ? 'font-arabic' : ''} 
                drop-shadow-lg`}
                        >
                            {currentTranslation.heading}
                        </motion.h1>

                        {/* Animated Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-white/90 text-center max-w-2xl"
                        >
                            {currentTranslation.subheading}
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-24 h-1 bg-white/80 rounded-full"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Positioned at Bottom */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    delay: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-white/80 text-sm">
                    {currentTranslation.scrollText}
                </span>
                <ChevronDown className="text-white/80 w-6 h-6" />
            </motion.div>

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

export default PageBanner;
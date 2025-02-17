import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';
import logo from "../assets/ontrac-logo.png";
import dubai from "../assets/dubai.jpg";

const Footer = () => {
    const { scrollY } = useScroll();
    const { selectedLanguage } = useLanguage();

    // Translation content
    const translations = {
        English: {
            assessmentTitle: "BOOK YOUR ONTRAC IT ASSESSMENT NOW FOR FREE",
            assessmentDescription: "Don't wait to discover how OnTrac can elevate your IT infrastructure. Reach out to our experts today to schedule a free, no-obligation assessment for your business.",
            callUs: "CALL US: +971 50 653 3002",
            email: "EMAIL: DXBOPS@ONTRAC.BIZ",
            navigation: "NAVIGATION",
            home: "HOME",
            about: "ABOUT US",
            services: "OUR SERVICES",
            blogs: "BLOGS",
            contact: "CONTACT",
            location: "OUR LOCATION",
            address: "A1801, The Crescent Towers, Dubai\nUnited Arab Emirates",
            copyright: "COPYRIGHT © 2020 ONTRAC BUSINESS SOLUTIONS FZE - ALL RIGHTS RESERVED."
        },
        Arabic: {
            assessmentTitle: "احجز تقييم أونت راك لتكنولوجيا المعلومات الآن مجانًا",
            assessmentDescription: "لا تنتظر لاكتشاف كيف يمكن لأونت راك أن تعزز بنيتك التحتية لتكنولوجيا المعلومات. تواصل مع خبرائنا اليوم لجدولة تقييم مجاني دون التزام لعملك.",
            callUs: "اتصل بنا: +971 50 653 3002",
            email: "البريد الإلكتروني: DXBOPS@ONTRAC.BIZ",
            navigation: "التنقل",
            home: "الرئيسية",
            about: "من نحن",
            services: "خدماتنا",
            blogs: "المدونات",
            contact: "اتصل بنا",
            location: "موقعنا",
            address: "A1801، أبراج كريسنت، دبي\nالإمارات العربية المتحدة",
            copyright: "حقوق النشر © 2020 أونت راك لحلول الأعمال FZE - جميع الحقوق محفوظة."
        }
    };

    const t = translations[selectedLanguage];
    const navItems = [
        { key: "home", label: t.home },
        { key: "about", label: t.about },
        { key: "services", label: t.services },
        { key: "blogs", label: t.blogs },
        { key: "contact", label: t.contact },
    ];
    

    return (
        <footer className="relative w-full">
            {/* Top Assessment Section */}
            <div className="bg-gradient-to-r from-[#2EC4D2] to-blue-500 text-white py-16 px-6">
                <div className="container mx-auto text-center max-w-4xl">
                    <h2 className="text-4xl font-bold mb-4  transition-colors duration-300">
                        {t.assessmentTitle}
                    </h2>
                    <p className="text-lg mb-8">
                        {t.assessmentDescription}
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
                        <button className="flex items-center mt-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4D2] to-blue-500 
                            text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 
                            hover:from-blue-500 hover:to-[#2EC4D2]">
                            <Phone size={20} className="mr-2" />
                            <span>{t.callUs}</span>
                        </button>
                        <button className="flex items-center mt-8 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#2EC4D2] to-blue-500 
                            text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 
                            hover:from-blue-500 hover:to-[#2EC4D2]">
                            <Mail size={20} className="mr-2" />
                            <span>{t.email}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Section */}
            <div className="relative text-white py-16 px-6">
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: `url(${dubai})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        y: scrollY.get() * 0.5
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/70 via-[#2EC4D2]/90 to-transparent"></div>
                </motion.div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center md:justify-start">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="OnTrac Business Solutions"
                                className="h-36 xl:h-44 w-auto transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Navigation Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 transition-colors duration-300">
                            {t.navigation}
                        </h3>
                        <nav className="space-y-3">
    {navItems.map((item) => (
        <Link
            key={item.key}
            to={item.key === "home" ? "/" : `/${item.key}`}
            className="block hover:text-black/50 transition-colors duration-300 relative group font-medium"
        >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black/50 transition-all duration-300 group-hover:w-full"></span>
        </Link>
    ))}
</nav>

                    </div>

                    {/* Location Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-6  transition-colors duration-300">
                            {t.location}
                        </h3>
                        <div className="flex items-start space-x-2 group">
                            <MapPin size={20} className="mt-1 flex-shrink-0  transition-colors duration-300" />
                            <p className="group-hover:text-black/50 transition-colors duration-300">{t.address}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gradient-to-r from-[#2EC4D2] to-blue-500 text-white py-4 px-6">
                <div className="container mx-auto text-center text-sm hover:text-black/50 transition-colors duration-300">
                    {t.copyright}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
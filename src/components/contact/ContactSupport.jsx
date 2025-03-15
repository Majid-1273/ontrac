import React, { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  MessageSquare,
  User,
  Users,
  AtSign,
  PhoneCall,
  Flag,
  Send,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import FormData from "form-data";
import { useLanguage } from "../../LanguageContext";

const ContactSupport = () => {
  const { selectedLanguage } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fadeOut, setFadeOut] = useState(false);

  const translations = {
    English: {
      weLoveToHelp: "We'd Love to Help",
      supportText:
        "Have questions or need assistance? We're here to help! Whether you're looking for more information about our products, need support with your order, or just want to get in touch, feel free to reach out to us.",
      storeAddress: "Our Office",
      address: "A 1801, The Crescent Towers, Dubai, United Arab Emirates",
      callUs: "Call Us",
      callNumber: "+971 50 653 3002",
      mailUs: "Email Us",
      email: "DXBOPS@ONTRAC.BIZ",
      website: "Website",
      websiteLink: "Ontrac.biz",
      supportHeader: "24/7 Support",
      supportDetails:
        "Our team is ready to provide you with the answers you need and ensure your experience is nothing short of exceptional. Let us know how we can assist you today.",
      firstName: "First Name",
      lastName: "Last Name",
      emailHere: "Email",
      phoneNumber: "Phone Number",
      country: "Country",
      additionalMessage: "Additional Message",
      sendMessage: "Send Message",
      errorRequiredFields: "All fields are required.",
      errorGeneric: "An error occurred. Please try again later.",
      successMessage: "Your message has been sent successfully!",
    },
    Arabic: {
      weLoveToHelp: "يسعدنا مساعدتك",
      supportText:
        "هل لديك أسئلة أو تحتاج إلى مساعدة؟ نحن هنا لمساعدتك! سواء كنت تبحث عن مزيد من المعلومات حول منتجاتنا، أو تحتاج إلى دعم بشأن طلبك، أو ترغب فقط في التواصل معنا، لا تتردد في الاتصال بنا.",
      storeAddress: "مكتبنا",
      address: "A 1801، ذا كريسنت تاورز، دبي، الإمارات العربية المتحدة",
      callUs: "اتصل بنا",
      callNumber: "+971 50 653 3002",
      mailUs: "راسلنا",
      email: "DXBOPS@ONTRAC.BIZ",
      website: "الموقع الإلكتروني",
      websiteLink: "Ontrac.biz",
      supportHeader: "دعم على مدار الساعة",
      supportDetails:
        "فريقنا جاهز لتقديم الإجابات التي تحتاجها وضمان حصولك على تجربة استثنائية. أخبرنا كيف يمكننا مساعدتك اليوم.",
      firstName: "الاسم الأول",
      lastName: "الاسم الأخير",
      emailHere: "البريد الإلكتروني",
      phoneNumber: "رقم الهاتف",
      country: "الدولة",
      additionalMessage: "رسالة إضافية",
      sendMessage: "إرسال الرسالة",
      errorRequiredFields: "جميع الحقول مطلوبة.",
      errorGeneric: "حدث خطأ. يرجى المحاولة لاحقًا.",
      successMessage: "تم إرسال رسالتك بنجاح!",
    },
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const t = translations[selectedLanguage];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (Object.values(formData).some((value) => !value)) {
      setErrorMessage(t.errorRequiredFields);
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 5000);
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);
      if (response.data.message === "Email sent successfully") {
        setIsSubmitted(true);
        setErrorMessage("");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          country: "",
          message: "",
        });
      } else {
        throw new Error(response.data.error || t.errorGeneric);
      }
    } catch (error) {
      setErrorMessage(t.errorGeneric);
    } finally {
      setFadeOut(false);
      setTimeout(() => setFadeOut(true), 5000);
      if (isSubmitted) setTimeout(() => setIsSubmitted(false), 6000);
    }
  };

  const contactInfo = [
    { title: t.storeAddress, content: t.address, icon: MapPin },
    { title: t.callUs, content: t.callNumber, icon: Phone },
    { title: t.mailUs, content: t.email, icon: Mail },
    { title: t.website, content: t.websiteLink, icon: Globe },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-cyan-50 min-h-screen py-16 px-6">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <div className="space-y-8" data-aos="fade-right">
          <div className="text-center mb-16" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#2EC4D2] to-blue-600 inline-block text-transparent bg-clip-text">
              {t.weLoveToHelp}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.supportText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-[#2EC4D2] to-blue-500 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 text-white mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/90">{item.content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 rounded-lg" data-aos="fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.supportHeader}</h2>
          <p className="text-gray-600 mb-8">{t.supportDetails}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.firstName}
                  className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t.lastName}
                  className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.emailHere}
                  className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
              <div className="relative group">
                <PhoneCall className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder={t.phoneNumber}
                  className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
                />
              </div>
            </div>

            <div className="relative group">
              <Flag className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder={t.country}
                className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>

            <div className="relative group">
              <MessageSquare className="absolute left-4 top-4 text-gray-400 group-hover:text-[#2EC4D2] transition-colors duration-300" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.additionalMessage}
                rows="4"
                className="bg-gray-50 text-gray-800 pl-12 pr-4 py-3 rounded-lg w-full border border-gray-200 focus:border-[#2EC4D2] focus:ring-2 focus:ring-[#2EC4D2] focus:ring-opacity-50 transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-[#2EC4D2] to-blue-500 hover:from-[#2EC4D2] hover:to-blue-600 text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300 w-full md:w-auto flex items-center justify-center hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              {t.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
  

};

export default ContactSupport;

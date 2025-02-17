import React from "react";
import { useLanguage } from "../../LanguageContext";
import img1 from "../../assets/a1.jpg";
import img2 from "../../assets/a2.jpg";
import img3 from "../../assets/a3.jpg";

const AboutUs = () => {
  const { selectedLanguage } = useLanguage();

  const translations = {
    English: {
      title: "ABOUT US",
      description:
        "At OnTrac, we are dedicated to crafting personalized technology solutions that align seamlessly with your goals. Our commitment to excellence and innovative approaches ensures that every project under the OnTrac banner receives meticulous attention and surpasses expectations. Partner with OnTrac for a journey where your success is our utmost priority.",
      aboutUsData: [
        {
          image: img1,
          text: "At OnTrac, trust is the cornerstone of our identity. Our unwavering commitment to transparency, reliability, and integrity builds a foundation that you can confidently rely on. Trust us to be your steadfast partner in navigating the complexities of technology.",
        },
        {
          image: img2,
          text: "Passion fuels our every endeavor at OnTrac. We approach each project with genuine care, placing your aspirations at the forefront. Our dedicated team goes beyond services; we cultivate relationships, fostering an environment where your success is not just a goal but a shared journey we embark on together.",
        },
        {
          image: img3,
          text: "With OnTrac, your investment translates into value. Our strategic, results-driven approach ensures that your resources are optimized for maximum returns. Partner with us to witness not just cost-effective solutions, but an investment that propels your business towards financial growth and prosperity.",
        },
      ],
    },
    Arabic: {
      title: "معلومات عنا",
      description:
        "في OnTrac، نحن ملتزمون بتقديم حلول تكنولوجية مخصصة تتماشى بسلاسة مع أهدافك. يضمن التزامنا بالتميز والأساليب المبتكرة أن كل مشروع تحت راية OnTrac يتلقى اهتمامًا دقيقًا ويتجاوز التوقعات. انضم إلى OnTrac في رحلة يكون فيها نجاحك أولويتنا القصوى.",
      aboutUsData: [
        {
          image: img1,
          text: "في OnTrac، الثقة هي حجر الأساس لهويتنا. التزامنا الثابت بالشفافية والموثوقية والنزاهة يبني أساسًا يمكنك الاعتماد عليه بثقة. ثق بنا كشريك موثوق به في مواجهة تعقيدات التكنولوجيا.",
        },
        {
          image: img2,
          text: "الشغف هو الدافع وراء كل ما نقوم به في OnTrac. نحن نقترب من كل مشروع بعناية حقيقية، ونضع تطلعاتك في المقدمة. يتجاوز فريقنا المخصص تقديم الخدمات؛ بل نبني علاقات، ونخلق بيئة يكون فيها نجاحك ليس مجرد هدف بل رحلة مشتركة.",
        },
        {
          image: img3,
          text: "مع OnTrac، يتحول استثمارك إلى قيمة. تضمن استراتيجياتنا المدروسة والموجهة نحو النتائج أن يتم تحسين مواردك لتحقيق أقصى العوائد. كن شريكًا معنا لتشهد ليس فقط حلولاً فعالة من حيث التكلفة، بل استثمارًا يدفع أعمالك نحو النمو والازدهار المالي.",
        },
      ],
    },
  };

  const t = translations[selectedLanguage];

  return (
    <section className="bg-gray-100 p-8 sm:p-10 md:p-12 lg:p-16 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">{t.title}</h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10">{t.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {t.aboutUsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
            >
              {/* Image Display */}
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt="About Us" 
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-6 sm:p-8 md:p-12">
                <p className="text-xs sm:text-sm text-gray-700">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
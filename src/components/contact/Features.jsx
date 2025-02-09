import React from 'react';
import { Code, Shield, Cpu, Globe, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: {
        en: "Lorem Ipsum",
        ar: "لوريم إيبسوم"
      },
      description: {
        en: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis sapien at libero laoreet tristique.",
        ar: "لوريم إيبسوم دولور سيت أميت، كونسكتيتور أديبسينغ إيليت. نولا كونفاليس سابيان في ليبرو لاوريت تريستيك."
      }
    },
    {
      icon: <Shield size={32} />,
      title: {
        en: "Lorem Ipsum",
        ar: "لوريم إيبسوم"
      },
      description: {
        en: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        ar: "سيد دو إيوسيمود تيمبور إنكيديدنت أوت لابوري إي دولوري ماجنا أليكوا. أوت إنيم أد مينيم فينيام."
      }
    },
    {
      icon: <Cpu size={32} />,
      title: {
        en: "Lorem Ipsum",
        ar: "لوريم إيبسوم"
      },
      description: {
        en: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        ar: "كويز نوسترود إكسيرسيتاسيون ألامكو لابوريس نيسي أوت أليكويب إكس إي كومودو كونسيكوات."
      }
    },
    {
      icon: <Globe size={32} />,
      title: {
        en: "Lorem Ipsum",
        ar: "لوريم إيبسوم"
      },
      description: {
        en: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        ar: "دويز أوت إيروري دولور إن ريبرهيندريت إن فولوبتات فيليت إيسي سيلوم دولوري يو فيوجيات نولا باريوتور."
      }
    },
    {
      icon: <Zap size={32} />,
      title: {
        en: "Lorem Ipsum",
        ar: "لوريم إيبسوم"
      },
      description: {
        en: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        ar: "إكسسيبتور سينت أوكياكات كيوبيداتات نون برويدنت، سونت إن كولبا كي أوفيسيا ديسيرونت موليت أنيم آيد إيست لابورم."
      }
    }
  ];
  

  return (
    <section className="w-full bg-black overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000" />
      </div>



      <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <div className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Our Features
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 space-y-4 bg-[#141414] backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white text-center">
                {feature.title.en}
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                {feature.description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
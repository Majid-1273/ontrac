import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext";
import helpdesk from "../../assets/helpdesk.jpg";
import backup from "../../assets/backup.jpg";
import cloud from "../../assets/cloud.png";
import fortigate from "../../assets/fortiagte.png";
import mscloud from "../../assets/mscloud.png";
import multiVector from "../../assets/Multi-Vector.jpg";
import projects from "../../assets/projects.jpg";
import security from "../../assets/sec.jpg";

const OurServices = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const { selectedLanguage } = useLanguage();

    const workContent = {
        English: {
            header: "What We Offer",
            description:
                "OnTrac in Dubai offers proactive IT management, saving costs with preventative measures and real-time monitoring. Tailored services ensure smooth operations, letting you focus on business success.",
            projects: [
                {
                    title: "HELP DESK",
                    description:
                        "Your satisfaction and peace of mind are our top priorities. That's why we provide flexible and responsive support options tailored to your needs. Enjoy the convenience of phone and email support for quick assistance, benefit from our expertise through remote and onsite support when required, and rest easy with our around-the-clock 24/7 support services. We're here for you, ensuring you receive the support you deserve, precisely when and where you need it.",
                    image: helpdesk
                },
                {
                    title: "BACKUPS",
                    description:
                        "Safeguard your critical data with our comprehensive backup services. From secure local and off-site backups to dedicated Office 365 backups, we provide a robust suite of solutions tailored to your data protection needs. Additionally, our business continuity and disaster recovery services ensure that you're well-prepared for unforeseen events, minimizing downtime and ensuring the seamless restoration of your operations. Trust us to protect your valuable data with reliable and resilient backup solutions.",
                    image: backup
                },
                {
                    title: "SECURITY",
                    description:
                        "Empower your business with our proactive security services, covering DNS filtering, email compliance, anti-virus protection, and firewall security. Our DNS filtering enhances network security, blocking malicious content, while our email solutions filter spam and ensure regulatory compliance. Stay ahead of cyber threats with our advanced anti-virus measures, providing real-time protection. Implement a robust barrier against unauthorized access with our firewall solutions, securing your digital environment against potential security breaches.",
                    image: security
                },
                {
                    title: "CLOUD SOLUTIONS",
                    description:
                        "Experience seamless integration and reliable support for your cloud-based tools through our comprehensive services. We specialize in full implementation, smooth migration, and ongoing support for a range of essential cloud services, including file sync & share, Azure AWS, Office 365, and VoIP phone systems. Whether you're transitioning to the cloud or optimizing your existing setup, our dedicated team ensures a hassle-free experience, allowing you to harness the full potential of these technologies with confidence.",
                    image: cloud
                },
                {
                    title: "FortiGate",
                    description:
                        "With our services, leverage the power of FortiGate, a flagship product by Fortinet, for robust network security. Our expert team utilizes FortiGate's advanced features, including firewall protection, VPN connectivity, intrusion prevention, and antivirus filtering, to ensure comprehensive security for your business. Whether you're planning office relocations, software and hardware upgrades, or need expert support for your IT projects, our experienced team is here to provide seamless solutions backed by FortiGate's industry-leading capabilities.",
                    image: fortigate
                },
                {
                    title: "PROJECTS",
                    description:
                        "Empower your business initiatives with the expertise of our seasoned project management team. Whether you're navigating office relocations, planning expansions, implementing software or hardware upgrades, or managing employee on- and off-boarding, our experienced professionals are here to provide seamless support. Trust us to streamline your projects, ensuring a smooth and efficient execution that aligns with your business goals.",
                    image: projects
                },
                {
                    title: "VIRTUAL CIO",
                    description:
                        "Elevate your business strategy with our Virtual Chief Information Officer (vCIO) service. Through advanced upgrade forecasting, meticulous risk management, and data-driven strategic planning, we empower your business to navigate the digital landscape safely and efficiently. Our vCIO service ensures that your technology evolves seamlessly, minimizing risks and optimizing efficiency. Trust us to guide your business towards a safer and more strategic future, leveraging the power of informed decision-making and proactive IT management.",
                    image: multiVector
                },
                {
                    title: "Microsoft Cloud",
                    description:
                        "Empower your business with our Microsoft Cloud services. We specialize in harnessing the full potential of Microsoft Cloud, offering tailored solutions for enhanced collaboration, scalability, and data security. Whether it's migrating to Azure, leveraging Office 365, or optimizing your cloud infrastructure, our dedicated team ensures a seamless and efficient integration, driving innovation and productivity for your organization.",
                    image: mscloud
                },
            ],
        },
    
        Arabic: {
            header: "ما نقدمه",
            description:
                "تقدم OnTrac في دبي إدارة تقنية معلومات استباقية، مما يساعد على توفير التكاليف من خلال تدابير وقائية ورصد في الوقت الحقيقي. تضمن خدماتنا المخصصة عمليات سلسة، مما يتيح لك التركيز على نجاح عملك.",
            projects: [
                {
                    title: "مكتب المساعدة",
                    description:
                        "رضاك وراحتك هي أولوياتنا القصوى. لهذا السبب نقدم خيارات دعم مرنة وسريعة الاستجابة مصممة خصيصًا لتلبية احتياجاتك. استمتع بسهولة الدعم عبر الهاتف والبريد الإلكتروني للمساعدة السريعة، واستفد من خبرتنا من خلال الدعم عن بُعد وفي الموقع عند الحاجة، وكن مطمئنًا مع خدمات الدعم المتاحة على مدار الساعة طوال أيام الأسبوع. نحن هنا من أجلك، لضمان حصولك على الدعم الذي تحتاجه، بالضبط عندما وأينما تحتاجه.",
                    image: helpdesk
                },
                {
                    title: "النسخ الاحتياطية",
                    description:
                        "احمِ بياناتك المهمة باستخدام خدمات النسخ الاحتياطي الشاملة لدينا. من النسخ الاحتياطية المحلية والبعيدة الآمنة إلى النسخ الاحتياطية المخصصة لـ Office 365، نقدم مجموعة قوية من الحلول المصممة لتلبية احتياجات حماية بياناتك. بالإضافة إلى ذلك، تضمن خدمات استمرارية الأعمال والتعافي من الكوارث لدينا أنك مستعد جيدًا للأحداث غير المتوقعة، مما يقلل من التوقف عن العمل ويضمن استعادة عملياتك بسلاسة.",
                    image: backup
                },
                {
                    title: "الأمان",
                    description:
                        "قم بتمكين عملك من خلال خدمات الأمان الاستباقية لدينا، التي تغطي تصفية DNS، والامتثال للبريد الإلكتروني، وحماية مكافحة الفيروسات، وأمان الجدار الناري. تعزز تصفية DNS أمان الشبكة عن طريق حظر المحتوى الضار، بينما تقوم حلول البريد الإلكتروني لدينا بتصفية البريد العشوائي وضمان الامتثال التنظيمي. ابق متقدمًا على التهديدات الإلكترونية من خلال تدابير مكافحة الفيروسات المتقدمة لدينا، التي توفر حماية في الوقت الحقيقي.",
                    image: security
                },
                {
                    title: "الحلول السحابية",
                    description:
                        "استمتع بالتكامل السلس والدعم الموثوق به لأدواتك المستندة إلى السحابة من خلال خدماتنا الشاملة. نحن متخصصون في التنفيذ الكامل، والهجرة السلسة، والدعم المستمر لمجموعة من الخدمات السحابية الأساسية، بما في ذلك مزامنة الملفات والمشاركة، Azure AWS، Office 365، وأنظمة الهاتف عبر بروتوكول الإنترنت.",
                    image: cloud
                },
                {
                    title: "FortiGate",
                    description:
                        "استفد من قوة FortiGate، المنتج الرائد من Fortinet، لأمان الشبكة القوي. يستخدم فريقنا الخبراء ميزات FortiGate المتقدمة، بما في ذلك حماية الجدار الناري، واتصال VPN، ومنع التسلل، وتصفية مكافحة الفيروسات، لضمان الأمان الشامل لعملك.",
                    image: fortigate
                },
                {
                    title: "المشاريع",
                    description:
                        "عزز مبادرات عملك من خلال خبرة فريق إدارة المشاريع لدينا. سواء كنت تتعامل مع نقل مكاتب، أو تخطط للتوسعات، أو تنفذ ترقيات للبرامج أو الأجهزة، أو تدير انضمام الموظفين ومغادرتهم، فنحن هنا لدعمك بسلاسة.",
                    image: projects
                },
                {
                    title: "المدير التنفيذي الافتراضي لتقنية المعلومات",
                    description:
                        "قم برفع مستوى استراتيجيتك التجارية من خلال خدمة المدير التنفيذي الافتراضي لتقنية المعلومات (vCIO) لدينا. من خلال التنبؤ المتقدم بالترقيات، وإدارة المخاطر الدقيقة، والتخطيط الاستراتيجي المستند إلى البيانات، نساعد عملك على التنقل في العالم الرقمي بأمان وكفاءة.",
                    image: multiVector
                },
                {
                    title: "Microsoft Cloud",
                    description:
                        "قم بتمكين عملك من خلال خدمات Microsoft Cloud لدينا. نحن متخصصون في الاستفادة الكاملة من إمكانيات Microsoft Cloud، مما يوفر حلولًا مخصصة لتحسين التعاون، وقابلية التوسع، وأمان البيانات.",
                    image: mscloud
                },
            ],
        },
    };
    

    const renderCard = (item, index) => {
        const isHovered = hoveredItem === index;

        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                className="relative group"
                key={index}
            >
                <div className={`${index % 2 === 0 ? "bg-white/80" : "bg-gradient-to-r from-[#2EC4D2] via-blue-500 to-blue-600"} 
                backdrop-blur-sm shadow-2xl rounded-2xl transform hover:scale-[1.03] transition-all duration-500 hover:shadow-2xl`}>

                    <div className="">
                        <div className={`flex flex-col md:flex-row gap-4 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}>

                            <motion.div
                                className="w-full md:w-1/2"
                                animate={{
                                    
                                    transition: { duration: 0.4, ease: "easeOut" },
                                }}
                            >

                                <div className="overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        className="w-full h-[300px] md:h-[590px] lg:h-[500px] transform transition-transform duration-700 rounded-xl"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </div>

                            </motion.div>

                            <motion.div
                                className="w-full md:w-1/2"
                                animate={{

                                    transition: { duration: 0.4, ease: "easeOut" },
                                }}
                            >

                                <div className="p-8 transform transition-all duration-300">
                                    <h3
                                        className={`text-3xl md:text-4xl font-bold mb-6 tracking-tight ${index % 2 === 0 ? "text-black" : "text-white"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className={`leading-relaxed mb-4 text-lg font-light ${index % 2 === 0 ? "text-black/95" : "text-white"
                                            }`}
                                    >
                                        {item.description}
                                    </p>
                                </div>

                            </motion.div>

                        </div>
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="bg-gradient-to-br from-white via-cyan-50 to-blue-50 min-h-screen py-10">
            <div className="container mx-auto">
                <motion.div
                    className="text-center mb-10 px-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#2EC4D2] via-blue-500 to-blue-600 inline-block text-transparent bg-clip-text tracking-tight">
                        {workContent[selectedLanguage].header}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                        {workContent[selectedLanguage].description}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto p-2 lg:p-0">
                    {workContent[selectedLanguage].projects.map((item, index) =>
                        renderCard(item, index)
                    )}
                </div>
            </div>
        </div>
    );
};

export default OurServices;
import React from "react";
import { useLanguage } from "../LanguageContext"; // Add this import
import Banner from "../components/Blogs/Banner";
import BlogCard from "../components/Blogs/BlogCard";
import BlogCard2 from "../components/Blogs/BlogCard2";
import securityImg from "../assets/security.jpg";
import cloudImg from "../assets/cloud solutions.jpg";
import vcioImg from "../assets/virtual cio.jpg";
import projectImg from "../assets/projects.jpg";
import ciscoImg from "../assets/cisco os.jpg";
import helpDeskImg from "../assets/contact us.jpg";
import backupsImg from "../assets/backup.jpg";
import fortigateImg from "../assets/fortigate.jpg";
import microsoftCloudImg from "../assets/microsoft cloud.jpg";

// Blog data with translations
const blogPosts = {
  English: [
    {
      image: securityImg,
      title: "Security",
      description:
        "The ever-evolving landscape of cyber threats, encompassing sophisticated ransomware attacks, targeted phishing scams, and growing supply chain vulnerabilities, necessitates a proactive security approach for businesses. Implementing a layered security strategy that combines firewalls, intrusion detection and prevention systems, data encryption, and endpoint security is crucial. Regular software updates, comprehensive employee training programs, and robust backup and disaster recovery plans further enhance security posture and minimize the risk of successful attacks.",
      isSingle: false,
    },
    {
      image: cloudImg,
      title: "Cloud Solutions",
      description:
        "Cloud computing offers businesses of all sizes scalability, cost-effectiveness, and flexibility. Exploring the diverse service offerings, including SaaS (Software as a Service), IaaS (Infrastructure as a Service), and PaaS (Platform as a Service), allows businesses to tailor their cloud strategy to their specific needs. Carefully planning and executing cloud migration journeys, as demonstrated by successful case studies across various industries, ensures a smooth transition and maximizes the benefits of cloud adoption.",
      isSingle: false,
    },
    {
      image: vcioImg,
      title: "Virtual CIO",
      description:
        "For businesses with limited IT resources and expertise, a virtual CIO (vCIO) serves as a valuable resource. Leveraging the expertise of a vCIO provides strategic guidance, including developing technology roadmaps and aligning IT initiatives with business goals. Additionally, a vCIO assists in managing IT governance, ensuring compliance with regulations and best practices. By outsourcing these critical tasks to a vCIO, businesses can overcome resource constraints, achieve their IT objectives, and optimize their technology investments.",
      isSingle: false,
    },
    {
      image: projectImg,
      title: "Projects",
      description:
        "Successful project management is essential for delivering IT projects on time, within budget, and according to specifications. Setting clear goals and objectives with defined scope and deliverables provides a roadmap for project execution. Collaborating among stakeholders ensures everyone is aligned with project goals and informed about progress. Implementing risk management strategies helps to proactively identify and mitigate potential challenges, while embracing agile methodologies allows for flexibility and adaptation to changing requirements. By adhering to these best practices, businesses can significantly improve their project management capabilities and ensure the successful completion of their IT initiatives.",
      isSingle: false,
    },
    {
      image: ciscoImg,
      title: "Cisco OS",
      description:
        "For network professionals, mastering Cisco's leading operating systems, IOS and NX-OS, is crucial for effective network management. Understanding their functionalities, including configuration options and troubleshooting techniques, empowers network professionals to optimize network performance, ensure security, and manage complex network environments efficiently. By staying abreast of the latest updates and best practices for Cisco OS, network professionals can maintain a robust and reliable network infrastructure.",
      isSingle: true,
    },
    {
      image: helpDeskImg,
      title: "Help Desk",
      description:
        "Building a world-class help desk is paramount for fostering customer satisfaction and loyalty. This requires implementing key elements such as clearly defined services that establish expectations for response times and resolution goals. A robust knowledge management system ensures easy access to solutions and fosters a culture of knowledge sharing among help desk staff. Effective skills, including active listening and clear explanation of solutions, are crucial for building trust. Additionally, strong problem-solving skills and the ability to leverage technology tools like ticketing systems and live chat enhance efficiency and resolve customer issues promptly.",
      isSingle: false,
    },
    {
      image: backupsImg,
      title: "Backups",
      description:
        "In today's data-driven world, protecting critical information against breaches and unforeseen disruptions is essential for business continuity. Implementing a comprehensive data backup strategy that utilizes various types of backups, including full, incremental, and differential backups, ensures data availability in case of a disaster. Furthermore, establishing robust data security practices, including encryption and access controls, safeguards sensitive information from unauthorized access. By proactively addressing data protection and disaster recovery, businesses can minimize downtime and maintain operational efficiency in the face of challenges.",
      isSingle: false,
    },
    {
      image: fortigateImg,
      title: "FortiGate",
      description:
        "FortiGate, a powerful security platform offered by Fortinet, provides comprehensive network security protection against evolving cyber threats. Its robust features, including firewall functionality, intrusion detection and prevention systems, and threat intelligence, empower businesses to defend against sophisticated cyberattacks. Utilizing FortiGate allows organizations to achieve robust network security, minimize the risk of breaches, and enhance their overall cybersecurity posture.",
      isSingle: false,
    },
    {
      image: microsoftCloudImg,
      title: "Microsoft Cloud",
      description:
        "Microsoft Azure offers a comprehensive suite of cloud services encompassing compute, storage, networking, databases, and artificial intelligence (AI). This diverse range of services allows businesses of all sizes to leverage the scalability and pay-as-you-go model of Azure to achieve their specific goals. Case studies across various industries showcase how organizations have successfully implemented Azure solutions to streamline operations, improve efficiency, and gain a competitive edge.",
      isSingle: false,
    },
  ],
  
  Arabic: [
    {
      image: securityImg,
      title: "الأمان",
      description:
        "يتطلب المشهد المتطور باستمرار للتهديدات الإلكترونية، بما في ذلك هجمات الفدية المتطورة، وعمليات الاحتيال المستهدفة، وتزايد ثغرات سلسلة التوريد، نهجًا أمنيًا استباقيًا للشركات. يعد تنفيذ استراتيجية أمان متعددة الطبقات التي تجمع بين جدران الحماية وأنظمة كشف ومنع التسلل وتشفير البيانات وأمان نقاط النهاية أمرًا ضروريًا. تعزز التحديثات المنتظمة للبرامج وبرامج التدريب الشاملة للموظفين وخطط النسخ الاحتياطي والتعافي من الكوارث القوية من الموقف الأمني وتقلل من خطر نجاح الهجمات.",
      isSingle: false,
    },
    {
      image: cloudImg,
      title: "حلول السحابة",
      description:
        "توفر الحوسبة السحابية للشركات من جميع الأحجام قابلية التوسع وفعالية التكلفة والمرونة. يتيح استكشاف عروض الخدمات المتنوعة، بما في ذلك SaaS (البرمجيات كخدمة) و IaaS (البنية التحتية كخدمة) و PaaS (المنصة كخدمة)، للشركات تخصيص استراتيجيتها السحابية وفقًا لاحتياجاتها المحددة. يضمن التخطيط الدقيق وتنفيذ رحلات الترحيل إلى السحابة، كما هو موضح في دراسات الحالة الناجحة عبر مختلف الصناعات، انتقالًا سلسًا وتعظيم فوائد اعتماد السحابة.",
      isSingle: false,
    },
    {
      image: vcioImg,
      title: "الرئيس التنفيذي الافتراضي لتكنولوجيا المعلومات",
      description:
        "بالنسبة للشركات ذات موارد وخبرات تكنولوجيا المعلومات المحدودة، يعد الرئيس التنفيذي الافتراضي لتكنولوجيا المعلومات (vCIO) موردًا قيمًا. يوفر الاستفادة من خبرة الرئيس التنفيذي الافتراضي لتكنولوجيا المعلومات توجيهًا استراتيجيًا، بما في ذلك تطوير خرائط طريق التكنولوجيا ومواءمة مبادرات تكنولوجيا المعلومات مع أهداف الأعمال. بالإضافة إلى ذلك، يساعد الرئيس التنفيذي الافتراضي لتكنولوجيا المعلومات في إدارة حوكمة تكنولوجيا المعلومات، وضمان الامتثال للوائح وأفضل الممارسات. من خلال الاستعانة بمصادر خارجية لهذه المهام الحاسمة للرئيس التنفيذي الافتراضي لتكنولوجيا المعلومات، يمكن للشركات التغلب على قيود الموارد، وتحقيق أهداف تكنولوجيا المعلومات الخاصة بها، وتحسين استثماراتها التكنولوجية.",
      isSingle: false,
    },
    {
      image: projectImg,
      title: "المشاريع",
      description:
        "تعد إدارة المشاريع الناجحة ضرورية لتنفيذ مشاريع تكنولوجيا المعلومات في الوقت المحدد وضمن الميزانية ووفقًا للمواصفات. يوفر تحديد أهداف وغايات واضحة مع نطاق وتسليمات محددة خارطة طريق لتنفيذ المشروع. يضمن التعاون بين أصحاب المصلحة أن الجميع متوافقون مع أهداف المشروع ومطلعون على التقدم المحرز. تساعد استراتيجيات إدارة المخاطر على تحديد التحديات المحتملة والتخفيف منها بشكل استباقي، بينما يسمح تبني منهجيات أجايل بالمرونة والتكيف مع المتطلبات المتغيرة. من خلال الالتزام بأفضل الممارسات هذه، يمكن للشركات تحسين قدرات إدارة المشاريع بشكل كبير وضمان النجاح في إكمال مبادرات تكنولوجيا المعلومات الخاصة بها.",
      isSingle: false,
    },
    {
      image: ciscoImg,
      title: "نظام تشغيل سيسكو",
      description:
        "بالنسبة للمتخصصين في الشبكات، يعد إتقان أنظمة التشغيل الرائدة من سيسكو، IOS و NX-OS، أمرًا بالغ الأهمية للإدارة الفعالة للشبكات. يمكّن فهم وظائفها، بما في ذلك خيارات التكوين وتقنيات استكشاف الأخطاء وإصلاحها، متخصصي الشبكات من تحسين أداء الشبكة، وضمان الأمان، وإدارة بيئات الشبكة المعقدة بكفاءة. من خلال البقاء على اطلاع بأحدث التحديثات وأفضل الممارسات لنظام تشغيل سيسكو، يمكن لمتخصصي الشبكات الحفاظ على بنية تحتية قوية وموثوقة للشبكة.",
      isSingle: true,
    },
    {
      image: helpDeskImg,
      title: "مكتب المساعدة",
      description:
        "يعد بناء مكتب مساعدة عالمي المستوى أمرًا بالغ الأهمية لتعزيز رضا العملاء وولائهم. يتطلب ذلك تنفيذ عناصر أساسية مثل الخدمات المحددة بوضوح التي تحدد توقعات لأوقات الاستجابة وأهداف الحل. يضمن نظام إدارة المعرفة القوي سهولة الوصول إلى الحلول ويعزز ثقافة تبادل المعرفة بين موظفي مكتب المساعدة. المهارات الفعالة، بما في ذلك الاستماع النشط والشرح الواضح للحلول، أمر بالغ الأهمية لبناء الثقة. بالإضافة إلى ذلك، تعزز مهارات حل المشكلات القوية والقدرة على الاستفادة من الأدوات التكنولوجية مثل أنظمة التذاكر والدردشة المباشرة من الكفاءة وحل مشكلات العملاء بسرعة.",
      isSingle: false,
    },
    {
      image: backupsImg,
      title: "النسخ الاحتياطي",
      description:
        "في عالم اليوم الذي يعتمد على البيانات، تعد حماية المعلومات الحيوية ضد الاختراقات والاضطرابات غير المتوقعة أمرًا ضروريًا لاستمرارية الأعمال. يضمن تنفيذ استراتيجية شاملة للنسخ الاحتياطي للبيانات تستخدم أنواعًا مختلفة من النسخ الاحتياطي، بما في ذلك النسخ الاحتياطي الكامل والتزايدي والتفاضلي، توفر البيانات في حالة حدوث كارثة. علاوة على ذلك، إن إنشاء ممارسات قوية لأمان البيانات، بما في ذلك التشفير وضوابط الوصول، يحمي المعلومات الحساسة من الوصول غير المصرح به. من خلال معالجة حماية البيانات والتعافي من الكوارث بشكل استباقي، يمكن للشركات تقليل وقت التوقف والحفاظ على الكفاءة التشغيلية في مواجهة التحديات.",
      isSingle: false,
    },
    {
      image: fortigateImg,
      title: "فورتي جيت",
      description:
        "توفر FortiGate، وهي منصة أمان قوية تقدمها Fortinet، حماية شاملة لأمان الشبكات ضد التهديدات الإلكترونية المتطورة. تمكّن ميزاتها القوية، بما في ذلك وظائف جدار الحماية وأنظمة كشف ومنع التسلل والاستخبارات التهديدية، الشركات من الدفاع ضد الهجمات الإلكترونية المتطورة. يتيح استخدام FortiGate للمؤسسات تحقيق أمان قوي للشبكة، وتقليل مخاطر الاختراقات، وتعزيز موقفها العام في الأمن السيبراني.",
      isSingle: false,
    },
    {
      image: microsoftCloudImg,
      title: "سحابة مايكروسوفت",
      description:
        "تقدم Microsoft Azure مجموعة شاملة من خدمات السحابة التي تشمل الحوسبة والتخزين والشبكات وقواعد البيانات والذكاء الاصطناعي (AI). تسمح مجموعة الخدمات المتنوعة هذه للشركات من جميع الأحجام بالاستفادة من قابلية التوسع ونموذج الدفع حسب الاستخدام في Azure لتحقيق أهدافها المحددة. توضح دراسات الحالة عبر مختلف الصناعات كيف نفذت المنظمات بنجاح حلول Azure لتبسيط العمليات وتحسين الكفاءة واكتساب ميزة تنافسية.",
      isSingle: false,
    },
  ],
};

const Blogs = () => {
  const { selectedLanguage } = useLanguage();
  const currentBlogPosts = blogPosts[selectedLanguage] || blogPosts.English;
  
  // For RTL text direction in Arabic
  const isRTL = selectedLanguage === "Arabic";
  const textDirection = isRTL ? "rtl" : "ltr";
  const textAlign = isRTL ? "right" : "left";

  return (
    <div dir={textDirection}>
      {/* Banner Section */}
      <Banner />

      {/* Blog Section */}
      <section className="w-full p-8 sm:p-10 md:p-12 lg:p-16">
        <div className="max-w-7xl mx-auto">
          {/* First Two Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <BlogCard {...currentBlogPosts[0]} textAlign={textAlign} />
            <BlogCard {...currentBlogPosts[1]} textAlign={textAlign} />
          </div>

          {/* BlogCard2 Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-12">
            <BlogCard2 {...currentBlogPosts[5]} textAlign={textAlign} />
            <BlogCard2 {...currentBlogPosts[6]} textAlign={textAlign} />
          </div>

          {/* Next Two Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-12">
            <BlogCard {...currentBlogPosts[2]} textAlign={textAlign} />
            <BlogCard {...currentBlogPosts[3]} textAlign={textAlign} />
          </div>

          {/* Another BlogCard2 Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-12">
            <BlogCard2 {...currentBlogPosts[7]} textAlign={textAlign} />
            <BlogCard2 {...currentBlogPosts[8]} textAlign={textAlign} />
          </div>

          {/* Cisco OS - Solo Post */}
          <div className="mt-6 sm:mt-8 md:mt-12">
            <BlogCard {...currentBlogPosts[4]} textAlign={textAlign} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
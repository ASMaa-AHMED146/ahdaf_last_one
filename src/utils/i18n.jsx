import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      servicesItem: {
        discount: "{percentage}% Discount",
        imageAlt: "Service photo"
      },
      commonQuestion: {
        title: "Frequently Asked Questions",
        loading: "Loading...",
        error: "Error: {error}",
        imageAlt: "Question icon",
        formTitle: "Do you have questions?",
        formDescription: "You can ask any questions you want to know the answers to",
        inputPlaceholder: "Enter your question",
        submitButton: "Submit"
      },
      clientOpinions: {
        title: "Our Clients' Reviews",
        loading: "Loading client reviews...",
        prevButton: "Previous",
        nextButton: "Next",
        defaultComment: "Excellent service, the team arrived on time and was very professional.",
        defaultUser: "Customer",
        userImageAlt: "User profile"
      },
      header: {
        home: "Home",
        services: "Services",
        packages: "Packages",
        offers: "Offers",
        aboutUs: "About Us",
        contactUs: "Contact Us",
        blog: "Blog",
        login: "Login",
        signUp: "Sign Up"
      },
      homeBackground: {
        title: "Professional Cleaning and Sterilization Services for Apartments and Hotels",
        description: "Our professional team transforms your home into a healthy and comfortable place with the latest technologies. Experience the difference today",
        searchPlaceholder: "Search for service",
        bookButton: "Book Your Service"
      },
      feedbackCounter: {
        satisfiedClients: "Satisfied Clients",
        yearsExperience: "Years of Experience",
        completedProjects: "Completed Projects",
        professionalTeam: "Professional Team Members"
      },
      services: {
        title: "Our Services",
        description: "Discover our comprehensive range of professional services designed to meet your needs"
      },
      homeServices: {
        title: "Home Services",
        description: "Comprehensive cleaning services that suit your home's needs"
      },
      commercialServices: {
        title: "Commercial Services",
        description: "Professional cleaning solutions for your business needs"
      },
      searchService: {
        text: "Search for a service"
      },
      feedback: {
        title: "Customer Reviews",
        description: "What our customers say about our services",
        defaultComment: "Excellent service!"
      },
      packages: {
        title: "Our Packages Designed Just for You",
        description: "Explore a variety of packages that suit all your needs, whether for cleaning, sterilization, or maintenance services. Choose the perfect package for you and enjoy peace of mind and quality service."
      },
      offers: {
        title: "Our Special Offers Await You!",
        description: "Discover a range of exclusive offers that provide our premium services at competitive prices. Don't miss the opportunity and take advantage of the best deals for cleaning and sterilizing your home professionally."
      },
      footer: {
        logoAlt: "Company Logo",
        description: "With our professional services, your peace of mind starts here. We provide comprehensive cleaning and sterilization solutions to ensure a healthy environment for you and your family.",
        services: {
          title: "Our Services",
          furnished: "Furnished Rental Services",
          home: "Home Services",
          finishing: "Finishing and Decoration Services",
          maintenance: "Repair and Maintenance Services",
          other: "Other Services"
        },
        links: {
          title: "Links",
          home: "Home",
          services: "Services",
          contact: "Contact Us",
          packages: "Packages",
          about: "About Us",
          blog: "Blog",
          privacy: "Privacy Policy"
        },
        contact: {
          title: "Contact Us",
          egyptOffice: "Egypt Booking Office",
          newCairo: "New Cairo 270 Al Andalus Building in front of Hyde Park",
          mansoura: "Mansoura - 20 Ahmed Maher Street",
          phone: "01090009330",
          uaeOffice: "UAE Booking Office",
          dubai: "15 Al Barsha 1 Street, Dubai, United Arab Emirates"
        },
        copyright: "All rights reserved to Dubai-Hotel-Service Company. Designed by Ahdaf Web"
      }
    }
  },
  ar: {
    translation: {
      servicesItem: {
        discount: "{percentage}% خصم",
        imageAlt: "صورة الخدمة"
      },
      commonQuestion: {
        title: "الأسئلة الشائعة",
        loading: "جارٍ التحميل...",
        error: "خطأ: {error}",
        imageAlt: "أيقونة السؤال",
        formTitle: "هل لديك أسئلة؟",
        formDescription: "يمكنك طرح أي أسئلة تريد معرفة إجاباتها",
        inputPlaceholder: "أدخل سؤالك",
        submitButton: "إرسال"
      },
      clientOpinions: {
        title: "آراء عملائنا",
        loading: "جارٍ تحميل آراء العملاء...",
        prevButton: "السابق",
        nextButton: "التالي",
        defaultComment: "الخدمة ممتازة، الفريق وصل في الوقت المحدد وكانوا محترفين جدًا.",
        defaultUser: "عميل",
        userImageAlt: "صورة المستخدم"
      },
      header: {
        home: "الرئيسية",
        services: "الخدمات",
        packages: "الباقات",
        offers: "العروض",
        aboutUs: "من نحن",
        contactUs: "اتصل بنا",
        blog: "المدونة",
        login: "تسجيل دخول",
        signUp: "إنشاء حساب"
      },
      homeBackground: {
        title: "خدمات تنظيف وتعقيم احترافية للشقق والفنادق",
        description: "فريقنا المحترف يحول منزلك لمكان صحي ومريح بأحدث التقنيات. جربي الفرق اليوم",
        searchPlaceholder: "ابحث عن الخدمة",
        bookButton: "احجز خدمتك"
      },
      feedbackCounter: {
        satisfiedClients: "عميل راضي",
        yearsExperience: "سنوات من الخبرة",
        completedProjects: "عدد المشاريع المنجزة",
        professionalTeam: "فريق عمل محترف"
      },
      services: {
        title: "خدماتنا",
        description: "اكتشف مجموعتنا الشاملة من الخدمات المهنية المصممة لتلبية احتياجاتك"
      },
      homeServices: {
        title: "خدمات منزلية",
        description: "خدمات تنظيف شاملة تتناسب مع احتياجات منزلك"
      },
      commercialServices: {
        title: "خدمات تجارية",
        description: "حلول تنظيف احترافية لتلبية احتياجات عملك"
      },
      searchService: {
        text: "ابحث عن خدمة"
      },
      feedback: {
        title: "آراء العملاء",
        description: "ماذا يقول عملاؤنا عن خدماتنا",
        defaultComment: "ولا أروع"
      },
      packages: {
        title: "باقاتنا المصممة خصيصًا لك",
        description: "استكشف مجموعة متنوعة من الباقات التي تناسب جميع احتياجاتك، سواء للتنظيف، التعقيم، أو خدمات الصيانة. اختر الباقة المثالية لك واستمتع براحة البال وجودة الخدمة."
      },
      offers: {
        title: "عروضنا المميزة بانتظارك!",
        description: "اكتشف مجموعة من العروض الحصرية التي توفر لك خدماتنا المميزة بأسعار تنافسية. لا تفوت الفرصة، واغتنم أفضل الصفقات لتنظيف وتعقيم منزلك بكل احترافية."
      },
      footer: {
        logoAlt: "شعار الشركة",
        description: "مع خدماتنا الاحترافية، راحة بالك تبدأ من هنا. نقدم حلول تنظيف وتعقيم متكاملة لضمان بيئة صحية لك ولعائلتك.",
        services: {
          title: "خدماتنا",
          furnished: "خدمات تأجير مفروش",
          home: "خدمات منزلية",
          finishing: "خدمات التشطيب والديكور",
          maintenance: "خدمات تصليح وصيانة",
          other: "خدمات أخرى"
        },
        links: {
          title: "لينكات",
          home: "الرئيسية",
          services: "الخدمات",
          contact: "اتصل بنا",
          packages: "الباقات",
          about: "من نحن",
          blog: "المدونة",
          privacy: "سياسة الخصوصية"
        },
        contact: {
          title: "اتصل بنا",
          egyptOffice: "مكتب حجز جمهورية مصر العربية",
          newCairo: "القاهرة الجديدة 270 عمارة الأندلس أمام هايد بارك",
          mansoura: "المنصورة - 20 شارع أحمد ماهر",
          phone: "01090009330",
          uaeOffice: "مكتب حجز الإمارات العربية",
          dubai: "15 شارع البرشاء 1 دبي، الإمارات العربية المتحدة"
        },
        copyright: "جميع الحقوق محفوظة لشركة Dubai-Hotel-Service. تصميم بواسطة أهداف ويب"
      }
    }
  }
};

// Custom language detector
const customLanguageDetector = {
  name: "customDetector",
  lookup() {
    const storedLang = sessionStorage.getItem("i18nextLng");
    return storedLang || "ar";
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: sessionStorage.getItem("i18nextLng") || "ar",
  fallbackLng: "ar",
  detection: {
    order: ["customDetector"]
  },
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
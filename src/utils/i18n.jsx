import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        services: "Services",
        packages: "Packages",
        offers: "Offers",
        aboutUs: "About Us",
        contactUs: "Contact Us",
        blog: "Blog",
        login: "Login",
        signUp: "Sign Up",
      },
      homeBackground: {
        title:
          "Professional Cleaning and Sterilization Services for Apartments and Hotels",
        description:
          "Our professional team transforms your home into a healthy and comfortable place with the latest technologies. Experience the difference today",
        searchPlaceholder: "Search for service",
        bookButton: "Book Your Service",
      },
      feedbackCounter: {
        satisfiedClients: "Satisfied Clients",
        yearsExperience: "Years of Experience",
        completedProjects: "Completed Projects",
        professionalTeam: "Professional Team Members",
      },
      services: {
        title: "Our Services",
        description:
          "Discover our comprehensive range of professional services designed to meet your needs",
      },
      homeServices: {
        title: "Home Services",
        description:
          "Comprehensive cleaning services that suit your home's needs",
      },
      commercialServices: {
        title: "Commercial Services",
        description: "Professional cleaning solutions for your business needs",
      },
      searchService: {
        text: "Search for a service",
      },
      feedback: {
        title: "Customer Reviews",
        description: "What our customers say about our services",
        defaultComment: "Excellent service!",
      },
    },
  },
  ar: {
    translation: {
      header: {
        home: "الرئيسية",
        services: "الخدمات",
        packages: "الباقات",
        offers: "العروض",
        aboutUs: "من نحن",
        contactUs: "اتصل بنا",
        blog: "المدونة",
        login: "تسجيل دخول",
        signUp: "انشاء حساب",
      },
      homeBackground: {
        title: "خدمات تنظيف وتعقيم احترافية للشقق والفنادق",
        description:
          "فريقنا المحترف يحول منزلك لمكان صحي ومريح بأحدث التقنيات. جربي الفرق اليوم",
        searchPlaceholder: "ابحث عن الخدمه",
        bookButton: "احجز خدمتك",
      },
      feedbackCounter: {
        satisfiedClients: "عميل راضي",
        yearsExperience: "سنوات من الخبرة",
        completedProjects: "عدد المشاريع المنجزة",
        professionalTeam: "فريق عمل محترف",
      },
      services: {
        title: "خدماتنا",
        description:
          "اكتشف مجموعتنا الشاملة من الخدمات المهنية المصممة لتلبية احتياجاتك",
      },
      homeServices: {
        title: "خدمات منزلية",
        description: "خدمات تنظيف شاملة تتناسب مع احتياجات منزلك",
      },
      commercialServices: {
        title: "خدمات تجارية",
        description: "حلول تنظيف احترافية لتلبية احتياجات عملك",
      },
      searchService: {
        text: "ابحث عن خدمه",
      },
      feedback: {
        title: "آراء العملاء",
        description: "ماذا يقول عملاؤنا عن خدماتنا",
        defaultComment: "ولا اروع",
      },
    },
  },
};

// Custom language detector
const customLanguageDetector = {
  name: "customDetector",
  lookup() {
    const storedLang = sessionStorage.getItem("i18nextLng");
    return storedLang || "ar";
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ar",
  detection: {
    order: ["customDetector"],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

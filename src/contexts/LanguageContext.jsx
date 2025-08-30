import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

  useEffect(() => {
    // Initialize language from sessionStorage or default to 'ar'
    const storedLang = sessionStorage.getItem('i18nextLng') || 'ar';
    i18n.changeLanguage(storedLang);
    setIsArabic(storedLang === 'ar');
    
    // Update document attributes
    document.documentElement.lang = storedLang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = storedLang === 'ar' ? 'rtl' : 'ltr';
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = isArabic ? 'en' : 'ar';
    
    // Update sessionStorage
    sessionStorage.setItem('i18nextLng', newLang);
    
    // Update state
    setIsArabic(newLang === 'ar');
    
    // Change i18n language
    i18n.changeLanguage(newLang);
    
    // Update document attributes
    document.documentElement.lang = newLang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const changeLanguage = (lang) => {
    if (i18n.language === lang) return;
    
    // Update sessionStorage
    sessionStorage.setItem('i18nextLng', lang);
    
    // Update state
    setIsArabic(lang === 'ar');
    
    // Change i18n language
    i18n.changeLanguage(lang);
    
    // Update document attributes
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <LanguageContext.Provider value={{ 
      isArabic, 
      toggleLanguage, 
      changeLanguage 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
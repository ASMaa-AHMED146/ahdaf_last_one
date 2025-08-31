import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const MainArticleContent = ({ post }) => {
  const { isArabic } = useLanguage();
  const defaultImage = "/images/gas.jpg"; // صورة افتراضية

  // في حالة عدم وجود مقال
  if (!post) {
    return (
      <div className="w-full">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500 text-lg">المقال غير متاح</div>
        </div>
      </div>
    );
  }

  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // تنسيق المحتوى لعرضه مع الفقرات والقوائم
  const formatContent = (content) => {
    if (!content) return '';
        
    // تقسيم المحتوى إلى فقرات
    const paragraphs = content.split('\n').filter(p => p.trim() !== '');
        
    return paragraphs.map((paragraph, index) => {
      // التحقق من وجود قائمة
      if (paragraph.includes('•') || paragraph.includes('-')) {
        const listItems = paragraph.split(/[•-]/).filter(item => item.trim() !== '');
        return (
          <ul key={index} className="list-disc pr-6 space-y-2 mb-4">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex}>{item.trim()}</li>
            ))}
          </ul>
        );
      } else {
        return (
          <p key={index} className="mb-4 leading-7">
            {paragraph}
          </p>
        );
      }
    });
  };

  return (
    <div className="w-full">
      {/* صورة المقال */}
      <img
        src={post.image || defaultImage}
        alt={isArabic ? post.title_ar : post.title_en}
        className="rounded-md mb-6 w-full h-[450px] bg-gray-100 object-fill"
        onError={(e) => {
          e.target.src = defaultImage;
        }}
      />
            
      {/* عنوان المقال */}
      <h1 className="text-2xl font-bold mb-4">
        {isArabic ? post.title_ar : post.title_en}
      </h1>
            
      {/* محتوى المقال */}
      <div className="prose prose-lg max-w-none">
        {formatContent(isArabic ? post.content_ar : post.content_en)}
      </div>
         
    </div>
  );
};

export default MainArticleContent;
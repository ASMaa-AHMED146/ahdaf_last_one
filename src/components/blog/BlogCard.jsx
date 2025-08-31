// import { Link } from "react-router-dom";
// import { useLanguage } from "../../contexts/LanguageContext";
// import defaultImage from "../../assets/images/logo.png"
// const BlogCard = ({ post }) => {
//   const { isArabic } = useLanguage();
         
//   // إظهار المقالات النشطة فقط
//   if (!post.is_active) {
//     return null;
//   }
 
//   // تنسيق التاريخ
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };
 
//   return (
//     <Link 
//       to={`/post/${post.id}`}
//       className="block rounded-md p-2 hover:shadow-md transition-all duration-200 hover:scale-[1.02] shadow-[0px_0px_10px_0px_#9C9C9C29]"
//     >
//       {/* container نسبي للصورة واسم الفئة */}
//       <div className="relative rounded-md mb-2 overflow-hidden">
//         <img 
//           src={post.image || defaultImage}
//           alt={isArabic ? post.title_ar : post.title_en}
//           className="w-full h-48 object-cover"
//           onError={(e) => {
//             e.target.src = defaultImage; // استخدام الصورة الافتراضية في حالة فشل تحميل الصورة
//           }}
//         />
        
//         {/* عرض اسم الفئة على الصورة */}
//         {post.category && (
//           <div className="absolute bottom-2 right-2 bg-[#C0C0C08A] bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
//             {isArabic ? post.category?.name_ar : post.category?.name_en}
//           </div>
//         )}
//       </div>
                       
//       <h2 className="mt-2 text-sm font-bold hover:text-blue-600 transition-colors">
//         {isArabic ? post.title_ar : post.title_en}
//       </h2>

//       {/* محتوى مقتطف (أول 100 حرف) */}
//       <p className="text-xs text-gray-600 mt-2 line-clamp-2">
//         {isArabic 
//           ? post.content_ar?.substring(0, 100) + (post.content_ar?.length > 100 ? '...' : '')
//           : post.content_en?.substring(0, 100) + (post.content_en?.length > 100 ? '...' : '')
//         }
//       </p>
                       
//       <div className="text-primary text-sm mt-2 inline-block hover:text-primary-hover transition-colors">
//         {isArabic ? 'اقرأ المزيد ←' : 'Read More →'}
//       </div>
//     </Link>
//   );
// };

// export default BlogCard;
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import defaultImage from "../../assets/images/logo.png"

const BlogCard = ({ post }) => {
  const { isArabic } = useLanguage();
  
  // إظهار المقالات المنشورة فقط - استخدم status بدلاً من is_active
  if (post.status !== 'published') {
    return null;
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
  
  return (
    <Link 
      to={`/post/${post.id}`}
      className="block rounded-md p-2 hover:shadow-md transition-all duration-200 hover:scale-[1.02] shadow-[0px_0px_10px_0px_#9C9C9C29]"
    >
      {/* container نسبي للصورة واسم الفئة */}
      <div className="relative rounded-md mb-2 overflow-hidden">
        <img 
          src={post.image || defaultImage}
          alt={isArabic ? post.title_ar : post.title_en}
          className="w-full h-60 object-fill object-top"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
        
        {/* عرض اسم الفئة على الصورة */}
        {post.category && (
          <div className="absolute bottom-2 right-2 bg-[#C0C0C08A] bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
            {/* استخدم name من الـ API response */}
            {post.category.name}
          </div>
        )}
      </div>
      
      <h2 className="mt-2 text-sm font-bold hover:text-[#F36C35] transition-colors">
        {isArabic ? post.title_ar : post.title_en}
      </h2>
      
      {/* محتوى مقتطف (أول 100 حرف) */}
      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
        {isArabic 
          ? post.content_ar?.substring(0, 100) + (post.content_ar?.length > 100 ? '...' : '')
          : post.content_en?.substring(0, 100) + (post.content_en?.length > 100 ? '...' : '')
        }
      </p>
      
      <div className="text-primary text-sm mt-2 inline-block hover:text-primary-hover transition-colors">
        {isArabic ? 'اقرأ المزيد ←' : 'Read More →'}
      </div>
    </Link>
  );
};

export default BlogCard;
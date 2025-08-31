// // import { useLanguage } from "../../contexts/LanguageContext";
// // import defaultImage from "../../assets/images/logo.png"
// // import { Link } from "react-router-dom";

// // const LatestPosts = ({ posts = [] }) => {
// //   const { isArabic } = useLanguage();

// //   // فلترة المقالات النشطة وترتيبها حسب التاريخ وأخذ أول 3
// //   const latestPosts = posts
// //     .filter(post => post.is_active)
// //     .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
// //     .slice(0, 3);

// //   // تنسيق التاريخ
// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
// //       day: 'numeric',
// //       month: 'long',
// //       year: 'numeric'
// //     });
// //   };

// //   if (latestPosts.length === 0) {
// //     return (
// //       <div className="bg-[#FAFAFA] p-5 rounded-md">
// //         <h3 className="text-lg font-bold mb-3">
// //           {isArabic ? "أحدث المنشورات" : "Latest Posts"}
// //         </h3>
// //         <p className="text-sm text-gray-200">
// //           {isArabic ? "لا توجد منشورات متاحة" : "No posts available"}
// //         </p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="bg-[#FAFAFA] p-5 rounded-md">
// //       <h3 className="text-lg font-bold mb-3">
// //         {isArabic ? "أحدث المنشورات" : "Latest Posts"}
// //       </h3>
// //       {latestPosts.map((post) => (
// //         <div key={post.id} className="flex gap-2 mb-3 last:mb-0 shadow-[0px_0px_4px_0px_#C5C5C529] border border-[#1A747447]">
// //           <img 
// //             src={post.image || defaultImage} 
// //             className="w-12 h-12 rounded-sm object-cover"
// //             alt={isArabic ? post.title_ar : post.title_en}
// //             onError={(e) => {
// //               e.target.src = defaultImage;
// //             }}
// //           />
// //           <div className="text-xs flex-1">
// //             {/* تاريخ النشر */}
// //             <div className="text-[10px] mt-1 text-[#C4C4C4]">
// //               {formatDate(post.created_at)}
// //             </div>          
// //             {/* عرض اسم الفئة */}
// //             <div className="mt-1">
// //               {isArabic ? post.category?.name_ar : post.category?.name_en}
// //             </div>
// //               <Link 
// //               to={`/post/${post.id}`}
// //               className="text-[#707070] hover:underline block"
// //             >
// //               <div className="font-medium line-clamp-2">
// //                 {isArabic ? post.title_ar : post.title_en}
// //               </div>
// //             </Link>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default LatestPosts;
// import { useLanguage } from "../../contexts/LanguageContext";
// import defaultImage from "../../assets/images/logo.png"
// import { Link } from "react-router-dom";

// const LatestPosts = ({ posts = [] }) => {
//   const { isArabic } = useLanguage();

//   // فلترة المقالات النشطة وترتيبها حسب التاريخ وأخذ أول 3
//   // Since your API doesn't return is_active, we'll filter by status instead
//   const latestPosts = posts
//     .filter(post => post.status === 'published') // Use status instead of is_active
//     .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
//     .slice(0, 3);

//   // تنسيق التاريخ
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric'
//     });
//   };

//   if (latestPosts.length === 0) {
//     return (
//       <div className="bg-[#FAFAFA] p-5 rounded-md">
//         <h3 className="text-lg font-bold mb-3">
//           {isArabic ? "أحدث المنشورات" : "Latest Posts"}
//         </h3>
//         <p className="text-sm text-gray-500">
//           {isArabic ? "لا توجد منشورات متاحة" : "No posts available"}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-[#FAFAFA] p-5 rounded-md">
//       <h3 className="text-lg font-bold mb-3">
//         {isArabic ? "أحدث المنشورات" : "Latest Posts"}
//       </h3>
//       {latestPosts.map((post) => (
//         <div key={post.id} className="flex gap-2 mb-3 last:mb-0 shadow-[0px_0px_4px_0px_#C5C5C529] border border-[#1A747447]">
//           <img 
//             src={post.image || defaultImage}
//             className="w-12 h-12 rounded-sm object-cover"
//             alt={isArabic ? post.title_ar : post.title_en}
//             onError={(e) => {
//               e.target.src = defaultImage;
//             }}
//           />
//           <div className="text-xs flex-1">
//             {/* تاريخ النشر */}
//             <div className="text-[10px] mt-1 text-[#C4C4C4]">
//               {formatDate(post.created_at)}
//             </div>
                      
//             {/* عرض اسم الفئة */}
//             <div className="mt-1">
//               {isArabic ? post.category?.name_ar : post.category?.name_en}
//             </div>
              
//             <Link
//               to={`/post/${post.id}`}
//               className="text-[#707070] hover:underline block"
//             >
//               <div className="font-medium line-clamp-2">
//                 {isArabic ? post.title_ar : post.title_en}
//               </div>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default LatestPosts;
import { useLanguage } from "../../contexts/LanguageContext";
import defaultImage from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const LatestPosts = ({ posts = [] }) => {
  const { isArabic } = useLanguage();
  
  // فلترة المقالات المنشورة وترتيبها حسب التاريخ وأخذ أول 3
  const latestPosts = posts
    .filter(post => post.status === 'published')
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);
  
  // تنسيق التاريخ
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isArabic ? 'ar-EG' : 'en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  
  if (latestPosts.length === 0) {
    return (
      <div className="p-5 rounded-md">
        <h3 className="text-lg font-bold mb-3">
          {isArabic ? "أحدث المنشورات" : "Latest Posts"}
        </h3>
        <p className="text-sm text-gray-500">
          {isArabic ? "لا توجد منشورات متاحة" : "No posts available"}
        </p>
      </div>
    );
  }
  
  return (
    <div className="p-5 rounded-md">
      <h3 className="text-lg font-bold mb-3">
        {isArabic ? "أحدث المنشورات" : "Latest Posts"}
      </h3>
      {latestPosts.map((post) => (
        <div key={post.id} className="flex gap-2 mb-3 last:mb-0 shadow-[0px_0px_4px_0px_#C5C5C529] border border-[#1A747447] p-1.5 bg-[#1A74740A]">
          <img 
            src={post.image || defaultImage}
            className="w-12 h-12 rounded-sm object-cover"
            alt={isArabic ? post.title_ar : post.title_en}
            onError={(e) => {
              e.target.src = defaultImage;
            }}
          />
          <div className="text-xs flex-1">
            {/* تاريخ النشر */}
            <div className="text-[10px] mt-1 text-[#C4C4C4]">
              {formatDate(post.created_at)}
            </div>
            
            {/* عرض اسم الفئة - استخدم name من الـ API response */}
            <div className="mt-1">
              {post.category?.name}
            </div>
            
            <Link
              to={`/post/${post.id}`}
              className="text-[#707070] hover:underline block"
            >
              <div className="font-medium line-clamp-2">
                {isArabic ? post.title_ar : post.title_en}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
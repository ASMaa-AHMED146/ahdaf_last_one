// import { useLanguage } from "../../contexts/LanguageContext";

// const CategoriesList = ({ 
//   categories = [], 
//   selectedCategoryId, 
//   onCategoryChange 
// }) => {
//   const { isArabic } = useLanguage();

//   if (categories.length === 0) {
//     return (
//       <div className="mb-6">
//         <h3 className="font-bold text-lg mb-2">
//           {isArabic ? "الفئات" : "Categories"}
//         </h3>
//         <p className="text-gray-500 text-sm">
//           {isArabic ? "لا توجد فئات متاحة" : "No categories available"}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="mb-6 bg-[#FAFAFA] p-5">
//       <h3 className="font-bold text-lg mb-2">
//         {isArabic ? "الفئات" : "Categories"}
//       </h3>
//       <ul className="space-y-2">
//         {categories.map((category) => (
//           <li 
//             key={category.id} 
//             className={`flex justify-between text-sm transition cursor-pointer p-2 rounded ${
//               selectedCategoryId === category.id 
//                 ? 'bg-blue-100 text-blue-700 font-medium' 
//                 : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
//             }`}
//             onClick={() => onCategoryChange(category.id)}
//           >
//             <span className="flex-1">
//               {isArabic ? category.name_ar : category.name_en}
//             </span>
//             <span className={`${
//               selectedCategoryId === category.id ? 'text-blue-500' : 'text-gray-400'
//             }`}>
//               ({category.postsCount})
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoriesList;
import { useLanguage } from "../../contexts/LanguageContext";

const CategoriesList = ({
  categories = [],
  selectedCategoryId,
  onCategoryChange
}) => {
  const { isArabic } = useLanguage();

  if (categories.length === 0) {
    return (
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2">
          {isArabic ? "الفئات" : "Categories"}
        </h3>
        <p className="text-gray-500 text-sm">
          {isArabic ? "لا توجد فئات متاحة" : "No categories available"}
        </p>
      </div>
    );
  }

  return (
    <div className="mb-6 p-5">
      <h3 className="font-bold text-lg mb-2">
        {isArabic ? "الفئات" : "Categories"}
      </h3>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li 
            key={category.id}
            className={`flex justify-between text-sm transition cursor-pointer p-2 rounded ${
              selectedCategoryId === category.id
                ? 'bg-[#f36b3557] text-[#000]'
                : 'text-[#707070] hover:bg-[#f36b3557]'
            }`}
            onClick={() => onCategoryChange(category.id)}
          >
            <span className="flex-1">
              {isArabic ? category.title_ar : category.title_en}
            </span>
            <span className={`${
              selectedCategoryId === category.id ? 'text-[#000]' : 'text-[#707070]'
            }`}>
              ({category.postsCount})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
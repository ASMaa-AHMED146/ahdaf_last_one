// // // // import React, { useState, useEffect } from 'react';
// // // // import { useLocation } from "react-router-dom";
// // // // import { useDispatch, useSelector } from 'react-redux';
// // // // import BlogGrid from "../components/blog/BlogGrid";
// // // // import Sidebar from "../components/blog/Sidebar";
// // // // import Pagination from "../components/blog/Pagination";
// // // // import LatestPosts from "../components/blog/LatestPosts";
// // // // import actGetCategories from '../store/blog/actGetCategories';
// // // // import actGetPosts from '../store/posts/actGetPosts';

// // // // export default function Blog() {
// // // //   const dispatch = useDispatch();
// // // //   const location = useLocation();
  
// // // //   // جلب البيانات من Redux store
// // // //   const { items: categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories);
// // // //   const { items: posts, loading: postsLoading, error: postsError } = useSelector((state) => state.posts);
  
// // // //   // State للصفحة والفلترة
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
// // // //   const postsPerPage = 6;

// // // //   // استخراج category من URL query parameters
// // // //   useEffect(() => {
// // // //     const urlParams = new URLSearchParams(location.search);
// // // //     const categoryFromUrl = urlParams.get('category');
// // // //     if (categoryFromUrl) {
// // // //       setSelectedCategoryId(parseInt(categoryFromUrl));
// // // //     }
// // // //   }, [location.search]);

// // // //   // جلب البيانات عند تحميل المكون
// // // //   useEffect(() => {
// // // //     dispatch(actGetCategories());
// // // //     dispatch(actGetPosts());
// // // //   }, [dispatch]);

// // // //   // معالجة البيانات وحساب عدد المقالات لكل فئة
// // // //   const processedCategories = categories
// // // //     .filter(category => category.posts && category.posts.length > 0)
// // // //     .map(category => ({
// // // //       ...category,
// // // //       postsCount: category.posts.filter(post => post.status === 'published').length
// // // //     }));

// // // //   // استخراج جميع المقالات من جميع الفئات
// // // //   const allPosts = categories.flatMap(category => 
// // // //     category.posts 
// // // //       ? category.posts
// // // //           .filter(post => post.status === 'published')
// // // //           .map(post => ({
// // // //             ...post,
// // // //             category: {
// // // //               id: category.id,
// // // //               name_ar: category.title_ar,
// // // //               name_en: category.title_en
// // // //             }
// // // //           }))
// // // //       : []
// // // //   );

// // // //   // تعيين أول فئة بها مقالات كـ default إذا لم يتم تحديد فئة من URL
// // // //   useEffect(() => {
// // // //     if (processedCategories.length > 0 && !selectedCategoryId) {
// // // //       const urlParams = new URLSearchParams(location.search);
// // // //       const categoryFromUrl = urlParams.get('category');
      
// // // //       if (!categoryFromUrl) {
// // // //         setSelectedCategoryId(processedCategories[0].id);
// // // //       }
// // // //     }
// // // //   }, [processedCategories, selectedCategoryId, location.search]);

// // // //   // فلترة المقالات حسب الفئة المختارة
// // // //   const filteredPosts = selectedCategoryId 
// // // //     ? allPosts.filter(post => post.category?.id === selectedCategoryId)
// // // //     : allPosts;

// // // //   // حساب المقالات المعروضة في الصفحة الحالية
// // // //   const indexOfLastPost = currentPage * postsPerPage;
// // // //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
// // // //   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
// // // //   // حساب العدد الإجمالي للصفحات
// // // //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

// // // //   const handlePageChange = (pageNumber) => {
// // // //     setCurrentPage(pageNumber);
// // // //     // التمرير إلى أعلى الصفحة عند تغيير الصفحة
// // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // //   };

// // // //   const handleCategoryChange = (categoryId) => {
// // // //     setSelectedCategoryId(categoryId);
// // // //     setCurrentPage(1); // إعادة تعيين الصفحة للأولى عند تغيير الفئة
// // // //     // تحديث URL بدون إعادة تحميل الصفحة
// // // //     const newUrl = categoryId ? `${window.location.pathname}?category=${categoryId}` : window.location.pathname;
// // // //     window.history.replaceState({}, '', newUrl);
// // // //   };

// // // //   const loading = categoriesLoading || postsLoading;
// // // //   const error = categoriesError || postsError;

// // // //   return (
// // // //     <div>
// // // //       {/* content */}
// // // //       <div className="p-4">
// // // //         <div className="flex flex-col lg:flex-row">
// // // //           <Sidebar 
// // // //             categories={processedCategories} 
// // // //             posts={allPosts} 
// // // //             selectedCategoryId={selectedCategoryId}
// // // //             onCategoryChange={handleCategoryChange}
// // // //           />
// // // //           <div className="w-full">
// // // //             {loading && (
// // // //               <div className="max-w-7xl mx-auto">
// // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // // //                   {/* Loading skeletons */}
// // // //                   {Array.from({ length: 6 }).map((_, index) => (
// // // //                     <div key={index} className="bg-white shadow-md rounded overflow-hidden">
// // // //                       <div className="h-48 bg-gray-300 animate-pulse"></div>
// // // //                       <div className="p-4 text-center">
// // // //                         <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
// // // //                         <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             )}
            
// // // //             {error && (
// // // //               <div className="flex justify-center items-center h-64">
// // // //                 <div className="text-red-500 text-lg">{error}</div>
// // // //               </div>
// // // //             )}
            
// // // //             {!loading && !error && (
// // // //               <>
// // // //                 <BlogGrid posts={currentPosts} />
// // // //                 {totalPages > 1 && (
// // // //                   <Pagination
// // // //                     currentPage={currentPage}
// // // //                     totalPages={totalPages}
// // // //                     onPageChange={handlePageChange}
// // // //                   />
// // // //                 )}
                
// // // //                 {/* إظهار LatestPosts في الشاشات الصغيرة والمتوسطة فقط */}
// // // //                 <div className="lg:hidden mt-8">
// // // //                   <LatestPosts posts={allPosts} />
// // // //                 </div>
// // // //               </>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }
// // // import React, { useState, useEffect } from 'react';
// // // import { useLocation } from "react-router-dom";
// // // import { useDispatch, useSelector } from 'react-redux';
// // // import BlogGrid from "../components/blog/BlogGrid";
// // // import Sidebar from "../components/blog/Sidebar";
// // // import Pagination from "../components/blog/Pagination";
// // // import LatestPosts from "../components/blog/LatestPosts";
// // // import actGetCategories from '../store/categories/actGetCategories';
// // // import actGetPosts from '../store/posts/actGetPosts';

// // // export default function Blog() {
// // //   const dispatch = useDispatch();
// // //   const location = useLocation();
  
// // //   // جلب البيانات من Redux store
// // //   const { items: categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories || { items: [], loading: false, error: null });
// // //   const { items: posts, loading: postsLoading, error: postsError } = useSelector((state) => state.posts || { items: [], loading: false, error: null });
  
// // //   // State للصفحة والفلترة
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
// // //   const postsPerPage = 6;

// // //   // استخراج category من URL query parameters
// // //   useEffect(() => {
// // //     const urlParams = new URLSearchParams(location.search);
// // //     const categoryFromUrl = urlParams.get('category');
// // //     if (categoryFromUrl) {
// // //       setSelectedCategoryId(parseInt(categoryFromUrl));
// // //     }
// // //   }, [location.search]);

// // //   // جلب البيانات عند تحميل المكون
// // //   useEffect(() => {
// // //     dispatch(actGetCategories());
// // //     dispatch(actGetPosts());
// // //   }, [dispatch]);

// // //   // معالجة البيانات وحساب عدد المقالات لكل فئة
// // //   const processedCategories = categories
// // //     .filter(category => category.posts && category.posts.length > 0)
// // //     .map(category => ({
// // //       ...category,
// // //       postsCount: category.posts.filter(post => post.status === 'published').length
// // //     }));

// // //   // استخراج جميع المقالات من جميع الفئات
// // //   const allPosts = categories.flatMap(category => 
// // //     category.posts 
// // //       ? category.posts
// // //           .filter(post => post.status === 'published')
// // //           .map(post => ({
// // //             ...post,
// // //             category: {
// // //               id: category.id,
// // //               name_ar: category.title_ar,
// // //               name_en: category.title_en
// // //             }
// // //           }))
// // //       : []
// // //   );

// // //   // تعيين أول فئة بها مقالات كـ default إذا لم يتم تحديد فئة من URL
// // //   useEffect(() => {
// // //     if (processedCategories.length > 0 && !selectedCategoryId) {
// // //       const urlParams = new URLSearchParams(location.search);
// // //       const categoryFromUrl = urlParams.get('category');
      
// // //       if (!categoryFromUrl) {
// // //         setSelectedCategoryId(processedCategories[0].id);
// // //       }
// // //     }
// // //   }, [processedCategories, selectedCategoryId, location.search]);

// // //   // فلترة المقالات حسب الفئة المختارة
// // //   const filteredPosts = selectedCategoryId 
// // //     ? allPosts.filter(post => post.category?.id === selectedCategoryId)
// // //     : allPosts;

// // //   // حساب المقالات المعروضة في الصفحة الحالية
// // //   const indexOfLastPost = currentPage * postsPerPage;
// // //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
// // //   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
// // //   // حساب العدد الإجمالي للصفحات
// // //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

// // //   const handlePageChange = (pageNumber) => {
// // //     setCurrentPage(pageNumber);
// // //     // التمرير إلى أعلى الصفحة عند تغيير الصفحة
// // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // //   };

// // //   const handleCategoryChange = (categoryId) => {
// // //     setSelectedCategoryId(categoryId);
// // //     setCurrentPage(1); // إعادة تعيين الصفحة للأولى عند تغيير الفئة
// // //     // تحديث URL بدون إعادة تحميل الصفحة
// // //     const newUrl = categoryId ? `${window.location.pathname}?category=${categoryId}` : window.location.pathname;
// // //     window.history.replaceState({}, '', newUrl);
// // //   };

// // //   const loading = categoriesLoading || postsLoading;
// // //   const error = categoriesError || postsError;

// // //   return (
// // //     <div>
// // //       {/* content */}
// // //       <div className="p-4">
// // //         <div className="flex flex-col lg:flex-row">
// // //           <Sidebar 
// // //             categories={processedCategories} 
// // //             posts={allPosts} 
// // //             selectedCategoryId={selectedCategoryId}
// // //             onCategoryChange={handleCategoryChange}
// // //           />
// // //           <div className="w-full">
// // //             {loading && (
// // //               <div className="max-w-7xl mx-auto">
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// // //                   {/* Loading skeletons */}
// // //                   {Array.from({ length: 6 }).map((_, index) => (
// // //                     <div key={index} className="bg-white shadow-md rounded overflow-hidden">
// // //                       <div className="h-48 bg-gray-300 animate-pulse"></div>
// // //                       <div className="p-4 text-center">
// // //                         <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
// // //                         <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             )}
            
// // //             {error && (
// // //               <div className="flex justify-center items-center h-64">
// // //                 <div className="text-red-500 text-lg">{error}</div>
// // //               </div>
// // //             )}
            
// // //             {!loading && !error && (
// // //               <>
// // //                 <BlogGrid posts={currentPosts} />
// // //                 {totalPages > 1 && (
// // //                   <Pagination
// // //                     currentPage={currentPage}
// // //                     totalPages={totalPages}
// // //                     onPageChange={handlePageChange}
// // //                   />
// // //                 )}
                
// // //                 {/* إظهار LatestPosts في الشاشات الصغيرة والمتوسطة فقط */}
// // //                 <div className="lg:hidden mt-8">
// // //                   <LatestPosts posts={allPosts} />
// // //                 </div>
// // //               </>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useEffect, useMemo } from 'react';
// // import { useLocation } from "react-router-dom";
// // import { useDispatch, useSelector } from 'react-redux';
// // import { createSelector } from '@reduxjs/toolkit';
// // import BlogGrid from "../components/blog/BlogGrid";
// // import Sidebar from "../components/blog/Sidebar";
// // import Pagination from "../components/blog/Pagination";
// // import LatestPosts from "../components/blog/LatestPosts";
// // import actGetCategories from '../store/categories/actGetCategories';
// // import actGetPosts from '../store/posts/actGetPosts';

// // // Memoized selectors to prevent unnecessary re-renders
// // const selectCategoriesState = (state) => state.categories || { items: [], loading: false, error: null };
// // const selectPostsState = (state) => state.posts || { items: [], loading: false, error: null };

// // // Memoized selector to combine categories with their posts
// // const selectCategoriesWithPosts = createSelector(
// //   [selectCategoriesState, selectPostsState],
// //   (categoriesState, postsState) => {
// //     const { items: categories } = categoriesState;
// //     const { items: posts } = postsState;
    
// //     // Group posts by category
// //     const postsByCategory = posts.reduce((acc, post) => {
// //       const categoryId = post.category?.id;
// //       if (categoryId) {
// //         if (!acc[categoryId]) {
// //           acc[categoryId] = [];
// //         }
// //         acc[categoryId].push({
// //           ...post,
// //           status: 'published' // Assuming all posts from API are published
// //         });
// //       }
// //       return acc;
// //     }, {});
    
// //     // Add posts to categories
// //     return categories.map(category => ({
// //       ...category,
// //       posts: postsByCategory[category.id] || []
// //     }));
// //   }
// // );

// // // Memoized selector for processed categories (categories with posts)
// // const selectProcessedCategories = createSelector(
// //   [selectCategoriesWithPosts],
// //   (categoriesWithPosts) => 
// //     categoriesWithPosts
// //       .filter(category => category.posts && category.posts.length > 0)
// //       .map(category => ({
// //         ...category,
// //         postsCount: category.posts.filter(post => post.status === 'published').length
// //       }))
// // );

// // // Memoized selector for all posts with category info
// // const selectAllPosts = createSelector(
// //   [selectCategoriesWithPosts],
// //   (categoriesWithPosts) => 
// //     categoriesWithPosts.flatMap(category => 
// //       category.posts 
// //         ? category.posts
// //             .filter(post => post.status === 'published')
// //             .map(post => ({
// //               ...post,
// //               category: {
// //                 id: category.id,
// //                 name_ar: category.title_ar,
// //                 name_en: category.title_en
// //               }
// //             }))
// //         : []
// //     )
// // );

// // export default function Blog() {
// //   const dispatch = useDispatch();
// //   const location = useLocation();
  
// //   // Use memoized selectors
// //   const categoriesState = useSelector(selectCategoriesState);
// //   const postsState = useSelector(selectPostsState);
// //   const processedCategories = useSelector(selectProcessedCategories);
// //   const allPosts = useSelector(selectAllPosts);
  
// //   // State للصفحة والفلترة
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
// //   const postsPerPage = 6;

// //   // استخراج category من URL query parameters
// //   useEffect(() => {
// //     const urlParams = new URLSearchParams(location.search);
// //     const categoryFromUrl = urlParams.get('category');
// //     if (categoryFromUrl) {
// //       setSelectedCategoryId(parseInt(categoryFromUrl));
// //     }
// //   }, [location.search]);

// //   // جلب البيانات عند تحميل المكون
// //   useEffect(() => {
// //     dispatch(actGetCategories());
// //     dispatch(actGetPosts());
// //   }, [dispatch]);

// //   // تعيين أول فئة بها مقالات كـ default إذا لم يتم تحديد فئة من URL
// //   useEffect(() => {
// //     if (processedCategories.length > 0 && !selectedCategoryId) {
// //       const urlParams = new URLSearchParams(location.search);
// //       const categoryFromUrl = urlParams.get('category');
      
// //       if (!categoryFromUrl) {
// //         setSelectedCategoryId(processedCategories[0].id);
// //       }
// //     }
// //   }, [processedCategories, selectedCategoryId, location.search]);

// //   // Memoized filtered posts
// //   const filteredPosts = useMemo(() => {
// //     return selectedCategoryId 
// //       ? allPosts.filter(post => post.category?.id === selectedCategoryId)
// //       : allPosts;
// //   }, [allPosts, selectedCategoryId]);

// //   // Memoized current posts for pagination
// //   const currentPosts = useMemo(() => {
// //     const indexOfLastPost = currentPage * postsPerPage;
// //     const indexOfFirstPost = indexOfLastPost - postsPerPage;
// //     return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
// //   }, [filteredPosts, currentPage, postsPerPage]);
  
// //   // حساب العدد الإجمالي للصفحات
// //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //     // التمرير إلى أعلى الصفحة عند تغيير الصفحة
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const handleCategoryChange = (categoryId) => {
// //     setSelectedCategoryId(categoryId);
// //     setCurrentPage(1); // إعادة تعيين الصفحة للأولى عند تغيير الفئة
// //     // تحديث URL بدون إعادة تحميل الصفحة
// //     const newUrl = categoryId ? `${window.location.pathname}?category=${categoryId}` : window.location.pathname;
// //     window.history.replaceState({}, '', newUrl);
// //   };

// //   const loading = categoriesState.loading || postsState.loading;
// //   const error = categoriesState.error || postsState.error;

// //   return (
// //     <div>
// //       {/* content */}
// //       <div className="p-4">
// //         <div className="flex flex-col lg:flex-row">
// //           <Sidebar 
// //             categories={processedCategories} 
// //             posts={allPosts} 
// //             selectedCategoryId={selectedCategoryId}
// //             onCategoryChange={handleCategoryChange}
// //           />
// //           <div className="w-full">
// //             {loading && (
// //               <div className="max-w-7xl mx-auto">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //                   {/* Loading skeletons */}
// //                   {Array.from({ length: 6 }).map((_, index) => (
// //                     <div key={index} className="bg-white shadow-md rounded overflow-hidden">
// //                       <div className="h-48 bg-gray-300 animate-pulse"></div>
// //                       <div className="p-4 text-center">
// //                         <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
// //                         <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
            
// //             {error && (
// //               <div className="flex justify-center items-center h-64">
// //                 <div className="text-red-500 text-lg">{error}</div>
// //               </div>
// //             )}
            
// //             {!loading && !error && (
// //               <>
// //                 <BlogGrid posts={currentPosts} />
// //                 {totalPages > 1 && (
// //                   <Pagination
// //                     currentPage={currentPage}
// //                     totalPages={totalPages}
// //                     onPageChange={handlePageChange}
// //                   />
// //                 )}
                
// //                 {/* إظهار LatestPosts في الشاشات الصغيرة والمتوسطة فقط */}
// //                 <div className="lg:hidden mt-8">
// //                   <LatestPosts posts={allPosts} />
// //                 </div>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState, useEffect, useMemo } from 'react';
// import { useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { createSelector } from '@reduxjs/toolkit';
// import BlogGrid from "../components/blog/BlogGrid";
// import Sidebar from "../components/blog/Sidebar";
// import Pagination from "../components/blog/Pagination";
// import LatestPosts from "../components/blog/LatestPosts";
// import actGetCategories from '../store/categories/actGetCategories';
// import actGetPosts from '../store/posts/actGetPosts';

// // Base selectors - don't create new objects
// const selectCategoriesState = (state) => state.categories;
// const selectPostsState = (state) => state.posts;

// // Memoized selectors with safe defaults
// const selectCategories = createSelector(
//   [selectCategoriesState],
//   (categoriesState) => categoriesState?.items || []
// );

// const selectPosts = createSelector(
//   [selectPostsState],
//   (postsState) => postsState?.items || []
// );

// const selectCategoriesLoading = createSelector(
//   [selectCategoriesState],
//   (categoriesState) => categoriesState?.loading || false
// );

// const selectPostsLoading = createSelector(
//   [selectPostsState],
//   (postsState) => postsState?.loading || false
// );

// const selectCategoriesError = createSelector(
//   [selectCategoriesState],
//   (categoriesState) => categoriesState?.error || null
// );

// const selectPostsError = createSelector(
//   [selectPostsState],
//   (postsState) => postsState?.error || null
// );

// // Memoized selector to combine categories with their posts
// const selectCategoriesWithPosts = createSelector(
//   [selectCategories, selectPosts],
//   (categories, posts) => {
//     // Group posts by category
//     const postsByCategory = posts.reduce((acc, post) => {
//       const categoryId = post.category?.id;
//       if (categoryId) {
//         if (!acc[categoryId]) {
//           acc[categoryId] = [];
//         }
//         acc[categoryId].push({
//           ...post,
//           status: 'published' // Assuming all posts from API are published
//         });
//       }
//       return acc;
//     }, {});
    
//     // Add posts to categories
//     return categories.map(category => ({
//       ...category,
//       posts: postsByCategory[category.id] || []
//     }));
//   }
// );

// // Memoized selector for processed categories (categories with posts)
// const selectProcessedCategories = createSelector(
//   [selectCategoriesWithPosts],
//   (categoriesWithPosts) => 
//     categoriesWithPosts
//       .filter(category => category.posts && category.posts.length > 0)
//       .map(category => ({
//         ...category,
//         postsCount: category.posts.filter(post => post.status === 'published').length
//       }))
// );

// // Memoized selector for all posts with category info
// const selectAllPosts = createSelector(
//   [selectCategoriesWithPosts],
//   (categoriesWithPosts) => 
//     categoriesWithPosts.flatMap(category => 
//       category.posts 
//         ? category.posts
//             .filter(post => post.status === 'published')
//             .map(post => ({
//               ...post,
//               category: {
//                 id: category.id,
//                 name_ar: category.title_ar,
//                 name_en: category.title_en
//               }
//             }))
//         : []
//     )
// );

// export default function Blog() {
//   const dispatch = useDispatch();
//   const location = useLocation();
  
//   // Use memoized selectors
//   const categories = useSelector(selectCategories);
//   const posts = useSelector(selectPosts);
//   const categoriesLoading = useSelector(selectCategoriesLoading);
//   const postsLoading = useSelector(selectPostsLoading);
//   const categoriesError = useSelector(selectCategoriesError);
//   const postsError = useSelector(selectPostsError);
//   const processedCategories = useSelector(selectProcessedCategories);
//   const allPosts = useSelector(selectAllPosts);
  
//   // State للصفحة والفلترة
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
//   const postsPerPage = 6;

//   // استخراج category من URL query parameters
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const categoryFromUrl = urlParams.get('category');
//     if (categoryFromUrl) {
//       setSelectedCategoryId(parseInt(categoryFromUrl));
//     }
//   }, [location.search]);

//   // جلب البيانات عند تحميل المكون
//   useEffect(() => {
//     dispatch(actGetCategories());
//     dispatch(actGetPosts());
//   }, [dispatch]);

//   // تعيين أول فئة بها مقالات كـ default إذا لم يتم تحديد فئة من URL
//   useEffect(() => {
//     if (processedCategories.length > 0 && !selectedCategoryId) {
//       const urlParams = new URLSearchParams(location.search);
//       const categoryFromUrl = urlParams.get('category');
      
//       if (!categoryFromUrl) {
//         setSelectedCategoryId(processedCategories[0].id);
//       }
//     }
//   }, [processedCategories, selectedCategoryId, location.search]);

//   // Memoized filtered posts
//   const filteredPosts = useMemo(() => {
//     return selectedCategoryId 
//       ? allPosts.filter(post => post.category?.id === selectedCategoryId)
//       : allPosts;
//   }, [allPosts, selectedCategoryId]);

//   // Memoized current posts for pagination
//   const currentPosts = useMemo(() => {
//     const indexOfLastPost = currentPage * postsPerPage;
//     const indexOfFirstPost = indexOfLastPost - postsPerPage;
//     return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
//   }, [filteredPosts, currentPage, postsPerPage]);
  
//   // حساب العدد الإجمالي للصفحات
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     // التمرير إلى أعلى الصفحة عند تغيير الصفحة
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleCategoryChange = (categoryId) => {
//     setSelectedCategoryId(categoryId);
//     setCurrentPage(1); // إعادة تعيين الصفحة للأولى عند تغيير الفئة
//     // تحديث URL بدون إعادة تحميل الصفحة
//     const newUrl = categoryId ? `${window.location.pathname}?category=${categoryId}` : window.location.pathname;
//     window.history.replaceState({}, '', newUrl);
//   };

//   const loading = categoriesLoading || postsLoading;
//   const error = categoriesError || postsError;

//   return (
//     <div>
//       {/* content */}
//       <div className="p-4">
//         <div className="flex flex-col lg:flex-row">
//           <Sidebar 
//             categories={processedCategories} 
//             posts={allPosts} 
//             selectedCategoryId={selectedCategoryId}
//             onCategoryChange={handleCategoryChange}
//           />
//           <div className="w-full">
//             {loading && (
//               <div className="max-w-7xl mx-auto">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                   {/* Loading skeletons */}
//                   {Array.from({ length: 6 }).map((_, index) => (
//                     <div key={index} className="bg-white shadow-md rounded overflow-hidden">
//                       <div className="h-48 bg-gray-300 animate-pulse"></div>
//                       <div className="p-4 text-center">
//                         <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
//                         <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
            
//             {error && (
//               <div className="flex justify-center items-center h-64">
//                 <div className="text-red-500 text-lg">{error}</div>
//               </div>
//             )}
            
//             {!loading && !error && (
//               <>
//                 <BlogGrid posts={currentPosts} />
//                 {totalPages > 1 && (
//                   <Pagination
//                     currentPage={currentPage}
//                     totalPages={totalPages}
//                     onPageChange={handlePageChange}
//                   />
//                 )}
                
//                 {/* إظهار LatestPosts في الشاشات الصغيرة والمتوسطة فقط */}
//                 <div className="lg:hidden mt-8">
//                   <LatestPosts posts={allPosts} />
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import BlogGrid from "../components/blog/BlogGrid";
import Sidebar from "../components/blog/Sidebar";
import Pagination from "../components/blog/Pagination";
import LatestPosts from "../components/blog/LatestPosts";
import actGetCategories from '../store/categories/actGetCategories';

// Base selectors
const selectCategoriesState = (state) => state.categories;

// Memoized selectors with safe defaults
const selectCategories = createSelector(
  [selectCategoriesState],
  (categoriesState) => categoriesState?.items || []
);

const selectCategoriesLoading = createSelector(
  [selectCategoriesState],
  (categoriesState) => categoriesState?.loading || false
);

const selectCategoriesError = createSelector(
  [selectCategoriesState],
  (categoriesState) => categoriesState?.error || null
);

// استخراج جميع المقالات من الفئات
const selectAllPostsFromCategories = createSelector(
  [selectCategories],
  (categories) => {
    const allPosts = [];
    categories.forEach(category => {
      if (category.posts && Array.isArray(category.posts)) {
        category.posts.forEach(post => {
          allPosts.push({
            ...post,
            category: {
              id: category.id,
              name_ar: category.title_ar, 
              name_en: category.title_en,
              title_ar: category.title_ar,
              title_en: category.title_en
            }
          });
        });
      }
    });
    return allPosts.filter(post => post.status === 'published');
  }
);

// الفئات التي تحتوي على مقالات
const selectProcessedCategories = createSelector(
  [selectCategories],
  (categories) => 
    categories
      .filter(category => category.posts && category.posts.length > 0)
      .map(category => ({
        ...category,
        postsCount: category.posts.filter(post => post.status === 'published').length
      }))
      .filter(category => category.postsCount > 0) // فقط الفئات التي لها مقالات منشورة
);

export default function Blog() {
  const dispatch = useDispatch();
  const location = useLocation();
  
  // Use memoized selectors
  const categories = useSelector(selectCategories);
  const categoriesLoading = useSelector(selectCategoriesLoading);
  const categoriesError = useSelector(selectCategoriesError);
  const processedCategories = useSelector(selectProcessedCategories);
  const allPosts = useSelector(selectAllPostsFromCategories);
  
  // State للصفحة والفلترة
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  
  const postsPerPage = 6;

  // استخراج category من URL query parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const categoryFromUrl = urlParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategoryId(parseInt(categoryFromUrl));
    }
  }, [location.search]);

  // جلب البيانات عند تحميل المكون - فقط categories لأن البوستس جاية معاها
  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  // تعيين أول فئة بها مقالات كـ default إذا لم يتم تحديد فئة من URL
  useEffect(() => {
    if (processedCategories.length > 0 && !selectedCategoryId) {
      const urlParams = new URLSearchParams(location.search);
      const categoryFromUrl = urlParams.get('category');
      
      if (!categoryFromUrl) {
        setSelectedCategoryId(processedCategories[0].id);
      }
    }
  }, [processedCategories, selectedCategoryId, location.search]);

  // Memoized filtered posts
  const filteredPosts = useMemo(() => {
    return selectedCategoryId 
      ? allPosts.filter(post => post.category?.id === selectedCategoryId)
      : allPosts;
  }, [allPosts, selectedCategoryId]);

  // Memoized current posts for pagination
  const currentPosts = useMemo(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [filteredPosts, currentPage, postsPerPage]);
  
  // حساب العدد الإجمالي للصفحات
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setCurrentPage(1);
    const newUrl = categoryId ? `${window.location.pathname}?category=${categoryId}` : window.location.pathname;
    window.history.replaceState({}, '', newUrl);
  };

  const loading = categoriesLoading;
  const error = categoriesError;

  // Debug logs - احذفها بعد التأكد من عمل كل شيء
  console.log('Categories:', categories);
  console.log('Processed Categories:', processedCategories);
  console.log('All Posts:', allPosts);

  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row">
          <Sidebar 
            categories={processedCategories} 
            posts={allPosts} 
            selectedCategoryId={selectedCategoryId}
            onCategoryChange={handleCategoryChange}
          />
          <div className="w-full">
            {loading && (
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="bg-white shadow-md rounded overflow-hidden">
                      <div className="h-48 bg-gray-300 animate-pulse"></div>
                      <div className="p-4 text-center">
                        <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
                        <div className="h-4 bg-gray-300 animate-pulse rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {error && (
              <div className="flex justify-center items-center h-64">
                <div className="text-red-500 text-lg">{error}</div>
              </div>
            )}
            
            {!loading && !error && (
              <>
                <BlogGrid posts={currentPosts} />
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
                
                <div className="lg:hidden mt-8">
                  <LatestPosts posts={allPosts} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
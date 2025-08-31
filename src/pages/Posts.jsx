import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import MainArticleContent from "../components/post/MainArticleContent";
import Sidebar from "../components/blog/Sidebar";
import LatestPosts from "../components/blog/Sidebar";
import actGetCategories from '../store/categories/actGetCategories';
import actGetPosts from '../store/posts/actGetPosts';

const Posts = () => {
  const { id } = useParams(); // جلب id المقال من URL
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  // جلب البيانات من Redux store
  const { items: categories, loading: categoriesLoading, error: categoriesError } = useSelector((state) => state.categories);
  const { items: posts, loading: postsLoading, error: postsError } = useSelector((state) => state.posts);
  
  const [post, setPost] = useState(null);
  const [processedCategories, setProcessedCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  // جلب البيانات عند تحميل المكون
  useEffect(() => {
    dispatch(actGetCategories());
    dispatch(actGetPosts());
  }, [dispatch]);

  // معالجة البيانات عند تحديثها
  useEffect(() => {
    if (categories.length > 0) {
      // معالجة الفئات وحساب عدد المقالات لكل فئة
      const processed = categories
        .filter(category => category.posts && category.posts.length > 0)
        .map(category => ({
          ...category,
          postsCount: category.posts.filter(post => post.status === 'published').length
        }));

      // استخراج جميع المقالات من جميع الفئات
      const extractedPosts = categories.flatMap(category => 
        category.posts 
          ? category.posts
              .filter(post => post.status === 'published')
              .map(post => ({
                ...post,
                category: {
                  id: category.id,
                  name_ar: category.title_ar,
                  name_en: category.title_en
                },
                is_active: true // إضافة خاصية is_active للتوافق مع LatestPosts
              }))
          : []
      );

      setProcessedCategories(processed);
      setAllPosts(extractedPosts);

      // العثور على المقال المطلوب
      if (id) {
        const currentPost = extractedPosts.find(p => p.id === parseInt(id));
        if (currentPost) {
          setPost(currentPost);
        } else {
          setPost({ error: "المقال غير موجود" });
        }
      }
    }
  }, [categories, id]);

  // دالة للتعامل مع الضغط على الفئة - الانتقال لصفحة Blog
  const handleCategoryChange = (categoryId) => {
    navigate(`/blog?category=${categoryId}`);
  };

  const loading = categoriesLoading || postsLoading;
  const error = categoriesError || postsError;

  if (loading) {
    return (
      <div className="p-4">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Loading Skeleton */}
          <div className="w-full lg:w-1/4 lg:pr-6 mb-6 lg:mb-0">
            <div className="bg-white shadow-md rounded p-4 mb-6">
              <div className="h-6 bg-gray-300 animate-pulse mb-4 rounded"></div>
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
            <div className="bg-white shadow-md rounded p-4">
              <div className="h-6 bg-gray-300 animate-pulse mb-4 rounded"></div>
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-300 animate-pulse rounded"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-300 animate-pulse mb-2 rounded"></div>
                      <div className="h-3 bg-gray-300 animate-pulse rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Content Loading Skeleton */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white shadow-md rounded p-6">
              {/* Title skeleton */}
              <div className="h-8 bg-gray-300 animate-pulse mb-4 rounded"></div>
              
              {/* Meta info skeleton */}
              <div className="flex gap-4 mb-6">
                <div className="h-4 bg-gray-300 animate-pulse w-24 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-20 rounded"></div>
                <div className="h-4 bg-gray-300 animate-pulse w-28 rounded"></div>
              </div>
              
              {/* Image skeleton */}
              <div className="h-64 bg-gray-300 animate-pulse mb-6 rounded"></div>
              
              {/* Content skeleton */}
              <div className="space-y-4">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="h-4 bg-gray-300 animate-pulse rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-red-500 text-lg">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="p-4">
        <div className="flex flex-col lg:flex-row">
          <Sidebar 
            categories={processedCategories} 
            posts={allPosts} 
            onCategoryChange={handleCategoryChange}
          />
          <div className="w-full lg:w-3/4">
            <MainArticleContent post={post} />
            
            {/* إظهار LatestPosts في الشاشات الصغيرة والمتوسطة فقط */}
            <div className="lg:hidden mt-8">
              <LatestPosts posts={allPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
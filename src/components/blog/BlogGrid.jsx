import BlogCard from './BlogCard';

const BlogGrid = ({ posts = [] }) => {
  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-500 text-lg">لا توجد مقالات متاحة</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
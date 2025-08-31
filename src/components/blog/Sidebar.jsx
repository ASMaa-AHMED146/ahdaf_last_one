import CategoriesList from "./CategoriesList";
import LatestPosts from "./LatestPosts";

const Sidebar = ({
  categories = [],
  posts = [],
  selectedCategoryId,
  onCategoryChange
}) => (
  <aside className="lg:w-1/4 w-full lg:pl-6">
    <CategoriesList
      categories={categories}
      selectedCategoryId={selectedCategoryId}
      onCategoryChange={onCategoryChange}
    />
    {/* إظهار LatestPosts في الشاشات الكبيرة فقط */}
    <div className="hidden lg:block">
      <LatestPosts posts={posts} />
    </div>
  </aside>
);

export default Sidebar;
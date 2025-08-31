const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // إنشاء مصفوفة من أرقام الصفحات
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5; // عدد الصفحات المرئية
    
    if (totalPages <= maxVisiblePages) {
      // إذا كان العدد الإجمالي أقل من أو يساوي العدد المرئي
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // منطق أكثر تعقيداً لعرض الصفحات
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }
    
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* زر الصفحة السابقة */}
      <button 
        className={`px-3 py-1 rounded ${
          currentPage === 1 
            ? 'text-gray-300 cursor-not-allowed' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        ⟨⟨
      </button>

      {/* أرقام الصفحات */}
      {pageNumbers.map(pageNumber => (
        <button 
          key={pageNumber} 
          className={`px-3 py-1 rounded-full transition-colors ${
            pageNumber === currentPage 
              ? "bg-cyan-600 text-white" 
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      {/* زر الصفحة التالية */}
      <button 
        className={`px-3 py-1 rounded ${
          currentPage === totalPages 
            ? 'text-gray-300 cursor-not-allowed' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        ⟩⟩
      </button>
    </div>
  );
};

export default Pagination;
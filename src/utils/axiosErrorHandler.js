import { isAxiosError } from "axios";

const axiosErrorHandler = (error) => {
  console.log(error);
  if(isAxiosError(error))
  {
      if(!error.response)
  {
    return 'مشكله في الانترنت'
  }
  if(error.response.status === 500)
  {
    return 'خطا من الخادم'
  }
  if(error.response.status === 401)
  {
    return 'يبدو انك لا تملك الصلاحيات'
  }
  if(error.response.status === 404)
  {
    return 'لا توجد بيانات '
  }
  return error.response?.data?.message || error.response?.data || error.message;
  }
  return "خطا غير متوقع"
};

export default axiosErrorHandler;
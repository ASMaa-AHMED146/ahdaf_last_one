// import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
// import axiosErrorHandler from "../../utils/axiosErrorHandler"

// const actGetPosts = createAsyncThunk("posts/actGetPosts", async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//         const res = await axios.get('https://api.dubai-hotel-service.com/public/api/posts');
//         return res.data.data;
//     } catch (error) {
//         console.log(error);
//         return rejectWithValue(axiosErrorHandler(error));
//     }
// })

// export default actGetPosts
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../utils/axiosErrorHandler"

const actGetPosts = createAsyncThunk("posts/actGetPosts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        // بما أن البيانات جاية مع الـ categories، ممكن نخلي الـ action ده فاضي أو نشيله
        // أو نستخدمه لجلب بيانات إضافية لو موجودة
        const res = await axios.get('https://api.dubai-hotel-service.com/public/api/posts');
        return res.data.data || []; // في حالة وجود endpoint منفصل للـ posts
    } catch (error) {
        console.log(error);
        // إرجاع array فاضي بدل error لأن البيانات جاية من الـ categories
        return [];
    }
})

export default actGetPosts
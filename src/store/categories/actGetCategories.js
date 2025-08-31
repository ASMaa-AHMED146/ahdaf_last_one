import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../utils/axiosErrorHandler"

// const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//         const res = await axios.get('https://api.dubai-hotel-service.com/public/api/categories');
//         return res.data.data;
//     } catch (error) {
//         console.log(error);
//         return rejectWithValue(axiosErrorHandler(error));
//     }
// })
const actGetCategories = createAsyncThunk("categories/actGetCategories", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.get('https://api.dubai-hotel-service.com/public/api/categories');
        console.log('API Response:', res.data); // للتأكد من البيانات
        return res.data.data; // تأكد أن البيانات في res.data.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(axiosErrorHandler(error));
    }
})
export default actGetCategories
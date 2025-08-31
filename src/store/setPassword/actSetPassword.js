// import { createAsyncThunk } from "@reduxjs/toolkit"
// import axios from "axios"
// import axiosErrorHandler from "../../utils/axiosErrorHandler"

// const actSetPassword = createAsyncThunk("setPassword/actSetPassword", async (formdata, thunkAPI) => {
//     console.log(formdata);
    
//     const { rejectWithValue } = thunkAPI;
//     try {
//         // تحويل البيانات للصيغة المطلوبة
//         const requestData = {
//             email: formdata.email, // هنمرر الإيميل من الكومبوننت
//             code: parseInt(formdata.code), // تحويل الكود لرقم
//             password: formdata.password,
//             password_confirmation: formdata.confpassword // استخدام confpassword من الفورم
//         };
        
//         const res = await axios.post('http://apidigital.ahdafweb.com/public/api/password/reset', requestData);
//         console.log(res.data);
//         return res.data;
//     } catch (error) {
//         console.log(error);
//         return rejectWithValue(axiosErrorHandler(error));
//     }
// })

// export default actSetPassword
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import axiosErrorHandler from "../../utils/axiosErrorHandler"

const actSetPassword = createAsyncThunk("setPassword/actSetPassword", async (formdata, thunkAPI) => {
    console.log(formdata);
    
    const { rejectWithValue } = thunkAPI;
    try {
        // تحويل البيانات للصيغة المطلوبة
        const requestData = {
            email: formdata.email, // هنمرر الإيميل من الكومبوننت
            code: parseInt(formdata.code), // تحويل الكود لرقم
            password: formdata.password,
            password_confirmation: formdata.confpassword // استخدام confpassword من الفورم
        };
        
        const res = await axios.post('https://api.dubai-hotel-service.com/public/api/password/reset', requestData);
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(axiosErrorHandler(error));
    }
})

export default actSetPassword
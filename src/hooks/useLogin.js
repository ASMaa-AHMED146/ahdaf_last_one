import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import actAuthLogin from "../store/auth/act/actAuthLogin";
import {resetUI} from "../store/auth/authSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import loginSchema from "../validtions/loginSchema";


const userLogin=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {loading,error}=useSelector((state)=>state.auth);

    const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginSchema),
  });

  const submitForm =async(data)=>{
    console.log(data)
    dispatch(actAuthLogin(data)).unwrap().then(()=>{navigate('/auth/verfication')})
  }
  
  useEffect(()=>{
    return()=>{
        dispatch(resetUI());
    }
  },[dispatch])

  return {loading,error,errors,submitForm,register,handleSubmit}

}
export default userLogin;
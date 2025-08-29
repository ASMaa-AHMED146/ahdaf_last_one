import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import actAuthRegister from "../store/auth/act/actAuthRegister";
import {resetUI} from "../store/auth/authSlice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import signUpSchema from "../validtions/registerSchema";


const useregister=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {loading,error}=useSelector((state)=>state.Auth);

    const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(signUpSchema),
  });

  const submitForm =async(data)=>{
    console.log(data)
    dispatch(actAuthRegister(data)).unwrap().then(()=>{navigate('/')})
  }
  
  useEffect(()=>{
    return()=>{
        dispatch(resetUI());
    }
  },[dispatch])

  return {loading,error,errors,submitForm,register,handleSubmit}

}
export default useregister;
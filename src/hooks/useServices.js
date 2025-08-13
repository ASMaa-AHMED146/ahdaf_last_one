import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"
import actGetservices from "../store/services/act/actGetServices"
export default function useHome() {
    const dispatch =useDispatch();
      useEffect(()=>{
        dispatch(actGetservices());
    },[dispatch])

    const {loading,error,records}=useSelector((state)=>state.serv);
  return {loading,error,records}
}

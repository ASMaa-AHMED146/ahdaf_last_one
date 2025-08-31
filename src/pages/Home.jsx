import React from 'react'
import Homebackgroundsection from "../components/sections/Homebackgroundsection"
import Countersection from "../components/sections/Countersection"
import ServicesSlider from "../components/sections/ServicesSlider"
import useHome from "../hooks/useServices"
import FeedbacksSection from "../components/sections/FeedbacksSection"
import PackageHomeSection from "../components/sections/PackageHomeSection"
import { useSelector } from 'react-redux'

{/* <CircularProgress /> */}

export default function Home() {
    const {loading,error,records}=useHome();

    const state=useSelector((state)=>state);
    console.log(state)
  
  return (
    <div>
      <Homebackgroundsection />
      <Countersection/>
      <ServicesSlider records={records}/>
      <FeedbacksSection/>
      <PackageHomeSection/>
    </div>
  )
}

import React from 'react'
import Homebackgroundsection from "../components/sections/Homebackgroundsection"
import Countersection from "../components/sections/Countersection"
import ServicesSlider from "../components/sections/ServicesSlider"
import useHome from "../hooks/useServices"
import FeedbacksSection from "../components/sections/FeedbacksSection"
import PackageHomeSection from "../components/sections/PackageHomeSection"
{/* <CircularProgress /> */}

export default function Home() {
    const {loading,error,records}=useHome();
  
  return (
    <div>
      <Homebackgroundsection/>
      <Countersection/>
      <ServicesSlider records={records}/>
      <FeedbacksSection/>
      <PackageHomeSection/>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
export default function authlayout() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

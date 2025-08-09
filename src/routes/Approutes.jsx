import React, { lazy } from 'react'
import { Suspense } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

//layouts
const Mainlayout =lazy(()=>import("../layouts/mainlayout"))
const Authlayout =lazy(()=>import("../layouts/authlayout"));

//import pages
const Login =lazy(()=>import("../Auth/Login"))
const Register =lazy(()=>import("../Auth/Createnewaccount"));
const Home =lazy(()=>import("../pages/Home"));
const Services =lazy(()=>import('../pages/Services'));
const Error =lazy(()=>import('../pages/Error'));
const Packages =lazy(()=>import("../pages/Packages"));
const Aboutus =lazy(()=>import("../pages/Aboutus"));
const Callus =lazy(()=>import("../pages/CallUs"));
const Offers =lazy(()=>import("../pages/Offers"));
const Blog =lazy(()=>import("../pages/Blog"));



const router=createBrowserRouter([{
  path:'/',
  element:(
    <Suspense>
      <Mainlayout/>
    </Suspense>
  ),errorElement:<Error/>,
  children:[
    {
      index:true,
      element:(
        <Home/>
      )
    },
    {
      path:'services',
      element:(
        <Services/>
      )
    },
    {
      path:'packages',
      element:(
        <Packages/>
      )
    }
    ,
    {
      path:'aboutus',
      element:(
        <Aboutus/>
      )
    }
    ,
    {
      path:'callus',
      element:(
        <Callus/>
      )
    }
    ,
    {
      path:'offers',
      element:(
        <Offers/>
      )
    }
    ,
    {
      path:'blog',
      element:(
        <Blog/>
      )
    }
  ]
},
{
  path:'/auth',
  element:(
    <Suspense>
      <Authlayout/>
    </Suspense>
  ),errorElement:<Error/>,
  children:[
  {
    index:true,
    element:(
      <Login/>
    )
  },
  {
    path:'login',
    element:(
      <Register/>
    )
  }
]
}
])
const AppRouter=()=>{
  return <RouterProvider router={router}/>
}
export default AppRouter;
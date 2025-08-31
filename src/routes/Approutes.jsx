import React, { lazy } from 'react'
import { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//pagecallback
import PageSuspenseFallback from "../components/feedback/PageSuspenseFallback/PageSuspenseFallback"
import LottieHandler from '../components/feedback/LottieHandler/LottieHandler';

//layouts
const Mainlayout = lazy(() => import("../layouts/mainlayout"))
const Authlayout = lazy(() => import("../layouts/authlayout"));

//import pages
const Login = lazy(() => import("../Auth/Login"));
const Createnewpassword = lazy(() => import("../Auth/Createnewaccount"));
const ForgetPassword = lazy(() => import("../Auth/ForgetPassword"));
// const Verfication = lazy(() => import("../Auth/Verification"));
const Register = lazy(() => import("../Auth/Createnewaccount"));
const Home = lazy(() => import("../pages/Home"));
const Services = lazy(() => import('../pages/Services'));
const Subservice = lazy(() => import('../pages/Subservices'))
const Error = lazy(() => import('../pages/Error'));
const Packages = lazy(() => import("../pages/Packages"));
const Aboutus = lazy(() => import("../pages/Aboutus"));
const Callus = lazy(() => import("../pages/CallUs"));
const Offers = lazy(() => import("../pages/Offers"));
const Blog = lazy(() => import("../pages/Blog"));
const Posts = lazy(() => import("../pages/Posts"));
const Booking = lazy(() => import("../pages/Booking"));
const PackageDetails = lazy(() => import("../pages/Packagesdetails"));
const EmailVerfy=lazy(()=>import('../Auth/verfEmail'));
const CodeVerfy=lazy(()=>import('../Auth/Verification'))
const Offerdetails=lazy(()=>import('../pages/Offerdetails'));
const Setpassword=lazy(()=>import('../Auth/Setpassword'));
const Police=lazy(()=>import('../pages/PrivacyPolicies'))


const router = createBrowserRouter([{
  path: '/',
  element: (
    <Suspense fallback={
      <div>
        <LottieHandler type='loading' message="Loading please wait..." />
      </div>
    } >
      <Mainlayout />
    </Suspense>
  ), errorElement: <Error />,
  children: [
    {
      index: true,
      element: (
        <PageSuspenseFallback>
          <Home />
        </PageSuspenseFallback>
      )
    },
    {
      path: 'services',
      element: (
        <PageSuspenseFallback>
          <Services />
        </PageSuspenseFallback>
      )
    },
    {
      path: '/services/subservices/:id',
      element: <PageSuspenseFallback>
        <Subservice />
      </PageSuspenseFallback>
    },
    {
      path: '/police',
      element: <PageSuspenseFallback>
        <Police />
      </PageSuspenseFallback>
    },
    {
      path: 'packages',
      element: (
        <PageSuspenseFallback>
          <Packages />
        </PageSuspenseFallback>
      )
    },
    {
      path: '/packages/packagesdetails/:id',
      element:
        <PageSuspenseFallback>
          <PackageDetails />
        </PageSuspenseFallback>

    }
    ,
    {
      path: 'aboutus',
      element: (
        <Aboutus />
      )
    }
    ,
    {
      path: '/offers/offerdetails/:id',
      element: (
        <Offerdetails />
      )
    }
    ,
    {
      path: 'booking',
      element: (
        <Booking />
      )
    }
    ,
    {
      path: 'callus',
      element: (
        <Callus />
      )
    }
    ,
    {
      path: 'offers',
      element: (
        <Offers />
      )
    }
    ,
    {
      path: 'blog',
      element: (
        <Blog />
      )
    }
    ,
    {
      path: 'post/:id',
      element: (
        <Posts />
      )
    }
  ]
},
{
  path: '/auth',
  element: (
    <Suspense>
      <Authlayout />
    </Suspense>
  ), errorElement: <Error />,
  children: [
    {
      index: true,
      element: (
        <Login />
      )
    }
    ,
    {
      path: 'login',
      element: (
        <Register />
      )
    }
    ,
    {
      path: 'setpassword',
      element: (
        <Setpassword />
      )
    }
    ,
    {
      path: 'forgetPassword',
      element: (
        <ForgetPassword />
      )
    },
    // {
    //   path: 'verfication',
    //   element:
    //     <Verfication />

    // },
    {
      path: 'codeverfy',
      element:
        <CodeVerfy />

    },
    {
      path: 'emailverfy',
      element:
        <EmailVerfy />

    }
  ]
}
])
const AppRouter = () => {
  return <RouterProvider router={router} />
}
export default AppRouter;
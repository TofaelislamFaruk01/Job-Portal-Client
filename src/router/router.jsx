import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h2>Route not found</h2>,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/jobs/:id',
        element: <PrivateRoute><JobDetails/></PrivateRoute>,
        loader: ({params})=>fetch(`https://job-portal-server-rho-snowy.vercel.app/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply/></PrivateRoute>

      },
      {
        path:'/myApplications',
        element: <PrivateRoute><MyApplications/></PrivateRoute>

      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'signIn',
        element:<SignIn/>
      }
    ]
    },
  ]);

  export default router;
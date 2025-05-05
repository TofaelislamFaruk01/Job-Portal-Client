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
        loader: ({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path:'/jobApply/:id',
        element:<PrivateRoute><JobApply/></PrivateRoute>

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
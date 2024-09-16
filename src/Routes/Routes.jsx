
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Properties from "../Pages/Properties";
import AboutUs from "../Pages/AboutUs";
import ViewPropertryDetails from "../ProtectedRoute/ViewPropertryDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Pages/Profile";
import Buy from "../Pages/Buy";
import Sell from "../Pages/Sell";
import Rent from "../Pages/Rent";
import NotFoud from "../Pages/NotFoud";
// import { HelmetProvider } from 'react-helmet';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch("fakedata.json"),
        },
        {
          path: '/updateprofile',
          element: <UpdateProfile></UpdateProfile>
        },
        {
          path: '/properties',
          element: <Properties></Properties>
        },
        {
          path: '/aboutus',
          element: <AboutUs></AboutUs>
        },
        {
          path: '/:id',
          element: <ProtectedRoute><ViewPropertryDetails></ViewPropertryDetails></ProtectedRoute>
        },
        {
          path: '/profile',
          element: <ProtectedRoute><Profile></Profile></ProtectedRoute>
        },
        {
          path: '/buy',
          element: <ProtectedRoute><Buy></Buy></ProtectedRoute>
        },
        {
          path: '/sell',
          element: <ProtectedRoute><Sell></Sell></ProtectedRoute>
        },
        {
          path: '/rent',
          element: <ProtectedRoute><Rent></Rent></ProtectedRoute>
        }
      ]
    }
  ]);

const Routes = () => {
    return (

      <RouterProvider router={router}></RouterProvider>
    );
};

export default Routes;
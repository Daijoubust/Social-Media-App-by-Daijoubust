import React from 'react'
import Login from './pages/login/Login';
import Register from './pages/register/Register'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
  } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import LeftBar from './components/leftBar/LeftBar';
import RightBar from './components/rightBar/RightBar';
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import "./style.scss"
// import {useContext} from 'react'
// import { DarkModeContextProvider } from './context/darkModeContext';

function App() {

  const currentUser = true;

  // const {darkMode} = useContext(DarkModeContext)

  // console.log(darkMode);

  const Layout = () => {
    return(
      <div className="theme-light">
        <NavBar/>
        <div style={{display:"flex"}}>
          <LeftBar/>
          <div style={{flex:6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Login to ="/login"/>;
    }

    return children;
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: 
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App

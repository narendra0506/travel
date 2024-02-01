import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./Components/layout";
import About from './Pages/about';
import Home from './Pages/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Pages/contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Dashboard from './Pages/dashboard';
import Formdata from './Pages/Form';
import FormLogin from './Pages/Formlogin';
import Exams from './Pages/Exams';
import Thankyou from './Pages/Thankyou';


function App() {
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/form",
      element: <Formdata />,
    },
    {
      path: "/formlogin",
      element: <FormLogin />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/thankyou",
      element: <Thankyou />,
    },
    {
      path: "/exams",
      element: <Exams />,
    },
    
  ]);
  return <RouterProvider router={routes}></RouterProvider>;    
  
  
}

export default App

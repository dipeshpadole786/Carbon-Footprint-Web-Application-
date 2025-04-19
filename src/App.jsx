import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Homepage } from './pages/Homepage';
import { Country } from './pages/Country';
import { Applayout } from "./Applayout";
import { Error } from "./pages/Error";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Address } from './pages/Address'
import { Done } from './pages/Done'
import { Tips } from "./pages/Tips";
import Map from "./pages/Map";




const router = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <Error />,
    children: [


      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "about/address",
        element: <Address />
      },
      {
        path: "about/address/done",
        element: <Done></Done>
      },
      {
        path: "tips",
        element: <Tips></Tips>
      },
      {
        path:"map",
        element: <Map></Map>
      }
      
    ]
  }

])

function App() {


  return <RouterProvider router={router}></RouterProvider>
}

export default App;

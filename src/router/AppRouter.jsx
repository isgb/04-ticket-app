import { Navigate, RouterProvider, createBrowserRouter } from "react-router"
import { Ingresar } from "../pages/Ingresar"
import { Cola } from "../pages/Cola"
import { CreateTicket } from "../pages/CreateTicket"
import { RouterPage } from "../pages/RouterPage"
import { Escritorio } from "../pages/Escritorio"
 
const router = createBrowserRouter([
    {
        path:'/',
        element:<RouterPage />,
        children:[
            { path:'/login', element: <Ingresar/> },
            { path:'/cola',  element:  <Cola /> },
            { path:'/crear', element: <CreateTicket /> },
            { path:'/escritorio', element: <Escritorio /> },
            { path:'/*', element:<Navigate to='/login' replace/>}
        ]
    },
])
 
export const AppRouter = () => {
 
  return (
    <>
        <RouterProvider router={ router } />
    </>
  )
}
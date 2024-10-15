import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { SignIn,SignUp,Category,Product,Adminlayout } from "@modules";
 import App from "../App";
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route index element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
                <Route path="admin-layout" element={<Adminlayout/>}>
                <Route index element={<Product/>} />
                <Route path="admin-layout/category" element={<Category/>} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}/>  
 }
 export default Index
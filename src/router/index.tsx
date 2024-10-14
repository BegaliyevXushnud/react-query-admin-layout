import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { SignIn,SignUp } from "@modules";
 import App from "../App";
 const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route index element={<SignIn/>}/>
                <Route path="sign-up" element={<SignUp/>}/>
            
            </Route>
        )
    );
    return <RouterProvider router={router}/>  
 }
 export default Index
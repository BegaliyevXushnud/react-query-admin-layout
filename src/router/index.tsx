import  { lazy, Suspense } from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Loading } from '@component';
const SignIn = lazy(() => delayForDemo(import('@modules')))
const SignUp = lazy(() => delayForDemo(import('@modules')))
const Category = lazy(() => delayForDemo(import('@modules')))
const AdminLayout = lazy(() => delayForDemo(import('@modules')))


const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Suspense fallback={<Loading/>}><SignIn/></Suspense>} />
                <Route path='sign-up' element={<Suspense fallback={<Loading/>}><SignUp/></Suspense>} />
                <Route path="admin-layout" element={<Suspense fallback={<Loading/>}><AdminLayout/></Suspense>}>
                    <Route index element={<Suspense fallback={<Loading/>}><Category/></Suspense>} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />;
}
function delayForDemo(promise: Promise<any>) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
export default Index;

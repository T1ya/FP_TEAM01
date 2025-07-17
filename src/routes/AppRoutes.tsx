import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";


import NotFound from "../pages/NotFound/NotFound";
import Addons from "../pages/Addons/Addons";
import Order from "../pages/Order/Order";
import Brewing from "../pages/Brewing/Brewing";
import Ready from "../pages/Ready/Ready";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";

export default function AppRoutes() {
  return (
   <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path={ROUTES.ORDER} element={<MainLayout/>}>
            <Route index element={<Order/>} />
            <Route path=":orderId" element={<div>Order Details</div>} />
            </Route>
        <Route path={ROUTES.ADDONS} element={<MainLayout/>}>
            <Route index element={<Addons/>} />
            <Route path=":addonId" element={<div>Addon Details</div>} />
        </Route>
        <Route path={ROUTES.BREWING} element={<MainLayout/>}>
            <Route index element={<Brewing/>} />
            <Route path=":brewId" element={<div>Brewing Details</div>} />
        </Route>
        <Route path={ROUTES.READY} element={<MainLayout/>}>
            <Route index element={<Ready/>} />
            <Route path=":readyId" element={<div>Ready Details</div>} />
        </Route>
        <Route path={ROUTES.ABOUT} element={<MainLayout/>}>
            <Route index element={<About/>} />
            <Route path="team" element={<div>Our Team</div>} />
        </Route>
        <Route path={ROUTES.CONTACTS} element={<MainLayout/>}>
            <Route index element={<Contacts/>} />
            <Route path="support" element={<div>Support</div>} />
        </Route>

   </Routes>
  ) 
}

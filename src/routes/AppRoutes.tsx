import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";


import NotFound from "../pages/NotFound/NotFound";
import Order from "../pages/Order/Order";
import Addons from "../pages/Addons/Addons";
import Brewing from "../pages/Brewing/Brewing";
import Ready from "../pages/Ready/Ready";
import Contacts from "../pages/Contacts/Contacts";
import About from "../pages/About/About";

export default function AppRoutes() {
  return (
   <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.ORDER} element={<Order/>} />
            <Route path={ROUTES.ADDONS} element={<Addons/>} />
            <Route path={ROUTES.BREWING} element={<Brewing/>} />
            <Route path={ROUTES.READY} element={<Ready/>} />
            <Route path={ROUTES.CONTACTS} element={<Contacts/>} />
            <Route path={ROUTES.ABOUT} element={<About/>} />
            <Route path="*" element={<NotFound/>}/>
        </Route>
   </Routes>
  ) 
}

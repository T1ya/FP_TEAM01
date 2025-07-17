import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home/Home";

export default function AppRoutes() {
  return (
   <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout/>}>
            <Route index element={<Home/>}/>
        </Route>
   </Routes>
  )
}

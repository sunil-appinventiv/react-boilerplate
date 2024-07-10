import DashboardWrapper from "../modules/dashboard";
import LoginWrapper from '../modules/login'
import { Paths } from "../utils/common/path";

export const pageRoutes = [
    {
      name: 'login', 
      path: Paths.LOGIN, 
      component: LoginWrapper,
      isPrivate: false, 
    }, 
    {
     name: "dashboard", 
     path: Paths.DASHBOARD, 
     component: DashboardWrapper, 
     isPrivate: true


    }
]
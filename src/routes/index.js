import React from "react";
import {
  Route,
  Routes as BrowserRoutes,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { pageRoutes } from "./routes";
import { PrivateRoute, PublicRoute } from "./privateRoutes";

function RoutesWrapper() {
    const isLogin=  useSelector((state)=> state?.auth?.isAuthenticated); 
    console.log(isLogin)
  return (
  
        <BrowserRoutes>
          {pageRoutes.map((route, index) => {
            const WrapperRoute = route.isPrivate ? PrivateRoute : PublicRoute;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <WrapperRoute
                        isLogin={isLogin}
                        defaultRoute={'/'}
                      >
                        <route.component />
                      </WrapperRoute>
                
                  
                }
              />
            );
          })}
        </BrowserRoutes>
     
  
  );
}

export default RoutesWrapper;

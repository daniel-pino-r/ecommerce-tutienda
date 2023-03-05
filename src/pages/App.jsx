import {  Navigate, Route, Routes } from "react-router-dom"

import { UserProvider } from "../context/UserProvider"
import { About } from "./about/About"
import { HomePrincipal } from "./principal/HomePrincipal"


export const App = () => {
  return (
    <UserProvider> 
        <Routes>
            <Route path="/" element={ <HomePrincipal/>  } />
            <Route path="About" element={ <About/>  } />

            <Route path="/*" element={ <Navigate to="/" /> }/>  
        </Routes>  
    </UserProvider>
  )
}

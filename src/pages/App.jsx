import { Body } from "../components/principal/body"
import { Header } from "../components/header/Header"
import { UserProvider } from "../context/UserProvider"


export const App = () => {

  return (
    <UserProvider>
       <Header/>
       <Body/>  
    </UserProvider>
  )
}

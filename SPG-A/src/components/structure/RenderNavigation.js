import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";
import Search from "../pages/home/Search";


export const RenderRoutes = () => {

        const { user } = AuthData();
        
        return (
             <Routes>
             { nav.map((r, i) => {
                  
                  if (r.isPrivate && user.isAuthenticated) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else if (!r.isPrivate) {
                       return <Route key={i} path={r.path} element={r.element}/>
                  } else return false
             })}
             
             </Routes>
        )
   }
   
   export const RenderMenu = () => {
   
        const { user, logout } = AuthData()
   
        const MenuItem = ({r}) => {
             return (
                  <div className="menuItem"><Link to={r.path}>{r.name}</Link></div>
             )
        }
        return (
             <div className="menu">
                <div className="menuItem float-start">
               <a href="/">
            
             <img src='https://res.cloudinary.com/dc0gmzuud/image/upload/v1723639535/Capture_d_%C3%A9cran_2024-08-14_134446-removebg-preview_knjeri.png' height={15} width={150}></img>
            </a>

            </div>
            <div className="menuItem"><Search/></div>
                  { nav.map((r, i) => {
   
                       if (!r.isPrivate && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else if (user.isAuthenticated && r.isMenu) {
                            return (
                                 <MenuItem key={i} r={r}/>
                            )
                       } else return false
                  } )}
   
                  { user.isAuthenticated ?
                  <div className="menuItem"><Link to={'/'} onClick={logout}>Log out</Link></div>
                  :
                <div className="menuItem"><Link  to={'signIn'}>sign in</Link></div> }
                 { user.isAuthenticated ?
                  <></>
                  :
                  <div className="menuItem"><Link to={'signUp'}>sign Up</Link></div>  }
              
                   
             </div>
        )
   }
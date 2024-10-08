import About  from "../pages/About"
import  Account  from "../pages/Account"
import { Home } from "../pages/Home"
import  Login  from "../pages/Login"
import { Private } from "../pages/Private"
import Logup  from "../pages/Logup"
import Searchedcomponent from "../pages/home/Searchedcomponent"
import OneGame from "../pages/home/OneGame"

export const nav = [
     { path:     "/",         name: "Home",        element: <Home />,       isMenu: true,     isPrivate: false  },
     { path:     "/about",    name: "About",       element: <About />,      isMenu: true,     isPrivate: false  },
     { path:     "/signIn",    name: "signIn",       element: <Login />,    isMenu: false,    isPrivate: false  },
     { path:     "/private",  name: "Private",     element: <Private />,    isMenu: true,     isPrivate: true  },
     { path:     "/account",  name: "Account",     element: <Account />,    isMenu: true,     isPrivate: true  },
     { path:     "/signUp",  name: "signUp",      element: <Logup />,       isMenu: false,     isPrivate: false  },
     { path:     "/searched",  name: "Searched",      element: <Searchedcomponent/>,       isMenu: false,     isPrivate: false  },
     { path:     "/onegame",  name: "onegame",      element: <OneGame/>,       isMenu: false,     isPrivate: false  },
     
]
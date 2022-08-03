import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Header from "../pages/shared/Header/Header";
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export const publicRoute = [
    {path:"/", name:"Home", Component: Home},
    {path:"/contact", name:"Contact", Component: Contact},
    {path:"/login", name:"Login", Component: Login},
    {path:"/register", name:"Register", Component: Register}
  ]
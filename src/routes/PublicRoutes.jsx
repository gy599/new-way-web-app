import Home from "../pages/home";
import OurStory from "../pages/our-story";
import CreateAccount from "../pages/create-account";
import SignEmail from "../pages/sign-up-email";
import Dashboard from "../pages/Dashboard";
import { RouteLinks } from "./RouteLinks";

export const PublicRoute = [
    {
        component: <Home/>,
        path: RouteLinks.home,
        exact:true,
    },
    {
        component: <OurStory/>,
        path: RouteLinks.ourStory,
        exact:true,
    },
    {
        component:<CreateAccount/>,
        path: RouteLinks.createAccount,
        exact:true,
    },
    {
        component:<SignEmail/>,
        path:RouteLinks.signEmail,
        exact:true,
    },
    {
        component:<Dashboard/>,
        path:RouteLinks.Dashboard,
        exact:true,
    }, 
];



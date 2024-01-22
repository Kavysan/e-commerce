import Home from "../pages/home/Home";
import Women from "../pages/Women/women";
import Men from "../pages/Men/men";
import Kids from "../pages/Kids/kids";
import Dresses from '../pages/Dresses/dresses';
import Tops from '../pages/Tops/tops'
import Bottoms from '../pages/Women-bottom/bottom'
import Sweatshirts from "../pages/Sweatshirts/sweatshirts";
import Jumpsuits from '../pages/Jumpsuits/jumpsuits'
import Tshirts from '../pages/Tshirts/tshirts';
import Outwears from '../pages/Outwear/outwear';
import Hoodies from '../pages/Hoodies/hoodies';
import MenBottoms from '../pages/Men-Bottoms/bottoms'
import Login from '../pages/Login/login'


interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen"
    },
    {
        path: "/signup",
        component: Login,
        name: "Login Page"
    },
    {
        path: "/women",
        component: Women,
        name: "Women clothing",
    },
    {
        path: "/men",
        component: Men,
        name: "Men Clothing",
    },
    {
        path: "/kids",
        component: Kids,
        name: "Kids Clothing",
    },
    {
        path: "/dresses",
        component: Dresses,
        name: "Dresses Section",
    },
    {
        path: "/tops",
        component: Tops,
        name: "Tops Section",
    },
    {
        path: "/sweatshirts",
        component: Sweatshirts,
        name: "Sweatshirts Section",
    },
    {
        path: "/bottoms",
        component: Bottoms,
        name: "Women-Bottoms Section",
    },
    {
        path: "/jumpsuits",
        component: Jumpsuits,
        name: "Jumpsuits Section",
    },
    {
        path: "/tshirts",
        component: Tshirts,
        name: "Tshirt Section",
    },
    {
        path: "/outwears",
        component: Outwears,
        name: "Outwear Section",
    },
    {
        path: "/hoods",
        component: Hoodies,
        name: "Hoodies Section",
    },
    {
        path: "/menbottoms",
        component: MenBottoms,
        name: "Bottoms Section",
    },


  ];

export default routes
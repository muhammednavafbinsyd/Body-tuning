/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ReviewsIcon from '@mui/icons-material/Reviews';

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import UserMangement from "layouts/user-management";
import Trainers from "layouts/Trainers";

import Tables from "layouts/tables - Copy";
import Billing from "layouts/billing";
import VirtualReality from "layouts/virtual-reality";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import EditAdminDatas from "layouts/profile/data/EditAdminDatas";
import SignIn from "layouts/authentication/sign-in";
import Forgetpassword from "layouts/authentication/sign-in/forgetpassword";

import Home from "USER-SIDE/home";
import About from "USER-SIDE/about";
import Blog from "USER-SIDE/blog";
// import Classes from "USER-SIDE/classes";
import Gallery from "USER-SIDE/gallery";
import Contact from "USER-SIDE/contact";
import Signup from "USER-SIDE/signup";
import Login from "USER-SIDE/login";
import Userprofile from "USER-SIDE/userProfile";
import Trainersfront from "USER-SIDE/trainers";
import Workoutfront from "USER-SIDE/workoutplan";
import Dietfront from "USER-SIDE/dietplan";
import Trainersprofile from "USER-SIDE/trainersprofile";

// import Navbar from "USER-SIDE/Navbar"


import Users from "layouts/Users";
import Editprofile from "USER-SIDE/editprofile";
import Changepassword from "USER-SIDE/changepassword";
import Forgotpassword from "USER-SIDE/forgotpassword";
import Otpverification from "USER-SIDE/otpverification";
import Passwordset from "USER-SIDE/passwordset";
import Subscribe from "USER-SIDE/subscribe"
import Subscribepakage from "USER-SIDE/subscribepakage";
import Membershipview  from "USER-SIDE/membershipview";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Office from "examples/Icons/Office";
import Settings from "examples/Icons/Settings";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";
import CreditCard from "examples/Icons/CreditCard";
import Cube from "examples/Icons/Cube";
import SignUp from "layouts/authentication/sign-up";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditUser from "./layouts/user-management/data/EditUsers";
import SubsEdit from "./layouts/Subscrption/data/EditsubsPlan";
import TrainersEdit from "./layouts/Trainers/data/editTrainers";
import Workoutplan from "./layouts/Trainers/workoutplan";
import Dietplan from "./layouts/Trainers/dietplan";
import Subscription from "./layouts/Subscrption/";
import Services from "./layouts/service-management";
import Testimonial from "./layouts/testimonial-management"
import EditService from "./layouts/service-management/data/EditServices"
import EditTestimonial from "./layouts/testimonial-management/data/TestimonialEdit"
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import CardMembershipRoundedIcon from "@mui/icons-material/CardMembershipRounded";
import Verifyotp from "./layouts/authentication/sign-in/verifyotp";
import Setpassword from "./layouts/authentication/sign-in/setpassword";
import AddPlan from "./layouts/Trainers/workoutplan/addplan";
import ADDPLAN from "./layouts/Trainers/dietplan/addplan";
import Editworkoutplan from "./layouts/Trainers/workoutplan/editworkoutplan";
import Editdietplan from "./layouts/Trainers/dietplan/editdietplan";
import SubscribedUsers from "./layouts/subscribedusers-management"
import View from "./layouts/subscribedusers-management/data/view"
import Mysubscription from "USER-SIDE/mysubscription"

const routes = [
  // {
  //   type: "",
  //   name: "Navbar",
  //   key: "Navbar",
  //   route: "/Navbar",
  //   icon: <Shop size="12px" />,
  //   component: <Navbar />,
  //   noCollapse: true,

  // },
  {
    type: "",
    name: "Home",
    key: "Home",
    route: "/home",
    icon: <Shop size="12px" />,
    component: <Home />,
    noCollapse: true,
  },

  {
    type: "",
    name: "About",
    key: "About",
    route: "/about",
    icon: <Shop size="12px" />,
    component: <About />,
    noCollapse: true,
  },
  {
    type: "",
    name: "Blog",
    key: "Blog",
    route: "/blog",
    icon: <Shop size="12px" />,
    component: <Blog />,
    noCollapse: true,
  },
  // {
  //   type: "",
  //   name: "classes",
  //   key: "classes",
  //   route: "/classes",
  //   icon: <Shop size="12px" />,
  //   component: <Classes />,
  //   noCollapse: true,

  // },
 
  {
    type: "",
    name: "gallery",
    key: "gallery",
    route: "/gallery",
    icon: <Shop size="12px" />,
    component: <Gallery />,
    noCollapse: true,
  },

  {
    type: "",
    name: "contact",
    key: "contact",
    route: "/contact",
    icon: <Shop size="12px" />,
    component: <Contact />,
    noCollapse: true,
  },

  {
    type: "",
    name: "Signup",
    key: "Signup",
    route: "/signup",
    icon: <Shop size="12px" />,
    component: <Signup />,
    noCollapse: true,
  },

  {
    type: "",
    name: "Login",
    key: "Login",
    route: "/login",
    icon: <Shop size="12px" />,
    component: <Login />,
    noCollapse: true,
  },
  {
   
    type: "",
    name: "subscribe",
    key: "subscribe",
    route: "/subscribe",
    icon: <Shop size="12px" />,
    component: <Subscribe/>,
    noCollapse: true,
  },
  {
    type: "",
    name: "Subscribepakage",
    key: "Subscribepakage",
    route: "/subscribepackage/:id",
    icon: <Shop size="12px" />,
    component: <Subscribepakage/>,
    noCollapse: true,
  },
  {
    type: "",
    name: "Membershipview",
    key: "Membershipview",
    route: "/membershipview/:id",
    icon: <Shop size="12px" />,
    component: <Membershipview/>,
    noCollapse: true,
  },
  {
  
    type: "",
    name: "view",
    key: "view",
    route: "/view/:id",
    component:<View />,
    noCollapse: true,

  },

  {
    type: "",
    name: "userprofile",
    key: "userprofile",
    route: "/userprofile",
    icon: <Shop size="12px" />,
    component: <Userprofile />,
    noCollapse: true,
  },
  {
    type: "",
    name: "Mysubscription",
    key: "Mysubscription",
    route: "/mysubscription",
    icon: <Shop size="12px" />,
    component: <Mysubscription />,
    noCollapse: true,
  }
   ,
  {
    type: "",
    name: "Editprofile",
    key: "Editprofile",
    route: "/editprofile/:id",
    icon: <Shop size="12px" />,
    component: <Editprofile />,
    noCollapse: true,
  },

  {
    type: "",
    name: "changepassword",
    key: "changepassword",
    route: "/changepasscode",
    icon: <Shop size="12px" />,
    component: <Changepassword />,
    noCollapse: true,
  },
  {
    type: "",
    name: "forgotpassword",
    key: "forgotpassword",
    route: "/forgotpassword",
    icon: <Shop size="12px" />,
    component: <Forgotpassword />,
    noCollapse: true,
  },

  {
    type: "",
    name: "otpverification",
    key: "otpverification",
    route: "/otpverification",
    icon: <Shop size="12px" />,
    component: <Otpverification />,
    noCollapse: true,
  },
  {
    type: "",
    name: "Passwordset",
    key: "Passwordset",
    route: "/passwordset",
    icon: <Shop size="12px" />,
    component: <Passwordset />,
    noCollapse: true,
  },

  {
    type: "",
    name: "trainersfront",
    key: "trainersfront",
    route: "/trainersfront",
    component: <Trainersfront />,
  },
  {
    type: "",
    name: "trainersprofile",
    key: "trainersprofile",
    route: "/trainersprofile/:id",
    component: <Trainersprofile />,
  },

  {
    type: "",
    name: "workoutfront",
    key: "workoutfront",
    route: "/workoutfront",
    component: <Workoutfront />,
  },
  {
    type: "",
    name: "dietfront",
    key: "dietfront",
    route: "/dietfront",
    component: <Dietfront />,
  },

  /// admini side

  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    name: "EditUsers",
    key: "EditUsers",
    route: "/editUsers/:id",
    icon: <CustomerSupport size="12px" />,
    component: <EditUser />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    name: "subsEdit",
    key: "subsEdit",
    route: "/subsEdit/:id",
    icon: <CustomerSupport size="12px" />,
    component: <SubsEdit />,
    noCollapse: true,
  },
  {
    name: "TrainersEdit",
    key: "TrainersEdit",
    route: "/trainersEdit/:id",
    component: <TrainersEdit />,
    noCollapse: true,
  },
  // diet plan
  {
    name: "Dietplan",
    key: "Dietplan",
    route: "/dietplan/:id",
    component: <Dietplan />,
    noCollapse: true,
  },
  {
    name: "Adddiet",
    key: "Adddiet",
    route: "/adddiet/:id",
    component: <ADDPLAN />,
    noCollapse: true,
  },
  {
    name: "Editdietplan",
    key: "Editdietplan",
    route: "/editdietplan/:id/:id",
    component: <Editdietplan />,
  },
  // Workout plan
  {
    name: "workoutplan",
    key: "workoutplan",
    route: "/workoutplan/:id",
    component: <Workoutplan />,
    noCollapse: true,
  },
  {
    name: "addworkout",
    key: "addworkout",
    route: "/addworkout/:id",
    component: <AddPlan />,
  },
  {
    name: "editworkoutplan",
    key: "editworkoutplan",
    route: "/editworkoutplan/:id/:id",
    component: <Editworkoutplan />,
  },
  ////
  {
    type: "collapse",
    name: "Admin users",
    key: "Admin Users",
    route: "/users",
    icon: <PersonAddIcon size="12px" />,
    component: <UserMangement />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Users",
    key: "Users",
    route: "/userstable",
    icon: <Shop size="12px" />,
    component: <Users />,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "Subscription",
    key: "subscription",
    route: "/subscription",
    icon: <CardMembershipRoundedIcon size="12px" />,
    component: <Subscription />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Subscribed users",
    key: "subscribedusers",
    route: "/subscribedusers",
    icon: <CardMembershipRoundedIcon size="12px" />,
    component: <SubscribedUsers/>,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Trainers",
    key: "Trainers",
    route: "/Trianers",
    icon: <SportsGymnasticsIcon size="12px" />,
    component: <Trainers />,
  },
  
  {
    type: "collapse",
    name: "Services",
    key: "Services",
    route: "/services",
    icon: <MiscellaneousServicesIcon size="12px" />,
    component: <Services />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Testimonial",
    key: "Testimonial",
    route: "/testimonial",
    icon: <ReviewsIcon size="12px" />,
    component: <Testimonial />,
    noCollapse: true,
  },
  {
    type: "",
    name: "EditService",
    key: "EditService",
    route: "/editService/:id",
    // icon: <MiscellaneousServicesIcon size="12px" />,
    component: <EditService />,
    noCollapse: true,
  },
  {
    type: "",
    name: "EditTestimonial",
    key: "EditTestimonial",
    route: "/editTestimonial/:id",
    // icon: <MiscellaneousServicesIcon size="12px" />,
    component: <EditTestimonial />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    route: "/tables",
    icon: <Office size="12px" />,
    component: <Tables />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <CreditCard size="12px" />,
    component: <Billing />,
    noCollapse: true,
  },
  {
    type: "",
    name: "Virtual Reality",
    key: "virtual-reality",
    route: "/virtual-reality",
    icon: <Cube size="12px" />,
    component: <VirtualReality />,
    noCollapse: true,
  },
  {
    type: "",
    name: "RTL",
    key: "rtl",
    route: "/rtl",
    icon: <Settings size="12px" />,
    component: <RTL />,
    noCollapse: true,
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "",
    name: " EditAdminDatas",
    key: "EditAdminDatas",
    route: "/EditAdminDatas/:id",
    icon: <CustomerSupport size="12px" />,
    component: <EditAdminDatas />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    name: "Forgetpassword",
    key: "forgetpassword",
    route: "/forgetpassword",
    component: <Forgetpassword />,
    noCollapse: true,
  },
  {
    name: "VerifyOtp",
    key: "verify-otp",
    route: "/verifyotp",
    component: <Verifyotp />,
    noCollapse: true,
  },
  {
    name: "setpassword",
    key: "setpassword",
    route: "/setpassword",
    component: <Setpassword />,
    noCollapse: true,
  },
  {
    // type: "collapse",
    name: "Sign up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <Document size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
];

export default routes;

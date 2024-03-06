import MainLayout from "../lib/layouts";
import TestLayoutUser from "../lib/layouts/layout.test";
import MainLayoutUser from "../lib/layouts/layouts.admin";
import MainLayoutAdmin from "../lib/layouts/layouts.user";
import Admin from "./admin";
import Homepage from "./hompage";
import Test from "./test/Test";
import User from "./user";

export const publicRoutes = [
  {
    path: "/",
    component: Homepage,
    layout: MainLayout,
  },
  {
    path: "/homeuser",
    component: User,
    layout: MainLayoutUser,
  },
  {
    path: "/homeadmin",
    component: Admin,
    layout: MainLayoutAdmin,
  },
  {
    path: "/test",
    component: TestLayoutUser,
    layout: Test,
  },
];

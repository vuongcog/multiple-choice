import {
  HomeIcon,
  ClockIcon,
  UserCircleIcon,
  UserGroupIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
export const navSidebar = [
  {
    listItem: [
      {
        link: "/admin-dashboard",
        nameItem: "Dashboard",
        iconItem: HomeIcon,
      },
      {
        nameItem: "Explore",
        iconItem: ClockIcon,
      },
    ],
  },
  {
    titleGroup: "Games",
    listItem: [
      {
        nameItem: "My Games",
        iconItem: UserCircleIcon,
      },
      {
        nameItem: "My Teams",
        iconItem: UserGroupIcon,
      },
      {
        nameItem: "Create Games",
        iconItem: PlusCircleIcon,
      },
    ],
  },
];

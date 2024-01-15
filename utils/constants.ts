import type { NavigationRoute } from "~/types";

export const APP_NAME = "Nuxt TODO App";

export const NAVIGATION_ROUTES: NavigationRoute[] = [
  { id: 1, text: "Home", route: "/", icon: "/assets/home.svg" },
  { id: 2, text: "Tasks", route: "/tasks", icon: "/assets/tasks.svg" },
  {
    id: 3,
    text: "New task",
    route: "/tasks/create",
    icon: "/assets/tasks.svg",
  },
];

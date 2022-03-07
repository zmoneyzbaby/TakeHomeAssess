export const APP_NAME = "Nuts and Bolts Admin";
export const API_URL_BASE = "http://localhost:8000";

export const ROUTES = {
  dashboard: {
    users: "/dashboard/users",
    map: "/dashboard/map",
    home: "/dashboard/home",
  },
};
export const PAGE_TITLES = {
  [ROUTES.dashboard.users]: "Manage Users",
  [ROUTES.dashboard.map]: "Map Users",
  [ROUTES.dashboard.home]: "Dashboard",
};

export const AUSTIN_AREAS = [
  {
    value: "Cedar Park",
  },
  {
    value: "Round Rock",
  },
  {
    value: "Central Austin",
  },
  {
    value: "Hutto",
  },
  {
    value: "South Austin",
  },
  {
    value: "West Austin",
  },
  {
    value: "East Austin",
  },
];

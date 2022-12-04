import Home from "../PortfolioContainer/Home/Home";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
    alreadyRendered: false,
  },
];
export const GET_SCREEN_INDEX = (screen_name: string) => {
  if (!screen_name) return -1;
  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }
  return -1;
};

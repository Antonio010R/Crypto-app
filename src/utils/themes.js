export const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const preferedTheme = window.localStorage.getItem("color-theme");
    const mediaQuery = window.matchMedia("(prefers-color-scheme:dark)");

    if (typeof preferedTheme === "string") {
      return preferedTheme;
    } else if (mediaQuery) {
      // console.log("first");
      return "dark";
    }
  } else {
    return "light";
  }
};

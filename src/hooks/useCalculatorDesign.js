import { useEffect } from "react";

export const useCalculatorDesign = () => {

  const switchTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  return {switchTheme}
}

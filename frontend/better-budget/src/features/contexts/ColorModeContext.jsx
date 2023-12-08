import { createTheme } from "@mui/material";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {
            default: "#f5f5f5",
          },
        }
      : {}),
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const colorModeContext = createContext({
  toggleColorMode: () => {},
  theme: () => {},
  currentColorMode: "light",
});

function ColorModeContext({ children }) {
  const [mode, setMode] = useLocalStorage("darkModeSetting", "light");

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [setMode]
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <colorModeContext.Provider value={{ colorMode, theme, mode }}>
      {children}
    </colorModeContext.Provider>
  );
}

function useColorMode() {
  const context = useContext(colorModeContext);
  if (context === undefined) {
    throw new Error("Using Color Mode Context outside of Color Mode Provider");
  }
  return context;
}

export { ColorModeContext, useColorMode };

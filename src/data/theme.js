import React from "react";
export const themes = {
    light: {
        backgroundColor: "white",
        color: "black"
    },
    dark: {
        backgroundColor: "black",
        color: "white"
    },
}
export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: ()=>{}
});
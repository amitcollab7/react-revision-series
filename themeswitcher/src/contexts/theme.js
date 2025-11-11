import { createContext, useContext } from "react";
//compact and better aproach to craete the context and provider
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () =>{},
    lightTheme: () =>{},
})

export const ThemeProvider = ThemeContext.Provider

//custom hook for returning use context with theme context
export default function useTheme(){
    return useContext(ThemeContext)
}
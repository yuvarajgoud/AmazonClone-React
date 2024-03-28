import { createContext ,useState} from "react";


export const ThemeContext = createContext(null)


export const ThemeProvider = (props) => {

  const [theme,setTheme]=useState(true)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
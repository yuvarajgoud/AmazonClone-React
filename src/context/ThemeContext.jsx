import { createContext ,useState} from "react";


export const ThemeContext = createContext(null)


export const ThemeProvider = (props) => {

  const [theme,setTheme]=useState(false)
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
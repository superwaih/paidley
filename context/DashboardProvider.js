import { createContext, useContext, useEffect, useRef, useState } from "react";

const DashboardContext = createContext()


export const useDashboardProvider = () => useContext(DashboardContext)


const DashboardProvider = ({children}) =>{
    const[showMenu, setShowMenu] = useState(false)
    return(
        <DashboardContext.Provider
        value={{
            showMenu,
            setShowMenu

        }}
        >
            {children}
        </DashboardContext.Provider>
    )
}

export default DashboardProvider
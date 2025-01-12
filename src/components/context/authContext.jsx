import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const UseAuthContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false)
    
    return(
        <AuthContext.Provider value={ {isAuth, setIsAuth} }>
            {children}
        </AuthContext.Provider>
    )
}
import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const Admin = {email: "admin@admin", password: "admin"}

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthhContext = ({children}) =>{

    const [isAuth, setIsAuth] = useState(false)
    


    return(
        <AuthContext.Provider value={ {isAuth, setIsAuth} }>
            {children}
        </AuthContext.Provider>
    )
}
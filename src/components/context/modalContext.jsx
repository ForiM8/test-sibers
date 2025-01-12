import { createContext, useContext, useState } from "react"

const ModalRegisterContext = createContext(null)
export const useModalRegister = () => useContext(ModalRegisterContext)

export const UseModalRegisterContext = ({  
    children
}) => {
    const [modalActiveRegister, setModalActiveRegister] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const [modalOrderBuy, setModalOrderBuy] = useState(false)
    return (
        <ModalRegisterContext.Provider value={{ modalActive,setModalActive, modalActiveRegister,setModalActiveRegister,modalOrderBuy, setModalOrderBuy }}>
            {children}
        </ModalRegisterContext.Provider>
    )
}
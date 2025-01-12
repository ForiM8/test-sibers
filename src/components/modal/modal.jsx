import React from "react"
import "./modal.scss"

export const Modal = ({
    children,
    setActive,
    active
}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(prev => !prev)} >
            <div className={active ? "modal__contentLogin active" : "modal__contentLogin"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
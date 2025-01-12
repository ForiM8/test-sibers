import { useCallback } from "react"
import { useUser } from "../context/userContext"

export const PeopleSearchList = ({
    name,
    avatar,
    lastTimeMessages,
    admin,
    onRemove,
    id
}) => {

    const { globalUser } = useUser()

    const removePeople = useCallback(() => {
        onRemove(id);
    }, [id, onRemove]);
    
    return(
        <div className="mainContainer__left__groups__group">
            <img className="mainContainer__left__groups__group-avatar" src={avatar}/>
            <div className="mainContainer__left__groups__group__textContainer" style={{display:'flex',alignItems:'center', justifyContent:'space-between', flexDirection:'row'}}>
                <div className="mainContainer__left__groups__group__textContainer__top" style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
                    <div className="mainContainer__left__groups__group__textContainer__top-name">{name}</div>
                    <div className="mainContainer__left__groups__group__textContainer__top-date">{lastTimeMessages}</div>
                    {globalUser === admin && (<button onClick={removePeople} className="mainContainer__left__groups__group__textContainer__top-delete"></button>)}
                </div>
            </div>
        </div>
    )
}
import { useCallback } from "react";

export const GroupElement = ({
    name,
    avatar,
    id,
    onGroup,
    creator,
    onCreator,
    onGroupName
}) => {

    const handleClick = useCallback(() => {//save name group and name creator
        onGroup(id)
        onCreator(creator)
        onGroupName(name)
    }, [id, onGroup, creator, onCreator,name,onGroupName])

    return (
        <button onClick={handleClick} className="mainContainer__left__groups__group" style={{padding:'0px', background:'none', border:'none', cursor:'pointer'}}>
            <img className="mainContainer__left__groups__group-avatar" src={avatar} alt={name}></img>
            <div className="mainContainer__left__groups__group__textContainer" style={{display:'flex',alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                <div className="mainContainer__left__groups__group__textContainer__top">
                    <div className="mainContainer__left__groups__group__textContainer__top-name" style={{fontSize:'25px'}}>{name}</div>
                </div>
            </div>
        </button>
    );
}

export const PeopleElement = ({
    name,
    date,
    lastText,
    avatar
}) => {
    return (
        <div className="mainContainer__left__groups__group">
            <img className="mainContainer__left__groups__group-avatar" src={avatar}></img>
            <div className="mainContainer__left__groups__group__textContainer">
                <div className="mainContainer__left__groups__group__textContainer__top">
                    <div className="mainContainer__left__groups__group__textContainer__top-name">{name}</div>
                    <div className="mainContainer__left__groups__group__textContainer__top-date">{date}</div>
                </div>
                <div className="mainContainer__left__groups__group__textContainer__bottom">
                    <div className="mainContainer__left__groups__group__textContainer__bottom-lastText">{lastText}</div>
                </div>
            </div>
        </div>
    )
}
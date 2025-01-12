export const MessageСompanion = ({
    name,
    text,
    lastTimeMessages
}) => {
    return (
        <div className="mainContainer__right__mainMessenger__left">
            <div className="mainContainer__right__mainMessenger__left-name">{name}</div>
            <div className="mainContainer__right__mainMessenger__left__textContainer">
                <div className="mainContainer__right__mainMessenger__left__textContainer-dot"></div>
                <div className="mainContainer__right__mainMessenger__left__textContainer-message">{text}</div>
            </div>
            <div className="mainContainer__right__mainMessenger__left-time">{lastTimeMessages}</div>
        </div>
    )
}
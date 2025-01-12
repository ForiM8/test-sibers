export const MessageUser = ({
    text,
    date
}) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div></div>
            <div className="mainContainer__right__mainMessenger__right">
                <div className="mainContainer__right__mainMessenger__right__textContainer">
                    <div className="mainContainer__right__mainMessenger__right__textContainer-message">{text}</div>
                    <div className="mainContainer__right__mainMessenger__right__textContainer-dot"></div>
                </div>
                <div className="mainContainer__right__mainMessenger__right-time">{date}</div>
            </div>
        </div>
    )
}
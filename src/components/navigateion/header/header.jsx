import './header.scss'

export const Header = () =>{
    return(
        <div className="headerContainer">
            <div className='headerContainer__avatar'></div>

            <div className='headerContainer__routeContainer'>
                <div className="headerContainer__routeContainer-home"></div>
                <div className="headerContainer__routeContainer-chats"></div>
                <div className="headerContainer__routeContainer-notification"></div>
                <div className="headerContainer__routeContainer-settings"></div>
            </div>

            <div className="headerContainer__exit"></div>
        </div> 
    )
}
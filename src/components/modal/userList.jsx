import { useEffect, useState } from "react"
import { useModalRegister } from "../context/modalContext"
import { useUser } from "../context/userContext"
import { PeopleSearchList } from "../peopleList/peopleSearchList"
import './userList.scss'

export const UserList = ({
    name,
    admin
}) => {

    const { usersDATA, messageDATA, setMessageDATA } = useUser()
    const { setModalActive } = useModalRegister()
    const [userDATAInList, setUserDATAInList] = useState([])
    const [deleteUser, setDeleteUser] = useState([])

    useEffect(() => {
        setUserDATAInList(usersDATA)
    }, [])

    //function removing user and adding message about deletion
    const removePeople = (id) => {
        const userToDelete = userDATAInList.find((user) => user.id === id)
        setDeleteUser(userToDelete)
        const newMessage = {
            text: userToDelete.name,
            status: 'delete'
        };
        setMessageDATA([...messageDATA, newMessage])
        setUserDATAInList((prev) => prev.filter((user) => user.id !== id))
    };
    // finally 

    // function to formate date from Unix timestamp
    const formatDate = (timestamp) => {
        const dateInDATA = new Date(timestamp);
        const now = new Date();
        const formattedTime = dateInDATA.toLocaleTimeString('en-en', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase();

        let formattedDate = '';
        if (dateInDATA.getDate() === now.getDate()) {
            formattedDate = 'Today';
        } else if (now.getDate() - dateInDATA.getDate() === 1) {
            formattedDate = 'Yesterday';
        } else {
            formattedDate = dateInDATA.toDateString();
        }
        return formattedDate + ', ' + formattedTime;
    };
    // finally 

    return (
        <div className="userListContainer">

            <div className="userListContainer__header" style={{ display: "flex", alignItems: "center", borderBottom: "solid 1px #E6E6E6" }}>
                <div className="userListContainer__header-header">{name} - user list</div>
                <button className="userListContainer__header-close" onClick={() => (setModalActive(prev => !prev))} >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3904 12.33C13.4248 12.3685 13.4439 12.4184 13.4439 12.47C13.4439 12.5217 13.4248 12.5715 13.3904 12.61L12.6104 13.39C12.5713 13.4273 12.5194 13.4481 12.4654 13.4481C12.4114 13.4481 12.3594 13.4273 12.3204 13.39L7.00038 8.06001L1.67038 13.39C1.65258 13.4094 1.63094 13.4249 1.60684 13.4355C1.58274 13.4461 1.5567 13.4516 1.53038 13.4516C1.50405 13.4516 1.47801 13.4461 1.45391 13.4355C1.42981 13.4249 1.40817 13.4094 1.39038 13.39L0.610376 12.61C0.590977 12.5922 0.575489 12.5706 0.564894 12.5465C0.554299 12.5224 0.548828 12.4963 0.548828 12.47C0.548828 12.4437 0.554299 12.4176 0.564894 12.3935C0.575489 12.3694 0.590977 12.3478 0.610376 12.33L5.94038 7.00001L0.610376 1.67001C0.590977 1.65221 0.575489 1.63058 0.564894 1.60648C0.554299 1.58238 0.548828 1.55634 0.548828 1.53001C0.548828 1.50368 0.554299 1.47764 0.564894 1.45354C0.575489 1.42944 0.590977 1.40781 0.610376 1.39001L1.39038 0.61001C1.40817 0.590611 1.42981 0.575123 1.45391 0.564528C1.47801 0.553933 1.50405 0.548462 1.53038 0.548462C1.5567 0.548462 1.58274 0.553933 1.60684 0.564528C1.63094 0.575123 1.65258 0.590611 1.67038 0.61001L7.00038 5.94001L12.3204 0.61001C12.3594 0.57272 12.4114 0.551914 12.4654 0.551914C12.5194 0.551914 12.5713 0.57272 12.6104 0.61001L13.3904 1.39001C13.4248 1.42851 13.4439 1.47835 13.4439 1.53001C13.4439 1.58167 13.4248 1.63151 13.3904 1.67001L8.06038 7.00001L13.3904 12.33Z" fill="#1A1A1A" />
                    </svg>
                </button>
            </div>

            <div className="userListContainer__main">

                {userDATAInList.map((user) => {
                    if (user.name) {
                        return (
                            <PeopleSearchList
                                {...user}
                                key={user.id}
                                admin={admin}
                                onRemove={() => removePeople(user.id)}
                                lastTimeMessages={formatDate(user.lastTimeMessages)}
                            />
                        );
                    }
                })}

            </div>


        </div>
    )
}
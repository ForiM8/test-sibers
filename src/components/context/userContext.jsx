import { createContext, useContext, useState } from "react"

export const UserContext = createContext()


export const useUser = () => {
    return useContext(UserContext)
}

export const UseUserContext = ({ children }) => {

    const [globalUser, setGlobalUser] = useState('Nikita') //registered user

    const [usersDATA, setUsersDATA] = useState([
        {
            id: 0,
            name: 'Anil',
            text: 'April fool’s day',
            lastTimeMessages: 'Sun Jan 12 2025 2:00:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://cs-erkon.pro/files/avatars/1692599353.jpg',
            read: 'true',
            status: "people"
        },
        {
            id: 1,
            name: 'Vicktor',
            text: 'Baag',
            lastTimeMessages: 'Sun Jan 12 2025 18:01:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/736x/84/d5/b6/84d5b6753ac36dd8516ebf530031a7f8.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 2,
            name: 'Mary ma’am',
            text: 'You must report this because it is illegal.',
            lastTimeMessages: 'Sun Jan 12 2025 18:02:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://ae03.alicdn.com/kf/Sd44a6cac34c74db79a78ce7d4def7fb5w.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 3,
            name: 'Bill Gates',
            text: 'Nevermind bro',
            lastTimeMessages: 'Sun Jan 12 2025 18:03:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
            read: 'false',
            status: "people"
        },
        {
            id: 4,
            name: 'Elon Musk',
            text: 'important',
            lastTimeMessages: 'Sun Jan 12 2025 18:04:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://www.ixbt.com/img/n1/news/2024/8/1/ixbtmedia_elon_musk_-_head_of_department_of_government_effici_110519e3-41b0-43ce-86a3-aadc930f4f75_1_large.png',
            read: 'false',
            status: "people"
        },
        {
            id: 5,
            text: 'Who are you',
            lastTimeMessages: 'Sun Jan 12 2025 18:05:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
            read: 'true',
            status: "people"
        },
        {
            id: 6,
            name: 'Victoria H',
            text: 'Who are all these people???',
            lastTimeMessages: 'Sun Jan 12 2025 18:06:32 GMT+0700 (Новосибирск, стандартное время)',
            avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
            read: 'true',
            status: "people"
        },

    ])


    const [groupsDATA, setGroupsDATA] = useState([
        {
            id: 0,
            name: 'Friends Forever',
            lastText: 'Hahahahah!',
            avatar: 'https://i.pinimg.com/474x/d8/e0/58/d8e0587cedc5cc49a8d9043ca26712cf.jpg',
            creator: 'Victoria H',
            status: "group",
            text: [{
                id: 0,
                name: 'Anil',
                text: 'April fool’s day',
                lastTimeMessages: 'Sun Jan 12 2025 2:00:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://cs-erkon.pro/files/avatars/1692599353.jpg',
                read: 'true',
                status: "people"
            },
            {
                id: 1,
                name: 'Vicktor',
                text: 'Baag',
                lastTimeMessages: 'Sun Jan 12 2025 18:01:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://i.pinimg.com/736x/84/d5/b6/84d5b6753ac36dd8516ebf530031a7f8.jpg',
                read: 'false',
                status: "people"
            },
            {
                id: 2,
                name: 'Mary ma’am',
                text: 'You must report this because it is illegal.',
                lastTimeMessages: 'Sun Jan 12 2025 18:02:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://ae03.alicdn.com/kf/Sd44a6cac34c74db79a78ce7d4def7fb5w.jpg',
                read: 'false',
                status: "people"
            },
            {
                id: 3,
                name: 'Bill Gates',
                text: 'Nevermind bro',
                lastTimeMessages: 'Sun Jan 12 2025 18:03:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Visit_of_Bill_Gates%2C_Chairman_of_Breakthrough_Energy_Ventures%2C_to_the_European_Commission_5_%28cropped%29.jpg',
                read: 'false',
                status: "people"
            },
            {
                id: 4,
                name: 'Elon Musk',
                text: 'important',
                lastTimeMessages: 'Sun Jan 12 2025 18:04:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://www.ixbt.com/img/n1/news/2024/8/1/ixbtmedia_elon_musk_-_head_of_department_of_government_effici_110519e3-41b0-43ce-86a3-aadc930f4f75_1_large.png',
                read: 'false',
                status: "people"
            },
            {
                id: 5,
                text: 'Who are you',
                lastTimeMessages: 'Sun Jan 12 2025 18:05:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
                read: 'true',
                status: "people"
            },
            {
                id: 6,
                name: 'Victoria H',
                text: 'Who are all these people???',
                lastTimeMessages: 'Sun Jan 12 2025 18:06:32 GMT+0700 (Новосибирск, стандартное время)',
                avatar: 'https://i.pinimg.com/280x280_RS/a5/c8/6b/a5c86bb22f0cc8b58c2fd0ce7c52ef6e.jpg',
                read: 'true',
                status: "people"
            },],
        },
    ])

    return (
        <UserContext.Provider value={{ usersDATA, setUsersDATA, groupsDATA, setGroupsDATA, globalUser, }}>
            {children}
        </UserContext.Provider>
    )
}
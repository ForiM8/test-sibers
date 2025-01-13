import { PeopleElement } from '../../components/peopleElement/peopleElement.jsx';
import './main.scss';
import { useUser } from '../../components/context/userContext.jsx';
import { useEffect, useRef, useState } from 'react';
import { MessageUser } from '../../components/message/messageUser.jsx';
import { MessageСompanion } from '../../components/message/messageСompanion.jsx';
import { CreateGroup } from './create-group.jsx';
import { GroupElement } from '../../components/groupElement/groupElement.jsx';
import { Modal } from '../../components/modal/modal.jsx';
import { useModalRegister } from '../../components/context/modalContext.jsx';
import { UserList } from '../../components/modal/userList.jsx';
import { PeopleSearchList } from '../../components/peopleList/peopleSearchList.jsx';
import EmojiPicker from 'emoji-picker-react';

export const Main = () => {
    const { modalActive, setModalActive } = useModalRegister()
    const { usersDATA, setGroupsDATA, groupsDATA} = useUser()
    const [messageTrue, setMessageTrue] = useState(false)
    const [input, setInput] = useState('')
    const [groups, setGroups] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [idGroup, setIdGroup] = useState(null)
    const [nameCreator, setNameCreator] = useState('')
    const [nameGroup, setNameGroup] = useState('')
    const [value, setValue] = useState('')
    const [openEmoji, setOpenEmoji] = useState(false)
    const [allList, setAllList] = useState([])
    const [messageSent, setMessageSent] = useState(false)

    // function to trim text to five words
    const truncateText = (text, wordLimit) => {
        const words = text.split(' ')
        if (words.length <= wordLimit) {
            return text
        }
        return words.slice(0, wordLimit).join(' ') + '...'
    }
    // finally 

    // function to validate message input
    const validate = (event) => {
        if (event.target.value.length > 0) {
            setMessageTrue(true)
        } else {
            setMessageTrue(false)
        }
    }
    // finally 

    // auto scroll to bottom
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [groupsDATA, idGroup])
    // finally 

    // function to add a new message
    const addMessage = () => {
        if (input) {
            const newMessage = {
                text: input,
                lastTimeMessages: Date(),
            };
            setGroupsDATA((prev) =>
                prev.map((group) =>
                    group.id == idGroup ? { ...group, text: [...group.text, newMessage] }: group
                )
            )
            setInput('');
            setMessageTrue(false);
            setMessageSent(true);
        }
    };
    // finally 

    //generator random message
    useEffect(() => {
        if (messageSent) {
            const nameList = ['Anil', 'Vicktor', 'Bill Gates', 'Elon Musk'] //random name
            const textList = ['Hello!', 'Fine', 'Good', 'yes'] //random text
            const randomName = Math.floor(Math.random() * nameList.length)
            const randomText = Math.floor(Math.random() * textList.length)
            const randomMessage = {
                name: nameList[randomName],
                text: textList[randomText],
                lastTimeMessages: Date(),
            }
            setTimeout(() => { setGroupsDATA((prev) =>
                prev.map((group) =>
                    group.id === idGroup ? { ...group, text: [...group.text, randomMessage] }: group
                )
            ) }, 1000) //added random message with random name and text 
            setMessageSent(false)
        }
    }, [messageSent, usersDATA])
    // finally 


    // function to formate date from Unix timestamp
    const formatDate = (timestamp) => {
        const dateInDATA = new Date(timestamp)
        const now = new Date()
        const formattedTime = dateInDATA.toLocaleTimeString('en-en', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase()

        let formattedDate = ''
        if (dateInDATA.getDate() === now.getDate()) {
            formattedDate = 'Today'
        } else if (now.getDate() - dateInDATA.getDate() === 1) {
            formattedDate = 'Yesterday'
        } else {
            formattedDate = dateInDATA.toDateString()
        }
        return formattedDate + ', ' + formattedTime
    }
    // finally 

    //functions open and close modal
    const onCloseModal = () => {
        setIsModalOpen(false)
    }
    const addProduct = () => {
        setIsModalOpen(true)
    }
    // finally 

    //functions for getting id group and its creator
    const groupId = (id) => {
        setIdGroup(id)
        setValue('')
    }
    const creatorName = (creator) => {
        setNameCreator(creator)
        setValue('')
    }
    const groupName = (name) => {
        setNameGroup(name)
        setValue('')
    }
    // finally 

    //search
    useEffect(() => {//create state witch all people and all groups
        setAllList([...usersDATA, ...groupsDATA])
    }, [usersDATA, groupsDATA])

    const filteredUser = allList.filter(user => {
        return user.name && user.name.toLowerCase().includes(value.toLowerCase()) //checking for null
    })
    // finally 

    //open emoji table
    const clickEmoji = () => {
        setOpenEmoji(prev => !prev)
    }
    // finally 

    //added emoji table
    const onEmojiClick = (emojiObject) => {
        setInput(prev => prev + emojiObject.emoji)
        setOpenEmoji(prev => !prev)
        setMessageTrue(prev => !prev)
    }
    // finally 
    return (
        <div className="mainContainer">
            <div className="mainContainer__left">
                <div className="mainContainer__left__search">

                    <input value={value} onChange={(event) => setValue(event.target.value)} className="mainContainer__left__search-input" placeholder='Search'></input>
                    <div className="mainContainer__left__search-magnifier"></div>

                    {value.length !== 0 && filteredUser.map((elem) => {
                        if (elem.status === 'people') {
                            return (
                                <PeopleSearchList
                                    {...elem}
                                    key={elem.id}
                                    lastTimeMessages={formatDate(elem.lastTimeMessages)}
                                />
                            )
                        } else {
                            return (
                                <GroupElement
                                    {...elem}
                                    key={elem.id}
                                    onGroup={groupId}
                                    onCreator={creatorName}
                                    onGroupName={groupName}
                                />
                            )
                        }

                    })}

                </div>

                <div className="mainContainer__left__groups">

                    <div className="mainContainer__left__groups__headerContainer">
                        <div className="mainContainer__left__groups__headerContainer-header">Groups</div>
                        <button onClick={addProduct} className="mainContainer__left__groups__headerContainer-add">+</button>
                    </div>

                    {groupsDATA.map((group) => (
                        <GroupElement
                            {...group}
                            key={group.id}
                            onGroup={groupId}
                            onCreator={creatorName}
                            onGroupName={groupName}
                        />
                    ))}
                    <CreateGroup
                        setGroups={setGroups}
                        onCloseModal={onCloseModal}
                        isModalOpen={isModalOpen}
                    />

                </div>

                <div className="mainContainer__left__people">

                    <div className="mainContainer__left__people-header">People</div>

                    <div className='mainContainer__left__people__scrollElement'>
                        {usersDATA.map((people) => {
                            const lastPost = people.text
                            const truncatedLastText = truncateText(lastPost, 5)
                            if (people.name) {
                                return (
                                    <PeopleElement
                                        {...people}
                                        key={people.id}
                                        lastText={truncatedLastText}
                                        lastTimeMessages={formatDate(people.lastTimeMessages)}
                                    />
                                )
                            }
                        })}
                    </div>

                </div>
            </div>
            <div className="mainContainer__right">

                {idGroup !== null ? (
                    groupsDATA.map((group) => {
                        if (group.id === idGroup) {
                            return (
                                <>
                                    <div className="mainContainer__right__headerContainer">

                                        <div className="mainContainer__right__headerContainer__header">
                                            <img className="mainContainer__right__headerContainer__header-avatar" src={group.avatar} alt={group.name}></img>

                                            <div className="mainContainer__right__headerContainer__header__textContainer">
                                                <div className="mainContainer__right__headerContainer__header__textContainer-name">{group.name}</div>
                                                <div className="mainContainer__right__headerContainer__header__textContainer-online">Online - Last seen, 2.02pm</div>
                                            </div>

                                            <div className="mainContainer__right__headerContainer__header__buttonContainer">
                                                <div className="mainContainer__right__headerContainer__header__buttonContainer-phoneCall"></div>
                                                <div className="mainContainer__right__headerContainer__header__buttonContainer-videoCall"></div>
                                                <button onClick={() => setModalActive(prev => !prev)} className="mainContainer__right__headerContainer__header__buttonContainer-dots"></button>

                                                <Modal active={modalActive} setActive={setModalActive}>
                                                    <UserList name={nameGroup} admin={nameCreator} />
                                                </Modal>

                                            </div>

                                        </div>

                                    </div>
                                    <EmojiPicker
                                        open={openEmoji}
                                        style={{ position: 'absolute', zIndex: '10', right: '100px', bottom: '113px' }}
                                        onEmojiClick={onEmojiClick}
                                    />
                                    <div className="mainContainer__right__mainMessenger">
                                        {group.text.map((message) => {
                                            if (message.name) {
                                                return (
                                                    <MessageСompanion
                                                        {...message}
                                                        key={message.id}
                                                        lastTimeMessages={formatDate(message.lastTimeMessages)}
                                                    />
                                                )
                                            } else if (message.status === 'delete') {
                                                return (
                                                    <div className='deleteContainer'>
                                                        <div className="deleteContainer-text">user {message.text} deleted</div>
                                                    </div>
                                                )
                                            } else {
                                                return (
                                                    <MessageUser
                                                        {...message}
                                                        key={message.id}
                                                        date={formatDate(message.lastTimeMessages)}
                                                    />
                                                )
                                            }
                                        })}
                                        <div ref={messagesEndRef} />
                                    </div>

                                    <div className="mainContainer__right__footer">

                                        <div className="mainContainer__right__footer__inputBlock">

                                            <input
                                                id="message"
                                                name="message"
                                                type="text"
                                                className="mainContainer__right__footer__inputBlock-input"
                                                placeholder='Type your message here...'
                                                value={input}
                                                onChange={(event) => {
                                                    setInput(event.target.value)
                                                    validate(event)
                                                }}
                                            />
                                            <div className="mainContainer__right__footer__inputBlock-addFile"></div>
                                            <button onClick={clickEmoji} className="mainContainer__right__footer__inputBlock-smile"></button>

                                            <div className="mainContainer__right__footer__inputBlock-camera"></div>
                                        </div>

                                        {messageTrue ? (
                                            <button className="mainContainer__right__footer-buttonSend" onClick={addMessage}></button>
                                        ) : (
                                            <button className="mainContainer__right__footer-buttonVoise"></button>
                                        )}

                                    </div>
                                </>
                            )
                        }
                    })
                ) : (
                    <div className='groupNullContainer'>
                        <div className='groupNullContainer-text'>Group not selected</div>
                    </div>
                )}

            </div>
        </div>
    )
}

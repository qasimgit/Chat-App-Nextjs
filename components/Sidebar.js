import React, { useState } from 'react'
import { Container, Header, IconContainer, Search, SearchInput, SidebarButton, UserAvatar } from './AllStyledComponents'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import * as EmailValidator from 'email-validator'
import { auth, db } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Chat from './Chat';


const Sidebar = () => {
    const [search, setSearch] = useState("")
    const [user] = useAuthState(auth)
    const userChatRef = db.collection("chats").where("user", "array-contains", user.email)
    const [chatSnapshot] = useCollection(userChatRef)


    const createChat = () => {
        const input = prompt(
            "Please Enter the Email of the person you wish to chat with"
        )

        if (!input) return null;
        if (EmailValidator.validate(input) && input !== user.email && !chatAlreadyExists(input)) {
            db.collection("chats").add({
                user: [user.email, input]
            })

            // we need to add the chat in to the DB "Chats Collection"

        } else alert("Please try again")
    }


    const chatAlreadyExists = (recipentEmail) => !!chatSnapshot?.docs.find((chat) => chat.data().users.find((user) => user === recipentEmail)?.length > 0)



    return (
        <Container>
            <Header>
                <UserAvatar onClick={() => auth.signOut()} />
                <IconContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </IconContainer>
            </Header>
            <Search>
                <SearchIcon />
                <SearchInput placeholder="Search in chats" />
            </Search>
            <SidebarButton onClick={createChat}>
                Start New Chat
            </SidebarButton>
            {chatSnapshot?.docs.map((chat) =>
                <Chat key={chat.id} id={chat.id} user={chat.data().users} />
            )}
        </Container>
    )
}

export default Sidebar


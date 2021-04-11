import React from 'react'
import { Container, Header, IconContainer, Search, SearchInput, UserAvatar } from './AllStyledComponents'
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';

const Sidebar = () => {
    return (
        <Container>
            <Header>
                <UserAvatar />
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

        </Container>
    )
}

export default Sidebar


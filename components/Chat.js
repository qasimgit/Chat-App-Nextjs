import { Avatar } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { UserAvatar } from './AllStyledComponents'

const Chat = ({ id, users }) => {
    return (
        <Container>
            <UserAvatar />
            <p>recipentEmail</p>

        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: flex
`

    // const UsersAvatar = styled(Avatar)`
    // `

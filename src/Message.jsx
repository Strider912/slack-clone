import React from 'react'
import styled from 'styled-components'

const Message = ({ id,message,user,userImage, timestamp }) => {

    return (

        <Messagecontainer>
        <img src={userImage} alt="" />
            <Messageinfo>
            <h4> {user} <span> {new Date(timestamp?.toDate()).toUTCString()} </span>  </h4>
            <p> {message} </p>
            </Messageinfo>
        </Messagecontainer>

    )
}

export default Message

const Messagecontainer=styled.div`
display: flex;
align-items: center;
padding: 8px;
img{
    height: 50px;
    border-radius: 10px;
}
`
const Messageinfo=styled.div`
margin-left: 8px;
h4 > span{
    font-size: 14px;
    color: gray;
    font-weight: 400;
    margin-left: 6px;
}
`

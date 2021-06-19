import React, { useEffect, useRef, useState } from 'react'
import Chatinput from './Chatinput'
import Message from './Message'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { useSelector } from 'react-redux';
import { selectroomid } from './features/counter/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from './Firebase';

const Chat = () => {
    const chatref = useRef(null)
    const roomid = useSelector(selectroomid)
    const [ roomdetails ] =useDocument(roomid && db.collection("rooms").doc(roomid))
    const [ roommessages,loading ] = useCollection(roomid && db.collection("rooms").doc(roomid).collection("messages").orderBy("timestamp","asc"))

    useEffect(() => {

        chatref?.current?.scrollIntoView({
            behavior : "smooth"
        })

    }, [loading])

    return (
        <Chatcontainer>
            <Chatheader>
                <Headerleft>
                <h4> <strong> {roomdetails?.data().name} </strong> <StarBorderIcon /> </h4>
                </Headerleft>
                <Headerright>
                <p> <InfoOutlinedIcon /> Details </p>
                </Headerright>
            </Chatheader>

        <Chatmessage>
        { roommessages?.docs.map((doc)=>{
            const { message, user,userImage, timestamp} = doc.data()
            return(
                <Message 
                    key={doc.id}
                    id={doc.id}
                    message={message}
                    user={user}
                    userImage={userImage}
                    timestamp={timestamp}
                />
            )
        } )}
        </Chatmessage>
        
        <ChatBottom ref={chatref} />

        <Chatinput 
        chatref={chatref}
        channelname={roomdetails?.data().name}
        channelid={roomid}
         />

        </Chatcontainer>
    )
}
export default Chat

const ChatBottom=styled.div`
padding: 100px;
`

const Chatmessage=styled.div`
padding-top: 30px;
`

const Chatcontainer=styled.div`
margin-top: 10px;
flex: 1;
margin-left: 260px;
overflow-y: scroll;
`
const Chatheader=styled.div`
display: flex;
align-items: center;
color: white;
justify-content: space-between;
padding: 10px;
margin-top: 60px;
background-color: blue;
position: fixed;
width: 80%;
top: 0;
border-bottom: 1px solid gray;
`

const Headerleft=styled.div`
h4{
display: flex;
align-items: center;
justify-content: space-between;
min-width: 7vw;
}
`
const Headerright=styled.div`
p{
display: flex;
align-items: center;
justify-content: space-between;
min-width: 7vw;
}
`

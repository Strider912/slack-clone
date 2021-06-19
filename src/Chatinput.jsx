import { Button } from '@material-ui/core'
import React, {  useState } from 'react'
import styled from 'styled-components'
import { db,auth } from './Firebase'
import firebase from 'firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Chatinput = ({channelname, channelid,chatref }) => {
    const [user]=useAuthState(auth)
    const [ input , setinput ] = useState('')
    const sendmessages=(e)=>{
    e.preventDefault()
        if(!channelid){
            return false
        }
        db.collection("rooms").doc(channelid).collection("messages").add({
            message : input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user : user.displayName,
            userImage : user.photoURL,
        })
        setinput("")
        chatref?.current?.scrollIntoView({
            behavior : "smooth",
        })
    }
    return (
        <Chatinputcontainer>
            <form >
                <input type="text" value={input} onChange={(e)=>setinput(e.target.value)} placeholder={`Message #${channelname}`} />
                <Button hidden type="submit" onClick={sendmessages} > SEND  </Button>
            </form>
        </Chatinputcontainer>

    )
}

export default Chatinput

const Chatinputcontainer=styled.div`
form{
    display: flex;
    align-items: center;
    justify-content: center;
}
form > input{
    position: fixed;
    padding: 20px;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 10px;
}
form > button{
    display: none !important;
}
`


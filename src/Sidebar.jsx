import React from 'react'
import Sidebaroption from './Sidebaroption'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InboxIcon from '@material-ui/icons/Inbox';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AppsIcon from '@material-ui/icons/Apps';
import AddIcon from '@material-ui/icons/Add';
import {db,auth } from './Firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Sidebar = () => {

    const [ channels ] =useDocument(db.collection("rooms"))
    const [ user ] =useAuthState(auth)
    
    return (

        <Sidebarcontainer>
            <Sidebarheader>
                <Sidebarinfo>
                    <h2> PAPA FAM HQ </h2>
                    <h3> <FiberManualRecordIcon/> {user?.displayName} </h3>
                </Sidebarinfo>
                <CreateIcon />
            </Sidebarheader>

            <Sidebaroption Icon={InsertCommentIcon} title="Threads" />
            <Sidebaroption Icon={InboxIcon} title="Mentions & reactions" />
            <Sidebaroption Icon={DraftsIcon} title="Saved Items" />
            <Sidebaroption Icon={BookmarkBorderIcon} title="Channel browser" />
            <Sidebaroption Icon={PeopleIcon} title="People & user groups" />
            <Sidebaroption Icon={AppsIcon} title="Apps" />
            <Sidebaroption Icon={FileCopyIcon} title="File browser" />
            <Sidebaroption Icon={ExpandLessIcon} title="Show less" />
            <hr/>
            <Sidebaroption Icon={ExpandMoreIcon} title="Channels" />
            <hr/>
            <Sidebaroption Icon={AddIcon} addchanneloption  title="Add Channels" />
            { channels?.docs.map((doc)=>(
                <Sidebaroption 
                    key={doc.id}
                    id={doc.id}
                    title={doc.data().name}
                />
            )) }
        </Sidebarcontainer>
    )
}
export default Sidebar

const Sidebarcontainer=styled.div`
background-color: var(--slack-color);
color: white;
margin-top: 60px;
min-width: 260px;
max-height: 100%;
position: fixed;
overflow-y: scroll;
`

const Sidebarheader=styled.div`
border-bottom: 1px solid gray;
border-top: 1px solid gray;
padding: 9px;
display: flex;
align-items: center;
flex: 1;
justify-content: space-between;
> .MuiSvgIcon-root{
    background-color: white;
    color: #49274b;
    border-radius: 999px;
    padding: 9px;
    font-size: 16px;
}
`

const Sidebarinfo=styled.div`
flex: 1;
h2{
    font-size: 19px;
    font-weight: 900;
    margin-bottom: 6px;
}
h3{
    font-size: 15px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-transform: uppercase;
}
h3 > .MuiSvgIcon-root{
    color: green;
    font-size: 14px;
    margin-right: 4px;
}
`

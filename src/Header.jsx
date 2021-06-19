import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {

const [ user ] =useAuthState(auth)

    return (
        <Headercontainer>
            <Headerleft> 
            <Headeravatar src={user?.photoURL} alt={user?.displayName} onClick={()=>auth.signOut()} />
            <AccessTimeIcon />
            </Headerleft>
            <Headersearch>
            <SearchIcon />
            <input  placeholder="PAPA FAM SLACK GROUP" />
            </Headersearch>
            <Headerright>
            <HelpOutlineIcon />
            </Headerright>
        </Headercontainer>
    )
}
export default Header

const Headercontainer=styled.div`
background-color: var(--slack-color);
padding: 10px 0;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
width: 100%;
`
const Headerleft=styled.div`
flex: 0.2;
display: flex;
align-items: center;
margin-left: 30px;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
}
`
const Headersearch=styled.div`
border: 1px solid gray;
display: flex;
align-items: center;
padding: 0 50px;
flex: 0.4;
border-radius: 10px;
text-align: center;
> input{
    text-align: center;
    background-color: transparent;
    color: gray;
    border: none;
    outline: none;
    min-width: 30vw;
}
`
const Headerright=styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
> .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 30px;
}
`

const Headeravatar=styled(Avatar)`
cursor: pointer;
:hover{
    opacity: 0.8;
}
`
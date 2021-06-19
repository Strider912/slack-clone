import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import {db }  from './Firebase'
import { enterroom }  from './features/counter/appSlice'

const Sidebaroption = ({ title, Icon, addchanneloption,id }) => {
    const dispatch = useDispatch()
    
    const addchannel=(e)=>{
        e.preventDefault()
        const newchannel= prompt("kindy enter the channel name")
        if(newchannel){
            db.collection("rooms").add({
                name : newchannel,
            })
        }
    }

    const selectchannel=(e)=>{
        e.preventDefault()
        if(id){
            console.log(id)
        dispatch(enterroom({
            roomid : id,
        }))
        }
    }

    return (
        <Sidebaroptioncontainer
        onClick={ addchanneloption ? addchannel : selectchannel }
        >
            { Icon && <Icon fontSize="small" style={{ padding : 10 }}  />  }
            { Icon ? ( <h3> {title} </h3> )  : (
                <Sidebarchannel>
                    <span>#</span> {title}
                </Sidebarchannel>
            )  }
        </Sidebaroptioncontainer>

    )
}
export default Sidebaroption

const Sidebaroptioncontainer=styled.div`
display: flex;
align-items: center;
padding-left: 3px;
cursor: pointer;
font-size: 16px;
font-weight: 600;
:hover{
    opacity: 0.8;
    background-color: #340e36;
}
`

const Sidebarchannel=styled.h3`
padding: 10px;
span{
    font-size: 16px;
    font-weight : 300;
}
`
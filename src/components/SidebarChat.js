import React, {useEffect, useState} from 'react';
import './SidebarChat.css'
import {Avatar, IconButton} from '@material-ui/core';

const SidebarChat = ({addNewChat}) => {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));

    }, []);

    const createNewChat = () => {
        const roomName = prompt("Please enter the name for chat");

        if(roomName){

        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
            <div className="sidebarChat__info">
                <h3 className="name">Room Name</h3>
                <div className="message">Lost saved message... </div>
            </div>
        </div>
    ) : (
        <div onClick={createNewChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    );
};

export default SidebarChat;
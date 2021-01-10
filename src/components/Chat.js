import React, {useEffect, useState} from 'react';
import './Chat.css';
import {Avatar, IconButton} from "@material-ui/core";
import DonatLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {AttachFile, SearchOutlined} from "@material-ui/icons";

const Chat = () => {
    const [seed, setSeed] = useState('');

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));

    }, []);

    return (
        <div class='chat'>
            <div className="chat__header">
                <div className='chat__left'>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}></Avatar>
                    <div className="chat__info">
                        <h3 class='name'>Room Name</h3>
                        <p class='message'>Last seen at ...</p>
                    </div>
                </div>
                <div className="chat__right">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message">
                    <span className='chat__name'>
                        John Nicholson
                    </span>Hey Guys, how are you? I am fine, but very tired...
                    <span className='chat__timestamp'>3:52pm</span>
                </p>
                <p className="chat__message">
                    <span className='chat__name'>
                        Jessica Neiton
                    </span>
                    Hello! Great, I passed my last exam today
                    <span className='chat__timestamp'>3:55pm</span>
                </p>
                <p className="chat__message">
                    <span className='chat__name'>
                        John Nicholson
                    </span>Hi, everyone! And I couldn't pass the exam today.Sometimes I am lazy, I can spend all the day at the computer, forgetting about my lessons. Unfortunately...
                    <span className='chat__timestamp'>3:52pm</span>
                </p>
            </div>
            <div className="chat__footer">

            </div>
        </div>
    );
};

export default Chat;

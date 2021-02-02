import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

import {PushMessage} from '../firebase'

const MessageSubmitButton=({name, setText, text})=>{
    return(
        <IconButton disabled={text === ''}
        onClick={()=>{
            PushMessage({name,text});
            setText('');
        }}
        >
  <SendIcon />
</IconButton>
    )

    
};

export default MessageSubmitButton;
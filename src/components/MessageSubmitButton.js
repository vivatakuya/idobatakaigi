import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send'

import {PushMessage} from '../firebase'

const MessageSubmitButton=({inputEl,name, setText, text})=>{
    return(
        <IconButton disabled={text === ''}
        onClick={()=>{
            PushMessage({name,text});
            setText('');
            inputEl.current.forcus();
        }}
        >
  <SendIcon />
</IconButton>
    )

    
};

export default MessageSubmitButton;
import React from "react";
import TextField from '@mui/material/TextField';
import './TextInput.css';

export default function TextInput(props) {
    return (
        <div className='TextInput-container' data-bb={props.text}>
            <span>{props.text}</span>
            <TextField placeholder={props.text} variant="standard" />
        </div>
    )
}
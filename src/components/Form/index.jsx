import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import "./index.css"

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <form>
            <h1>News Letter</h1>
            <TextField className="input" type="text" label="Nome" variant="outlined"
            onChange={(e) => {setName(e.target.value)}}/>
            <TextField className="input" type="email" label="Email" variant="outlined"
            onChange={(e) => {setEmail(e.target.value)}}/>
            <Button className="button" variant="outlined">Enviar</Button>
        </form>
    );
};

export default Form
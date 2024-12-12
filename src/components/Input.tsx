import { TextField } from "@mui/material";

interface InputProps {
    nomelabel: string,
    type: string,
    name: string,
    useonchange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id: string,
    value: string,
    className: string
}

export default function Input( {nomelabel, type, name, useonchange, id, value, className} : InputProps ) {
    return(
        <>
            <label>
                <TextField id={`outlined-basic${id}`} label={nomelabel} variant="outlined" type={type} onChange={useonchange} name={name} value={value} className={className} required fullWidth />
            </label><br />
        </>
    )
}
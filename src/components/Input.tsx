import { TextField } from "@mui/material";

export default function Input( {nomelabel, type, name, useonchange, id, value, className} ) {
    return(
        <>
            <label>
                <TextField id={`outlined-basic${id}`} label={nomelabel} variant="outlined" type={type} onChange={useonchange} name={name} value={value} className={className} required fullWidth />
            </label><br />
        </>
    )
}
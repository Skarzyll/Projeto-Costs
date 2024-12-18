import { InputLabel, MenuItem, Select as MUISelect, FormControl, SelectChangeEvent } from "@mui/material";

export default function Select({ nomelabel, useonchange, name, value }: {
    nomelabel: string;
    name: string;
    value: string;
    useonchange: (event: SelectChangeEvent<string>, child: React.ReactNode) => void
}): JSX.Element {

    return (
        <label htmlFor={name}>
            <FormControl className="min-w-max" fullWidth>
                <InputLabel id="demo-simple-select-label">{nomelabel}</InputLabel>
                <MUISelect
                    name={name}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={useonchange}
                    required
                >
                    <MenuItem value={"Infra"}>Infra</MenuItem>
                    <MenuItem value={"Desenvolvimento"}>Desenvolvimento</MenuItem>
                    <MenuItem value={"Design"}>Design</MenuItem>
                    <MenuItem value={"Planejamento"}>Planejamento</MenuItem>
                </MUISelect>
            </FormControl>
        </label>
    )
}
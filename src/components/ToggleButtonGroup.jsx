import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export default function ColorToggleButton(props) {
    const [alignment, setAlignment] = React.useState(props.value);
    const [date, setDate] = React.useState('08/08/2022')

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const handleChangeDate = (newValue) => {
        setDate(newValue)
    };

    var Correccion = () => {
        if (alignment == "CORR") {
            return (
                <>
                    <Grid item xs={12}
                        container spacing={5}
                        direction="row"
                        justifyContent=""
                        alignItems="">
                        <Grid xs={3}>
                            <TextField fullWidth id="outlined-basic" color='warning' label="Número Declaración que Corrige" variant="standard" />
                        </Grid>
                        <Grid xs={1}>

                        </Grid>
                        <Grid xs={3}>
                            <TextField fullWidth id="standard-basic" color='warning' label="Valor Declaración que Corrige" variant="standard" />
                        </Grid>
                        <Grid xs={1}>

                        </Grid>
                        <Grid xs={4}>
                            <ToggleButtonGroup
                                color='warning'
                                value={alignment}
                                exclusive>
                                <LocalizationProvider color='warning' dateAdapter={AdapterDateFns}>
                                    <DesktopDatePicker
                                    color="warning"
                                        label="Date desktop"
                                        inputFormat="MM/dd/yyyy"
                                        value={date}
                                        onChange={handleChangeDate}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </ToggleButtonGroup>


                        </Grid>

                    </Grid>


                </>

            )
        }
    }

    if (props.type == 'Uso') {
        return (
            <>
                <ToggleButtonGroup
                    color='warning'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="INI">Declaracion Inicial</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    color='warning'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="CORR">Correccion</ToggleButton>
                </ToggleButtonGroup>
                <Box sx={{
                    flexGrow: 1,
                    p: 6
                }}>
                    <Grid item xs={12}
                        container spacing={5}
                        direction="row"
                        justifyContent=""
                        alignItems="">
                        {Correccion()}
                    </Grid>
                </Box>

            </>


        );
    }
    else {
        return (
            <>
                <ToggleButtonGroup
                    color='warning'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="Enero">Enero</ToggleButton>
                    <ToggleButton value="Febrero">Febrero</ToggleButton>
                    <ToggleButton value="Marzo">Marzo</ToggleButton>
                    <ToggleButton value="Abril">Abril</ToggleButton>
                    <ToggleButton value="Mayo">Mayo</ToggleButton>
                    <ToggleButton value="Junio">Junio</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    color='warning'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="Julio">Julio</ToggleButton>
                    <ToggleButton value="Agosto">Agosto</ToggleButton>
                    <ToggleButton value="Septiembre">Septiembre</ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    color='warning'
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="Octubre">Octubre</ToggleButton>
                    <ToggleButton value="Noviembre">Noviembre</ToggleButton>
                    <ToggleButton value="Diciembre">Diciembre</ToggleButton>
                </ToggleButtonGroup>

            </>


        );
    }

}



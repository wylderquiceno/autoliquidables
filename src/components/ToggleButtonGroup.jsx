import * as React from 'react';
import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Grid } from '@mui/material';
import { orange } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material';

export default function ColorToggleButton(props) {
    const [alignment, setAlignment] = React.useState(props.value);

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    var Correccion = () => {
        if (alignment == "CORR") {
            return (
                <>
                    <br />
                    <Grid item xs={12}
                        container spacing={5}
                        direction="row"
                        justifyContent=""
                        alignItems="">
                        <Grid xs={12}>
                            <br />
                            <TextField id="outlined-basic" label="Número Declaración que Corrige" variant="outlined" />
                            <TextField id="standard-basic" label="Valor Declaración que Corrige" variant="outlined" />
                            <TextField id="standard-basic" label="Fecha de Presentación" variant="outlined" />
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
                {Correccion()}
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



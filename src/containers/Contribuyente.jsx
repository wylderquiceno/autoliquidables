import '../index.css';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from "../components/breadcrumbs"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Selector from '../components/select';
import ToggleButton from '../components/ToggleButtonGroup';
import { Button, TextField, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 900,
    lineHeight: '60px',
}));



function Contribuyente() {
    const [data, setData] = useState([])
    const [uso, setUso] = useState('INI')

    var handleChage = (event) => {
        if (event.target.type == 'Uso') {
            this.setUso(event.target.value)
        }
    }

    var serviceBase = 'https://localhost:7111'

    var getDepartamentos = () => {
        fetch(serviceBase + '/Municipios/GetDepartamentos', {
            method: 'GET'
        }).then(response => {
            if (response.ok) return response.json();
        }).then(json => {
            setData(json);
        });
    }

    useEffect(() => {
        getDepartamentos()
    }, [])

    const history = useNavigate();
    const navHome = () => history('/home');


    return (
        <div>
            <Box
                sx={{
                    p: 10,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gridTemplateColumns: { md: '1fr' },
                }}
            >


                <Item key={24} elevation={24}>


                    <Box sx={{
                        flexGrow: 1,
                        p: 6
                    }}>
                        <Grid
                            container spacing={2}
                            direction="row"
                            justifyContent="left"
                            alignItems="center"
                        >
                            <Grid item xs={12}
                                container spacing={2}
                                direction="row"
                                justifyContent="center"
                                alignItems="center">
                                <Grid item>
                                    <Breadcrumbs page='Contribuyente'></Breadcrumbs>
                                </Grid>
                            </Grid>
                            <Grid xs={12}>
                                <h1 className="title">SECRETARÍA DE HACIENDA</h1>
                                <p className="text">FORMULARIO ÚNICO NACIONAL DE DECLARACIÓN Y PAGO</p>
                                <p>DEL IMPUESTO DE INDUSTRIA Y COMERCIO</p>
                            </Grid>
                            <Grid item xd={6}>
                                <FormControl fullWidth>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        color='warning'
                                    >
                                        <FormControlLabel value="NIT" control={<Radio />} label="Nit" />
                                        <FormControlLabel value="CC" control={<Radio />} label="CC" />
                                        <FormControlLabel value="TI" control={<Radio />} label="TI" />
                                        <FormControlLabel value="CE" control={<Radio />} label="CE" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" label="Standard" variant="standard" />
                            </Grid>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    p: 15,
                                    display: 'grid',
                                    gridTemplateColumns: { md: '1fr' },
                                }}>
                                <Grid
                                    item xs={12}
                                    container spacing={150}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center">
                                    <Grid item xs={6}>
                                        <Button color='warning' onClick={navHome} size="large" variant="contained">Atras</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button color='warning' size="large" variant="contained">Siguiente</Button>
                                    </Grid>
                                </Grid>




                            </Box>
                        </Grid>
                    </Box>
                </Item>
            </Box>
        </div >
    )


}

export default Contribuyente

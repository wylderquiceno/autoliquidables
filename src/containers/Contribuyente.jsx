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
import { Button, TextField, FormControlLabel, Radio, RadioGroup, FormLabel, FormControl, Select, InputLabel, MenuItem } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 900,
    lineHeight: '60px',
}));



function Contribuyente(props) {
    const [data, setData] = useState([])
    const [ciudades, setCiudades] = useState([])
    const [uso, setUso] = useState('INI')
    const [ciudad, setCiudad] = useState('')
    const [departamento, setDepartamento] = useState('')
    const [tipoDocumento, setTipoDocumento] = useState('CC')

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
        data.find((x) => {
            if (x.nombreDepartamento == departamento) {
                setCiudades(x.ciudades)
            }
        })
    })

    var handleChageDep = (event) => {
        setDepartamento(event.target.value)
    }
    var mapDepartamento = data.map((x) => {
        return (
            <MenuItem key={x.id} value={x.nombreDepartamento}>
                {x.nombreDepartamento}
            </MenuItem>

        )
    })

    var mapCiudades = ciudades.map((x) => {
        return (
            <MenuItem key={x.id} value={x.nombreCiudad}>
                {x.nombreCiudad}
            </MenuItem>
        )
    })

    const history = useNavigate();


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
                            <Grid item xd={12}>
                                <FormControl fullWidth>
                                    <FormLabel color="warning" id="Form">Tipo Documento</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        color='warning'
                                        value={tipoDocumento}
                                        onChange={(event) => {
                                            setTipoDocumento(event.target.value)
                                        }}
                                    >
                                        <FormControlLabel value="NIT" control={<Radio color="warning" />} label="Nit" />
                                        <FormControlLabel value="CC" control={<Radio color="warning" />} label="CC" />
                                        <FormControlLabel value="TI" control={<Radio color="warning" />} label="TI" />
                                        <FormControlLabel value="CE" control={<Radio color="warning" />} label="CE" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={10}>
                                <TextField id="standard-basic" fullWidth label="Documento" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={2}>
                                <TextField id="standard-basic" fullWidth label="DV" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Nombre" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Segundo Nombre" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Apellido" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Segundo Apellido" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormLabel fullWidth color="warning" id="Form">Direccion</FormLabel>
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Direccion" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel color='warning' id="demo-simple-select-label">Departamento</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={departamento}
                                        label='departamento'
                                        onChange={handleChageDep}
                                        inputProps={{ readOnly: false }}
                                        color='warning'
                                    >
                                        {mapDepartamento}
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={3}>
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel color='warning' id="demo-simple-select-label">Ciudad</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={ciudad}
                                        label='Ciudad'
                                        onChange={(event) => { setCiudad(event.target.value) }}
                                        inputProps={{ readOnly: false }}
                                        color='warning'
                                    >
                                        {mapCiudades}
                                    </Select>
                                </FormControl>

                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Segundo Apellido" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Segundo Apellido" color='warning' variant="standard" />
                            </Grid>
                            <Grid item xs={3}>
                                <TextField id="standard-basic" fullWidth label="Segundo Apellido" color='warning' variant="standard" />
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
                                        <Button color='warning' onClick={() => { history('/') }} size="large" variant="contained">Atras</Button>
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

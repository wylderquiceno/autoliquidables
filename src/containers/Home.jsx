import '../index.css';
import { useNavigate } from "react-router-dom"
import Breadcrumbs from "../components/breadcrumbs"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Selector from '../components/select';
import ToggleButton from '../components/ToggleButtonGroup';
import { Button } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 900,
    lineHeight: '60px',
}));



function Home() {
    const [data, setData] = useState([])
    const [uso, setUso] = useState('')


    const history = useNavigate();
    const Nav = () => history('/Contribuyente');

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
                                    <Breadcrumbs page='Inicio'></Breadcrumbs>
                                </Grid>
                            </Grid>
                            <Grid xs={12}>
                                <h1 className="title">SECRETARÍA DE HACIENDA</h1>
                                <p className="text">FORMULARIO ÚNICO NACIONAL DE DECLARACIÓN Y PAGO</p>
                                <p>DEL IMPUESTO DE INDUSTRIA Y COMERCIO</p>
                            </Grid>
                            <Grid item xs={6}>
                                <Selector data={data} label="Pais" type='Pais'></Selector>
                            </Grid>
                            <Grid item xs={6}>
                                <Selector data={data} readOnly={true} value='ANTIOQUIA' label="Departamento" ></Selector>
                            </Grid>
                            <Grid item xs={6}>
                                <Selector data={data} ciudad={0} readOnly={true} value='MEDELLIN' type='Ciudad' label="Ciudad"></Selector>
                            </Grid>
                            <Grid item xs={6}>
                                <ToggleButton value={uso} onClick={handleChage} type='Uso'></ToggleButton>
                            </Grid>
                            <Grid item xs={12}>

                            </Grid>
                            <Grid item xs={12}>

                            </Grid>
                            <Grid item xs={12}>
                                <ToggleButton value='Enero'></ToggleButton>
                            </Grid>

                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-end"
                                alignItems="flex-end"
                                minHeight={220}
                                maxHeight={220}
                            >
                                <Button color='warning' onClick={Nav} size="large" variant="contained">Siguiente</Button>
                            </Grid>

                        </Grid>
                    </Box>
                </Item>
            </Box>
        </div >
    )


}

export default Home

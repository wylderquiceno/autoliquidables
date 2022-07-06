import { useEffect, useState } from "react"
import departament from "./data/departamentos"
import Selector from "./components/select"
import Breadcrumbs from "./components/breadcrumbs"
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './index.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 1000,
  lineHeight: '60px',
}));



function App() {

  const [departments, setDepartements] = useState([])

  var departamento = []

  console.log(departament)

  departament.then(x => {
    x.map(e => {
      departamento.push(e)
    })
  })

  useEffect(() => {
    setDepartements(departamento)
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
              justifyContent="center"
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
                <Selector data={departamento} label="Departamento"></Selector>
              </Grid>
              <Grid item xs={6}>
                <Selector data={departamento} label="Departamento"></Selector>
              </Grid>
              <Grid item xs={6}>
                <Selector data={departamento} label="Departamento"></Selector>
              </Grid>
              <Grid item xs={6}>
                <Selector data={departamento} label="Departamento"></Selector>
              </Grid>
            </Grid>
          </Box>



        </Item>
      </Box>
    </div >
  )


}

export default App

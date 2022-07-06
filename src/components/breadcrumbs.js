import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Home, Person, Paid, Storage, ConfirmationNumber, CloudDownload } from '@mui/icons-material';
import { orange } from '@mui/material/colors';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs(props) {

    switch (props.page) {
        case 'Inicio':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Home
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Contribuyente':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Person
                            sx={{
                                mr: 0.5,
                                color: orange[800],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Base Gravable':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Storage
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Actividades Gravadas':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Storage
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Liquidacion Privada':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Storage
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Totales':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <Paid
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Firmas':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <ConfirmationNumber
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        case 'Pago y Descarga':
            return (<div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="Inicio">
                    <Typography
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color="text.primary"
                    >
                        <CloudDownload
                            sx={{
                                mr: 0.5,
                                color: orange[500],
                                fontSize: 30
                            }} />
                        {props.page}
                    </Typography>
                </Breadcrumbs>
            </div>)
        default:
            break;
    }
}
// const url = 'https://localhost:7111/Municipios/GetDepartamentos'
// async function Departamentos() {

//     const response = await fetch(url)
//     const JSON = await response.json()
//     return JSON
// }


var departamentos =
    [
        {
            id: 1,
            nombreDepartamento: 'ANTIOQUIA',
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            }
        },
        {
            id: 1,
            nombreDepartamento: 'ANTIOQUIA',
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            },
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            },
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            }
        },
        {
            id: 1,
            nombreDepartamento: 'ANTIOQUIA',
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            }
        },
        {
            id: 1,
            nombreDepartamento: 'ANTIOQUIA',
            ciudades: {
                id: 1,
                nombreCiudad: "MEDELLIN"
            }
        }
    ]

export default departamentos



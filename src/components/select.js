import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Selector(props) {
  const [valor, setValor] = React.useState(props.value);


  const handleChange = (event) => {
    setValor(event.target.value);
  };


  var department = props.data.map(option => {
    return (
      <MenuItem key={option.id} value={option.nombreDepartamento}>
        {option.nombreDepartamento}
      </MenuItem>
    );
  }, this)

  var ciudad = props?.data[props.ciudad]?.ciudades.map(x => {
    return (
      <MenuItem key={x.id} value={x.nombreCiudad}>
        {x.nombreCiudad}
      </MenuItem>
    )
  })

  if (props.type == 'Ciudad') {
    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valor}
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: props.readOnly }}
          >
            {ciudad}
          </Select>
        </FormControl>
      </div>

    );
  }
  if (props.type == 'Pais') {
    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value='Colombia'
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: true }}
          >
            <MenuItem key={1} value='Colombia'>
              COLOMBIA
            </MenuItem>
          </Select>
        </FormControl>
      </div>

    );
  }
  else {
    return (
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valor}
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: props.readOnly }}
          >
            {department}
          </Select>
        </FormControl>
      </div>

    );
  }
}


import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Selector(props) {
  const [valor, setValor] = React.useState(props.value);
  const [id, setID] = React.useState("");


  const handleChange = (event) => {
    setValor(event.target.value);
    setValor(event.target.key)

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
        <FormControl variant="standard" fullWidth>
          <InputLabel color='warning' id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valor}
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: props.readOnly }}
            color='warning'
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
        <FormControl variant="standard" fullWidth>
          <InputLabel color='warning' id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value='Colombia'
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: true }}
            color='warning'
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
        <FormControl variant="standard" fullWidth>
          <InputLabel color='warning' id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valor}
            label={props.label}
            onChange={handleChange}
            inputProps={{ readOnly: props.readOnly }}
            color='warning'
          >
            {department}
          </Select>
        </FormControl>
      </div>

    );
  }
}


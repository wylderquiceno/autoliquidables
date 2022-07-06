import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function Selector(props) {
  const [valor, setValor] = React.useState(props.value);
  const [data, setData] = React.useState([]);


  React.useEffect(() => {
    setData(props.data)
  })



  const handleChange = (event) => {
    setValor(event.target.value);
  };


  var department = data.map(option => {
    return (
      <MenuItem key={option.id} value={option.id}>
        {option.nombreDepartamento}
      </MenuItem>
    );
  }, this)

  console.log(data)
  // var ciudad = data[0].ciudades.map(option => {

  //   return (
  //     <MenuItem key={option.id} value={option.id}>
  //       {option.nombreCiudad}
  //     </MenuItem>
  //   )
  // }, this)

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


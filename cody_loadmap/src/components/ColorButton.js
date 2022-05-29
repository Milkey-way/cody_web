import * as React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const ColorContainer = {
      root:{
          width:50,
          height: 50,
        },
      
  };

  return (
      <div>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div style={{backgroundColor: '#ff0000'}}>
          <ToggleButton style={ColorContainer.root} >
              </ToggleButton>
      </div>
      <div style={{backgroundColor: '#ffa500'}}>
          <ToggleButton style={ColorContainer.root} >
          </ToggleButton>
      </div>
      <div style={{backgroundColor: '#ffd400'}}>
      <ToggleButton style={ColorContainer.root}>
      </ToggleButton>
      </div>
      <div style={{backgroundColor: '#008000'}}>
      <ToggleButton style={ColorContainer.root}>
      </ToggleButton>
      </div>   
    </ToggleButtonGroup>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div style={{backgroundColor: '#0067a3'}}>
      <ToggleButton style={ColorContainer.root}>
      </ToggleButton>
      </div>
      <div style={{backgroundColor: '#ffffff'}}>
      <ToggleButton style={ColorContainer.root}>
      </ToggleButton>
      </div>  
      <div style={{backgroundColor: '#000000'}}>
      <ToggleButton style={ColorContainer.root}>
      </ToggleButton>
      </div>   
    </ToggleButtonGroup>
    </div>
  );
}

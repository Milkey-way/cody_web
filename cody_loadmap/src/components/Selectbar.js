import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo(props) {
  const {text, addFont} = props;

  const onChange = (e) => {
    const { value } = e.target;
    console.log("addfont: "+addFont);
    console.log("selectar value: "+ value);
    addFont(value);
  };

  function test(font) {addFont(font)}
  
  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        FONT
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'FONT',
            id: 'uncontrolled-native',
          }}
          onChange={onChange}
        >
          
          <option value={"NotoSansKR"} onChange={onChange} >NotoSansKR</option>
          <option value={"안상수체"}onChange={onChange}>안상수체</option>
          <option value={"Roboto"} onChange={onChange}>Roboto</option>
          
          
        </NativeSelect>
        
      </FormControl>
    </Box>
  );
}

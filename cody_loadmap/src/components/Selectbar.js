import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo(props) {
  const {cardText, addFont} = props;

  const onChange = (e) => {
    const { value } = e.target;
    console.log("text: "+cardText);
    console.log("addfont: "+addFont);
    console.log("selectar value: "+ value);
    addFont(value);
  };
  
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
          <option value={"HancomUljuBangudae"}onChange={onChange}>한컴 울주 반구대 암각화체</option>
          <option value={"Roboto"} onChange={onChange}>Roboto</option>
          <option value={"Donoun-Medium"} onChange={onChange}>두넌체</option>
          
        </NativeSelect>
        
      </FormControl>
    </Box>
  );
}

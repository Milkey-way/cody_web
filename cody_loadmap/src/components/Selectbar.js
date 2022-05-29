import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
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
        >
          <option value={10}>NotoSansKR</option>
          <option value={20}>안상수체</option>
          <option value={30}>Roboto</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

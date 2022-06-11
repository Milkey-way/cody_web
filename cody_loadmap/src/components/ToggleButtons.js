import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons(props) {
  const [alignment, setAlignment] = React.useState('left');
  const {cardText, addAlignment} = props;

  //필요시 'event' props 추가
  const handleAlignment = (newAlignment) => {
    const { value } = newAlignment.target;
    setAlignment(newAlignment);
    // addAlignment(value);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned" onClick={()=>addAlignment("left")}>
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered" onClick={()=>addAlignment("center")}>
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned" onClick={()=>addAlignment("right")}>
        <FormatAlignRightIcon/>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

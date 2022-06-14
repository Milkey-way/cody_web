import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ToggleButtons from './ToggleButtons';
import ColorButton from './ColorButton';
import Selectbar from './FontSelectbar';
import '../css/style.css'

const drawerWidth = 240;

export default function ClippedDrawer(props) {
  const text = props.cardText;
  const font = props.addFont;
  const color = props.addColor;
  const align = props.addAlignment;
  console.log("ClippedDrawer: "+ text);
  console.log("ClippedDrawer f: "+ font);
  console.log("ClippedDrawer c: "+ color);
  console.log("ClippedDrawer a: "+ align);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography className='cursor' variant="h6" noWrap component="div" onClick={() => window.location.replace('http://15.164.104.68/')}>
            Cody
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
           <ListItem>템플릿 검색</ListItem>
          </List>
          <Divider />

          <List>
           <ListItem><Selectbar cardText={props.cardText} addFont={props.addFont} /></ListItem>
          </List>
          <Divider />

          <List>
          <ToggleButtons cardText={props.cardText} addAlignment={props.addAlignment}/>
          </List>

          <List>
          <ColorButton cardText={props.cardText} addColor={props.addColor}/>
          </List>

        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
      </Box>
    </Box>
  );
}

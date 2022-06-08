import * as React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as SelectColor from './TrelloForm';
import '../css/ColorButtonStyle.css';

export default function ColorButton(props) {
  const {text, addColor} = props;
  const [alignment, setAlignment] = React.useState('web');
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState({ color: "black" });
  const [Id, setId] = React.useState("");

  console.log("colorbutton text: "+props.text);

  //컬러 변경 handleClick 시작


  const handleClick = (event) => {

    console.log("color값: "+ document.getElementById(`${Id}`).getAttribute('style'));
    const getStyleAttr = document.getElementById(`${Id}`).getAttribute('style');
    const message = document.getElementById("message");

    console.log("getStyleAttr", getStyleAttr);

    let sliceColor = getStyleAttr.split(";");

    console.log("sliceColor", sliceColor);

    console.log("컬러", color);
    console.log("슬라이스컬러[0]", sliceColor[0]);

    sliceColor = sliceColor[0].split(":");

    console.log('":"로 자른 sliceColor', sliceColor);

    console.log("message", message.getAttribute("style"));

    const messageColor = message.getAttribute("style");

    if (messageColor === getStyleAttr) {
      setColor({ color: "black" });
    } else {
      setColor({ color: sliceColor[1] });
    }

  };
//handleClick 끝

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const ColorContainer = {
      root:{
          width:50,
          height: 50,
        }, 
  };

  const callSelectColor = () => {
    SelectColor.SelectColor(color)
  };

  callSelectColor();

  return (
      <div>
        {/* <h1 style={color}>test</h1> */}
        <h2 id="message" style={color}>
        {message}
      </h2>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div id="red" onClick={()=>{ handleClick (setId("red"))} } className='red' style={{ color: "red" }}>
          <ToggleButton  className='root' onClick={()=>addColor("red")} >
              </ToggleButton>
      </div>
      <div id="orange" onClick={()=> handleClick (setId("orange"))} className='orange' style={{ color: "#ffa500" }}>
          <ToggleButton style={ColorContainer.root}  onClick={()=>addColor("#ffa500")}  >
          </ToggleButton>
      </div>
      <div id="yellow" onClick={()=> handleClick (setId("yellow")) } className='yellow' style={{ color: "yellow" }}>
      <ToggleButton style={ColorContainer.root}  onClick={()=>addColor("#ffd400")} >
      </ToggleButton>
      </div>
      <div style={{backgroundColor: '#008000', color: "green"}}>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("green")} >
      </ToggleButton>
      </div>   
    </ToggleButtonGroup>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div style={{backgroundColor: '#0067a3'}}>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#0067a3")} >
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

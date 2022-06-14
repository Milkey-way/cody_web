import * as React from 'react';
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '../css/ColorButtonStyle.css';

function ColorButton(props) {
  const {cardText, addColor} = props;
  const [alignment, setAlignment] = React.useState('web');
  const [message, setMessage] = React.useState("");
  const [color, setColor] = React.useState({ color: "black" });
  const [Id, setId] = React.useState("");

  //컬러 변경 handleClick 시작
  const handleClick = (event) => {
    const getStyleAttr = document.getElementById(`${Id}`).getAttribute('style');
    const message = document.getElementById("message");

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

  return (
      <div className='colorGroup'>   
      <span className='title'>◌기본◌</span> <h2></h2>    
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
      <div className='green'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("green")} >
      </ToggleButton>
      </div>   
    </ToggleButtonGroup>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div className='blue'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#0067a3")} >
      </ToggleButton>
      </div>
      <div className='purple'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#5005F2")}>
      </ToggleButton>
      </div>
      <div className='sky'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#41D9BD")}>
      </ToggleButton>
      </div>  
      <div className='black'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#000000")}>
      </ToggleButton>
      </div>   
    </ToggleButtonGroup>
    <hr/>
    <span className='title'>◌트렌드◌</span>
    <h2></h2>
    <ToggleButtonGroup 
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <div className='wine'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#731717")} >
      </ToggleButton>
      </div>
      <div className='pink'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#F25E7A")}>
      </ToggleButton>
      </div>
      <div className='greenblue'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#0E6973")} >
      </ToggleButton>
      </div>
      <div className='skyblue'>
      <ToggleButton style={ColorContainer.root} onClick={()=>addColor("#9AA3D9")}></ToggleButton>
      </div>
      </ToggleButtonGroup>
    </div>
  );
}

export default React.memo(ColorButton) 
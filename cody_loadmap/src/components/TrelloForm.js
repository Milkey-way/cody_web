import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import ColorButton from "./ColorButton"
import Sidebar from "./Sidebar";
import "../css/CardStyle.css";

const Container = styled.div`
  width: 452px;
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  min-height: 85px;
  padding: 6px 8px 2px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const StyledIcon = styled(Icon)`
  margin-left: 8px;
  cursor: pointer;
`;

let color = "";

export function SelectColor (selectColor) {
  console.log("!!! selectcolor: "+selectColor.color);
  color = selectColor.color;

  return(<div><TrelloForm
    color={color} /></div>);
}

const TrelloForm = React.memo(
  ({ list, text = "", onChange, closeForm, children, color, font }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const handleFocus = e => {
      e.target.select();
    };
    
    console.log("!!!"+text);
    console.log("!!!"+color);
    console.log("!!! f"+font);

    const useStyles = makeStyles({
      text: {
        color: color,
        fontFamily: font
      },
    });
    const classes = useStyles();

    return (
      <Container>
        <StyledCard>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            className={classes.text}
            value={text}
            onChange={e => onChange(e)}             
          >
          <p> {text}</p>
          </StyledTextArea>   
        </StyledCard>
        <ButtonContainer>
          {children}
          <StyledIcon onMouseDown={closeForm}>close</StyledIcon>
        </ButtonContainer>
      </Container>
    );
  }
);

export default TrelloForm;
import React, { useState } from 'react'; 
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography'; 
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd'
import styled from "styled-components"
import Icon from "@material-ui/core/Icon";
import { editCard, deleteCard } from "../action";
import { connect } from "react-redux";
import TrelloButton from './SaveButton';
import TrelloForm from "./TrelloForm";
import '../css/CardStyle.css';
import ClippedDrawer from "./Sidebar"
import "../static/fonts/font.css";


const CardContainer = styled.div`
margin: 0 0 80px 0;
position: relative;
`;
const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;



const TrelloCard = React.memo(({ text, id, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);
  const [color, setColor] = useState("");
  const [font, setFont] = useState("");
  const [alignment, setAlignment] = useState("");

  const addColor = (newColor) => {
    setColor(newColor);
    console.log("!!!newColor: " + newColor);
  }

  const addFont = (newFont) => {
    setFont(newFont);
    console.log("!!!newFont: " + newFont);
  }

  const addAlignment = (newAlignment) => {
    setAlignment(newAlignment);
    console.log("!!!newAlignment: " + newAlignment);
  }

  const closeForm = e => {
    console.log("clicked");
    setIsEditing(false);
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const saveCard = e => {
    e.preventDefault();
  console.log("savecard 호출");
    dispatch(editCard(id, listID, cardText));
    setIsEditing(false);
  };

  const handleDeleteCard = e => {
    console.log(listID);
    dispatch(deleteCard(id, listID));
  };

  const RenderFontSelect = React.memo(
    ({ text = "", addFont, addColor, addAlignment}) => {
    console.log("RenderFontSelect 호출");
    console.log("RenderFontSelect 호출 : " + cardText);
    return(<ClippedDrawer cardText={cardText} addFont={addFont} addColor={addColor} addAlignment={addAlignment} />)
    } 
  );

  const renderEditForm = () => {
    console.log("renderEditForm 호출");
    return (
      <>
      <TrelloForm text={cardText} setText={setText} onChange={handleChange} closeForm={closeForm} actionButtonClicked={saveCard} color={color} font={font} alignment={alignment}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
      <RenderFontSelect style={{display: "none"}} text={cardText} setText={setText} addFont={addFont} addColor={addColor} addAlignment={addAlignment}/>
      </>
    );
  };

  const useStyles = makeStyles({
    text: {
      color: color,
      fontFamily: font,
      textAlign: alignment,
      fontSize: '1.2rem'
    },
  });
  const classes = useStyles();

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
          <CardContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
            style={{height: 200}}
          >
            <Card>
              
              <EditButton
                onMouseDown={() => (setIsEditing(true))}
                fontSize="small">
                edit
              </EditButton>
              
              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>

              <CardContent className='cardContent'>
                <Typography className={classes.text}>{text}</Typography>
              </CardContent>              
            </Card>
            <div className='alignC'>
            <div className='v-line' ></div>
            </div>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(TrelloCard);

export function GetIsEditing(isEditing){
  const test = isEditing;
  console.log("isEditing"+isEditing);
 return test
}

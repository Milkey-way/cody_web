import React, { useState } from 'react'; 
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography'; 
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd'
import styled from "styled-components"
import Icon from "@material-ui/core/Icon";
import { editCard, deleteCard } from "../action";
import { connect } from "react-redux";
import TrelloButton from './TrelloButton';
import TrelloForm from "./TrelloForm";
import ColorButton from "./ColorButton";
import '../css/CardStyle.css';


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

  const addColor = (newColor) => {
    setColor(newColor);
    console.log("!!!newColor: " + newColor);
  };

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

  const renderEditForm = () => {
    console.log(cardText);
    console.log("renderEditForm 호출");
    return (
      <>
      <ColorButton text={cardText} addColor={addColor}/> 
      <TrelloForm text={cardText} setText={setText} onChange={handleChange} closeForm={closeForm} actionButtonClicked={saveCard} color={color}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
      </>
    );
  };

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
                fontSize="small"
              >
                edit
              </EditButton>
              
              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>

              <CardContent className='cardContent'>
                <Typography style={{color: color}}>{text}</Typography>
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

export function RenderFontButton (){
  console.log("renderFontButton 호출");
  } 
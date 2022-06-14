import React, {useState, useEffect} from 'react'; 
import TrelloCard from './TrelloCard';
import TrelloActionButton from './trelloActionButton';
import { Droppable } from 'react-beautiful-dnd'
import styled from "styled-components";
import { connect } from "react-redux";
import Icon from "@material-ui/core/Icon";
import { deleteList } from "../action";

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 500px;
padding: 8px;
margin: 15px 8px 0 0;
position: relative;
`

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 5px;
  opacity: 0.5;
  ${ListContainer}:hover & {
    display: block;
    cursor: pointer;
    top: 35px;
  }
  &:hover {
    opacity: 0.8;
  }
`;


const TrelloList = ({title, cards, listID, index, dispatch}) => { 

  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteCard = () => {
    console.log("handleDeleteCArd: " + deleteList);
    console.log("dipatch: " + dispatch) ;
    dispatch(deleteList(listID));
  };
    return (
        <Droppable droppableId={String(listID)} index={index}>
      {provided => (
        <ListContainer
          {...provided.droppableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
         <Droppable droppableId={String(listID)} type="card">
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{title}</h4>
              
              <DeleteButton fontSize="small" onMouseDown={handleDeleteCard}>
                delete
              </DeleteButton>
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listID={listID}
                  />
                ))}
                {provided.placeholder}
          <TrelloActionButton listID={listID} />
          </div>
           )}
           </Droppable>
        </ListContainer>
      )}
    </Droppable>

    ); 
}

export default connect()(TrelloList);

import React from 'react'; 
import TrelloCard from './TrelloCard';
import TrelloActionButton from './trelloActionButton';
import { Droppable } from 'react-beautiful-dnd'
import styled from "styled-components";

const ListContainer = styled.div`
background-color: #dfe3e6;
border-radius: 3px;
width: 500px;;
padding: 8px;
height: 100%;
margin: 0px 8px 0 0;
`

const TrelloList = ({title, cards, listID, index}) => { 
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

export default TrelloList;

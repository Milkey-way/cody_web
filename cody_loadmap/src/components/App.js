import TrelloList from './trelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
import React, { Component } from 'react'
import { sort } from "../action"
import styled from "styled-components"
import Slidebar from "./Sidebar"
import { GetIsEditing } from './TrelloCard';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
`;

class App extends Component {

  onDragEnd = result => { //드래그 끝나면 할일 
    const {destination, source, draggableId} = result;

    if(!destination){
      return;
    }

    this.props.dispatch(
      sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    )
    )
  }

  render(){
    const { lists } = this.props;     
    const isEditing = <GetIsEditing/>;
    //드래그 구현, 호출시점   
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <Slidebar/>
        <ListContainer>
          {lists.map((list) => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
          </ListContainer>
        </div>
        </DragDropContext>
    );
          }
  }

const mapStateToProps = state => ({
    lists: state.lists
});

export function SlidebarRender(isEditing){
  if(isEditing){
  return <Slidebar/>
  }
  else{

  }
}

export default connect(mapStateToProps)(App);

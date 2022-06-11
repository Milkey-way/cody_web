import TrelloList from './trelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
import React, { Component, useState } from 'react'
import { sort } from "../action"
import styled from "styled-components"
import Slidebar from "./Sidebar"
import { GetIsEditing } from './TrelloCard';
import { Button } from '@mui/material';
import '../css/style.css';


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width:50%px;
`;

const ListBox = styled.div`
  background-Color: #f2f2f2;
  margin: 0 auto;
  width: 60%;
  padding: 10px 50px 10px 10px;
  overflow: auto;
  position: relative;
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
    const listId =  lists.map((list) => (list.id))
    const listId2 = listId+"";
    console.log("listIdLength: "+listId.length);
    var result1 = listId2.split("-");
    console.log("분할됨: "+result1[1]);

    if(result1[1] == 0 ){
      console.log("리스트가 두개 이하임");
    }else{
      console.log("리스트가 두개 이상임");  
    }

    if(listId.length >5 ){
      alert('5개 이하로 작성바랍니다.')
    }else{}


    //드래그 구현, 호출시점   
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <Slidebar/>
        <div className='saveButton'>
          <Button variant="contained">저장하기</Button>
          </div>
        <ListBox>
        <ListContainer style={{width: listId.length <=3 ? "1900px" : "2300px"}} >
          {result1[1] == 0  ? console.log('적용엑스') : console.log('적용오키') }
          {lists.map((list) => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list listid={listId.length}/>
          </ListContainer>
          </ListBox>
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

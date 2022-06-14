import TrelloList from './TrelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
import React, { Component } from 'react'
import { sort } from "../action"
import styled from "styled-components"
import Slidebar from "./Sidebar"
import { GetIsEditing } from './TrelloCard';
import { Button } from '@mui/material';
import '../css/style.css';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width:50%;
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
    const listId =  lists.map((list) => (list.id))
    const listTitle =  lists.map((list) => (list.title))
    const listCards =  lists.map((list) => (list.cards))

    const listId2 = listId+"";
    console.log("listIdLength: "+listId.length);
    var result1 = listId2.split("-");
    console.log("분할됨: "+result1[1]);

    if(result1[1] == 0 ){
      console.log("리스트가 두개 이하임");
    }else{
      console.log("리스트가 두개 이상임");  
    }

    //드래그 구현, 호출시점   
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="App">
        <Slidebar/>
        <h3 className='text'>※ 리스트 추가는 5개까지만 가능합니다</h3>
        <div className='saveButton'>
          <Button variant="contained" onClick={()=>{onHtmlToPng();test({listId,listTitle,listCards})}}>저장하기</Button>
          </div>
        <ListBox>
        <ListContainer  className='card' style={{width: listId.length <=3 ? "1900px" : "2300px"}} >
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

  const onHtmlToPng = () => {	
    domtoimage
      .toBlob(document.querySelector('.card'))
      .then((blob) => {
        saveAs(blob, 'card.png');
      });
  }

  export const test = (props) => {
    console.log("test Props: "+props);
    console.log("test ListID: " + props.listId);
    console.log("test listTitle: " + props.listTitle);
    console.log("test listCards: " + props.listCards);

    const listCards = props.listCards

    const cardId = listCards.map((card) => (card.id))
    const cardText = listCards.map((card) => (card.text))

    console.log("test cardsId: " + cardId);
    console.log("test cardsText: " + cardText);
    //List OK
    /* 
    ListID: list-0, list-1
    ListTitle: last Episode, we
    ListCards: [object Object],[object Object] 
    */
    //Card NOT
    /* 
    cardID:
    cardsText:  
    */
  }




export default connect(mapStateToProps)(App);

import TrelloList from './trelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
import React, { Component } from 'react'
import { sort } from "../action"
import styled from "styled-components"

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends Component {

  onDragEnd = result => { //드래그 끝나면 할일 
    const { destination, source, draggableId } = result;

    if (!destination) {
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

  render() {
    const  lists  = this.props.lists;
    const test = lists.map(list => (list.title));

    const cards = this.props.cards;
    console.log(cards); //undefinded 가 출력됨
    //const test2 = cards.map(card => (card.cards));

    //드래그 구현, 호출시점   
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
          <test />
          <h2>Hello My Loadmap</h2>
          <h2>{test}</h2>
          {/* <h2>{test2}</h2> */}
          <ListContainer>
            {lists.map(list => (
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
  lists: state.listsReducer,
  cards: state.cardsReducer.text
});

export const test = () => { // cards: state.cards의 값을 확인하려 했으나 실패..
  const {cards} = this.props;
  return(
    <>
  {cards.map(card => (
    console.log(card.id)
  ))}
  </>
  )
}

export default connect(mapStateToProps)(App);

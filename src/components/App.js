import TrelloList from './trelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'
<<<<<<< HEAD
import React, { Component } from 'react'

class App extends Component {

  onDragEnd = () => { //드래그 끝나면 할일 
  }

  render(){
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <div>
        <h2>Hello Youtube</h2>
        <div style={styles.listsContainer}>
          {lists.map(list => (
            <TrelloList
              listID={list.id}
              key={list.id}
              title={list.title}
              cards={list.cards}
            />
          ))}
          <TrelloActionButton list />
        </div>
        </div>
        </DragDropContext>
    );
          }
  }


=======

function App({lists}) {

  const onDragEnd = () => { //드래그 끝나면 할일 
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <div style={styles.listsContainer}>
      {lists.map(({title, cards} , id) => (
        <TrelloList listID={id} key={id} title={title} cards={cards}/>
      ))}

      {/* 추가버튼 영역 */}
      <TrelloActionButton list={lists}/>
      </div>
    </div>
    </DragDropContext>
  );
  
}
>>>>>>> 8fb29a8d40a4e150c128e251a497ead8b16032ef
const styles = {
  listsContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
}
const mapStateToProps = state => ({
    lists: state.lists
});

export default connect(mapStateToProps)(App);

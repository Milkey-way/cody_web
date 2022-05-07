import TrelloList from './trelloList';
import {connect} from 'react-redux';
import TrelloActionButton from './trelloActionButton';
import { DragDropContext } from 'react-beautiful-dnd'

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

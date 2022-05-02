import TrelloList from './trelloList';
import {connect} from 'react-redux';

function App({lists}) {
  return (
    <div className="App">
      <div style={styles.listsContainer}>
      {lists.map(({title, cards} , id) => (
        <TrelloList key={id} title={title} cards={cards}/>
      ))}
      </div>
    </div>
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

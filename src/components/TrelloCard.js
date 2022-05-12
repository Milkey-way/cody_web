import React from 'react'; 
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography'; 
import CardContent from '@material-ui/core/CardContent';
import {Draggable} from 'react-beautiful-dnd'

<<<<<<< HEAD
const TrelloCard = ({ text, id, index }) => {
    return(
      <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
=======
const TrelloCard = ({key_id,text, id, index}) => {
    return(
        <Draggable draggableId={String(`card-${id}`)} index={index} key={key_id} type="TrelloCard">

        {provided =>(
       //하얀 카드
       <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        <Card style={styles.cardContainer}>
>>>>>>> 8fb29a8d40a4e150c128e251a497ead8b16032ef
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
<<<<<<< HEAD
          </Card>
        </div>
      )}
    </Draggable>
=======
        </Card>
        </div>
        )}
        </Draggable>
>>>>>>> 8fb29a8d40a4e150c128e251a497ead8b16032ef
    )
}
const styles = { 
    cardContainer: { marginBottom: 8 } 
};

export default TrelloCard;
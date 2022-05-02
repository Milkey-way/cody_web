import React from 'react'; 
import Card from '@material-ui/core/Card'; 
import Typography from '@material-ui/core/Typography'; 
import CardContent from '@material-ui/core/CardContent';

const TrelloCard = ({key,text}) => {
    return(
       //하얀 리스트 카드
        <Card style={styles.cardContainer}>
            <CardContent>
                <Typography gutterBottom>{text}</Typography>
            </CardContent>
        </Card>
    )
}
const styles = { 
    cardContainer: { marginBottom: 8 } 
};

export default TrelloCard;
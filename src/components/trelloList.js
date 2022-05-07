import React from 'react'; 
import TrelloCard from './TrelloCard';
import TrelloActionButton from './trelloActionButton';
import { Droppable } from 'react-beautiful-dnd'

const TrelloList = ({listID,title, cards}) => { 
    return (
        //index id 에 대한 에러가 발생할때는 droppableId 가 문자열로 들어가고있는지 확인해 본다. 
        <Droppable droppableId={String(listID)}> 

        {provided => (
        //회색 카드 영역
        <div {...provided.droppableProps} ref={provided.innerRef} style={style.container}>
        <h4>{title}</h4> 
    
        {cards.map(({id,text}, index) => (
            <TrelloCard key={id} text={text}  id={id} index={index}/>
        ))}

        {/* 추가버튼 영역 */}
        <TrelloActionButton listID={listID} />

        {provided.placeholder}
    </div>
     
    )}
    </Droppable>
    ); 
}
const style = { 
    container: { 
        backgroundColor: '#dfe3e6', 
        borderRadius: 3, 
        width: 300, 
        padding: 8, 
        marginRight: 8 
    } 
    };

export default TrelloList;

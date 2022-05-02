import React from 'react'; 
import TrelloCard from './TrelloCard';
import TrelloActionButton from './trelloActionButton';
const TrelloList = ({title, cards}) => { 
    return ( 
        //회색 카드 영역
        <div style={style.container}>
        <h4>{title}</h4> 
    
        {cards.map(({text}, id) => (
            <TrelloCard key={id} text={text}/>
        ))}

        {/* 추가버튼 영역 */}
        <TrelloActionButton />
    </div>
    ); 
}; 
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

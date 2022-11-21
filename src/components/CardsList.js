import Card from "./Card"; 
import AddCard from "./AddCard"; 

// reference to the cards variable passed in
// reference to handleAddCard
const CardsList = ({ cards, handleAddCard, handleDeleteCard }) => {
    return (
        <div className="cards-list">
            {/* for each card in cards, render each with corresponding attribute */}
            {cards.map((card) => {
                return <Card 
                            id={card.id}
                            num={card.num}
                            text={card.text}
                            type={card.type}
                            weight={card.weight}
                            abilities={card.abilities}
                            date={card.date}
                            // pass delete note into the view-only cards
                            handleDeleteCard={handleDeleteCard}
                        /> 
            })}
            {/* pass into addCard component (the card that adds cards) */}
            <AddCard 
                handleAddCard={handleAddCard}
            /> 
        </div>
    ); 
}; 

export default CardsList; 
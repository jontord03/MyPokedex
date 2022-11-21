import { useState } from "react"; 

const AddCard = ({handleAddCard}) => {
    const [cardText, setCardText] = useState(""); 

    const handleChange = (event) => {
        // console.log(event.target.value); 
        // set card text to typed value
        setCardText(event.target.value); 
    }; 

    const handleSaveClick = () => {
        // trim removes whitespace 
        if (cardText.trim().length > 0) {
            handleAddCard(cardText); 
            // reset to empty string, default empty
            setCardText(""); 
        }
    }; 

    return(
        <div className="card new">
            <textarea  
                rows="8"
                cols="10"
                placeholder="Type to add a card..."
                value={cardText}
                onChange={ handleChange }
            ></textarea>
            <div className="card-footer">
                <button 
                    className="btn-primary save"
                    onClick={handleSaveClick}
                    >Save</button>
            </div>
        </div>
    ); 
}

export default AddCard; 
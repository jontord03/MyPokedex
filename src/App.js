import { nanoid } from "nanoid";
import { useState, useEffect } from "react"; 
import CardsList from "./components/CardsList";

const App = () => {
  // array destructuring to create cards 
  // states mainly kept in App.js 
  const [cards, setCards] = useState([
    {
      id: nanoid(), 
      text: "Bulbasaur", 
      type: "Grass, Poison", 
      weight: "15.2 lbs", 
      abilities: "Overgrow", 
      num: 1, 
      date: "02/01/1996"
    }, 
    {
      id: nanoid(), 
      text: "Ivysaur", 
      type: "Grass, Poison", 
      weight: "28.7 lbs", 
      abilities: "Overgrow",
      num: 2, 
      date: "02/01/1996"
    }, 
    {
      id: nanoid(), 
      text: "Venusaur", 
      type: "Grass, Poison", 
      weight: "220.5 lbs", 
      abilities: "Overgrow",
      num: 3, 
      date: "02/01/1996"
    }
]); 

// RETRIEVING NOTES IN LOCAL STORAGE
  // lets us run code when certain variables change 
useEffect(() => {
  // retrieves data with key "react-cards..."
  const savedCards = JSON.parse(window.localStorage.getItem("react-cards-app-data"));
  console.log(savedCards); 
  // if any notes retrieved
  if (savedCards !== null) {
    // update cards
    setCards(savedCards);
  }
  // empty dependency array, runs only onload
}, []); 

// SAVING DATA TO LOCAL STORAGE
useEffect(() => {
  // saves cards to localStorage with key "react-cards..."
  window.localStorage.setItem(
    "react-cards-app-data", 
    JSON.stringify(cards)
  ); 
  // dependency array: any time something changes there, then useEffect is triggered
}, [cards]); 

// ADDING CARDS
// accept input text, pass down to cardsList, addCard
const addCard = (text, type, weight, abilities) => {
  // console.log(text);
  const date = new Date(); 
  // const num = Math.floor((Math.random() * 10) + 1); 
  const num = cards.length + 1; 
  // create new card object
  const newCard = {
    id: nanoid(), 
    text: text, 
    type: type, 
    weight: weight, 
    abilities: abilities, 
    num: String(num), 
    date: date.toLocaleDateString()
  } 
  // add new card to full card array 
  const newCards = [...cards, newCard]; 
  // update the cards array
  setCards(newCards); 
}

// DELETING CARDS
// deletes a note of a specific id
const deleteCard = (id) => {
  // return array of cards without the note with the associated id
  const newCards = cards.filter((card) => {
    return card.id !== id; 
  }); 
  // update cards list
  setCards(newCards); 
}
  return(
    <div className="container">
      {/* cards exported to the cardslist component */}
      <CardsList 
        cards={cards}
        // pass addCard to Cardslist (prop drilling)
        handleAddCard={addCard}
        // pass deleteCards to Cardslist (prop drilling)
        handleDeleteCard={deleteCard}
        />
    </div>
    
  ); 
}

export default App; 
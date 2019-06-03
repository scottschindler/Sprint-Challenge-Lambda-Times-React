import React, { Component } from 'react';
import Card from './Card';


const Cards = ({cards}) => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/
          
        cards.map(card => <Card card={card} key={card.headline} />)
          
          }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
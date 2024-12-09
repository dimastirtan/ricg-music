import React from 'react';
import Card from './Card';

function RowCards() {
    const cards = [
      { title: "Card 1", text: "normal_card" },
      { title: "Card 2", text: "normal_card" },
      { title: "Card 3", text: "normal_card" },
      { title: "Card 3", text: "normal_card" },
    ];
  
    // Membagi array menjadi kelompok-kelompok dengan ukuran 2
    const groupedCards = [];
    for (let i = 0; i < cards.length; i += 2) {
      groupedCards.push(cards.slice(i, i + 2));
    }
  
    return (
      <div className="">
        {groupedCards.map((group, groupIndex) => (
          <div className="row mt-3" key={groupIndex}>
            {group.map((card, cardIndex) => (
              <div className="col-md-4 mb-3" key={cardIndex}>
                <Card title={card.title} text={card.text} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  export default React.memo(RowCards);
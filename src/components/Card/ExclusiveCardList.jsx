import React from 'react';
import dummyData from './dummyData'; // adjust the path
import ExclusiveCard from './ExclusiveCard';

function ExclusiveCardsList() {
  return (
    <div>
      {/* Only render cards with 'exclusive' category */}
      {dummyData
        .filter(card => card.category === "exclusive")
        .map((card, index) => (
          <ExclusiveCard key={index} title={card.title} text={card.text} />
        ))}
    </div>
  );
}

export default ExclusiveCardsList;

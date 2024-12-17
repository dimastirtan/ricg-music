import React, { useState } from 'react';
import WideCard from './WideCard'; 
import logo from '../../assets/Rich-Music-B.png';
import dummyData from './dummyData';

function Card() {
    const [data, setData] = useState(dummyData);

    // Filter out the exclusive category cards
    const filteredData = data.filter(card => card.category !== "exclusive");

    return (
        <div>
            {/* Rendering normal Card for non-exclusive data */}
            <div className="row">
                {filteredData.slice(0, 4).map((card, index) => (
                    <div className="col-md-6" key={index}>
                        <div className="card text-bg-dark">
                            <img src={logo} alt="Card Image" className="m-5 p-5 img-fluid" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Rendering WideCard for the rest of the data (excluding exclusive cards) */}
            {filteredData.slice(4).map((card, index) => (
                <WideCard key={index} title={card.title} text={card.text} />
            ))}
        </div>
    );
}

export default Card;

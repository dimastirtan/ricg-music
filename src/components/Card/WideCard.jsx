import React from 'react';
import logo from '../../assets/Rich-Music-B.png';

function WideCard({ title, text }) {
    return (
        <div className="col-md-12 mb-4">
            <div className="card text-bg-dark" style={{ width: '100%' }}>
                <img src={logo} alt="Card Image" className="m-5 p-5 img-fluid" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default WideCard;

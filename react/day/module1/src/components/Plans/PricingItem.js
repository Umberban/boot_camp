import React from 'react';


const PricingItems =({el})=>(
  <div className="pricing-item">
  <i className="icon"><img src={el.icon} alt=""/></i>
  <h2 className="label">{el.label}</h2>
  <p className="capacity">{el.capacity}</p>
  <p className="description">{el.description}</p>
  <p className="price">{el.price}/MO</p>
  <button className="button">Get Started</button>
  </div>
);

export default PricingItems;


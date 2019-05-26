import React from 'react';
import PricingItem from './PricingItem';

const PricingPlans = ({ plan }) => (
  <ul class="pricing-plan">
    {plan.map(el => (
      <li key={el.id}>
        <PricingItem el={el} />
      </li>
    ))}
  </ul>
);

export default PricingPlans;

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  state = {};

  render() {
    const { items = [], sum, itemsCount } = this.props;

    return (
      <div>
        <h3>Cart</h3>
        <h5>
          Items: {itemsCount} Sum: {sum}
        </h5>
        <ul>
          {items.map(el => (
            <li key={el.id}>
              <h4>{el.title}</h4>
              <p>{el.description}</p>
              <p>{el.cost}$</p>
              <p>{el.count}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.cart.items,
  sum: state.cart.sum,
  itemsCount: state.cart.itemsCount,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(Cart);

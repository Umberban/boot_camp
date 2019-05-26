import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import classes from './Modal.module.css';

export default class Modal extends Component {
  state = { visible: false };

  handleToggle = () => {
    this.setState(state => ({ visible: !state.visible }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <h1>Modal Example</h1>
        <button onClick={this.handleToggle} type="button">
          Toggle
        </button>
        <CSSTransition
          in={visible}
          timeout={200}
          type="button"
          classNames={{
            enter: classes['fade-enter'],
            enterActive: classes['fade-enter-active'],
            exit: classes['fade-exit'],
          }}
          unmountOnExit
        >
          <div className={classes.modal}>
            <h2>Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa
              magnam sed distinctio sequi et reprehenderit porro ipsum illum
              praesentium perferendis, aut commodi error asperiores?
            </p>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

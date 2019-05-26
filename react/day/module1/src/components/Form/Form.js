import React, { Component } from 'react';
import styles from './Form.module.css';
// import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  onHandleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    const { name, email, country } = this.state;
    e.preventDefault();

    this.props.onSubmit({ name, email, country });
  };

  render() {
    return (
      <form className={styles.form} action="" onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          onChange={this.onHandleInput}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          className={styles.input}
          onChange={this.onHandleInput}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className={styles.input}
          onChange={this.onHandleInput}
          type="text"
          placeholder="Country"
          name="country"
        />
        <button className={styles.inputBtn} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequire,
// };
export default Form;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodosForm from '../../components/TodosForm/TodosForm';
import TodosList from '../../components/TodosLists/TodosList';
import TodosHeader from '../../components/TodosHeader/TodosHeader';
import Cart from '../../components/Cart/Cart';
import { addTodo, removeTodo, activeTodo } from './todosActions';

class TodosPage extends Component {
  state = {
    title: '',
    description: '',
    isComplited: false,
    filter: 'all',
  };

  onHandleChecked = id => {
    this.props.activeTodo(id);
  };

  onHandleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleChangeFilter = filter => {
    this.setState({ filter });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const cost = Math.floor(Math.random() * 100);
    const id = new Date().getTime();
    const { title, description, isComplited } = this.state;

    this.props.addTodo({ id, title, description, isComplited, cost });
  };

  onHandleDelete = id => {
    this.props.removeTodo(id);
  };

  render() {
    const { filter } = this.state;
    const { todos } = this.props;
    let filtredTodos;
    if (filter === 'completed') {
      filtredTodos = todos.filter(el => el.isComplited);
    } else if (filter === 'inProgress') {
      filtredTodos = todos.filter(el => !el.isComplited);
    } else {
      filtredTodos = todos;
    }
    return (
      <>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            textTransform: 'uppercase',
          }}
        >
          Todos
        </h2>
        <TodosForm
          onHandleInput={this.onHandleInput}
          onHandleSubmit={this.onHandleSubmit}
        />
        <TodosHeader
          filter={filter}
          onHandleChangeFilter={this.onHandleChangeFilter}
        />
        <TodosList
          data={filtredTodos}
          onHandleChecked={this.onHandleChecked}
          onHandleDelete={this.onHandleDelete}
        />
        <Cart />
      </>
    );
  }
}

TodosPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape).isRequired,
  activeTodo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDespatchToProps = { addTodo, removeTodo, activeTodo };

export default connect(
  mapStateToProps,
  mapDespatchToProps,
)(TodosPage);

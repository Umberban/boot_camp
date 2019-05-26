import React, { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import Form from './Form/Form';
import UserCard from './UserCard/UserCard';
import Stats from './Stats/Stats';
import pricingPlanItems from './Plans/pricing-plan.json';
import PricingPlans from './Plans/PricingPlan';
import trans from './Table/table.json';
import Table from './Table/Table';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      logoTitle: 'ReactApp',
      count: 0,
      users: [],
    };
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onDecrement = () => {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1,
      });
  };

  onSubmit = data => {
    const { users } = this.state;
    const newUsers = [...users];
    newUsers.push(data);
    const userData = data;
    userData.id = new Date().getTime();

    this.setState({
      users: newUsers,
    });
  };

  render() {
    const { logoTitle, count, users } = this.state;

    return (
      <>
        <Header title={logoTitle} />
        <Counter
          onDecrement={this.onDecrement}
          onIncrement={this.onIncrement}
          count={count}
        />
        <Form onSubmit={this.onSubmit} />
        <ul>
          {users.length > 0 &&
            users.map(user => <UserCard key={user.id} {...user} />)}
        </ul>
        <UserCard {...user} />
        <Stats stats={stats} />
        <PricingPlans plan={pricingPlanItems} />

        <Table trans={trans} />
      </>
    );
  }
}

export default App;

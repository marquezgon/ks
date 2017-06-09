import React, { Component } from 'react';
import axios from 'axios';
import ListRow from './list-row';
import '../styles/list.css';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], selectedUsers: [] };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(({ data }) => {
        const users = data.map(({ id, name, email }) => {
          return { id, name, email };
        });
        users.sort(function(a, b){
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        });
        this.setState({ users });
      })
      .catch(() => alert('Something went wrong fetching users!'));
  }

  onUserToggle(user, checked) {
    if(!checked) {
      this.setState({ selectedUsers: [...this.state.selectedUsers, user] });
    } else {
      const selectedUsers = this.state.selectedUsers.filter((el) => {
        return el !== user;
      });

      this.setState({ selectedUsers });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    const names = this.state.selectedUsers.map((user) => {
      return user.name;
    }).join(", ");

    alert(`Names Selected: \n${names}`);
  }

  renderUsers() {
    return this.state.users.map((user) => {
      return <ListRow key={user.id} user={user} onUserToggle={this.onUserToggle.bind(this)} />
    })
  }

  render() {
    return (
      <div className="flex-container">
        <form onSubmit={(e)=>{ this.onSubmit(e) }}>
            <h4>
              {
                this.state.selectedUsers.length > 0 ?
                `${this.state.selectedUsers.length} of ${this.state.users.length} selected`
                : null
              }
              </h4>
          <ul>
            { this.renderUsers() }
          </ul>
          <button type="submit">Confirm</button>
        </form>
      </div>
    )
  }
}

export default List;

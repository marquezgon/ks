import React, { Component } from 'react';
import '../styles/list-row.css';

class ListRow extends Component {
  constructor(props) {
    super(props);

    this.state = { isChecked: false };
  }

  onCheckboxToggle({ target }) {
    this.setState({ isChecked: target.checked });
    this.props.onUserToggle(this.props.user, this.state.isChecked);
  }

  render() {
    return(
      <li className="flex-li">
        <div className="checkbox-div">
           <input type="checkbox" name="user" checked={ this.state.isChecked } onChange={ this.onCheckboxToggle.bind(this) } />
        </div>
        <div className="info-div">
          <div style={ styles.name }>
            { this.props.user.name }
          </div>
          <div style={ styles.email }>
            { this.props.user.email }
          </div>
        </div>
      </li>
    );
  }
}

const styles = {
  name: {
    display: 'flex',
    padding: '4px 12px',
    flex: 1,
    background: '#e4e4e4'
  },
  email: {
    display: 'flex',
    paddingLeft: '12px',
    flex: 2,
    alignItems: 'center'
  }
}

export default ListRow;

import React, { Component } from 'react';
import '../styles/list-row.css';

class List extends Component {
  render() {
    return (
      <div className="flex-container">
        <form>
          <ul>
            <li style={{ display: 'flex', flexDirection: 'row', maxWidth: '700px', width: '700px', height: '75px' }}>
              <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', background: '#ddd' }}>
                 <input type="checkbox" name="user" />
              </div>
              <div style={{ display: 'flex', flex: 5, flexDirection: 'column' }}>
                <div style={{ display: 'flex', flex: 1 }}>
                  marquezgon@me.com
                </div>
                <div style={{ display: 'flex', flex: 2 }}>
                  Gonzalo
                </div>
              </div>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default List;

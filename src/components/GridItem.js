import React, { Component } from 'react';

class GridItem extends Component {
  render() {
    return (
      <li className="GridItem" onClick={(e) => this.props.gridItemClick(e, this.props.gridItem)}>
        <img src={this.props.gridItem.thumbnailUrl} />
      </li>
    );
  }
}

export default GridItem;
import React, { Component } from 'react';
import GridItem from './GridItem';

class Grids extends Component {
  render() {
    return (
      <ul className="Grids">
        {
          this.props.gridData.map((item) => 
          <GridItem gridItem={item} gridItemClick={this.props.gridItemClick}/>
          )
        }
      </ul>
    );
  }
}

export default Grids;
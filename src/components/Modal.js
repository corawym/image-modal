import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <img src={this.props.modalItem.thumbnailUrl} />
      </div>
    );
  }
}

export default Modal;
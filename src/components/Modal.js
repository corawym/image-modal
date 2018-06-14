import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <img src={this.props.modalItem.url} alt={this.props.modalItem.title} />
        <p>{this.props.modalItem.title}</p>
        <button onClick={this.props.closeModal}>x</button>
      </div>
    );
  }
}

export default Modal;
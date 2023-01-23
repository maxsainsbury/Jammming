import React from "react";
import './Track.css';

export class Track extends React.Component {

  renderAction() {
    if (this.props.isRemoval) {
      return <button className="Track-Action">-</button>
    }
    else {
      return <button className="Track-Action">+</button>
    }
  }

  render() {

    return (
      <div className="Track">
        <div className="Track-infprmation">
          <h3>name</h3>
          <p>artist | album</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
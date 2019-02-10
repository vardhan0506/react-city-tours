import React, { Component } from "react";
import Tourlist from "../Tourlist/Tourlist";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showInfo: false
  };

  showIn = () => {
    console.log("inside tour showIn");
    this.setState({ showInfo: !this.state.showInfo });
  };

  render() {
    console.log("inside tour render");
    const { id, city, img, name, info } = this.props.info;
    const { deleteTour } = this.props;
    return (
      <article className="tour">
        <div className="img-container">
          <img src={img} />
          <span onClick={() => deleteTour(id)} className="close-btn">
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.showIn}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    );
  }
}

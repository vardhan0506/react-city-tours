import React, { Component } from "react";
import tourData from "../tourData";
import Tour from "../Tour/Tour";
import "./Tourlist.scss";

export default class Tourlist extends Component {
  constructor() {
    super();
    this.state = { data: tourData };
  }

  deleteTour = id => {
    console.log("inside delete tour method");
    const deletedTour = this.state.data.filter(single => single.id !== id);
    this.setState({ data: deletedTour });
  };

  render() {
    console.log("inside tourlist render");
    console.log(this.state.data);
    return (
      <div className="TourList">
        {this.state.data.map(item => (
          <Tour key={item.id} info={item} deleteTour={this.deleteTour} />
        ))}
      </div>
    );
  }
}

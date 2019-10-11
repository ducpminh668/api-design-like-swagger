import React, { Component } from "react";
import "./MainContent.css";

class MainContent extends Component {
  render() {
    return <div className="MainContent">{this.props.children}</div>;
  }
}

export default MainContent;

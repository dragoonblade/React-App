import React from "react";
import PropTypes from "prop-types";

class Nominate extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  render() {
    return (
      <div className="pm-light-blue name-container">
        <span className="pm-text-field">Nominee Name: </span>
        <span className="pm-status-field">
          { ` ${this.props.loggedIn.firstName} ${this.props.loggedIn.lastName}` }
        </span>
        <div className="pm-light-blue">
          <span className="pm-text-field">Assessment Status: </span>
          <span className="pm-status-field">{this.props.loggedIn.status}</span>
        </div>
        <div className="pm-light-blue">
          <span className="pm-text-field">Nominated By: </span>
          <span className="pm-status-field">{this.props.loggedIn.nominated}</span>
        </div>
      </div>
    );
  }
}

export default Nominate;

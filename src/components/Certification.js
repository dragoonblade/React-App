import React from "react";
import PropTypes from "prop-types";
import Nominate from "./Nominate";

class Certification extends React.Component {
  static propTypes = {
    match: PropTypes.object,
    loggedIn: PropTypes.object,
    getUser: PropTypes.func
  };

  render() {
    console.log(this.props);
    // const {firstName, lastName} = this.props.loggedIn
    return (
      <div className="pm-template-wrapper">
        <Nominate loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}

export default Certification;

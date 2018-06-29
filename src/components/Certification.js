import React from "react";
import PropTypes from "prop-types";

class Certification extends React.Component {
  static propTypes = {
    match: PropTypes.object
  };

  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h2>Certification of {params.userId}!!!!</h2>
      </div>
    );
  }
}

export default Certification;

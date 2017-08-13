import React, {Component} from "react";

class Score extends Component {
  render() {
    return (
      <div className="text-center">
        Clicks<br/>
        <span className="bigger">{this.props.score}</span>
      </div>
    );
  }
}

export default Score;

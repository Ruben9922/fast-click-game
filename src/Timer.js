import React, {Component} from "react";

class Timer extends Component {
  render() {
    return (
      <div className="text-center">
        Time left<br/>
        <span className="bigger">10</span>
      </div>
    );
  }
}

export default Timer;

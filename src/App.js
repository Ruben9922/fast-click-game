import React, {Component} from "react";
import "./App.css";
import Score from "./Score";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);

    this.totalTime = 10;
    this.timerRunning = false;

    this.state = {
      score: 0,
      timeLeft: this.totalTime
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.timerRunning) {
      this.startTimer();
    }

    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  startTimer() {
    this.tick();
    this.timerRunning = true;
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.timerRunning = false;
  }

  tick() {
    this.setState((prevState) => ({
      timeLeft: prevState.timeLeft - 1
    }));

    if (this.state.timeLeft <= 0) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    if (this.timerRunning) {
      this.stopTimer();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center col-xs-2 col-lg-1">
            <Timer timeLeft={this.state.timeLeft}/>
          </div>
          <div className="col-xs-2 col-lg-1 col-xs-push-8 col-lg-push-10">
            <Score score={this.state.score}/>
          </div>
        </div>
        <div className="row text-center">
          <button type="button" className="btn btn-primary btn-lg" onClick={this.handleClick}>Click here!</button>
        </div>
      </div>
    );
  }
}

export default App;

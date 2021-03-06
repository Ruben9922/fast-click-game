import React, {Component} from "react";
import "./App.css";
import Score from "./Score";
import Timer from "./Timer";

class Game extends Component {
  constructor(props) {
    super(props);

    this.timerRunning = false;

    this.state = {
      score: 0,
      timeLeft: this.props.totalTime
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.render = this.render.bind(this);
  }

  handleClick() {
    if (this.state.timeLeft > 0) {
      this.startTimer();
    }

    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  handleResetClick() {
    this.setState({
      score: 0,
      timeLeft: this.props.totalTime
    });
    this.stopTimer();
  }

  static handleButtonKeyPress(event) {
    // Prevent increasing score by holding down enter/space key on main button
    event.preventDefault();
  }

  startTimer() {
    if (!this.timerRunning) {
      this.timerRunning = true;
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  stopTimer() {
    if (this.timerRunning) {
      clearInterval(this.timerId);
      this.timerRunning = false;
    }
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
    this.stopTimer();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="text-center col-xs-3 col-sm-2 col-lg-1">
            <Timer timeLeft={this.state.timeLeft}/>
          </div>
          <div className="col-xs-3 col-sm-2 col-lg-1 col-xs-push-6 col-sm-push-8 col-lg-push-10">
            <Score score={this.state.score}/>
          </div>
        </div>
        <div className="row text-center">
          <button type="button" className="btn btn-primary btn-lg btn-padded" onClick={this.handleClick}
                  onKeyDown={Game.handleButtonKeyPress} disabled={this.state.timeLeft <= 0}>
            Click here!
          </button>
        </div>
        <div className="row text-center">
          <button type="button" className="btn btn-default btn-padded" onClick={this.handleResetClick}>
            Reset
          </button>
          <button type="button" className="btn btn-default btn-padded" onClick={this.props.onSwitch}>
            Back to menu
          </button>
        </div>
      </div>
    );
  }
}

export default Game;

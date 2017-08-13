import React, {Component} from "react";
import "./App.css";
import Score from "./Score";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      score: prevState.score + 1
    }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center col-xs-2 col-lg-1">
            <Timer/>
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

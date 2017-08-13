import React, {Component} from "react";
import "./App.css";
import Menu from "./Menu";
import Game from "./Game";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalTime: 0,
      displayMenu: true
    };

    this.switchToGame = this.switchToGame.bind(this);
    this.switchToMenu = this.switchToMenu.bind(this);
  }

  switchToGame(totalTime) {
    this.setState({
      totalTime: totalTime,
      displayMenu: false
    });
  }

  switchToMenu() {
    this.setState({
      displayMenu: true
    });
  }

  render() {
    return (
      <div className="container">
        {this.state.displayMenu ? (
          <Menu onSwitch={this.switchToGame}/>
        ) : (
          <Game onSwitch={this.switchToMenu} totalTime={this.state.totalTime}/>
        )}
      </div>
    );
  }
}

export default App;

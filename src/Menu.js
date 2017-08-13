import React, {Component} from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 10
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      time: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSwitch(this.state.time);
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <p className="text-center">Choose whether the game should last 10, 20 or 30 seconds:</p>
          <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="time" className="col-sm-4 control-label">Time (seconds)</label>
              <div className="col-sm-8">
                <select className="form-control" id="time" value={this.state.time} onChange={this.handleChange}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-4 col-sm-8">
                <button type="submit" className="btn btn-primary">Start</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Menu;

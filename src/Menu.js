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
      <div>
        <p className="text-center">Choose whether the game should last 10, 20 or 30 seconds:</p>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="time" className="col-xs-5 col-sm-5 control-label">Time (seconds)</label>
                <div className="col-xs-7 col-sm-7">
                  <select className="form-control" id="time" value={this.state.time} onChange={this.handleChange}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={30}>30</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-offset-5 col-xs-7 col-sm-offset-5 col-sm-7">
                  <button type="submit" className="btn btn-primary">Start</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

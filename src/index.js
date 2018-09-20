import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    debugger;
    this.setState({
      checked: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        hello ?
        <input
          type="radio"
          value={"site"}
          checked={this.state.checked === "site"}
          onChange={this.onChange}
        />{" "}
        site
        <input
          type="radio"
          value={"address"}
          checked={this.state.checked === "address"}
          onChange={this.onChange}
        />{" "}
        address
        <input
          type="radio"
          value={"name"}
          checked={this.state.checked === "name"}
          onChange={this.onChange}
        />{" "}
        name
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

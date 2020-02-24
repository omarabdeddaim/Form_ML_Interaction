import React from "react";
import SplitterLayout from "react-splitter-layout";
import "react-splitter-layout/lib/index.css";
//import style from "./App.css";
import SelectBox from "./SelectBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Architecte: "", Localisation: "", Cout: "" };
  }
  myChangeHandlerArchitecte = event => {
    this.setState({
      Architecte: event.target.value
    });
  };
  myChangeHandlerLocalisation = event => {
    this.setState({
      Localisation: event.target.value
    });
  };
  myChangeHandlerCout = event => {
    this.setState({
      Cout: event.target.value
    });
  };
  render() {
    return (
      <SplitterLayout>
        <div>
          <form>
            <h1>Simulator</h1>
            <p>Architecte:</p>

            <input type="text" onChange={this.myChangeHandlerArchitecte} />
            <br />
            <p>Localisation:</p>
            <input type="text" onChange={this.myChangeHandlerLocalisation} />
            <br />
            <p>Cout:</p>
            <input type="text" onChange={this.myChangeHandlerCout} />
            <br />
            <p>Type de Projet</p>

            <br />
            <SelectBox />
            <br />
            <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div>
          <h1>Remarques</h1>
          <br />
          <br />
          <br />
          {this.state.Architecte}
          <br />
          <br />
          {this.state.Localisation}
          <br />
          <br />
          {this.state.Cout}
        </div>
      </SplitterLayout>
    );
  }
}

export default App;

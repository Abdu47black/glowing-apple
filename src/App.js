import React, { Component } from "react";
import Navigation from "./Components/Navigation/Navigation";

import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import "./App.css";
import "tachyons";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputs: "",
      imageurl: "",
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({ inputs: event.target.value });
  };
  onButtonSubmit = () => {
    this.setState({ imageurl: this.state.inputs });
  };
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition imageurl={this.state.imageurl} />
      </div>
    );
  }
}
export default App;

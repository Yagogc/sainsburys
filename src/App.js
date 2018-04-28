import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import fetchJsonp from "fetch-jsonp";

class App extends Component {
  state = {
    items: ""
  };
  componentDidMount() {
    const self = this;
    fetchJsonp(
      "//api.flickr.com/services/feeds/photos_public.gne?format=json",
      {
        jsonpCallbackFunction: "jsonFlickrFeed"
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        console.log(json.items);
        self.setState({
          items: json.items
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sainsbury</h1>
        </header>
        <main className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import fetchJsonp from "fetch-jsonp";
import { Header, HeaderTitle } from "./ui/Header";

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
        console.log(json);
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
    const { items } = this.state;
    return (
      <React.Fragment>
        <Header>
          <HeaderTitle>Sainsbury's</HeaderTitle>
        </Header>
        <main>
          {items &&
            items.map(item => {
              return <img src={item.media.m} alt={item.title} />;
            })}
        </main>
      </React.Fragment>
    );
  }
}

export default App;

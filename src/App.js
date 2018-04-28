import React, { Component } from "react";

import { GridContainer, GridItem } from "./ui/Grid";
import fetchJsonp from "fetch-jsonp";
import { Header, HeaderTitle } from "./ui/Header";
import formatId from "./helpers/formatid.js";

class App extends Component {
  state = {
    items: "",
    selectedItems: []
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
  selectItem(item) {
    formatId(item);
    this.setState({
      selectedItems: [...this.state.selectedItems, formatId(item)]
    });
  }
  isSelected(item) {
    item = formatId(item);
    const result = this.state.selectedItems.find(
      selectedItem => selectedItem === item
    );
    console.log("isSelected: ", result);
    console.log("isSelected2: ", result ? true : false);
    return result ? true : false;
  }
  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <Header>
          <HeaderTitle>Sainsbury's</HeaderTitle>
        </Header>
        <GridContainer>
          {items &&
            items.map((item, i) => {
              return (
                <GridItem
                  key={i}
                  src={item.media.m}
                  alt={item.title}
                  onClick={e => this.selectItem(item.link)}
                  isSelected={this.isSelected(item.link)}
                />
              );
            })}
        </GridContainer>
      </React.Fragment>
    );
  }
}

export default App;

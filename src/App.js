import React, { Component } from "react";
import Loader from "react-loader-spinner";

import { GridContainer, GridItem } from "./ui/Grid";
import fetchJsonp from "fetch-jsonp";
import { Header, HeaderTitle } from "./ui/Header";
import { ErrorMsg } from "./ui/Error";
import formatId from "./utils/formatid.js";
import { LoaderWrapper } from "./ui/LoaderWrapper";

class App extends Component {
  state = {
    items: "",
    selectedItems: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    const self = this;

    this.getSessionStorage();

    fetchJsonp(
      "https://api.flickr.com/services/feeds/photos_public.gne?tags=sainsburys&tagmode=all&format=json",
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
          items: json.items,
          loading: false
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
        self.setState({
          loading: false,
          error: true
        });
      });
  }

  componentDidUpdate() {
    sessionStorage.setItem("selectedItems", this.state.selectedItems);
  }

  getSessionStorage() {
    if (sessionStorage["selectedItems"] !== undefined) {
      const itemsStored = sessionStorage.getItem("selectedItems").split(",");
      this.setState({
        selectedItems: [...itemsStored]
      });
    }
  }

  selectItem(item) {
    item = formatId(item);
    const result = this.state.selectedItems.find(
      selectedItem => selectedItem === item
    );
    if (result) {
      const newSelectedItems = this.state.selectedItems.filter(
        selectedItem => selectedItem !== item
      );
      this.setState({
        selectedItems: [...newSelectedItems]
      });
    } else {
      this.setState({
        selectedItems: [...this.state.selectedItems, item]
      });
    }
  }
  isSelected(item) {
    item = formatId(item);
    const result = this.state.selectedItems.find(
      selectedItem => selectedItem === item
    );
    // console.log("isSelected: ", result);
    // console.log("isSelected2: ", result ? true : false);
    return result ? true : false;
  }
  render() {
    const { items } = this.state;
    return (
      <React.Fragment>
        <Header>
          <HeaderTitle>Sainsbury's</HeaderTitle>
        </Header>
        {this.state.loading && (
          <LoaderWrapper>
            <Loader type="TailSpin" color="#f90" height="40" width="40" />
          </LoaderWrapper>
        )}
        {this.state.error && (
          <ErrorMsg>Flickr Feed error. Please reload the page.</ErrorMsg>
        )}
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

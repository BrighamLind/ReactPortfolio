import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: []
    };

    // do this for custom funtions that deal with events
    this.handleFilter = this.handleFilter.bind(this);
  }

  // try to always name clickhandler/etc. functions with something starting with "handle"
  handleFilter(filter) {
    this.setState({
      isLoading: true
    });
    if (filter === "CLEAR_FILTERS") {
      this.getPortfolioItems();
    } else {
      this.getPortfolioItems(filter);
    }
  }

  getPortfolioItems(filter = null) {
    axios
      .get("https://brighamlind.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        this.setState({
          isLoading: false
        });
        if (filter) {
          this.setState({
            data: response.data.portfolio_items.filter(item => {
              return item.category === filter;
            })
          });
        } else {
          this.setState({
            data: response.data.portfolio_items
          });
        }
      })
      .catch(error => {
        console.log("Error: ", error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("eCommerce")}
          >
            eCommerce
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("Scheduling")}
          >
            Scheduling
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("Enterprise")}
          >
            Enterprise
          </button>

          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>

        <div className="portfolio-items-wrapper">{this.portfolioItems()}</div>

        {this.state.isLoading ? (
          <div className="content-loader">
            <FontAwesomeIcon icon="spinner" spin />
          </div>
        ) : null}
      </div>
    );
  }
}

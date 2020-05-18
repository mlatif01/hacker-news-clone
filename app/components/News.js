import React, { Component } from 'react';

import Navbar from './Navbar';

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'Top',
      articles: {},
      error: null,
    };

    this.updateSelection = this.updateSelection.bind(this);
  }

  updateSelection(selectedOption) {
    this.setState({
      // if user selects a different option, we will use error/articles to show loading
      selectedOption,
      error: null,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar
          selected={this.state.selectedOption}
          onUpdateSelection={this.updateSelection}
        />

        {this.selected === 'Top' ? (
          <div>TOP</div>
        ) : this.selected === 'New' ? (
          <div>NEW</div>
        ) : null}
      </React.Fragment>
    );
  }
}

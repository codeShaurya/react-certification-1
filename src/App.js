import React from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

class App extends React.Component {
  state = {
    articles: this.props.articles.sort(function (a, b) {
      return b.upvotes - a.upvotes;
    }),
  };

  onSortVote = () => {
    const { articles } = this.state;
    articles.sort(function (a, b) {
      return b.upvotes - a.upvotes;
    });

    this.setState({ articles });
  };

  onSortDate = () => {
    const { articles } = this.state;

    articles.sort(function (a, b) {
        var dateA = new Date(a.date);
        var dateB = new Date(b.date);
        return dateB - dateA;
    });

    this.setState({ articles });
  };

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={this.onSortVote}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={this.onSortDate}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={articles} />
      </div>
    );
  }
}

export default App;

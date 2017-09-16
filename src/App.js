import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  };
  expand = () => {
    this.setState({
      show: !this.state.show
    })
  };
  render() {
    return (
      <div className="container">
        <div className="review-container">
          <h2 className="review-title">Title</h2>
          <div className="row review-rating">
            <i className="fa fa-star rating-star" aria-hidden="true" />
            <i className="fa fa-star rating-star" aria-hidden="true" />
            <i className="fa fa-star rating-star" aria-hidden="true" />
            <i className="fa fa-star-half-o rating-star" aria-hidden="true" />
            <i className="fa fa-star-o rating-star" aria-hidden="true" />
          </div>
          <hr />
          <div className="review">
            <div className={`review-input ${this.state.show ? '' : 'overflow'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
            { this.state.show ?
              <div className="show-less" onClick={this.expand}>Show less &#9650;</div> :
              <div>
                <div className="gradient"></div>
                <div className="read-more"  onClick={this.expand}>...Read more &#x25BA;</div>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;

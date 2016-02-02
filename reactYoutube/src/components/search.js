import React, { PropTypes, Component } from 'react';


export default class SearchBar extends Component {
  static propTypes = {
    'onSearchTermChange': PropTypes.func.isRequired
  };
  
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.onSearchTermChange(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group" style={{"paddingBottom" : 10}}>
        <input
          placeholder="Search Videos"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

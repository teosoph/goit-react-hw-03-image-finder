// Описание компонента Searchbar
// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. Создает DOM-элемент следующей структуры.

// <header className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm-button">
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header>

import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Searchbar extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: "",
  };

  onSearchInputChange = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  };

  onSearchFromSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit } = this.props;

    onFormSubmit(this.state.searchQuery);
    this.setState({ searchQuery: "" });
  };

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.onSearchFromSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              id="blink7"
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              value={searchQuery}
              onChange={this.onSearchInputChange}
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

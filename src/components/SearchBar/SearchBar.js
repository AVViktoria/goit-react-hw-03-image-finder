import React, { Component } from 'react';

class SearchBar extends Component {
  state = {};

  //*  прописываем  внутри инпута   //
  // handleChange = evt => {
  //   const { name, value } = evt.currentTarget;
  //   this.setState({ [name]: value });
  // };

  // //*  слушатель событий по кнопке  //
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.props.onSubmit(this.state);
  //   this.reset();
  // };
  // //*  очищаем   сбрасываем   форму  //
  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  render() {
    return (
      <div className="inputBox">
        <header class="searchbar">
          <form class="form">
            <button type="submit" class="button">
              <span class="button-label">Search</span>
            </button>

            <input
              class="input"
              type="text"
              autocomplete="off"
              autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}
export default SearchBar;

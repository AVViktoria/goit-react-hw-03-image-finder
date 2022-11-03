import React, { Component } from 'react';
import axios from 'axios';
import ImageGallery from 'components/ImageGallery';

// const API_KEY: `30114983 - 364137b9a9ec33f130a531f95`;
// const API_LINK: `https://pixabay.com/api/?key=30114983-364137b9a9ec33f130a531f95&q=yellow+flowers&image_type=photo`;
class SearchBar extends Component {
  state = {
    searchText: '',
    apiUrl: `https://pixabay.com/api/`,
    apiKey: `30114983-364137b9a9ec33f130a531f95`,
    images: [],
  };

  //$(this.state.apiUrl)/?q=${this.state.searchText}&page=1&key=${this.state.apiKey}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12
  //*  прописываем  внутри инпута   //
  onTextChange = evt => {
    const { name, value } = evt.currentTarget;
    const { apiUrl, apiKey, searchText } = this.state;

    this.setState({ [name]: value });
    return () => {
      axios
        .get(
          `${apiUrl}?q=${searchText}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(res => this.setState({ images: res.data.hits }))
        .catch(err => console.log(err));
    };
  };

  // //*  слушатель событий по кнопке  //
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  //*  очищаем   сбрасываем   форму  //
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    // console.log(this.state.images);
    const { images } = this.state;
    return (
      <div className="inputBox">
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              name="searchText"
              value={this.state.searchText}
              onChange={this.onTextChange}
            />
            {images.length > 0 ? <ImageGallery images={images} /> : null}
          </form>
        </header>
      </div>
    );
  }
}
export default SearchBar;

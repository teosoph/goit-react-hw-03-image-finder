import React, { Component } from "react";
import imagesApi from "./services/imagesApi";
import Searchbar from "./components/Searchbar/Searchbar";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button";

import "./App.css";

export default class App extends Component {
  state = {
    query: "",
    page: 1,
    perPage: 12,
    images: [],
    currentPictures: "",
    loader: false,
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, images } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchPictures().then(() => {
        this.loaderSwitcher();
        if (images.length > 10) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      });
    }
  }

  loadMore = () => {
    this.setState((prev) => ({
      page: prev.page + 1,
    }));
  };

  onImgClick = (event) => {
    if (event.target.nodeName !== "IMG") {
      return;
    }
    this.setState({
      currentPictures: event.target.dataset.img,
    });
    this.modalSwitcher();
  };

  loaderSwitcher = () => {
    this.setState((prev) => ({
      loader: !prev.loader,
    }));
  };

  fetchPictures = () => {
    const { query, page, perPage } = this.state;
    const settings = {
      query: query,
      page: page,
      perPage: perPage,
    };

    this.loaderSwitcher();

    return imagesApi.getImages(settings).then((fetchApiData) => {
      this.setState((prev) => ({
        images: [...prev.images, ...fetchApiData],
      }));
      console.log(fetchApiData);
    });
  };

  onSubmit = (searchQuery) => {
    this.setState({
      query: searchQuery,
      page: 1,
      images: [],
    });
  };

  modalSwitcher = () => {
    this.setState((prev) => ({
      openModal: !prev.openModal,
    }));
  };

  render() {
    const { images, query, loader, openModal, currentPictures } = this.state;
    return (
      <div className="App">
        {loader && (
          <Modal>
            <Loader />
          </Modal>
        )}
        <Searchbar value={query} onFormSubmit={this.onSubmit} />

        <ImageGallery images={images} onImgClick={this.onImgClick} />
        {images.length > 0 && (
          <Button
            onBtnClick={this.loadMore}
            text={loader ? "Loading" : "Load more"}
          />
        )}

        {openModal && (
          <Modal onCloseModal={this.modalSwitcher}>
            <img src={currentPictures} />
          </Modal>
        )}
      </div>
    );
  }
}

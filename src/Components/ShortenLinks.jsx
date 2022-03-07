import React, { Component } from "react";
import "../css/shortenLinks.css";
import copy from "copy-to-clipboard";
import LoadingSpin from "./LoadingSpin";
import Card from "./Card";

class ShortenLinks extends Component {
  state = {
    shortenLink: "",
    btnID: "",
    result: [],
    isCopied: false,
    btnCopy: "var(--very-dark-blue)",
    isEmpty: false,
    isLoading: false,
    isErrorOccur: false,
  };

  handleSubmit = (event) => {
    if (this.state.shortenLink === "") {
      this.setState({
        isEmpty: true,
      });
      setTimeout(() => {
        this.setState({ isEmpty: false });
      }, 3000);
      event.preventDefault();
    } else {
      this.setState({
        isLoading: true,
      });
      fetch(`https://api.shrtco.de/v2/shorten?url=${this.state.shortenLink}`)
        .then((response) => response.json())
        .then((response) => {
          if (response.ok) {
            this.setState({
              result: [...this.state.result, response.result],
              shortenLink: "",
              isLoading: false,
            });
          } else {
            this.setState({
              isLoading: false,
              isErrorOccur: true,
              shortenLink: "",
            });
            setTimeout(() => this.setState({ isErrorOccur: false }), 3000);
          }
        })
        .catch((err) => console.log(err));
      event.preventDefault();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    e.preventDefault();
  };

  handleCopy = (item, id) => {
    copy(item);
    this.setState({
      isCopied: !this.state.isCopied,
      btnID: id,
    });
    setTimeout(() => {
      this.setState({
        isCopied: !this.state.isCopied,
      });
    }, 3000);
  };

  render() {
    const { isEmpty, isLoading, isErrorOccur } = this.state;
    return (
      <div className="shorten-container container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="shortenLink"
            value={this.state.shortenLink}
            onChange={this.handleChange}
            placeholder="Shorten a link here..."
            className={isEmpty ? "isEmpty" : null}
          />
          <button className="btn">Shorten it!</button>
          <span className={isEmpty ? "error-msg true" : " error-msg false"}>
            Please add a link
          </span>
          {isErrorOccur ? (
            <span className="error-msg active">
              Tyr again or try another link
            </span>
          ) : null}
        </form>
        {isLoading ? <LoadingSpin /> : null}
        <Card data={this.state} handleCopy={this.handleCopy} />
      </div>
    );
  }
}

export default ShortenLinks;

import React, { Component } from "react";
import uuidv1 from "uuid";

class Form extends Component {
  state = { title: "" };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-success btn-lg">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default Form;

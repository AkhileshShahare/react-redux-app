import React, { Component } from "react";

class Post extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const { posts: { posts } = {} } = this.props;
    return (
      <ul className="list-group list-group-flush">
        {posts.map(el => (
          <li className="list-group-item" key={el.id}>
            {el.title}
          </li>
        ))}
      </ul>
    );
  }
}

export default Post;

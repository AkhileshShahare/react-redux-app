import Post from "./Posts";
import { connect } from "react-redux";
import { fetchPosts } from "../../store/actions";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);

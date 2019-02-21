import { addArticle } from "./../../actions/index";
import { connect } from "react-redux";
import Form from "./Form";

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

export default connect(
  null,
  mapDispatchToProps
)(Form);

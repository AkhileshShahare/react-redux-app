import { connect } from "react-redux";
import Form from "./Form";
import { addArticle } from "../../store/actions";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);

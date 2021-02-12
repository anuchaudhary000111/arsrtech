import { connect } from "react-redux";
import { addCommentAction, fetchIssueAction } from "../../redux/action";
import Issue from "./Issue";

const mapStateToProps = (state) => {
    return {
        issue: state.issue,
        comments: state.comments
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIssueAction: (repo, id) => fetchIssueAction(dispatch, repo, id),
        addCommentAction: (repo, id) => addCommentAction(dispatch, repo, id),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Issue)
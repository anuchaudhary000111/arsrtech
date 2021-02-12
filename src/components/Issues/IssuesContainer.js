import { connect } from "react-redux";
import { fetchAllIssuesAction } from "../../redux/action";
import Issues from "./Issues";

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllIssuesAction: (repo) => fetchAllIssuesAction(dispatch, repo)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Issues)
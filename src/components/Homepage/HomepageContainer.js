import { connect } from "react-redux";
import { fetchRepositoryAction } from "../../redux/action";
import Homepage from "./Homepage";

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRepositoryAction: () => fetchRepositoryAction(dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage)